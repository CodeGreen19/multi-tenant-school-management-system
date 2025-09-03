import Link from "next/link";
import React from "react";

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="font-bold text-3xl">Logo</div>
    </Link>
  );
}
