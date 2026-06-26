'use client';

import React from 'react';
import { UserCheck, Mail } from 'lucide-react';
import { useAdminUser } from './UserContext'; // Import hook to extract session data

export default function AdminDashboardPage() {
  const admin = useAdminUser(); // Extract data seamlessly

  return (
    <div className="space-y-6">
      {/* 🟢 DEBUG EMAIL CHECK BOX */}
      <div className="bg-zinc-900 text-emerald-400 font-mono p-4 rounded-xl border border-zinc-800 shadow-inner flex items-center gap-3 text-xs">
        <Mail className="h-4 w-4 text-emerald-500 animate-pulse shrink-0" />
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-zinc-500">Supabase Authenticated Session:</span>
          <span className="bg-zinc-800 text-white px-2 py-0.5 rounded border border-zinc-700 font-bold">
            {admin.name}
          </span>
        </div>
      </div>

      <div className="bg-white border border-rose-100 rounded-2xl p-5 sm:p-6 shadow-xs relative overflow-hidden flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="absolute top-0 right-0 w-48 h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-rose-100/40 via-transparent to-transparent pointer-events-none" />
        <div className="space-y-1 relative z-10">
          <div className="flex items-center gap-1.5 text-rose-500">
            <UserCheck className="h-4 w-4" />
            <span className="text-[10px] font-bold uppercase tracking-widest">Authentication Clear</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-black text-zinc-900 tracking-tight">
            Welcome back, {admin.name}.
          </h1>
          <p className="text-xs sm:text-sm font-medium text-zinc-500 leading-relaxed">
            Role privileges active: <span className="text-rose-500 font-semibold">{admin.role}</span>
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white border border-rose-100 rounded-2xl p-5 shadow-xs h-28 flex flex-col justify-between">
          <span className="text-[10px] font-bold uppercase text-zinc-400 tracking-wider">Total Municipal Projects</span>
          <span className="text-2xl font-black text-zinc-900">142</span>
        </div>
        <div className="bg-white border border-rose-100 rounded-2xl p-5 shadow-xs h-28 flex flex-col justify-between">
          <span className="text-[10px] font-bold uppercase text-zinc-400 tracking-wider">Active Content Blocks</span>
          <span className="text-2xl font-black text-rose-500">4</span>
        </div>
        <div className="bg-white border border-rose-100 rounded-2xl p-5 shadow-xs h-28 flex flex-col justify-between">
          <span className="text-[10px] font-bold uppercase text-zinc-400 tracking-wider">System Inspectors</span>
          <span className="text-2xl font-black text-zinc-700">34</span>
        </div>
      </div>
    </div>
  );
}