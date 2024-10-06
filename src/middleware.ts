import { NextResponse } from "next/server";
import { Role } from "@prisma/client";
import { CustomRequest } from "@/utils/types";
import { verifyToken } from "@/utils/auth";
import { logoutUser } from "@/utils/api";

export async function middleware(request: CustomRequest) {
  const { pathname } = request.nextUrl;

  const token = request.cookies.get("token");

  if (token) {
    try {
      const decoded = await verifyToken(token.value);

      if (!decoded?.userId || !decoded?.role) {
        // Logout user if token is invalid
        await logoutUser();
      }

      // Attach user information to the request for further use
      request.user = { userId: decoded.userId, role: decoded.role };

      // Redirect to home if trying to access /login or /signup
      if (pathname === "/login" || pathname === "/signup") {
        return NextResponse.redirect(new URL("/", request.url));
      }

      // Redirect to home if user is not an admin trying to access /admin
      if (pathname.startsWith("/admin") && decoded.role !== Role.ADMIN) {
        return NextResponse.redirect(new URL("/", request.url));
      }

      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  // Skip middleware for /login and /signup routes if no token
  if (pathname === "/login" || pathname === "/signup") {
    return NextResponse.next();
  }

  // Redirect to /login if no token
  return NextResponse.redirect(new URL("/login", request.url));
}

export const config = {
  matcher: [
    "/((?!api|_next|static|public).*)", // Match all paths except those starting with /api, /_next, /static, /public
  ],
};
