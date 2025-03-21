"use client";

import * as Clerk from "@clerk/elements/common";
import * as SignIn from "@clerk/elements/sign-in";
import Image from "next/image";

const LoginPage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-waliSkyLight">
      <SignIn.Root>
        <SignIn.Step
          name="start"
          className="bg-white p-12 rounded-md shadow-2xl flex flex-col gap-2"
        >
          <div className="flex items-center gap-2 justify-center">
            <Image src="/logo.png" alt="" width={24} height={24} />
            <h1 className="text-xl font-bold">School Management App</h1>
          </div>
          <h2 className="text-gray-400 text-center mb-2">Signin to your account</h2>
          <Clerk.GlobalError className="text-sm text-red-400" />
          <Clerk.Field name="identifier" className="flex flex-col gap-2">
            <Clerk.Label className="text-xs text-gray-500">Username</Clerk.Label>
            <Clerk.Input type="text" required className="p-2 rounded-md border border-gray-300" />
            <Clerk.FieldError className="text-xs text-red-400" />
          </Clerk.Field>
          <Clerk.Field name="password" className="flex flex-col gap-2">
            <Clerk.Label className="text-xs text-gray-500">Password</Clerk.Label>
            <Clerk.Input type="password" required className="p-2 rounded-md border border-gray-300" />
            <Clerk.FieldError className="text-xs text-red-400" />
          </Clerk.Field>
          <SignIn.Action submit className="bg-blue-500 text-white rounded-md p-[10px] my-1 hover:bg-blue-600">Sign In</SignIn.Action>
        </SignIn.Step>
      </SignIn.Root>
    </div>
  );
};

export default LoginPage;
