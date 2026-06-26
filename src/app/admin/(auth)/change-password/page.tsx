'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createBrowserClient } from '@supabase/ssr';
import { 
  Loader2, 
  KeyRound, 
  Eye, 
  EyeOff, 
  AlertCircle, 
  ArrowLeft 
} from 'lucide-react';

export default function ChangePasswordPage() {
  const router = useRouter();
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const triggerToast = (message: string, type: 'success' | 'error' = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handlePasswordUpdate = async () => {
    if (newPassword !== confirmPassword) {
      triggerToast("Passwords do not match", "error");
      return;
    }
    if (newPassword.length < 6) {
      triggerToast("Password must be at least 6 characters", "error");
      return;
    }

    setLoading(true);
    try {
      const { error } = await supabase.auth.updateUser({ password: newPassword });
      if (error) throw error;
      
      triggerToast("Password updated successfully");
      
      // Logout after success
      await supabase.auth.signOut();
      
      // Redirect to login, replacing the history entry so user cannot "go back"
      setTimeout(() => {
        window.location.replace('/admin/login');
      }, 1500);
      
    } catch (err: any) {
      triggerToast(err.message || "Failed to update password", "error");
      setLoading(false);
    }
  };
  const handleGoBack = async () => {
    // 1. Explicitly clear the session/cookies
    // Even if the user didn't update the password, we want to end this 
    // "reset" session state so they don't get stuck in an authenticated loop.
    await supabase.auth.signOut();
    
    // 2. Use window.location.replace to ensure a clean navigation
    // that forces the browser to re-evaluate the middleware.
    window.location.replace('/admin/login');
  };
  return (
    <div className="h-[10dvh] overflow-hidden w-screen h-screen flex flex-col items-center justify-start pt-[8vh] sm:justify-center sm:pt-0 bg-slate-100 text-slate-900 p-4 relative overflow-hidden font-sans antialiased select-none bg-gradient-to-br from-indigo-50 to-purple-50">
      {/* Toast Notification */}
      {toast && (
        <div className={`fixed top-6 right-6 z-[100] px-5 py-4 rounded-xl shadow-2xl text-white font-bold flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300 ${toast.type === 'success' ? 'bg-emerald-600' : 'bg-red-600'}`}>
          {toast.type === 'success' ? (
            <svg width="24" height="24" viewBox="0 0 36 36" className="stroke-white">
              <circle className="animate-circle" strokeWidth="3" fill="none" strokeDasharray="100" strokeDashoffset="100" cx="18" cy="18" r="15" transform="rotate(-90 18 18)" />
              <path className="animate-check" strokeWidth="3" fill="none" strokeDasharray="20" strokeDashoffset="20" d="M12 18l4 4 8-8" />
            </svg>
          ) : <AlertCircle size={20} className="animate-pulse" />}
          <span className="tracking-wide uppercase">{toast.message}</span>
        </div>
      )}

      <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-indigo-600 border-l-4 border-l-indigo-600 shadow-xl shadow-indigo-100">
        <div className="mb-8 text-center">
          <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <KeyRound size={24} />
          </div>
          <h2 className="text-lg font-bold text-slate-900">Set new password</h2>
          <p className="text-slate-500 text-xs mt-1">Please enter your new password below.</p>
        </div>

        <div className="space-y-4">
          <div className="relative">
            <input 
              autoComplete="new-password"
              className="w-full px-4 py-3 rounded-xl text-sm border border-indigo-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" 
              type={showNewPassword ? "text" : "password"} 
              placeholder="New password" 
              value={newPassword} 
              onChange={e => setNewPassword(e.target.value)} 
            />
            <button type="button" onClick={() => setShowNewPassword(!showNewPassword)} className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600">
              {showNewPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          <div className="relative">
            <input 
              autoComplete="new-password"
              className="w-full px-4 py-3 rounded-xl text-sm border border-indigo-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all" 
              type={showConfirmPassword ? "text" : "password"} 
              placeholder="Confirm new password" 
              value={confirmPassword} 
              onChange={e => setConfirmPassword(e.target.value)} 
            />
            <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-3 top-3.5 text-slate-400 hover:text-slate-600">
              {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
            </button>
          </div>

          <div className="space-y-4">
            <button 
              onClick={handlePasswordUpdate}
              disabled={loading}
              className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-indigo-500/30 hover:from-indigo-700 hover:to-purple-700 disabled:opacity-50 transition-all"
            >
              {loading ? <Loader2 className="animate-spin mx-auto" size={18}/> : 'UPDATE PASSWORD'}
            </button>

            <button 
              onClick={handleGoBack}
              className="flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-slate-800 to-black text-white text-[11px] font-bold shadow-sm hover:from-slate-900 hover:to-slate-950 transition-all mx-auto"
            >
              <ArrowLeft size={12} /> GO BACK TO LOGIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}