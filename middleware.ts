import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Define supported locales
const locales = ['en', 'es', 'pt']
const defaultLocale = 'en'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host')
  
  // Redirect apex domain to www
  if (hostname === 'publica.la') {
    const url = new URL(request.url)
    url.hostname = 'www.publica.la'
    return NextResponse.redirect(url, 301)
  }

  // Check if there is any supported locale in the pathname
  const pathname = request.nextUrl.pathname
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  )

  if (pathnameHasLocale) return

  // Redirect to default locale
  request.nextUrl.pathname = `/${defaultLocale}${pathname}`
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    '/((?!_next|api|_vercel|.*\\..*).*)',
  ],
}
