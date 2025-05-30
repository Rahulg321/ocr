import React from "react";
import { Button } from "@/components/ui/button";
import { BsGoogle } from "react-icons/bs";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { FaGoogle } from "react-icons/fa6";

const SigninGoogle = () => {
  return (
    <div>
      <Button
        variant={"outline"}
        type="submit"
        onClick={() => {
          signIn("google", { callbackUrl: DEFAULT_LOGIN_REDIRECT });
        }}
        className="w-full cursor-pointer"
      >
        <FaGoogle className="mr-2 h-4 w-4" /> Sign in With Google
      </Button>
    </div>
  );
};

export default SigninGoogle;
