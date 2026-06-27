import { createServerClient } from '@supabase/ssr';
import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Create an initial response object
  let response = NextResponse.next({
    request: { headers: request.headers },
  });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // CRITICAL FIX: If variables aren't present (common during build),
  // skip Supabase auth logic entirely to allow the build to finish.
  if (!supabaseUrl || !supabaseKey) {
    return response;
  }

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

  // Check auth
  const { data: { user } } = await supabase.auth.getUser();
  const url = new URL(request.url);

  // 1. Define Routes
  const isLoginPage = url.pathname === '/admin/login';
  const isChangePasswordPage = url.pathname === '/admin/change-password';
  const isResetPasswordPage = url.pathname === '/admin/reset-password';
  const isCallback = url.pathname === '/admin/auth/callback';
  const isErrorPage = url.pathname === '/admin/auth/error';
  const isRecovery = url.hash.includes('access_token') || url.hash.includes('type=recovery');

  const isPublicRoute = isLoginPage || isChangePasswordPage || isResetPasswordPage || isRecovery || isCallback || isErrorPage;

  // 2. Redirect logic
  if (!user && !isPublicRoute) {
    return NextResponse.redirect(new URL('/admin/login', request.url));
  }

  if (user && isLoginPage) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  // 3. Security Headers
  response.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate, max-age=0');
  
  return response;
}

// Ensure middleware only runs on admin routes
export const config = {
  matcher: ['/admin/:path*'],
};