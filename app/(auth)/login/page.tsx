import React, { Suspense } from "react";
import LoginForm from "@/components/forms/LoginForm";
import Link from "next/link";
const LoginPage = () => {
  return (
    <section className="block-space container">
      <h1>Login to your account</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LoginForm />
      </Suspense>
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
