'use client';

import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import { signIn } from './actions';
import { Mail, Lock, Loader2, ArrowRight, AlertCircle } from 'lucide-react';
import Link from 'next/link';
export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const hasError = !!error;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    const formData = new FormData(event.currentTarget);

    startTransition(async () => {
      try {
        const result = await signIn(formData);
        if (result && !result.success) {
          setError(result.error || 'Authentication failed. Please try again.');
        }
      } catch (err: any) {
        if (err?.message && !err.message.includes('NEXT_REDIRECT')) {
          setError(err.message || 'An unexpected error occurred.');
        }
      }
    });
  };

  return (
    // justify-start pt-[8vh] anchors the content safely in the upper viewport region on mobile devices, eliminating bottom overflow
    <div id="login_container" className="h-[10dvh] overflow-hidden w-screen h-screen flex flex-col items-center justify-start pt-[8vh] sm:justify-center sm:pt-0 bg-slate-100 text-slate-900 p-4 relative overflow-hidden font-sans antialiased select-none">
      {/* Decorative Blur Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main interface card container */}
      <div className="w-full max-w-md relative z-10" id="login_card_wrapper">
        
        {/* Logo and Full Brand Header */}
        <div className="flex flex-col items-center mb-3 sm:mb-4 text-center px-2" id="login_header">
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
          <h3 className="text-rose-500 text-[2.8vw] xs:text-xs sm:text-sm font-bold tracking-wider uppercase whitespace-nowrap">
            SUPER ADMIN LOGIN
          </h3>
        </div>

        {/* Login Form Box */}
        <div 
          id="login_form_card" 
          className={`bg-white border border-l-4 rounded-2xl px-5 py-4 sm:p-7 shadow-xl relative transition-all duration-300
            ${hasError 
              ? 'border-red-400 border-l-red-600 shadow-red-950/5' 
              : 'border-green-300 border-l-green-300 shadow-green-950/5'}`}
        >
          
          {/* Locked-height indicator bar layout */}
          <div className="h-10 transition-all duration-300 overflow-hidden mb-3 mt-1">
            {hasError ? (
              <div id="login_error" className="flex items-center gap-2 px-2.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-[10px] sm:text-xs shadow-sm h-full animate-[shake_0.4s_ease-in-out]">
                <AlertCircle className="h-3.5 w-3.5 shrink-0 text-red-600" />
                <span className="font-semibold leading-tight truncate">Invalid Email or Password</span>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-[10px] sm:text-xs text-slate-400 font-bold text-center px-1 uppercase tracking-wide whitespace-nowrap">
                Enter credentials below to login.
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="space-y-1">
              <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-slate-900 whitespace-nowrap">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Mail className={`h-3.5 w-3.5 transition-colors ${hasError ? 'text-red-400' : 'text-slate-400'}`} />
                </div>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  placeholder="admin@enterprise.gov"
                  className={`block w-full rounded-xl text-xs py-2.5 pl-9 pr-3 text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 border font-medium
                    ${hasError 
                      ? 'bg-rose-50/10 border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                      : 'bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40'}`}
                />
              </div>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center gap-2">
                <label htmlFor="password" className="block text-[10px] font-bold uppercase tracking-wider text-slate-900 shrink-0 whitespace-nowrap">
                  Password
                </label>
                <Link 
                  href="/admin/reset-password" 
                  className="text-[10px] sm:text-[11px] text-blue-600 hover:text-blue-700 cursor-pointer font-bold transition-colors truncate whitespace-nowrap"
                >
                  Forgot Password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <Lock className={`h-3.5 w-3.5 transition-colors ${hasError ? 'text-red-400' : 'text-slate-400'}`} />
                </div>
                <input
                  type="password"
                  name="password"
                  id="password"
                  required
                  placeholder="••••••••••••"
                  className={`block w-full rounded-xl text-xs py-2.5 pl-9 pr-3 text-slate-900 placeholder-slate-400 outline-none transition-all duration-200 border
                    ${hasError 
                      ? 'bg-rose-50/10 border-red-300 focus:border-red-500 focus:ring-1 focus:ring-red-500' 
                      : 'bg-slate-50 border-slate-200 focus:bg-white focus:border-blue-500 focus:ring-1 focus:ring-blue-500/40'}`}
                />
              </div>
            </div>

            {/* Remember Checkbox block */}
            <div className="flex items-center justify-between pt-0.5">
              <label className="flex items-center gap-2 cursor-pointer group whitespace-nowrap">
                <input type="checkbox" className="accent-blue-600 rounded cursor-pointer h-3.5 w-3.5 border-slate-300" />
                <span className="text-[11px] sm:text-xs font-semibold text-slate-600 group-hover:text-slate-900 transition-colors">Remember Password</span>
              </label>
            </div>

            <div className="pt-1">
              <button
                id="login_submit_btn"
                type="submit"
                disabled={isPending}
                className={`flex w-full items-center justify-center gap-2 rounded-xl text-white py-2.5 sm:py-3 text-xs font-bold active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none shadow-md transition-all duration-200 cursor-pointer
                ${hasError 
                  ? 'bg-red-600 hover:bg-red-700 shadow-red-500/10' 
                  : 'bg-gradient-to-r from-green-500 to-green-400 hover:from-green-600 hover:to-green-800 shadow-green-500/20'
                }`}
              >
                {isPending ? (
                  <>
                    <Loader2 className="h-3.5 w-3.5 animate-spin text-white" />
                    <span className="tracking-wide whitespace-nowrap">Validating session...</span>
                  </>
                ) : (
                  <>
                    <span className="tracking-wide uppercase whitespace-nowrap">Click to Login</span>
                    <ArrowRight className="h-3.5 w-3.5 text-white hover:translate-x-0.5 transition-transform" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

      </div>
    </div>
  );
}