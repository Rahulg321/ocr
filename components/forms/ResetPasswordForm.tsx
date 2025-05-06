"use client";

import React, { useState, useTransition } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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
import { ErrorCard, SuccessCard } from "../FormInfoCards";
import { ResetPasswordFormSchema } from "@/lib/schemas/ResetPasswordFormSchema";
import { ResetPasswordFormZodType } from "@/lib/schemas/ResetPasswordFormSchema";
import { resetPassword } from "@/lib/actions/reset-password";
const ResetPasswordForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const form = useForm<ResetPasswordFormZodType>({
    resolver: zodResolver(ResetPasswordFormSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: ResetPasswordFormZodType) {
    setError("");
    setSuccess("");
    startTransition(async () => {
      console.log("values", values);
      const response = await resetPassword(values);
      if (response?.success) {
        setSuccess(response.success);
      }
      if (response?.error) {
        setError(response.error);
      }
    });
  }

  return (
    <div className="mt-4">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
          <ErrorCard urlError={error} />
          <SuccessCard success={success} />
          <Button type="submit" className="bg-base" disabled={isPending}>
            {isPending ? "Resetting....." : "Send Reset Email"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ResetPasswordForm;
