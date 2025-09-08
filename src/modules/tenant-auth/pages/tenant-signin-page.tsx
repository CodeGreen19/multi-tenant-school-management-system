import React from "react";
import { TenantSignInForm } from "../components/sign-in-form";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

export default function TenantSignInPage() {
  return (
    <div className=" flex flex-col items-center justify-center">
      <div className="w-full max-w-sm md:max-w-md">
        <div className="text-lg my-3">
          <Link href={"/"}>
            <Button variant={"outline"}>
              <ChevronLeft /> Home
            </Button>
          </Link>
        </div>
        <TenantSignInForm />
      </div>
    </div>
  );
}
