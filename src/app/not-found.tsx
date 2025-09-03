import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <h1 className="font-bold text-2xl">Not Found !</h1>
        <Link href={"/"}>
          <Button>
            Go home
            <ChevronRight />
          </Button>
        </Link>
      </div>
    </div>
  );
}
