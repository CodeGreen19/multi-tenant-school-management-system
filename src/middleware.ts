import { NextRequest, NextResponse } from "next/server";
import { getTenantFromHost } from "./lib/tenants";
import { tenants } from "./constants/global-constants";
import { TanentsKey } from "./types/global-types";

export function middleware(req: NextRequest) {
  //for tanents
  const host = req.headers.get("host") || "";
  const tenantId = getTenantFromHost(host) as TanentsKey;

  if (tenantId && tenants[tenantId]) {
    const url = req.nextUrl.clone();
    url.pathname = `/${tenantId}${url.pathname}`;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

// Run middleware for all paths
export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
