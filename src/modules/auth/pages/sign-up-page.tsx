import React from "react";
import { SignUpForm } from "../../auth/components/sign-up-form";

export default function SignUpPage() {
  return (
    <div className=" flex flex-col items-center justify-center ">
      <div className="w-full max-w-sm md:max-w-md">
        <SignUpForm />
      </div>
    </div>
  );
}
