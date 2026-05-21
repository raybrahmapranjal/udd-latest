"use client";
import React from 'react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Shield, Lock, FileText, Users, Award, Bell, ArrowLeft } from 'lucide-react';

export default function PrivacyPolicyPage() {
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
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              <span>Back to Home Portal</span>
            </a>

            {/* Banner Layout Header content */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg flex items-center justify-center shadow-xl ring-1 ring-white/20 border border-white/10 shrink-0">
                <Shield className="h-8 w-8 text-amber-200 drop-shadow-[0_0_8px_rgba(251,191,36,0.35)]" />
              </div>
              <div>
                <div className="bg-sky-450/15 border border-sky-400/30 text-sky-300 font-extrabold text-[10px] tracking-widest uppercase py-1 px-3.5 rounded-full inline-block mb-3.5 backdrop-blur-sm">
                  Official Policy Document
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase drop-shadow-sm text-white font-sans">
                  Privacy Policy
                </h1>
                <p className="text-sky-100/95 text-sm sm:text-base md:text-lg mt-2 font-medium max-w-3xl leading-relaxed">
                  Learn how the Urban Development Department (UDD), Bodoland Territorial Council collects, protects, and uses your personal information across all citizen portals.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content body container */}
        <div className="py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-6">

              {/* Card 1 */}
              <div className="bg-white text-slate-900 shadow-lg rounded-xl border-l-4 border-blue-600">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shrink-0">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-sans">1. Information We Collect</h2>
                  </div>
                  <p className="text-gray-700 mb-3 text-base sm:text-lg leading-relaxed">
                    We collect information that you provide directly to us, including:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base sm:text-lg">
                    <li>Personal identification information (Name, email, phone number)</li>
                    <li>Service-related information (Property holdings, tax records)</li>
                    <li>Grievance and feedback information</li>
                    <li>Payment and transaction details</li>
                  </ul>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white text-slate-900 shadow-lg rounded-xl border-l-4 border-green-600">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-sans">2. How We Use Your Information</h2>
                  </div>
                  <p className="text-gray-700 mb-3 text-base sm:text-lg leading-relaxed">
                    We use the collected information for:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base sm:text-lg">
                    <li>Providing and improving our services</li>
                    <li>Processing payments and transactions</li>
                    <li>Responding to grievances and inquiries</li>
                    <li>Sending service-related notifications</li>
                    <li>Maintaining security and preventing fraud</li>
                  </ul>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white text-slate-900 shadow-lg rounded-xl border-l-4 border-purple-600">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shrink-0">
                      <Lock className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-sans">3. Information Sharing</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    We do not sell, trade, or rent your personal information to third parties. We may share information with government agencies as required by law or for providing integrated services across different departments.
                  </p>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white text-slate-900 shadow-lg rounded-xl border-l-4 border-orange-600">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-sans">4. Data Security</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    We implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. All sensitive data is encrypted during transmission and storage.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white text-slate-900 shadow-lg rounded-xl border-l-4 border-indigo-600">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shrink-0">
                      <Award className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-sans">5. Your Rights</h2>
                  </div>
                  <p className="text-gray-700 mb-3 text-base sm:text-lg leading-relaxed">
                    You have the right to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base sm:text-lg">
                    <li>Access your personal information</li>
                    <li>Request correction of inaccurate data</li>
                    <li>Request deletion of your data (subject to legal requirements)</li>
                    <li>Opt-out of non-essential communications</li>
                  </ul>
                </div>
              </div>

              {/* Card 6 */}
              <div className="bg-white text-slate-900 shadow-lg rounded-xl border-l-4 border-pink-600">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center shrink-0">
                      <Bell className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-sans">6. Contact Us</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg font-sans">
                    If you have questions about this Privacy Policy, please contact us at:
                    <br />
                    <br />
                    <strong>Email:</strong> privacy@uddbtr.org
                    <br />
                    <strong>Phone:</strong> 8812825012
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
