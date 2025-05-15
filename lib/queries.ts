import db from "./db";
import { VerificationToken } from "@prisma/client";

/**
 * Get a user by their email
 * @param email - The email of the user
 * @returns The user or null if the user does not exist
 */
export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (error: any) {
    console.error("Error in getUserByEmail", error);
    return null;
  }
};

/**
 * Get a user by their id
 * @param userId - The id of the user
 * @returns The user or null if the user does not exist
 */
export const getUserById = async (userId: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  } catch (error: any) {
    console.error("Error in getUserById", error);
    return null;
  }
};

/**
 * Get an account by the user's id
 * @param userId - The id of the user
 * @returns The account or null if the account does not exist
 */
export const getAccountByUserId = async (userId: string) => {
  try {
    const userAccount = await db.account.findFirst({
      where: {
        userId: userId,
      },
    });
    return userAccount;
  } catch (error: any) {
    if (error instanceof Error) {
      console.error("Error in getAccountByUserId", error);
    }
    return null;
  }
};

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
  try {
    const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: {
        userId: userId,
      },
    });
    return twoFactorConfirmation;
  } catch (error) {
    console.log(
      "an error occured while fetching two factor confirmation",
      error
    );
    return null;
  }
};

/**
 * Get a password reset token by its token
 * @param token - The token of the password reset token
 * @returns The password reset token or null if the password reset token does not exist
 */
export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const returnedToken = await db.passwordResetToken.findUnique({
      where: {
        token: token,
      },
    });

    console.log("returned token", returnedToken);

    return returnedToken;
  } catch (error) {
    console.log("prisma error occured", error);
    return null;
  }
};

/**
 * Get a password reset token by the user's email
 * @param email - The email of the user
 * @returns The password reset token or null if the password reset token does not exist
 */
export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const token = await db.passwordResetToken.findFirst({
      where: {
        email: email,
      },
    });
    return token;
  } catch (error) {
    console.error("prisma error occured", error);
    return null;
  }
};

/**
 * Get a two factor token by its token
 * @param token - The token of the two factor token
 * @returns The two factor token or null if the two factor token does not exist
 */
export const getTwoFactorTokenByToken = async (token: string) => {
  try {
    const twoFactorToken = await db.twoFactorToken.findUnique({
      where: {
        token: token,
      },
    });

    return twoFactorToken;
  } catch (error) {
    console.error("An error occured while fetching two factor token", error);
    return null;
  }
};

/**
 * Get a two factor token by the user's email
 * @param email - The email of the user
 * @returns The two factor token or null if the two factor token does not exist
 */
export const getTwoFactorTokenByEmail = async (email: string) => {
  try {
    const twoFactorToken = await db.twoFactorToken.findFirst({
      where: {
        email,
      },
    });

    return twoFactorToken;
  } catch (error) {
    console.error("An error occured while fetching two factor token", error);
    return null;
  }
};

/**
 * Get a verification token by its token
 * @param token - The token of the verification token
 * @returns The verification token or null if the verification token does not exist
 */
export const getVerificationTokenByToken = async (token: string) => {
  try {
    const returnedToken = await db.verificationToken.findUnique({
      where: {
        token: token,
      },
    });
    return returnedToken;
  } catch (error) {
    console.log("prisma error occured", error);
  }
};

/**
 * Get a verification token by the user's email
 * @param email - The email of the user
 * @returns The verification token or null if the verification token does not exist
 */
export const getVerificationTokenByEmail = async (
  email: string
): Promise<VerificationToken | null> => {
  try {
    const token = await db.verificationToken.findFirst({
      where: {
        email: email,
      },
    });
    return token;
  } catch (error) {
    console.error("prisma error occured", error);
    return null;
  }
};
