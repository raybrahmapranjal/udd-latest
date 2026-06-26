import { NextResponse, type NextRequest } from 'next/server';
import { createServerClient } from '@supabase/ssr';

/**
 * Route Handler for Supabase Auth Callback
 * Handles the PKCE exchange: converts a one-time code into a persistent session.
 */
export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get('code');

  // 1. Check if the code exists in the URL
  if (code) {
    // The target path after a successful session exchange
    const response = NextResponse.redirect(`${origin}/admin/change-password`);

    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          getAll() {
            return request.cookies.getAll();
          },
          setAll(cookiesToSet) {
            // Apply cookies to the response so they persist in the browser
            cookiesToSet.forEach(({ name, value, options }) => {
              response.cookies.set(name, value, options);
            });
          },
        },
      }
    );

    // 2. Perform the PKCE code-to-session exchange
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // Success: Redirect user to the change-password page with session cookies attached
      return response;
    }
  }

  // 3. Handle failure cases (invalid code, expired, or missing)
  // We use a dedicated error page route for a clean user experience
  return NextResponse.redirect(`${origin}/admin/auth/error?error=invalid_token`);
}