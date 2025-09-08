import { ConsoleSignInForm } from "../components/sign-in-form";

export default function ConsoleSignInPage() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="w-full max-w-sm md:max-w-md mt-5">
        <ConsoleSignInForm />
      </div>
    </div>
  );
}
