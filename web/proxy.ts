import { auth } from '@/lib/auth'
import { NextResponse } from 'next/server'

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
}

export default auth((req) => {
  const { pathname } = req.nextUrl
  const isApi = pathname.startsWith('/api/')

  // Local dev: skip auth, add CORS for extension fetch() calls
  if (process.env.LOCAL_DEV === 'true') {
    if (isApi && req.method === 'OPTIONS') {
      return new NextResponse(null, { status: 204, headers: CORS_HEADERS })
    }
    const response = NextResponse.next({ request: req })
    if (isApi) {
      Object.entries(CORS_HEADERS).forEach(([k, v]) => response.headers.set(k, v))
    }
    return response
  }

  // Protect /app and /compare
  const isProtected = pathname.startsWith('/app') || pathname.startsWith('/compare')
  if (isProtected && !req.auth) {
    return NextResponse.redirect(new URL('/login', req.nextUrl))
  }

  // Add CORS headers to API responses for extension
  if (isApi) {
    if (req.method === 'OPTIONS') {
      return new NextResponse(null, { status: 204, headers: CORS_HEADERS })
    }
    const response = NextResponse.next({ request: req })
    Object.entries(CORS_HEADERS).forEach(([k, v]) => response.headers.set(k, v))
    return response
  }
})

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
