"use server";

import { signIn } from "@/auth";
import { getUserByEmail } from "@/lib/queries";
import {
  LoginFormSchema,
  LoginFormZodType,
} from "@/lib/schemas/LoginFormSchema";
import {
  generateTwoFactorToken,
  generateVerificationToken,
} from "@/lib/tokens";
import { AuthError } from "next-auth";
import * as z from "zod";
import { sendTwoFactorEmail, sendVerificationTokenEmail } from "@/lib/mail";
import { getTwoFactorTokenByEmail } from "@/lib/queries";
import db from "@/lib/db";
import { getTwoFactorConfirmationByUserId } from "@/lib/queries";

export async function LoginUser(values: LoginFormSchema) {
  const validatedFields = LoginFormZodType.safeParse(values);

  if (!validatedFields.success) {
    return {
      error:
        validatedFields.error.message ||
        "Invalid Credentials" ||
        "An unexpected error occurred",
    };
  }

  const { email, password, code } = validatedFields.data;

  const existingUser = await getUserByEmail(email);
  // they need to create an account first or they need to login with OAuth
  if (!existingUser) {
    return {
      error: "Your account does not exist, please sign up!!",
    };
  }

  if (!existingUser.password) {
    return {
      error: "Password does not exist, try logging in using Google",
    };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );

    const response = await sendVerificationTokenEmail(
      existingUser.email,
      verificationToken.token
    );

    if (response?.error) {
      return {
        error: "Could not send email",
      };
    }

    return {
      success: "Verification Email Sent",
    };
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      const faToken = await getTwoFactorTokenByEmail(existingUser.email);

      if (!faToken) {
        return {
          error: "2FA token does not exist",
        };
      }

      const hasExpired = new Date(faToken.expires) < new Date();

      if (hasExpired) {
        return {
          error: "2FA token has expired",
        };
      }

      if (faToken.token !== code) {
        console.log("an invalid code was entered", code);
        return {
          error: "you entered an invalid code",
        };
      }

      await db.twoFactorToken.delete({
        where: {
          id: faToken.id,
        },
      });

      // delete the existing confirmation if it exists, because we want to ask for the code evertytime
      const existingConfirmation = await getTwoFactorConfirmationByUserId(
        existingUser.id
      );

      if (existingConfirmation) {
        await db.twoFactorConfirmation.delete({
          where: {
            id: existingConfirmation.id,
          },
        });
      }

      // create a new confirmation
      await db.twoFactorConfirmation.create({
        data: {
          userId: existingUser.id,
        },
      });
    } else {
      const twoFactorToken = await generateTwoFactorToken(existingUser.email);

      const response = await sendTwoFactorEmail(
        existingUser.email,
        twoFactorToken.token
      );

      // error sending email
      if (response?.error) {
        return {
          error: "Could not genearate 2FA token, along with email",
        };
      }

      return {
        twoFactorToken: true,
      };
    }
  }

  try {
    const response = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    console.log("Resonse after signing in", response);

    return {
      successful_login: true,
    };
  } catch (error) {
    if (error instanceof AuthError) {
      return {
        error: error.message || "Invalid credentials",
      };
    }

    throw error;
  }
}
