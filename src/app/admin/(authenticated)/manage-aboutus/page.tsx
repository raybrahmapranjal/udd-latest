import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import ManageAboutUsPage from './ManageAboutUsPage';

export default async function Page() {
  // Fix: cookies() is now an async function in Next.js 15+
  const cookieStore = await cookies(); 
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) return <div>Please login.</div>;

  const { data: profile } = await supabase
    .from('profiles')
    .select('id, role, ulb_id')
    .eq('id', user.id)
    .single();

  if (!profile) return <div>Admin profile not found.</div>;

  return <ManageAboutUsPage currentUser={profile} />;
}