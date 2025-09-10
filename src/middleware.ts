import { NextRequest, NextResponse } from "next/server";
import { extractSubdomain } from "./lib/subdomains";
import { serverEnv } from "./lib/env";

const baseUrl = serverEnv.BASE_URL;
export const protocol = serverEnv.NODE_ENV === "production" ? "https" : "http";
//
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const subdomain = extractSubdomain(req);

  if (subdomain === "auth") {
    if (pathname === "/") {
      return NextResponse.redirect(new URL(`/sign-up`, req.url));
    }
    return NextResponse.rewrite(new URL(`${baseUrl}/auth${pathname}`, req.url));
  }

  if (subdomain === "console") {
    if (pathname === "/") {
      return NextResponse.redirect(new URL(`/sign-in`, req.url));
    }
    return NextResponse.rewrite(
      new URL(`${baseUrl}/console${pathname}`, req.url)
    );
  }

  /// for tenant routing
  if (subdomain) {
    const rewriteUrl = new URL(
      `${baseUrl}/tenant/${subdomain}${pathname}`,
      req.url
    );
    console.log(rewriteUrl.toString());

    return NextResponse.rewrite(rewriteUrl);
  }

  // Pass through unmatched requests
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};
