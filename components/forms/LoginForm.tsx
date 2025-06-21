"use client";

import React, { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  LoginFormSchema,
  LoginFormZodType,
} from "@/lib/schemas/LoginFormSchema";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginUser } from "@/lib/actions/login";
import { redirect, useSearchParams } from "next/navigation";
import Link from "next/link";
import { SuccessCard, ErrorCard } from "@/components/FormInfoCards";
import { PasswordInput } from "../ui/password-input";
import SigninGoogle from "../buttons/SignInGoogleButton";

const LoginForm = () => {
  const [show2fa, setShow2fa] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [isPending, startTransition] = useTransition();
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider"
      : "";

  const form = useForm<LoginFormSchema>({
    resolver: zodResolver(LoginFormZodType),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  // 2. Define a submit handler.
  async function onSubmit(values: LoginFormSchema) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    startTransition(async () => {
      console.log(values);
      setError("");
      setSuccess("");

      const response = await LoginUser(values);

      if (response?.error) {
        // reset the entire form
        console.log("in the error toast form", response?.error);

        setError(response.error);
      }

      if (response?.twoFactorToken) {
        setShow2fa(true);
        setSuccess("successfully sent email for two factor authentication");
      }

      if (response?.success) {
        setSuccess(response?.success);
      }

      if (response?.successful_login) {
        setSuccess("Logged in Successfully!!!!");
        redirect("/");
      }
    });
  }

  return (
    <div>
      <SigninGoogle />
      <div className="flex items-center">
        <div className="flex-grow border-t border-gray-300" />
        <span className="mx-4 text-gray-500">or</span>
        <div className="flex-grow border-t border-gray-300" />
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          {show2fa && (
            <div>
              <FormField
                control={form.control}
                name="code"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter Secret Code</FormLabel>
                    <FormControl>
                      <Input placeholder="312312" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          )}
          {!show2fa && (
            <React.Fragment>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Address</FormLabel>
                    <FormControl>
                      <Input placeholder="johndoe@gmail.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <PasswordInput placeholder="*********" {...field} />
                    </FormControl>
                    <div className="text-right">
                      <Link
                        href={"/auth/reset"}
                        className="mt-4 px-0 text-sm hover:underline text-blue-500"
                      >
                        Forgot Password?
                      </Link>
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </React.Fragment>
          )}

          <div className="mt-4">
            {success && <SuccessCard success={success} />}
            {error && <ErrorCard urlError={error} />}
          </div>

          <Button
            type="submit"
            className="w-full bg-figma-main hover:bg-figma-main/80 cursor-pointer"
            disabled={isPending}
          >
            {isPending ? "Logging in..." : show2fa ? "Confirm" : "Log in"}
          </Button>
        </form>
      </Form>
      <div className="mt-4">
        <ErrorCard urlError={urlError} />
      </div>
    </div>
  );
};

export default LoginForm;
