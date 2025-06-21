import React, { Suspense } from "react";
import LoginForm from "@/components/forms/LoginForm";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignupForm from "@/components/forms/SignupForm";

const LoginPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <Tabs defaultValue="login" className="w-[450px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Welcome Back!</CardTitle>
              <CardDescription>
                Enter your credentials to log in to your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Suspense fallback={<div>Loading...</div>}>
                <LoginForm />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader className="text-center">
              <CardTitle>Create an account</CardTitle>
              <CardDescription>
                Enter your details to create your new account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Suspense fallback={<div>Loading...</div>}>
                <SignupForm />
              </Suspense>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LoginPage;
