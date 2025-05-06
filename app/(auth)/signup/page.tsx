import React, { Suspense } from "react";
import SignupForm from "@/components/forms/SignupForm";
import Link from "next/link";

const SignupPage = () => {
  return (
    <section className="block-space container">
      <h1>Create an account</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <SignupForm />
      </Suspense>
      <div className="mt-4 text-center">
        <p>
          Already have an account?{" "}
          <Link href="/login" className="text-blue-500 hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignupPage;
