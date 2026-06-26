"use client";

import React, { useState } from 'react';
import { 
  FileText, 
  Search, 
  Calendar, 
  Download, 
  Clock, 
  Building2, 
  ChevronDown, 
  Check 
} from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface TenderDetail {
  id: string;
  refNo: string;
  title: string;
  department: string;
  datePublished: string;
  submissionDeadline: string;
  estimatedValue: string;
  status: 'Active' | 'Closed';
  description: string;
  docName: string;
  docSize: string;
  contactEmail: string;
}

const ALL_TENDERS: TenderDetail[] = [
  {
    id: 'tend-001',
    refNo: 'UDD/BTR/2024/001',
    title: 'Construction of Community Hall at Kokrajhar',
    department: 'Urban Planning & Development',
    datePublished: '01 Dec 2024',
    submissionDeadline: '15 Jan 2025',
    estimatedValue: '₹2,50,000,000',
    status: 'Active',
    description: 'Construction of a multi-purpose community hall with modern facilities including auditorium, meeting rooms, and recreational spaces.',
    docName: 'Tender_Specs_Kokrajhar_001.pdf',
    docSize: '2.4 MB',
    contactEmail: 'tenders.uddbtr@gmail.com'
  },
  {
    id: 'tend-002',
    refNo: 'UDD/BTR/2024/002',
    title: 'Street Light Installation - Gossaigaon',
    department: 'Municipal Administration',
    datePublished: '05 Dec 2024',
    submissionDeadline: '20 Jan 2025',
    estimatedValue: '₹85,000,000',
    status: 'Active',
    description: 'Installation of LED street lights across main roads and residential areas of Gossaigaon Municipal Board.',
    docName: 'StreetLight_Specs_Gossaigaon_002.pdf',
    docSize: '1.8 MB',
    contactEmail: 'tenders.uddbtr@gmail.com'
  },
  {
    id: 'tend-003',
    refNo: 'UDD/BTR/2024/003',
    title: 'Solid Waste Management System - Tangla',
    department: 'Sanitation & Solid Waste Management',
    datePublished: '20 Nov 2024',
    submissionDeadline: '20 Dec 2024',
    estimatedValue: '₹3,50,000,000',
    status: 'Closed',
    description: 'Setting up integrated solid waste management system including collection vehicles, processing units, and disposal facilities.',
    docName: 'SWM_Specs_Tangla_003.pdf',
    docSize: '3.1 MB',
    contactEmail: 'tenders.uddbtr@gmail.com'
  }
];

export default function TendersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState<'all' | 'active' | 'closed'>('all');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Dynamic Metrics Counts based on ALL_TENDERS
  const totalCount = ALL_TENDERS.length;
  const activeCount = ALL_TENDERS.filter(t => t.status === 'Active').length;
  const closedCount = ALL_TENDERS.filter(t => t.status === 'Closed').length;

  // Filter Tenders based on Search & Select status
  const filteredTenders = ALL_TENDERS.filter(tender => {
    const matchesSearch = 
      tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.refNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStatus = 
      selectedStatus === 'all' || 
      (selectedStatus === 'active' && tender.status === 'Active') ||
      (selectedStatus === 'closed' && tender.status === 'Closed');

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <div className="sticky top-0 z-[110]">
        <UtilityBar />
        <Header />
      </div>

      {/* Main Banner Header with Bodo Aronai pattern overlay */}
      <section className="relative py-14 overflow-hidden bg-[#1140be] text-white border-t-[5px] border-[#ea580c] border-b border-blue-900/40 shadow-md flex items-center">
        {/* Traditional Bodo Aronai vertical pattern tiling horizontally */}
        <div 
          className="absolute inset-0 z-0 opacity-30 bg-repeat-x bg-center"
          style={{ 
            backgroundImage: "url('/aronai.png')",
            backgroundSize: "auto 100%"
          }}
        />
        {/* Rich Blue Overlay with decreased intensity to blend elegantly */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0d34a1]/65 via-[#0e3aba]/55 to-[#1244cf]/60 mix-blend-multiply" />

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
          <div className="flex items-center gap-4">
            {/* White/Semi-translucent circular background container for FileText icon */}
            <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0 shadow-inner">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight mb-2">
                Tender Notices
              </h1>
              <p className="text-sm sm:text-base text-blue-100 font-medium max-w-2xl">
                View all active and archived tenders published by Urban Development Department, BTR
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Body Grid */}
      <main className="flex-grow max-w-7xl w-full mx-auto p-4 sm:p-6 lg:p-8">
        
        {/* KPI Metrics row exactly as screenshot 1 - decreased border radius to rounded-lg */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Card 1: Total Tenders */}
          <div className="bg-[#eff6ff] border border-blue-100 border-l-[4px] border-l-[#2563eb] rounded-lg p-6 sm:p-7 flex items-center justify-between shadow-sm">
            <div>
              <span className="text-sm font-extrabold text-[#2563eb]/90 uppercase tracking-wider block mb-1">Total Tenders</span>
              <span className="text-4xl sm:text-5xl font-bold text-slate-900 leading-none">{totalCount}</span>
            </div>
            <div className="w-14 h-14 rounded-full bg-[#2563eb] text-white flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0">
              <FileText className="w-6 h-6 stroke-[2.5]" />
            </div>
          </div>

          {/* Card 2: Active Tenders */}
          <div className="bg-[#f0fdf4] border border-emerald-100 border-l-[4px] border-l-[#22c55e] rounded-lg p-6 sm:p-7 flex items-center justify-between shadow-sm">
            <div>
              <span className="text-sm font-extrabold text-[#22c55e]/90 uppercase tracking-wider block mb-1">Active Tenders</span>
              <span className="text-4xl sm:text-5xl font-bold text-slate-900 leading-none">{activeCount}</span>
            </div>
            <div className="w-14 h-14 rounded-full bg-[#22c55e] text-white flex items-center justify-center shadow-lg shadow-emerald-500/20 shrink-0">
              <Calendar className="w-6 h-6 stroke-[2.5]" />
            </div>
          </div>

          {/* Card 3: Closed Tenders */}
          <div className="bg-[#fff7ed] border border-orange-100 border-l-[4px] border-l-[#f97316] rounded-lg p-6 sm:p-7 flex items-center justify-between shadow-sm">
            <div>
              <span className="text-sm font-extrabold text-[#f97316]/90 uppercase tracking-wider block mb-1">Closed Tenders</span>
              <span className="text-4xl sm:text-5xl font-bold text-slate-900 leading-none">{closedCount}</span>
            </div>
            <div className="w-14 h-14 rounded-full bg-[#f97316] text-white flex items-center justify-center shadow-lg shadow-orange-500/20 shrink-0">
              <FileText className="w-6 h-6 stroke-[2.5]" />
            </div>
          </div>

        </div>

        {/* Search & Filter Dock with exact purple frame and border-l left bar */}
        <div className="bg-white p-5 rounded-xl border border-l-[6px] border-[#a855f7]/40 border-l-[#a855f7] shadow-sm mb-10 flex flex-col gap-4">
          
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-full bg-[#a855f7] text-white flex items-center justify-center shadow-sm shrink-0">
              <Search className="w-3.5 h-3.5 stroke-[2.5]" />
            </div>
            <h3 className="text-sm sm:text-base font-bold text-slate-900 font-sans tracking-tight">
              Search & Filter
            </h3>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            {/* Input Element */}
            <div className="relative flex-grow w-full">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search by tender number, title, or department..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all font-sans"
              />
            </div>

            {/* Combined Custom Select for All Tenders */}
            <div className="relative shrink-0 w-full sm:w-[220px]">
              <button
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="w-full flex items-center justify-between bg-white border border-slate-200 rounded-lg py-2.5 pl-4 pr-3.5 text-slate-700 text-sm font-medium hover:border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm cursor-pointer font-sans transition-all text-left"
              >
                <span className="font-sans font-semibold text-slate-700">
                  {selectedStatus === 'all' ? 'All Tenders' : selectedStatus === 'active' ? 'Active Tenders' : 'Closed Tenders'}
                </span>
                <ChevronDown className={`w-4 h-4 text-slate-400 font-sans transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {isDropdownOpen && (
                <>
                  {/* Dismiss Overlay */}
                  <div 
                    className="fixed inset-0 z-[120]" 
                    onClick={() => setIsDropdownOpen(false)}
                  />
                  
                  {/* Custom List dropdown */}
                  <div className="absolute right-0 mt-1.5 w-full bg-white border border-slate-200 rounded-lg shadow-lg py-1.5 z-[130] min-w-[200px]">
                    {[
                      { id: 'all', label: 'All Tenders' },
                      { id: 'active', label: 'Active Tenders' },
                      { id: 'closed', label: 'Closed Tenders' }
                    ].map(opt => (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => {
                          setSelectedStatus(opt.id as any);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm font-sans font-semibold transition-colors hover:bg-slate-50 flex items-center justify-between ${
                          selectedStatus === opt.id 
                            ? 'text-[#1140be] bg-blue-50/50' 
                            : 'text-slate-600 hover:text-[#1140be]'
                        }`}
                      >
                        <span className="font-sans">
                          {opt.label}
                        </span>
                        {selectedStatus === opt.id && (
                          <Check className="w-4 h-4 text-[#1140be] stroke-[2.5]" />
                        )}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

        </div>

        {/* Dynamic Tenders List with exact visual alignment matching screenshots */}
        {filteredTenders.length > 0 ? (
          <div className="space-y-6 pb-20">
            {filteredTenders.map((tender) => {
              return (
                <div
                  key={tender.id}
                  className="bg-[#f8fafc]/50 border border-l-4 border-[#3b82f6]/70 rounded-xl p-8 sm:p-10 hover:shadow-md transition-all duration-300 flex flex-col gap-6"
                >
                  {/* Top Block: Info on Left, Estimated Value on Right */}
                  <div className="flex flex-col md:flex-row gap-8 items-start justify-between w-full">
                    
                    {/* Left block: Title, ID, Description */}
                    <div className="flex-grow flex flex-col justify-between w-full">
                      <div>
                        {/* Active/Closed tag solid pattern exactly as screenshots */}
                        <div className="mb-4">
                          {tender.status === 'Active' ? (
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-extrabold uppercase bg-[#10b981] text-white tracking-widest shadow-sm">
                              Active
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-extrabold uppercase bg-slate-500 text-white tracking-widest shadow-sm">
                              Closed
                            </span>
                          )}
                        </div>

                        {/* Header Title with increased font size */}
                        <h3 className="text-2xl sm:text-3xl font-bold font-sans text-slate-900 leading-tight mb-3">
                          {tender.title}
                        </h3>

                        {/* Code / Reference Row with blue circle and index text */}
                        <div className="flex items-center gap-2.5 mb-5">
                          <div className="w-7 h-7 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-sm">
                            <FileText className="w-4 h-4 stroke-[2.5]" />
                          </div>
                          <span className="text-base font-bold text-[#1140be]">
                            {tender.refNo}
                          </span>
                        </div>

                        {/* Detailed Description with sleek font weight */}
                        <p className="text-slate-600 text-base font-medium leading-relaxed max-w-3xl">
                          {tender.description}
                        </p>
                      </div>
                    </div>

                    {/* Right block: Estimated Value Box with matching color layout borders */}
                    <div className="flex flex-col justify-start items-stretch md:items-end w-full md:w-[260px] shrink-0 gap-6">
                      
                      {/* Unique Estimated Value container - left bar and borderless of other sides and shadows */}
                      <div className="bg-[#f0fdf4] border-0 border-l-4 border-l-[#10b981] rounded-xl p-5 flex flex-col justify-center min-h-[110px] w-full">
                        <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest block mb-1.5 md:text-right">Estimated Value</span>
                        <span className="text-xl sm:text-2xl font-bold text-[#10b981] leading-none md:text-right">
                          {tender.estimatedValue}
                        </span>
                      </div>

                    </div>

                  </div>

                  {/* Bottom detail capsules styled as clean, beautiful white cards matching the screenshot precisely - Full Width */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-2 w-full">
                    
                    {/* Capsule 1: Department */}
                    <div className="bg-white border border-slate-100/80 rounded-xl p-5 flex items-center gap-4 shadow-[0_2px_8px_-1px_rgba(0,0,0,0.03)] w-full font-sans transition-all">
                      <div className="w-12 h-12 rounded-full bg-[#a855f7] text-white flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/15">
                        <Building2 className="w-5.5 h-5.5 stroke-[2]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-medium text-slate-500 block mb-0.5">Department</span>
                        <span className="text-sm sm:text-base font-bold text-slate-800 leading-tight md:whitespace-nowrap md:truncate block font-sans" title={tender.department}>
                          {tender.department}
                        </span>
                      </div>
                    </div>

                    {/* Capsule 2: Issue Date */}
                    <div className="bg-white border border-slate-100/80 rounded-xl p-5 flex items-center gap-4 shadow-[0_2px_8px_-1px_rgba(0,0,0,0.03)] w-full font-sans transition-all">
                      <div className="w-12 h-12 rounded-full bg-[#3b82f6] text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-500/15">
                        <Calendar className="w-5.5 h-5.5 stroke-[2]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-medium text-slate-500 block mb-0.5">Issue Date</span>
                        <span className="text-sm sm:text-base font-bold text-slate-800 leading-tight block font-sans">
                          {tender.datePublished}
                        </span>
                      </div>
                    </div>

                    {/* Capsule 3: Closing Date */}
                    <div className="bg-white border border-slate-100/80 rounded-xl p-5 flex items-center gap-4 shadow-[0_2px_8px_-1px_rgba(0,0,0,0.03)] w-full font-sans transition-all">
                      <div className="w-12 h-12 rounded-full bg-[#ef4444] text-white flex items-center justify-center shrink-0 shadow-lg shadow-red-500/15">
                        <Calendar className="w-5.5 h-5.5 stroke-[2]" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <span className="text-xs font-medium text-slate-500 block mb-0.5">Closing Date</span>
                        <span className="text-sm sm:text-base font-bold text-red-600 leading-tight block font-sans">
                          {tender.submissionDeadline}
                        </span>
                      </div>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-slate-200 rounded-2xl p-8 max-w-lg mx-auto shadow-sm">
            <h3 className="text-lg font-bold text-slate-900 uppercase tracking-tight mb-2">No Matching Tenders</h3>
            <p className="text-slate-500 text-sm font-semibold mb-6">
              We couldn&apos;t find any tenders matching your search terms under the selected layout filters.
            </p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedStatus('all'); }}
              className="bg-[#1140be] hover:bg-blue-800 text-white text-xs font-bold uppercase tracking-wider py-3 px-6 rounded-lg transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
