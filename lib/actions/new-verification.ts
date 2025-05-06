"use server";

import { getUserByEmail } from "@/lib/queries";
import { getVerificationTokenByToken } from "@/lib/queries";
import db from "@/lib/db";

/**
 * This function is used to verify a new user's email address.
 * @param token - The token to verify the user's email address.
 * @returns A success message if the user's email address is verified.
 */
export const newVerification = async (token: string) => {
  try {
    const existingToken = await getVerificationTokenByToken(token);
    if (!existingToken) {
      console.error("token does not exist");
      return {
        error: "Token does not exist, cannot verify your email.",
      };
    }

    const hasExpired = new Date(existingToken.expires) < new Date();
    if (hasExpired) {
      console.log("token has expired");
      return {
        error: "Your token has expired, please try again later",
      };
    }

    const existingUser = await getUserByEmail(existingToken.email);

    if (!existingUser) {
      console.error("Email does not exist");
      return {
        error: "Email does not exist.",
      };
    }

    await db.user.update({
      where: {
        id: existingUser.id,
      },
      data: {
        emailVerified: new Date(),
        email: existingToken.email,
      },
    });

    await db.verificationToken.delete({
      where: {
        id: existingToken.id,
      },
    });

    return {
      success: "Successfully verified user.",
    };
  } catch (error) {
    console.error("Error during email token verification:", error);
    return {
      error: "An unexpected error occurred during verification.",
    };
  }
};
