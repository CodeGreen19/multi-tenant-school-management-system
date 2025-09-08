import Logo from "@/components/shared/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function TenantMarketingNav() {
  return (
    <nav className="border-b">
      <div className="h-20 max-w-6xl m-auto flex items-center justify-between px-4">
        <Logo />
        <Link href={"/sign-in"}>
          <Button>Login</Button>
        </Link>
      </div>
    </nav>
  );
}
