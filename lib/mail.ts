"use server";

import { Resend } from "resend";
import { TokenVerificationEmail } from "@/components/emails/TokenVerification";
import { ResetPasswordEmail } from "@/components/emails/ResetPassword";
import { TwoFactorEmail } from "@/components/emails/TwoFactorEmail";
import ContactMessageEmail from "@/components/emails/ContactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

const domain =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_PROD_URL
    : process.env.NEXT_PUBLIC_APP_URL;

export const sendTwoFactorEmail = async (email: string, token: string) => {
  const { data, error } = await resend.emails.send({
    from: "Hydranode <Contact@hydranode.ai>",
    to: [email],
    subject: "2 FA Verification",
    react: await TwoFactorEmail({
      token,
    }),
  });

  if (error) {
    console.log("error sending email", error.name, error.message);
    return {
      error: `could not send email -> ${error.message}}`,
    };
  }
};

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/auth/new-password?token=${token}`;

  const { data, error } = await resend.emails.send({
    from: "Hydranode <Contact@hydranode.ai>",
    to: [email],
    subject: "Reset your Password",
    react: await ResetPasswordEmail({
      resetPasswordLink: resetLink,
    }),
  });

  if (error) {
    console.log("error sending email", error.name, error.message);
    return {
      error: `could not send email -> ${error.message}}`,
    };
  }
};

export const sendVerificationTokenEmail = async (
  email: string,
  token: string
) => {
  const confirmLink = `${domain}/auth/new-verification?token=${token}`;

  const { data, error } = await resend.emails.send({
    from: "Hydranode <Contact@hydranode.ai>",
    to: [email],
    subject: "Verify your email address",
    react: await TokenVerificationEmail({
      tokenConfirmLink: confirmLink,
    }),
  });

  console.log("sending verification token email", data, error);

  if (error) {
    console.log("error sending email", error.name, error.message);
    return {
      error: `could not send email -> ${error.message}}`,
    };
  }
};

export const sendContactFormEmail = async (
  email: string,
  firstName: string,
  lastName: string,
  message: string
) => {
  const { data, error } = await resend.emails.send({
    from: "Hydranode <Contact@hydranode.ai>",
    to: ["contact@hydranode.ai"],
    replyTo: email,
    subject: `Contact Inquiry by ${firstName} ${lastName} from HydraNode`,
    react: await ContactMessageEmail({
      firstName,
      lastName,
      email,
      message,
    }),
  });

  console.log("sending contact form email", data, error);

  if (error) {
    console.log("error sending email", error.name, error.message);
    return {
      error: `could not send email -> ${error.message}}`,
    };
  }
};
