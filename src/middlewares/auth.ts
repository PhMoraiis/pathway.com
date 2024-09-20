import { cookies } from 'next/headers'
import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'
import * as jose from 'jose'
import { env } from '@/lib/env'

export async function middleware(request: NextRequest) {
  const cookie = cookies().get('token')
  if (!cookie) return NextResponse.redirect(new URL('/', request.url))

  const secret = new TextEncoder().encode(env.JWT_SECRET)
  const jwt = cookie.value

  try {
    await jose.jwtVerify(jwt, secret, {})
  } catch (error) {
    return NextResponse.redirect(new URL('/', request.url))
  }
}

export const config = {
  matcher: '/dashboard/:path*',
}