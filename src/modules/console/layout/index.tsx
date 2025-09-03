import { ChildrenProps } from "@/types/global";
import React from "react";

export default function ConsoleLayout({ children }: ChildrenProps) {
  return (
    <div>
      console layout
      {children}
    </div>
  );
}
