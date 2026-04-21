import { NextResponse } from 'next/server'

// Auth.js handles OAuth callbacks at /api/auth/callback/google.
// This route is kept to avoid 404s from stale magic-link emails.
export function GET() {
  return NextResponse.redirect(new URL('/', process.env.AUTH_URL ?? 'http://localhost:3000'))
}
