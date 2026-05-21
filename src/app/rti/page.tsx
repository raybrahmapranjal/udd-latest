"use client";
import React from 'react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Landmark, Users, ClipboardList, Receipt, Download, FileText, ArrowLeft } from 'lucide-react';

export default function RTIPage() {
  const rtiOfficers = [
    {
      role: "First Appellate Authority (FAA)",
      name: "Sri Gurnel Singh, IAS",
      designation: "Director & CHD, Urban Development Department, BTC",
      email: "dir.udd.btc@gmail.com",
      address: "CHD Office, Urban Development Department, Kokrajhar, BTR, Assam - 783370",
    },
    {
      role: "State Public Information Officer (SPlO)",
      name: "Sri Dwipen Chandra Boro",
      designation: "Deputy Director, Urban Development Department, BTC",
      email: "spio.udd.btc@gmail.com",
      address: "Urban Development Department, BTC Secretariat, Kokrajhar, BTR, Assam - 783370",
    },
    {
      role: "Assistant Public Information Officer (APlO)",
      name: "Smt. Anjali Basumatary",
      designation: "Superintendent, UDD CHD Office, Kokrajhar",
      email: "apio.udd.btc@gmail.com",
      address: "CHD Office reception, Kokrajhar, BTR, Assam - 783370",
    }
  ];

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
                <Landmark className="h-8 w-8 text-amber-200 drop-shadow-[0_0_8px_rgba(251,191,36,0.35)]" />
              </div>
              <div>
                <div className="bg-sky-455/15 border border-sky-400/30 text-sky-300 font-extrabold text-[10px] tracking-widest uppercase py-1 px-3.5 rounded-full inline-block mb-3.5 backdrop-blur-sm">
                  RTI Act 2005 Portal
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase drop-shadow-sm text-white font-sans">
                  Right To Information (RTI)
                </h1>
                <p className="text-sky-100/95 text-sm sm:text-base md:text-lg mt-2 font-medium max-w-3xl leading-relaxed">
                  Section 4(1)(b) Proactive Disclosures of the Urban Development Department, Bodoland Territorial Council to ensure transparency of governance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Content body container */}
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">

        {/* RTI Content Block */}
        <div className="space-y-10">
          
          {/* Statutory Obligation Information */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-4">
            <h2 className="text-xl font-extrabold text-[#003366] mb-3 flex items-center gap-2 border-b border-slate-100 pb-3">
              <ClipboardList className="h-5 w-5 text-orange-500" />
              <span>Statutory Mandate</span>
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed font-semibold">
              The Right to Information Act 2005 empowers Indian citizens to ask public authorities for operational transparency and historical records. The CHD Office of UDD BTC maintains well-indexed registers to handle incoming requests swiftly.
            </p>
          </div>

          {/* RTI Officers details grid */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-6">
            <h2 className="text-xl font-extrabold text-[#003366] mb-3 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Users className="h-5 w-5 text-orange-500" />
              <span>Designated RTI Officers</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {rtiOfficers.map((officer, index) => (
                <div key={index} className="bg-slate-50 border border-slate-200/60 rounded-xl p-5 hover:border-blue-300 hover:shadow-md transition-all">
                  <span className="text-[10px] font-black uppercase text-orange-550 block mb-2">{officer.role}</span>
                  <h4 className="font-extrabold text-slate-900 text-sm leading-tight">{officer.name}</h4>
                  <p className="text-xs text-[#003366] font-bold mt-1 leading-normal">{officer.designation}</p>
                  <p className="text-xs text-slate-500 mt-3 leading-relaxed font-semibold">{officer.address}</p>
                  <a href={`mailto:${officer.email}`} className="text-[#ff6a00] font-black text-xs hover:underline block mt-4 break-all">
                    {officer.email}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Fees & mode of payments section */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 md:p-8 space-y-4">
            <h2 className="text-xl font-extrabold text-[#003366] mb-3 flex items-center gap-2 border-b border-slate-100 pb-3">
              <Receipt className="h-5 w-5 text-orange-500" />
              <span>Application Fee & Payment Mode</span>
            </h2>
            <div className="space-y-4 text-sm text-slate-600 font-semibold leading-relaxed">
              <p>
                In accordance with Assam Right to Information Rules, an application fee of <strong className="text-slate-900 font-black">Rs. 10/-</strong> must accompany each RTI application.
              </p>
              <ul className="list-disc list-inside space-y-2 bg-slate-50 p-4 rounded-xl border border-slate-200/60 text-xs text-slate-500">
                <li>By way of <strong className="text-slate-800">Indian Postal Order (IPO)</strong> drawn in favor of &apos;Director &amp; CHD, Urban Development Department, BTC, Kokrajhar&apos;.</li>
                <li>Or via <strong className="text-slate-800">Treasury Challan</strong> deposited under Head of Account: &apos;0070 - Other Administrative Services - RTI Fees&apos;.</li>
                <li>No fee is required for citizens belonging to the <strong className="text-slate-800">Below Poverty Line (BPL)</strong> category (must produce valid BPL ration card copy).</li>
              </ul>
            </div>
          </div>

          {/* Downloads Block */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex gap-3">
              <div className="bg-blue-50 p-3 rounded-xl text-blue-600 shrink-0">
                <FileText className="h-6 w-6" />
              </div>
              <div className="text-left">
                <h4 className="font-extrabold text-slate-900 text-sm md:text-base">Download Official Application Template</h4>
                <p className="text-xs text-slate-600 font-semibold mt-0.5">Prepare your disclosure requests in compliance with Form-A regulations.</p>
              </div>
            </div>
            <button className="bg-[#003366] hover:bg-slate-900 text-white font-extrabold text-xs tracking-wider uppercase py-3 px-6 rounded-xl transition-all shadow-md flex items-center gap-2 cursor-pointer shrink-0">
              <Download className="h-4 w-4" />
              <span>Download Form-A PDF</span>
            </button>
          </div>

        </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
