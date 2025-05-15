import React, { Suspense } from "react";
import SignupForm from "@/components/forms/SignupForm";
import Link from "next/link";

const SignupPage = () => {
  return (
    <section className="block-space narrow-container">
      <h2 className="text-center">Sign up Account</h2>
      <p className="text-center text-gray-500 my-4">
        Enter your personal data to create your account
      </p>
      <div className="my-4 md:my-6">
        <Suspense fallback={<div>Loading...</div>}>
          <SignupForm />
        </Suspense>
      </div>
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
