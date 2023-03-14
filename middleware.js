import Negotiator from 'negotiator'
import { NextResponse } from 'next/server'
import { match as matchLocale } from '@formatjs/intl-localematcher'
import { i18n } from './i18n-config'

// Get the preferred locale, similar to above or using a library
function getLocale(request) {
  const localeCookie = request.cookies.get('NEXT_LOCALE')
  if (localeCookie) return localeCookie.value

  // Negotiator expects plain object so we need to transform headers
  const negotiatorHeaders = {}
  request.headers.forEach((value, key) => (negotiatorHeaders[key] = value))

  // Use negotiator and intl-localematcher to get best locale
  const languages = new Negotiator({ headers: negotiatorHeaders }).languages()
  // @ts-ignore locales are readonly
  const locales = i18n.locales
  return matchLocale(languages, locales, i18n.defaultLocale)
}

export function middleware(request) {
  const pathname = request.nextUrl.pathname

  if (['/images/portrait.webp', '/favicon.ico'].includes(pathname)) return

  // Check if there is any supported locale in the pathname
  const pathnameIsMissingLocale = !i18n.locales.includes(pathname.split('/')[1])

  // Redirect if there is no locale
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)

    // e.g. incoming request is /products
    // The new URL is now /en-US/products
    return NextResponse.redirect(new URL(`/${locale}/${pathname}`, request.url))
  }
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)']
}
