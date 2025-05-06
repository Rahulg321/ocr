"use server";

import { getPasswordResetTokenByToken, getUserByEmail } from "@/lib/queries";
import db from "@/lib/db";

import bcrypt from "bcryptjs";
import { NewPasswordFormSchema } from "../schemas/NewPasswordSchema";
import { NewPasswordFormZodType } from "../schemas/NewPasswordSchema";

export const newPasswordVerification = async (
  values: NewPasswordFormZodType,
  token?: string | null
) => {
  try {
    if (!token) {
      return {
        error: "Missing Token! It does not exist",
      };
    }

    const validatedFields = NewPasswordFormSchema.safeParse(values);
    if (!validatedFields.success) {
      return {
        error: validatedFields.error.message,
      };
    }

    const { password } = validatedFields.data;

    const existingToken = await getPasswordResetTokenByToken(token);

    if (!existingToken) {
      console.error("token does not exist", existingToken);
      return {
        error: "Invalid token, it does not exist on the server",
      };
    }

    const hasExpired = new Date(existingToken.expires) < new Date();

    if (hasExpired) {
      return {
        error: "Your token has expired, please try again later",
      };
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if (!existingUser) {
      return {
        error: "Email does not exist",
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.user.update({
      where: {
        id: existingUser.id,
      },
      data: {
        password: hashedPassword,
      },
    });

    await db.passwordResetToken.delete({
      where: {
        id: existingToken.id,
      },
    });

    return {
      success: "Successfully set new password",
      message: "your password was successfully updated",
    };
  } catch (error) {
    console.log("an error occured during new password setting", error);
    return {
      error: "An unexpected error occurred",
      message: "there was an error updating your password",
    };
  }
};
