import { NextResponse } from "next/server";



export async function middleware(request) {

    // if (request.nextUrl.pathname.includes('/')) {

        const headers = new Headers(request.headers);
        headers.set("x-current-path", request.nextUrl.pathname);
        return NextResponse.next({ headers });
    // }
}


// export const config = {
//     matcher: ["/"],
// };