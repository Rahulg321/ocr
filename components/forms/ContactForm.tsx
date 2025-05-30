"use client";
import { useActionState, useEffect } from "react";
import Image from "next/image";
import { sendEmail } from "@/lib/actions/send-email";
import { toast } from "sonner";
import { SubmitButton } from "../submit-button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

export function ContactForm() {
  async function handleSubmit(formData: FormData) {
    const result = await sendEmail(formData);
  }

  return (
    <form action={handleSubmit} className="space-y-12">
      <div className="space-y-4">
        <label htmlFor="email" className="block text-xl text-gray-400">
          Email address
        </label>
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Enter your email"
          required
          className=""
        />
      </div>

      <div className="space-y-4">
        <label htmlFor="message" className="block text-xl text-gray-400">
          How can we help?
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Enter your message"
          required
          rows={6}
          className=""
        />
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
        <SubmitButton />
        <div className="flex items-center gap-2 text-gray-400">
          Powered by
          <a
            href="https://resend.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Resend_wordmark_dark-i35Qj7S9FUiAKsOo5C24TYfVgCDrKL.svg"
              alt="Resend"
              width={75}
              height={24}
              className="relative top-[1px]"
            />
          </a>
        </div>
      </div>
    </form>
  );
}
