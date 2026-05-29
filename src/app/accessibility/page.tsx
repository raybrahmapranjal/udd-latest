"use client";
import React, { useState } from 'react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Eye, Shield, Users, CircleAlert, FileText, ArrowLeft } from 'lucide-react';

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
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
              <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center shadow-lg shrink-0">
                <Eye className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-white">Accessibility Statement</h1>
                <p className="text-purple-100 text-lg mt-2">Our commitment to digital accessibility for everyone</p>
                <p className="text-purple-200 text-sm mt-1">Last Updated: December 15, 2024</p>
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
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-sans">Our Commitment</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    UDD BTC is committed to ensuring digital accessibility for people with disabilities. We are continually improving the user experience for everyone and applying relevant accessibility standards to ensure our website is accessible to all users, regardless of ability or technology used.
                  </p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white text-slate-900 shadow-lg rounded-xl border-l-4 border-green-600">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-sans">Standards Compliance</h2>
                  </div>
                  <p className="text-gray-700 mb-3 text-base sm:text-lg leading-relaxed">
                    Our website aims to conform to the following standards:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base sm:text-lg">
                    <li>Web Content Accessibility Guidelines (WCAG) 2.1 Level AA</li>
                    <li>Guidelines for Indian Government Websites (GIGW)</li>
                    <li>Section 508 Standards for Electronic and Information Technology</li>
                    <li>Rights of Persons with Disabilities Act, 2016</li>
                  </ul>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white text-slate-900 shadow-lg rounded-xl border-l-4 border-purple-600">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shrink-0">
                      <Users className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-sans">Accessibility Features</h2>
                  </div>
                  <p className="text-gray-700 mb-3 text-base sm:text-lg leading-relaxed">
                    We have implemented various features to improve accessibility:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2 text-base sm:text-lg">
                    <li>Clear and consistent navigation structure</li>
                    <li>Alternative text for all images and graphics</li>
                    <li>Keyboard navigation support throughout the site</li>
                    <li>Proper heading hierarchy for screen readers</li>
                    <li>Sufficient color contrast ratios</li>
                    <li>Resizable text without loss of functionality</li>
                    <li>Form labels and error messages</li>
                    <li>Skip navigation links</li>
                  </ul>
                </div>
              </div>

              {/* Card 4 */}
              <div className="bg-white text-slate-900 shadow-lg rounded-xl border-l-4 border-orange-600">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shrink-0">
                      <CircleAlert className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-sans">Known Limitations</h2>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Despite our best efforts, some content on this website may not yet be fully accessible. We are actively working to address any issues and improve accessibility. Third-party content and embedded media may have their own accessibility limitations beyond our control.
                  </p>
                </div>
              </div>

              {/* Card 5 */}
              <div className="bg-white text-slate-900 shadow-lg rounded-xl border-l-4 border-indigo-600">
                <div className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center shrink-0">
                      <FileText className="h-6 w-6 text-white" />
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 font-sans">Feedback and Contact</h2>
                  </div>
                  <div className="text-gray-700 leading-relaxed text-base sm:text-lg font-sans">
                    We welcome your feedback on the accessibility of our website. If you encounter any accessibility barriers or have suggestions for improvement, please contact us:
                    <br />
                    <br />
                    <strong>Email:</strong> accessibility@uddbtc.org
                    <br />
                    <strong>Phone:</strong> 8812825012
                    <br />
                    <br />
                    We will make every reasonable effort to respond to your feedback within 5 business days and work towards implementing necessary improvements.
                  </div>
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
