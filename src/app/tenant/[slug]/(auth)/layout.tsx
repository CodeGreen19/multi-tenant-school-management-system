import TeanentAuthLayout from "@/modules/tenant-auth/layout";
import { ChildrenProps } from "@/types/global";
import React from "react";

export default function layout(props: ChildrenProps) {
  return <TeanentAuthLayout>{props.children}</TeanentAuthLayout>;
}
