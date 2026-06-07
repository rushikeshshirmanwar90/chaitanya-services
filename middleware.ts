import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, expectedToken } from "@/lib/auth";

// Gate every /admin route behind the password cookie. The login page and the
// login API are allowed through so an unauthenticated user can sign in.
export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/admin/login")) {
    return NextResponse.next();
  }

  const cookie = req.cookies.get(ADMIN_COOKIE)?.value;
  const valid = cookie && cookie === (await expectedToken());

  if (valid) {
    return NextResponse.next();
  }

  const loginUrl = new URL("/admin/login", req.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
