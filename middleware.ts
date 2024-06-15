import { NextResponse, NextRequest, NextFetchEvent } from 'next/server';
import { auth } from '@/components/auth';

export async function middleware(request: NextRequest, event: NextFetchEvent) {
  const authResp = await authCheck(request);
  if (authResp) return authResp;

  const cookieResp = cookie(request);
  if (cookieResp) return cookieResp;

  const headerResp = headers(request);
  if (headerResp) return headerResp;

  const corsResp = cors(request);
  if (corsResp) return corsResp;

  const languageResp = language(request);
  if (languageResp) return languageResp;

  waitUntil(request, event);

  return NextResponse.next();
}

async function authCheck(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/test/login')) {
    const session = await auth();

    // Redirect to login page if not authenticated
    if (!session?.user) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }
  return null;
}

function cookie(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  if (request.nextUrl.pathname == '/test/cookie') {
    let cookie = request.cookies.get('nextjs');
    console.log(cookie); // => { name: 'nextjs', value: 'fast', Path: '/' }

    // Setting cookies on the response using the `ResponseCookies` API
    const response = NextResponse.next();
    response.cookies.set({
      name: 'nextjs',
      value: 'fast',
      path: '/',
    });

    return response;
  }
  return null;
}

export function headers(request: NextRequest) {
  if (request.nextUrl.pathname == '/test/headers') {
    // Clone the request headers and set a new header `x-hello-from-middleware1`
    const requestHeaders = new Headers(request.headers);
    requestHeaders.set('x-hello-from-middleware1', 'hello');

    // You can also set request headers in NextResponse.rewrite
    const response = NextResponse.next({
      request: {
        // New request headers
        headers: requestHeaders,
      },
    });

    // Set a new response header `x-hello-from-middleware2`
    response.headers.set('x-hello-from-middleware2', 'hello');
    return response;
  }
  return null;
}

export function cors(request: NextRequest) {
  if (request.nextUrl.pathname == '/test/cors') {
    const allowedOrigins = ['https://acme.com', 'https://my-app.org'];

    const corsOptions = {
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };

    // Check the origin from the request
    const origin = request.headers.get('origin') ?? '';
    const isAllowedOrigin = allowedOrigins.includes(origin);

    // Handle preflighted requests
    const isPreflight = request.method === 'OPTIONS';

    if (isPreflight) {
      const preflightHeaders = {
        ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
        ...corsOptions,
      };
      return NextResponse.json({}, { headers: preflightHeaders });
    }

    // Handle simple requests
    const response = NextResponse.next();

    if (isAllowedOrigin) {
      response.headers.set('Access-Control-Allow-Origin', origin);
    }

    Object.entries(corsOptions).forEach(([key, value]) => {
      response.headers.set(key, value);
    });

    return response;
  }

  return null;
}

export function waitUntil(request: NextRequest, event: NextFetchEvent) {
  if (request.nextUrl.pathname == '/test/waituntil') {
    const url = 'https://example.com';
    event.waitUntil(
      fetch(url, {
        method: 'POST',
        body: JSON.stringify({ pathname: request.nextUrl.pathname }),
      })
    );
  }
}

export function language(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname.startsWith('/test/language')) {
    const locales = ['en-US', 'zh-CN', 'zh'];
    const pathnameHasLocale = locales.some(
      (locale) =>
        pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return null;

    // default pathname
    request.nextUrl.pathname = `/en-US/${pathname}`;
    return NextResponse.redirect(request.nextUrl);
  }
  return null;
}

// export const config = {
//   matcher: '/test/:path*',
// };
