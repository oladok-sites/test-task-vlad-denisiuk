import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const adminAuth = request.cookies.get('admin-auth');

    if (
        request.nextUrl.pathname.startsWith('/admin') &&
        adminAuth?.value !== 'true'
    ) {
        return NextResponse.redirect(new URL('/admin-login', request.url));
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/admin/:path*'],
};