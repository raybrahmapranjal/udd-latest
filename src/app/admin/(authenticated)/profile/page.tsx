'use client';

import React, { useActionState } from 'react';
import { useAdminUser } from '../UserContext';
import { updateProfileAction } from './actions';
import { Save, Loader2 } from 'lucide-react';

export default function ProfilePage() {
  const admin = useAdminUser();
  const [state, action, isPending] = useActionState(updateProfileAction, null);

  return (
    <div className="max-w-xl mx-auto space-y-6">
      <h2 className="text-2xl font-black text-zinc-900">Account Settings</h2>
      
      <form action={action} className="bg-white p-6 rounded-2xl border border-rose-100 shadow-xs space-y-4">
        
        {/* Read-Only Email */}
        <div>
          <label className="text-[10px] font-bold text-zinc-400 uppercase">Email Address</label>
          <input disabled value={admin.email} className="w-full p-2.5 bg-zinc-50 border rounded-xl text-zinc-500 cursor-not-allowed" />
        </div>

        {/* Full Name */}
        <div>
          <label className="text-[10px] font-bold text-zinc-400 uppercase">Full Name</label>
          <input name="full_name" defaultValue={admin.name} className="w-full p-2.5 border rounded-xl" required />
        </div>

        {/* Phone */}
        <div>
          <label className="text-[10px] font-bold text-zinc-400 uppercase">Phone Number</label>
          <input name="phone" type="tel" className="w-full p-2.5 border rounded-xl" placeholder="+91..." />
        </div>

        {/* User Type */}
        <div>
          <label className="text-[10px] font-bold text-zinc-400 uppercase">User Type</label>
          <select name="user_type" defaultValue={admin.role} className="w-full p-2.5 border rounded-xl bg-white">
            <option value="Super Admin">Super Admin</option>
            <option value="Inspector">Inspector</option>
            <option value="Viewer">Viewer</option>
          </select>
        </div>

        {/* New Password */}
        <div>
          <label className="text-[10px] font-bold text-zinc-400 uppercase">Change Password</label>
          <input name="password" type="password" placeholder="Leave blank to keep current" className="w-full p-2.5 border rounded-xl" />
        </div>

        <button disabled={isPending} className="w-full flex items-center justify-center gap-2 bg-rose-500 text-white p-3 rounded-xl font-bold hover:bg-rose-600 transition-colors">
          {isPending ? <Loader2 className="animate-spin h-4 w-4" /> : <Save className="h-4 w-4" />}
          Update Profile
        </button>

        {state?.message && (
          <p className={`text-xs font-bold p-3 rounded-lg ${state.success ? 'bg-emerald-50 text-emerald-700' : 'bg-red-50 text-red-700'}`}>
            {state.message}
          </p>
        )}
      </form>
    </div>
  );
}