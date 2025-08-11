import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function TenantNav() {
  return (
    <nav className="border-b ">
      <div className="px-6 h-20 max-w-7xl m-auto flex items-center justify-between">
        <div>Logo</div>
        <div className="space-x-3">
          <Link href={"/login"}>
            <Button>Login</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
