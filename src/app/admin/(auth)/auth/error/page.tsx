'use client';

import { Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { AlertCircle } from 'lucide-react';
import Image from 'next/image';

function ErrorContent() {
  const searchParams = useSearchParams();
  const errorType = searchParams.get('error');

  const messages: Record<string, string> = {
    invalid_token: "Your password reset link has expired or is invalid. Please request a new one.",
    default: "An authentication error occurred."
  };

  return (
    <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl border-l-4 border border-red-600 text-center">
      <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
      <h1 className="text-xl font-black text-slate-900 mb-2">Authentication Error</h1>
      <p className="text-slate-600 mb-6 text-sm">
        {messages[errorType || 'default']}
      </p>
      <Link 
        href="/admin/login" 
        className="block w-full bg-gradient-to-r from-red-600 to-red-500 text-white py-3 rounded-xl font-bold text-sm shadow-lg shadow-red-500/30 hover:from-red-700 hover:to-red-600 hover:shadow-red-500/40 transition-all active:scale-[0.98] text-center"
      >
        RETURN TO LOGIN
      </Link>
    </div>
  );
}

export default function AuthErrorPage() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-start pt-[8vh] sm:justify-center sm:pt-0 bg-gradient-to-br from-red-50 to-red-50 text-slate-900 p-4 relative overflow-hidden font-sans antialiased select-none">
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
        <h1 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900 mb-0.5 uppercase leading-none whitespace-nowrap">
          Urban Development Department
        </h1>
      </div>
      
      {/* Suspense is required for useSearchParams in App Router */}
      <Suspense fallback={<div>Loading...</div>}>
        <ErrorContent />
      </Suspense>
    </div>
  );
}