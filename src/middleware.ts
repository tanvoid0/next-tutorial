import {NextResponse, type NextRequest} from "next/server";

/// Using Matcher
// export function middleware(request: NextRequest) {
// 	return NextResponse.redirect(new URL("/", request.url));
// }
//
// export const config = {
// 	matcher: "/profile"
// }

/// Conditional Middleware
// export function middleware(request: NextRequest) {
// 	if (request.nextUrl.pathname === "/profile") {
// 		return NextResponse.redirect(new URL("/hello", request.url));
// 	}
// }

export function middleware(request: NextRequest) {
	const response = NextResponse.next();

	// setting custom cookies
	const themePreference = request.cookies.get("theme");
	if (!themePreference) {
		response.cookies.set("theme", "dark");
	}

	// setting custom headers
	response.headers.set("custom-header", "custom-value")
	return response;
}