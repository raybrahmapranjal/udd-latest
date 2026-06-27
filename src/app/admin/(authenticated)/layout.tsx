import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminLayoutClientShell from './AdminLayoutClientShell';
import { UserProvider } from './UserContext';

export const dynamic = 'force-dynamic';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // 1. Safe build-time check: 
  // If variables are missing, don't crash; just render the children.
  if (!supabaseUrl || !supabaseKey) {
    console.error("Supabase environment variables missing. Admin features disabled.");
    return <>{children}</>;
  }

  const cookieStore = await cookies();
  const supabase = createServerClient(supabaseUrl, supabaseKey, {
    cookies: {
      getAll() { return cookieStore.getAll(); },
      setAll(cookiesToSet) { 
        try { 
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); 
        } catch {} 
      },
    },
  });

  const { data: { user: authUser }, error } = await supabase.auth.getUser();
  
  if (error || !authUser) {
    redirect('/admin/login');
  }

  const { data: profile, error: dbError } = await supabase
    .from('profiles')
    .select('full_name, role, avatar_url')
    .eq('id', authUser.id)
    .maybeSingle();

  const emailPrefix = authUser.email?.split('@')[0] || 'Operator';
  const defaultName = emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1);
  const finalRole = profile?.role ? profile.role.trim() : 'Citizen';
  
  const userPayload = {
    email: authUser.email || 'operator@gov.in',
    name: profile?.full_name || defaultName,
    role: finalRole,
    avatar_url: profile?.avatar_url
  };

  return (
    <AdminLayoutClientShell user={userPayload}>
      <UserProvider value={userPayload}>
        {children}
      </UserProvider>
    </AdminLayoutClientShell>
  );
}