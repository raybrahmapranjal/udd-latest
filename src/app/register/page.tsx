"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Eye, EyeOff } from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import NeedAssistance from '@/components/sections/NeedAssistance';
import Footer from '@/components/layout/Footer';

export default function RegisterPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [address, setAddress] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phoneNumber || !password || !confirmPassword) {
      setMessage({ type: 'error', text: 'Please fill in all required fields marked with *' });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match' });
      return;
    }

    setIsLoading(true);
    setMessage(null);

    // Mock API call
    setTimeout(() => {
      setIsLoading(false);
      setMessage({
        type: 'success',
        text: 'Account created successfully! Redirecting to login page...'
      });
      // Redirect after a short delay
      setTimeout(() => {
        window.location.href = '/login';
      }, 1500);
    }, 1200);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col relative select-none font-sans">
      {/* Sticky top navigation header */}
      <div className="sticky top-0 z-[110]">
        <UtilityBar />
        <Header />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow bg-[#eef5fc] flex items-center justify-center py-16 px-4 sm:p-12 md:p-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[720px] bg-white rounded-xl shadow-[0_4px_24px_rgba(37,99,235,0.06)] border border-slate-100/50 p-6 sm:p-10"
        >
          {/* Header Block */}
          <div className="text-center mb-8">
            <h1 className="text-[36px] font-bold text-[#0a192f] tracking-tight leading-none mb-3">
              Create Account
            </h1>
            <p className="text-[#556277] text-sm sm:text-base">
              Register to access UDD BTC services
            </p>
          </div>

          {/* Success / Error Messages */}
          {message && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className={`mb-6 p-4 rounded-lg text-sm font-semibold border ${
                message.type === 'success'
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-150'
                  : 'bg-rose-50 text-rose-700 border-rose-150'
              }`}
            >
              {message.text}
            </motion.div>
          )}

          {/* Form */}
          <form onSubmit={handleRegister} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
              {/* Row 1 - Col 1: Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-semibold text-slate-800">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full h-12 bg-white rounded-lg border border-slate-205 focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] focus:outline-none px-4 text-slate-800 font-medium transition-all text-sm"
                />
              </div>

              {/* Row 1 - Col 2: Email Address */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-semibold text-slate-800">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full h-12 bg-white rounded-lg border border-slate-205 focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] focus:outline-none px-4 text-slate-800 font-medium transition-all text-sm"
                />
              </div>

              {/* Row 2 - Col 1: Phone Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-semibold text-slate-800">
                  Phone Number *
                </label>
                <input
                  type="text"
                  required
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  placeholder="Enter your phone number"
                  className="w-full h-12 bg-white rounded-lg border border-slate-205 focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] focus:outline-none px-4 text-slate-800 font-medium transition-all text-sm"
                />
              </div>

              {/* Row 2 - Col 2: Address */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-semibold text-slate-800">
                  Address
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter your address"
                  className="w-full h-12 bg-white rounded-lg border border-slate-205 focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] focus:outline-none px-4 text-slate-800 font-medium transition-all text-sm"
                />
              </div>

              {/* Row 3 - Col 1: Password */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-semibold text-slate-800">
                  Password *
                </label>
                <div className="relative w-full">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a password"
                    className="w-full h-12 bg-white rounded-lg border border-slate-205 focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] focus:outline-none pl-4 pr-11 text-slate-800 font-medium transition-all text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {/* Row 3 - Col 2: Confirm Password */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[14px] font-semibold text-slate-800">
                  Confirm Password *
                </label>
                <div className="relative w-full">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    className="w-full h-12 bg-white rounded-lg border border-slate-205 focus:border-[#f26522] focus:ring-1 focus:ring-[#f26522] focus:outline-none pl-4 pr-11 text-slate-800 font-medium transition-all text-sm"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors p-1"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>
            </div>

            {/* Create Account Button (Spans full grid width) */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full h-12 bg-[#f26522] hover:bg-[#e05315] disabled:bg-slate-300 text-white font-bold text-base rounded-lg transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
              >
                <UserPlus className="w-5 h-5 shrink-0 stroke-[2.5]" />
                {isLoading ? 'Creating account...' : 'Create Account'}
              </button>
            </div>
          </form>

          {/* Redirection Link */}
          <div className="text-center mt-7">
            <p className="text-slate-500 font-semibold text-xs sm:text-sm">
              Already have an account?{' '}
              <a href="/login" className="text-[#f26522] hover:text-[#e05315] font-extrabold hover:underline transition-colors ml-1">
                Login here
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Need Assistance Info section & Global Footer */}
      <NeedAssistance />
      <Footer />
    </div>
  );
}
