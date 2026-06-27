'use client';

import React, { useState, useMemo } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Loader2, Mail } from 'lucide-react';
import Image from 'next/image';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null);

  // Initialize Supabase client safely using useMemo to avoid build-time errors
  const supabase = useMemo(() => {
    // Only attempt to initialize if environment variables exist
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    
    if (!url || !key) {
      console.error("Supabase environment variables are not set.");
      return null;
    }
    
    return createBrowserClient(url, key);
  }, []);

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      setMessage({ text: "Client configuration error. Please contact support.", isError: true });
      return;
    }

    setLoading(true);
    setMessage(null);

    try {
      // 1. Verify existence
      const { data: profile, error: profileError } = await supabase
        .from('profiles')
        .select('email')
        .eq('email', email)
        .single();

      if (profileError || !profile) {
        throw new Error('This email is not registered in our system.');
      }

      // 2. Trigger reset
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/admin/auth/callback`,
      });

      if (error) {
        throw new Error("Failed to send email. Please try again later.");
      }

      setMessage({ text: 'Check your email for the reset link.', isError: false });
    } catch (err: any) {
      setMessage({ text: err.message, isError: true });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-start pt-[8vh] sm:justify-center sm:pt-0 bg-gradient-to-br from-orange-50 to-orange-50 text-slate-900 p-4 relative overflow-hidden font-sans antialiased select-none">
      <div className="flex flex-col items-center mb-3 sm:mb-4 text-center px-2">
        <div className="inline-flex items-center justify-center mb-2 transition-transform duration-300 hover:scale-105">
          <Image 
            src="/btc-logo.png" 
            alt="BTC Logo" 
            width={60} 
            height={60} 
            priority
            className="object-contain max-w-[50px] sm:max-w-[60px]"
          />
        </div>
        <h1 className="text-[4.2vw] xs:text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-0.5 uppercase leading-none whitespace-nowrap">
          Urban Development Department
        </h1>
      </div>
      
      <form onSubmit={handleReset} className="w-full max-w-sm bg-white p-8 rounded-2xl shadow-xl border-l-4 border border-orange-600">
        <h4 className="text-sm font-black mb-6 uppercase tracking-wider text-slate-800">Reset Password</h4>
        
        <div className="relative mb-6">
          <Mail className="absolute left-3 top-4 h-4 w-4 text-red-400" />
          <input 
            type="email" 
            required 
            value={email}
            placeholder="Enter your registered email" 
            className="w-full pl-10 p-3 border border-blue-300 border-l-4 rounded-xl text-sm outline-none transition-all"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button 
          disabled={loading} 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-bold text-sm transition-all shadow-lg shadow-blue-500/20 disabled:opacity-50"
        >
          {loading ? <Loader2 className="animate-spin mx-auto" size={20} /> : 'SEND RESET LINK'}
        </button>

        {message && (
          <p className={`mt-5 text-xs font-bold text-center ${message.isError ? 'text-red-600' : 'text-emerald-600'}`}>
            {message.text}
          </p>
        )}
      </form>
    </div>
  );
}