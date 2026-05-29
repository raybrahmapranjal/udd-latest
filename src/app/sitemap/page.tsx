"use client";
import React from 'react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Compass, Database, Users, HelpCircle, Landmark, ShieldAlert, ArrowLeft } from 'lucide-react';

export default function SitemapPage() {
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
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-lg flex items-center justify-center shadow-xl ring-1 ring-white/20 border border-white/10 shrink-0">
                <Compass className="h-8 w-8 text-amber-200 drop-shadow-[0_0_8px_rgba(251,191,36,0.35)]" />
              </div>
              <div>
                <div className="bg-sky-455/15 border border-sky-400/30 text-sky-300 font-extrabold text-[10px] tracking-widest uppercase py-1 px-3.5 rounded-full inline-block mb-3.5 backdrop-blur-sm">
                  Structural Map
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase drop-shadow-sm text-white font-sans">
                  Portal Sitemap
                </h1>
                <p className="text-sky-100/95 text-sm sm:text-base md:text-lg mt-2 font-medium max-w-3xl leading-relaxed">
                  An exhaustive HTML map detailing every page, category node, municipal board portal, and e-government link available across the UDD BTC system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content body container */}
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">

        {/* Sitemap Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          
          {/* Main Landing & Administration */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
              <div className="bg-sky-50 p-2 rounded-xl text-sky-600">
                <Landmark className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-[#003366] text-base md:text-lg">Core Portals & About</h3>
            </div>
            <ul className="space-y-3 font-semibold text-sm text-slate-600">
              <li><a href="/" className="hover:text-orange-500 flex items-center gap-2">&rarr; Home Portal Welcome Page</a></li>
              <li><a href="/departments" className="hover:text-orange-500 flex items-center gap-2">&rarr; UDD BTC Departments & Administration Wings</a></li>
              <li><a href="/tenders" className="hover:text-orange-500 flex items-center gap-2">&rarr; Public Procurement, Open Bidding & Tenders</a></li>
              <li><a href="/grievance" className="hover:text-orange-500 flex items-center gap-2">&rarr; Citizen Grievance Portal (Register/Track)</a></li>
              <li><a href="/contact" className="hover:text-orange-500 flex items-center gap-2">&rarr; Contact Us & Headquarters Location</a></li>
            </ul>
          </div>

          {/* Central Government Schemes */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
              <div className="bg-[#ff6a00]/10 p-2 rounded-xl text-[#ff6a00]">
                <Database className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-[#003366] text-base md:text-lg">Government Schemes</h3>
            </div>
            <ul className="space-y-3 font-semibold text-sm text-slate-600">
              <li><a href="/schemes/pmay" className="hover:text-orange-500 flex items-center gap-2">&rarr; Pradhan Mantri Awas Yojana Urban (PMAY-U)</a></li>
              <li><a href="/schemes/sbm" className="hover:text-orange-500 flex items-center gap-2">&rarr; Swachh Bharat Mission (SBM-U 2.0)</a></li>
              <li><a href="/schemes/amrut" className="hover:text-orange-500 flex items-center gap-2">&rarr; AMRUT 2.0 (Water supply projects)</a></li>
              <li><a href="/schemes/nulm" className="hover:text-orange-500 flex items-center gap-2">&rarr; Day-NULM (Livelihood support guidelines)</a></li>
              <li><a href="/schemes/15fc" className="hover:text-orange-500 flex items-center gap-2">&rarr; 15th Finance Commission ULB Grants</a></li>
            </ul>
          </div>

          {/* Urban Local Bodies (ULBs) list */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
              <div className="bg-emerald-50 p-2 rounded-xl text-emerald-600">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-[#003366] text-base md:text-lg">Urban Local Bodies (ULBs)</h3>
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-semibold text-xs text-slate-600">
              <li><a href="/ulb/kokrajhar_mb" className="hover:text-orange-500">• Kokrajhar MB Sub-Portal</a></li>
              <li><a href="/ulb/gossaigaon_mb" className="hover:text-orange-500">• Gossaigaon MB Sub-Portal</a></li>
              <li><a href="/ulb/fakiragram_mb" className="hover:text-orange-500">• Fakiragram MB Sub-Portal</a></li>
              <li><a href="/ulb/basugaon_mb" className="hover:text-orange-500">• Basugaon MB Sub-Portal</a></li>
              <li><a href="/ulb/kajalgaon_mb" className="hover:text-orange-500">• Kajalgaon MB Sub-Portal</a></li>
              <li><a href="/ulb/bijni_mb" className="hover:text-orange-500">• Bijni MB Sub-Portal</a></li>
              <li><a href="/ulb/tangla_mb" className="hover:text-orange-500">• Tangla MB Sub-Portal</a></li>
              <li><a href="/ulb/mushalpur_mb" className="hover:text-orange-500">• Mushalpur MB Sub-Portal</a></li>
              <li><a href="/ulb/goreswar_mb" className="hover:text-orange-500">• Goreswar MB Sub-Portal</a></li>
              <li><a href="/ulb/tamulpur_mb" className="hover:text-orange-500">• Tamulpur MB Sub-Portal</a></li>
            </ul>
          </div>

          {/* Policy Pages & Compliance */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-4">
            <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-4">
              <div className="bg-red-50 p-2 rounded-xl text-red-600">
                <ShieldAlert className="h-5 w-5" />
              </div>
              <h3 className="font-extrabold text-[#003366] text-base md:text-lg">Policies & Compliances</h3>
            </div>
            <ul className="space-y-3 font-semibold text-sm text-slate-600">
              <li><a href="/privacy-policy" className="hover:text-orange-500 flex items-center gap-2">&rarr; Privacy Policy & Information protection</a></li>
              <li><a href="/terms-of-use" className="hover:text-orange-500 flex items-center gap-2">&rarr; Terms of Use Agreement</a></li>
              <li><a href="/accessibility" className="hover:text-orange-500 flex items-center gap-2">&rarr; Accessibility Standards Guidance</a></li>
              <li><a href="/rti" className="hover:text-orange-500 flex items-center gap-2">&rarr; Right To Information (RTI) Act Portal</a></li>
              <li><a href="/sitemap" className="hover:text-orange-500 flex items-center gap-2">&rarr; Visual Sitemap Index (Current Page)</a></li>
            </ul>
          </div>

        </div>

        {/* Dynamic Help Center Indicator */}
        <div className="bg-[#003366] text-white rounded-2xl p-6 flex flex-col sm:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="bg-white/10 p-2 rounded-xl text-white shrink-0">
              <HelpCircle className="h-5 w-5" />
            </div>
            <div className="text-left">
              <h4 className="font-extrabold text-sm md:text-base">Can&apos;t locate a specific grant option?</h4>
              <p className="text-xs text-white/75 mt-0.5">Interact with our AI Grievance or Scheme Assistance Chatbots on the landing page.</p>
            </div>
          </div>
          <a 
            href="/grievance" 
            className="bg-[#ff6600] text-white hover:bg-[#e05315] font-extrabold text-xs tracking-wider uppercase py-2.5 px-5 rounded-xl transition-all shadow-md shadow-orange-500/10 cursor-pointer shrink-0"
          >
            Ask AI Assistant
          </a>
        </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
