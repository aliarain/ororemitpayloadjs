import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname
  // Required catch-all only matches /admin/foo. Redirect /admin and /admin/ to /admin/index.
  if (pathname === '/admin' || pathname === '/admin/') {
    const url = request.nextUrl.clone()
    url.pathname = '/admin/index'
    return NextResponse.redirect(url)
  }
  return NextResponse.next()
}

export const config = {
  matcher: ['/admin', '/admin/'],
}
