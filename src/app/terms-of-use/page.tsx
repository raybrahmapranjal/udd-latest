"use client";
import React from 'react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, FileText, Users, Shield, AlertCircle, Lock, Bell } from 'lucide-react';

export default function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <div className="sticky top-0 z-[110]">
        <UtilityBar />
        <Header />
      </div>

      <main className="flex-1 bg-gray-50">
        {/* Banner with gradient backdrop and traditional Bodo Aronai horizontal pattern */}
        <section className="relative py-16 overflow-hidden bg-slate-950 text-white border-b border-purple-950/30 shadow-lg">
          {/* Traditional Bodo Aronai vertical pattern tiling horizontally */}
          <div 
            className="absolute inset-0 z-0 opacity-45 bg-repeat-x bg-center"
            style={{ 
              backgroundImage: "url('https://as2.ftcdn.net/jpg/05/39/19/59/1000_F_539195979_di6c1j1rrc8wrybNOkactpWEgWlDioV1.webp')",
              backgroundSize: "auto 100%"
            }}
          />
          {/* Light Purple Overlay with decreased intensity */}
          <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#21113a]/70 via-[#180a2d]/60 to-[#2d114c]/70 mix-blend-multiply" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
            {/* Back Button */}
            <a 
              href="/" 
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-sky-200 hover:text-white mb-6 transition-all font-semibold text-xs border border-white/5 backdrop-blur-sm shadow-sm"
              id="back-to-home-link"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Home</span>
            </a>

            {/* Banner Layout Header content */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg flex items-center justify-center shadow-xl ring-1 ring-white/20 border border-white/10 shrink-0">
                <FileText className="h-8 w-8 text-amber-200 drop-shadow-[0_0_8px_rgba(251,191,36,0.35)]" />
              </div>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase drop-shadow-sm text-white font-sans">
                  Terms of Service
                </h1>
                <p className="text-sky-100/90 text-sm sm:text-base md:text-lg mt-2 font-medium max-w-3xl leading-relaxed">
                  Your rights and responsibilities when using our services
                </p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <p className="text-sky-200/80 text-xs font-semibold tracking-wider uppercase">
                    Last Updated: December 15, 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content body layout containing exact same 6 sections cards */}
        <div className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">
              
              {/* Card 1: Acceptance of Terms */}
              <div className="bg-white text-card-foreground shadow-md rounded-xl border-0 border-l-4 border-blue-600 overflow-hidden" id="card-acceptance-terms">
                <div className="p-8">
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white shrink-0">
                      <FileText className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">1. Acceptance of Terms</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg font-medium">
                    By accessing and using the UDD BTR website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services. These terms apply to all visitors, users, and others who access or use the service.
                  </p>
                </div>
              </div>

              {/* Card 2: User Responsibilities */}
              <div className="bg-white text-card-foreground shadow-md rounded-xl border-0 border-l-4 border-green-600 overflow-hidden" id="card-user-responsibilities">
                <div className="p-8">
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center text-white shrink-0">
                      <Users className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">2. User Responsibilities</h2>
                  </div>
                  <p className="text-gray-700 mb-3 text-sm sm:text-base md:text-lg font-semibold">
                    As a user of our services, you agree to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 text-sm sm:text-base md:text-lg font-medium">
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Use services only for lawful purposes</li>
                    <li>Not misuse or abuse the platform</li>
                    <li>Comply with all applicable laws and regulations</li>
                  </ul>
                </div>
              </div>

              {/* Card 3: Service Availability */}
              <div className="bg-white text-card-foreground shadow-md rounded-xl border-0 border-l-4 border-purple-600 overflow-hidden" id="card-service-availability">
                <div className="p-8">
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white shrink-0">
                      <Shield className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">3. Service Availability</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg font-medium">
                    We strive to maintain service availability at all times, but we do not guarantee uninterrupted access. Services may be temporarily unavailable due to maintenance, upgrades, or unforeseen circumstances. We reserve the right to modify, suspend, or discontinue any part of the service without prior notice.
                  </p>
                </div>
              </div>

              {/* Card 4: Limitation of Liability */}
              <div className="bg-white text-card-foreground shadow-md rounded-xl border-0 border-l-4 border-orange-600 overflow-hidden" id="card-limitation-liability">
                <div className="p-8">
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center text-white shrink-0">
                      <AlertCircle className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">4. Limitation of Liability</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg font-medium">
                    UDD BTR shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service. We do not guarantee the accuracy, completeness, or reliability of any content on the website. Use of the service is at your own risk.
                  </p>
                </div>
              </div>

              {/* Card 5: Intellectual Property */}
              <div className="bg-white text-card-foreground shadow-md rounded-xl border-0 border-l-4 border-indigo-600 overflow-hidden" id="card-intellectual-property">
                <div className="p-8">
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center text-white shrink-0">
                      <Lock className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">5. Intellectual Property</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg font-medium">
                    All content, features, and functionality on this website are owned by UDD BTR or its licensors and are protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without express written permission.
                  </p>
                </div>
              </div>

              {/* Card 6: Modifications to Terms */}
              <div className="bg-white text-card-foreground shadow-md rounded-xl border-0 border-l-4 border-pink-600 overflow-hidden" id="card-modifications-terms">
                <div className="p-8">
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center text-white shrink-0">
                      <Bell className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">6. Modifications to Terms</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg font-medium">
                    We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the service after any changes constitutes acceptance of the new terms. We encourage you to review these terms periodically.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
