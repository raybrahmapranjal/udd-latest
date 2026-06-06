import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default async function AdminDashboard() {
  const supabase = await createClient()
  
  // Extra security check: Verify user on server
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    redirect('/admin/login')
  }

  async function logout() {
    'use server'
    const supabase = await createClient()
    await supabase.auth.signOut()
    redirect('/admin/login')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-blue-900 text-white p-4 flex justify-between items-center shadow-lg">
        <h2 className="text-lg font-bold">UDD Portal | Super Admin</h2>
        <div className="flex items-center gap-4">
          <span className="text-sm opacity-80">{user.email}</span>
          <form action={logout}>
            <button className="bg-white/10 hover:bg-white/20 px-3 py-1 rounded text-sm transition">
              Logout
            </button>
          </form>
        </div>
      </nav>

      <main className="p-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h1 className="text-2xl font-bold text-gray-800">Welcome, Super Admin</h1>
          <p className="text-gray-500 mt-2">Managing Urban Development Projects for the region.</p>
        </div>
      </main>
    </div>
  )
}