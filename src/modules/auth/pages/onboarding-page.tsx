import React from "react";
import { OnboardingForm } from "../components/onboarding-form";

export default function OnboardingPage() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="w-full max-w-sm md:max-w-md">
        <OnboardingForm />
      </div>
    </div>
  );
}
