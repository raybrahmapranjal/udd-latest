import { login } from './actions'

export default function AdminLoginPage({ searchParams }: { searchParams: { error?: string } }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-lg border border-gray-200">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-blue-900 uppercase">UDD Super Admin</h1>
          <p className="text-gray-500 text-sm mt-1">Please sign in to access the portal</p>
        </div>

        <form>
          {searchParams?.error && (
            <div className="mb-4 p-3 text-sm bg-red-50 border border-red-200 text-red-600 rounded text-center">
              {searchParams.error}
            </div>
          )}
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Official Email</label>
              <input 
                name="email" 
                type="email" 
                required 
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="admin@udd.gov"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input 
                name="password" 
                type="password" 
                required 
                className="mt-1 w-full p-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                placeholder="••••••••"
              />
            </div>
          </div>

          <button 
            formAction={login}
            className="w-full mt-6 bg-blue-800 hover:bg-blue-900 text-white font-bold py-2 rounded transition shadow-md"
          >
            Login to Dashboard
          </button>
        </form>
      </div>
    </div>
  )
}