import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // 0. Build-time safety: prevent middleware logic during static compilation
  // This check ensures we only run auth logic when variables are actually present
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
  
  if (!supabaseUrl || !supabaseKey) {
    return NextResponse.next();
  }

  let response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll: () => request.cookies.getAll(),
      setAll: (cookiesToSet) => {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = NextResponse.next({ request });
        cookiesToSet.forEach(({ name, value, options }) => 
          response.cookies.set(name, value, options)
        );
      },
    },
  });

  // Now it is safe to call getUser() because we verified variables exist above
  const { data: { user } } = await supabase.auth.getUser();
  const url = new URL(request.url);

  // 1. Define Public Routes and Recovery State
  const isRecovery = url.hash.includes('access_token') || url.hash.includes('type=recovery');
  const isLoginPage = url.pathname === '/admin/login';
  const isChangePasswordPage = url.pathname === '/admin/change-password';
  const isResetPasswordPage = url.pathname === '/admin/reset-password';
  const isCallback = url.pathname === '/admin/auth/callback';
  const isErrorPage = url.pathname === '/admin/auth/error'; 

  const isPublicRoute = isLoginPage || isChangePasswordPage || isResetPasswordPage || isRecovery || isCallback || isErrorPage;

  // 2. Redirect unauthenticated users to login (if not on a public route)
  if (!user && !isPublicRoute) {
    const redirectUrl = new URL('/admin/login', request.url);
    const res = NextResponse.redirect(redirectUrl);
    
    res.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
    return res;
  }

  // 3. Redirect logged-in users away from login page to dashboard
  if (user && isLoginPage) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  // 4. Security: Apply cache-control for all authenticated admin routes
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  response.headers.set('Pragma', 'no-cache');
  response.headers.set('Expires', '0');
  response.headers.set('Surrogate-Control', 'no-store');

  return response;
}

export const config = {
  matcher: ['/admin/:path*'],
};