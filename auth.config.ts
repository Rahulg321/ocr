import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import bcrypt from "bcryptjs";
import { LoginFormZodType } from "./lib/schemas/LoginFormSchema";
import { getUserByEmail } from "./lib/queries";

export default {
  providers: [
    Google,
    Credentials({
      authorize: async (credentials) => {
        const validatedFields = LoginFormZodType.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          console.log("email and password in authorize", email, password);
          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;

          //   password entered by user against the password returned from the database
          const isPasswordValid = await bcrypt.compare(password, user.password);

          if (isPasswordValid) {
            console.log("user authorized, valid credentials");
            return user;
          }
        }

        console.log("invalid credentials");

        return null;
      },
    }),
  ],
} satisfies NextAuthConfig;
