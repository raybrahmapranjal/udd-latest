import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminLayoutClientShell from './AdminLayoutClientShell';
import { UserProvider } from './UserContext';

export const dynamic = 'force-dynamic';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  // Use a fallback to ensure we don't pass undefined to the client constructor
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';

  if (!supabaseUrl || !supabaseKey) {
    console.error("ENVIRONMENT ERROR: Supabase keys are missing.");
    // Force a clear error or redirect to a safe page instead of crashing
    return <div className="p-10">Configuration Error. Please contact support.</div>;
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