import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'

export async function createClient() {
  // We await cookies() because in Next.js 15 this is an async function
  const cookieStore = await cookies()

  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        // Gets all cookies from the browser to check the user's session
        getAll() {
          return cookieStore.getAll()
        },
        // Sets cookies (used during login/logout)
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // This can be ignored if the client is called from a Server Component
            // The Middleware will handle the actual cookie setting
          }
        },
      },
    }
  )
}