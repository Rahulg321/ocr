import NewVerificationForm from "@/components/forms/NewVerificationForm";
import { Metadata } from "next";
import React, { Suspense } from "react";

export const metadata: Metadata = {
  title: "New Verification",
  description: "Verify your email address",
};

const NewVerificationPage = () => {
  return (
    <section className="block-space container">
      <div className="space-y-4 text-center">
        <h2>Email Verification</h2>
        <span>Verifying your Email Address</span>
      </div>
      <Suspense>
        <NewVerificationForm />
      </Suspense>
    </section>
  );
};

export default NewVerificationPage;
