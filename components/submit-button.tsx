"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";
import { Button } from "./ui/button";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <Button type="submit" disabled={pending} className="cursor-pointer">
      {pending ? (
        <Loader2 className="w-6 h-6 animate-spin" />
      ) : (
        <>
          <span>Send Message</span>
          <ArrowRight className="w-6 h-6" />
        </>
      )}
    </Button>
  );
}
