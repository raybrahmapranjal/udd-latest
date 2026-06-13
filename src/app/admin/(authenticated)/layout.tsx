import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import AdminLayoutClientShell from './AdminLayoutClientShell';
import { UserProvider } from './UserContext';

export const dynamic = 'force-dynamic';

export default async function AdminLayout({ children }: { children: React.ReactNode }) {
  console.log("🚀 ADMIN LAYOUT STARTING..."); // High visibility log

  const cookieStore = await cookies();
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return cookieStore.getAll(); },
        setAll(cookiesToSet) { try { cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); } catch {} },
      },
    }
  );

  const { data: { user: authUser }, error } = await supabase.auth.getUser();
  if (error || !authUser) redirect('/admin/login');
console.log("DEBUG: Querying with Auth ID:", authUser.id);
  const { data: profile, error: dbError } = await supabase
  .from('profiles')
  .select('full_name, role')
  .eq('id', authUser.id) // This must match the ID in the console log
  .maybeSingle(); // Prevents the PGRST116 error

  console.log("DEBUG: DB Error:", dbError);
  console.log("DEBUG: Profile Data:", profile);

  const emailPrefix = authUser.email?.split('@')[0] || 'Operator';
  const defaultName = emailPrefix.charAt(0).toUpperCase() + emailPrefix.slice(1);

  // Use the profile role, otherwise default to 'Citizen'
  const finalRole = profile?.role ? profile.role.trim() : 'Citizen';
  
  const userPayload = {
    email: authUser.email || 'operator@gov.in',
    name: profile?.full_name || defaultName,
    role: finalRole
  };
console.log("FINAL PAYLOAD BEFORE PROVIDER:", userPayload);
  return (
    <AdminLayoutClientShell user={userPayload}>
      <UserProvider value={userPayload}>
        {children}
      </UserProvider>
    </AdminLayoutClientShell>
  );
}