import React, { Suspense } from "react";
import LoginForm from "@/components/forms/LoginForm";
import Link from "next/link";
const LoginPage = () => {
  return (
    <section className="block-space narrow-container">
      <h2 className="text-center">Welcome Back!</h2>
      <p className="text-center text-gray-500 my-4">
        Enter your personal data to create your account{" "}
      </p>
      <div className="my-4 md:my-6">
        <Suspense fallback={<div>Loading...</div>}>
          <LoginForm />
        </Suspense>
      </div>
      <div className="mt-4 text-center">
        <p>
          Need an account?
          <Link href="/signup" className="ml-1 text-blue-500 underline">
            Create one
          </Link>
        </p>
      </div>
    </section>
  );
};

export default LoginPage;
