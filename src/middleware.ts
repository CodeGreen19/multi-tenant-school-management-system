import { NextRequest, NextResponse } from "next/server";
import { extractSubdomain } from "./lib/subdomains";

const CONSOLE = "console";
const AUTH = "auth";

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const subdomain = extractSubdomain(request);
  console.log(1, subdomain);

  //tenant routing
  if (subdomain === CONSOLE) {
    return NextResponse.rewrite(new URL(`/console${pathname}`, request.url));
  }

  if (subdomain === AUTH) {
    if (pathname === "/") {
      return NextResponse.redirect(new URL("/sign-up", request.url));
    }
    return NextResponse.rewrite(new URL(`/auth${pathname}`, request.url));
  }
  if (subdomain) {
    return NextResponse.rewrite(
      new URL(`/tenant/${subdomain}${pathname}`, request.url)
    );
  }

  // On the root domain, allow normal access
  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|[\\w-]+\\.\\w+).*)"],
};
