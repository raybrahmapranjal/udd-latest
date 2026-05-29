"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  Search, 
  Filter, 
  ArrowLeft,
  Calendar,
  DollarSign,
  Tag,
  Download,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Building2,
  HardHat,
  ChevronRight,
  Info,
  ShieldCheck,
  FileSpreadsheet
} from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface TenderDetail {
  id: string;
  refNo: string;
  title: string;
  category: string;
  tagline: string;
  authority: string;
  datePublished: string;
  submissionDeadline: string;
  estimatedValue: string;
  tenderFee: string;
  emd: string;
  docName: string;
  docSize: string;
  status: 'Active' | 'Under Evaluation' | 'Closed';
  description: string;
  contactEmail: string;
  gradient: string;
}

const ALL_TENDERS: TenderDetail[] = [
  {
    id: 'tend-001',
    refNo: 'BTC/UDD/KOK/2026/Civil-041',
    title: 'Construction of Cover Concrete Storm Drains (Ward No. 3 & 5)',
    category: 'Civil Works',
    tagline: 'Mitigating Monsoonal Waterlogging in Kokrajhar District Headquarter',
    authority: 'Kokrajhar Municipal Board',
    datePublished: '15 May 2026',
    submissionDeadline: '15 June 2026',
    estimatedValue: '₹4.82 Crores',
    tenderFee: '₹5,000',
    emd: '₹9.64 Lakhs (2%)',
    docName: 'Tender_Specs_Kok_StormDrainage_041.pdf',
    docSize: '2.4 MB',
    status: 'Active',
    description: 'Bids matching rigid state quality regulations are invited from Class-I construction agencies to lay cover concrete storm water drains, construct pedestrian walkways, and link water channels side-by-side in Ward No. 3 and 5, Kokrajhar.',
    contactEmail: 'tenders@uddbtc.org',
    gradient: 'from-blue-500 to-cyan-600 shadow-blue-500/10'
  },
  {
    id: 'tend-002',
    refNo: 'BTC/UDD/UDAL/2026/Elec-089',
    title: 'Solar High-Mast & Street Light Grid Installations',
    category: 'Electrical & Energy',
    tagline: 'Illuminating High-Density Commercial Hubs & Pedestrians Areas',
    authority: 'Udalguri Municipal Board',
    datePublished: '20 May 2026',
    submissionDeadline: '20 June 2026',
    estimatedValue: '₹1.18 Crores',
    tenderFee: '₹2,500',
    emd: '₹2.36 Lakhs (2%)',
    docName: 'Tender_Specs_Udal_SolarLights_089.pdf',
    docSize: '1.8 MB',
    status: 'Active',
    description: 'Procurement, structural deployment, and 5-year warranty upkeep of heavy solar high-mast lighting components, lithium ion energy battery bins, and street light poles in various public junctions across Udalguri municipal regions.',
    contactEmail: 'tenders@uddbtc.org',
    gradient: 'from-amber-500 to-orange-600 shadow-amber-500/10'
  },
  {
    id: 'tend-003',
    refNo: 'BTC/UDD/KAJ/25/San-304',
    title: 'Expansion of Solid Waste Processing & Bio-Composting Slabs',
    category: 'Sanitation',
    tagline: 'Enhancing Waste-to-Compost Processing Infrastructure',
    authority: 'Kajalgaon Town Committee',
    datePublished: '24 May 2026',
    submissionDeadline: '25 June 2026',
    estimatedValue: '₹2.50 Crores',
    tenderFee: '₹5,000',
    emd: '₹5.00 Lakhs (2%)',
    docName: 'Tender_Slabs_Kajalgaon_SWM_304.pdf',
    docSize: '3.1 MB',
    status: 'Active',
    description: 'Erection of concrete solid structural separation sheds, composting brick pits, mechanical shredding machines, and bio-aeration facilities at the central landfill yard of Kajalgaon Town committee to manage local wet organic garbage.',
    contactEmail: 'sbm-clean@uddbtc.org',
    gradient: 'from-emerald-500 to-teal-600 shadow-emerald-500/10'
  },
  {
    id: 'tend-004',
    refNo: 'BTC/UDD/BAS/25/Park-112',
    title: 'Development of Modern Children’s Park & Recreation Walk-Trail',
    category: 'Civil Works',
    tagline: 'Upgrading Urban Eco-Lifestyles through Beautiful Recreation Grounds',
    authority: 'Basugaon Municipal Board',
    datePublished: '10 April 2026',
    submissionDeadline: '12 May 2026',
    estimatedValue: '₹95.0 Lakhs',
    tenderFee: '₹1,500',
    emd: '₹1.90 Lakhs (2%)',
    docName: 'Tender_Layout_BasugaonPark_112.pdf',
    docSize: '4.5 MB',
    status: 'Closed',
    description: 'Comprehensive earthworks, lawn planting, pedestrian concrete walk tracts paving, playground swings, and solar water installations to build an integrated children eco-garden at Ward No. 2, Basugaon municipal lands.',
    contactEmail: 'tenders@uddbtc.org',
    gradient: 'from-rose-500 to-indigo-600 shadow-rose-500/10'
  },
  {
    id: 'tend-005',
    refNo: 'BTC/UDD/REG/2026/GIS-077',
    title: 'GIS Land-Use Mapping & Satellite Imaging Master Blueprints',
    category: 'Consultancies & IT',
    tagline: 'High-Precision Aerial Survey mapping for organized Town expansion',
    authority: 'Town & Country Planning Directorate, BTC',
    datePublished: '18 May 2026',
    submissionDeadline: '18 June 2026',
    estimatedValue: '₹75.0 Lakhs',
    tenderFee: '₹2,000',
    emd: '₹1.50 Lakhs (2%)',
    docName: 'Tender_GIS_Imaging_Masterb_077.pdf',
    docSize: '2.9 MB',
    status: 'Active',
    description: 'Technical bids are called from certified mapping agencies to execute high-resolution drone flights, extract physical elevations, compile 3D models, and provide layered GIS zoning maps for master plan formulations of four district HQs.',
    contactEmail: 'chd-urbandev@btc.gov.in',
    gradient: 'from-purple-500 to-violet-600 shadow-purple-500/10'
  },
  {
    id: 'tend-006',
    refNo: 'BTC/UDD/REG/2026/Tank-052',
    title: 'Procurement of Vacuum Suction Cesspool Tankers (4 Units)',
    category: 'Procurement',
    tagline: 'Procuring Modern Cesspool Tankers for decentralized Sanitation',
    authority: 'Directorate of Municipal Administration, BTC',
    datePublished: '22 May 2026',
    submissionDeadline: '22 June 2026',
    estimatedValue: '₹85.0 Lakhs',
    tenderFee: '₹2,000',
    emd: '₹1.70 Lakhs (2%)',
    docName: 'Tender_Specs_Procure_Cesspool_052.pdf',
    docSize: '1.2 MB',
    status: 'Active',
    description: 'Bids invited from authorized manufacturers, dealers, and vehicle layout firms to supply four heavy-duty municipal vacuum cesspool tankers (capacity: 4,000 liters) with integrated pressure drainage pumps for sanitary clearing services.',
    contactEmail: 'em-urbandev@btc.gov.in',
    gradient: 'from-sky-500 to-indigo-600 shadow-sky-500/10'
  },
  {
    id: 'tend-007',
    refNo: 'BTC/UDD/GOS/25/Eq-912',
    title: 'Supply of Colored Community Bins & Auto Tipper Vehicles',
    category: 'Procurement',
    tagline: 'Boosting Decentralized Garbage Pick-up Across Ward Sectors',
    authority: 'Gossaigaon Municipal Board',
    datePublished: '12 March 2026',
    submissionDeadline: '11 April 2026',
    estimatedValue: '₹62.0 Lakhs',
    tenderFee: '₹1,000',
    emd: '₹1.24 Lakhs (2%)',
    docName: 'Tender_Specs_BinProcurement_912.pdf',
    docSize: '1.5 MB',
    status: 'Closed',
    description: 'Bulk delivery of 500 units of leak-proof colored dustbins (240L capacity for dry and wet sorting) and 5 diesel auto-tipper motorized collection wagons to expand municipal coverage in Gossaigaon town sectors.',
    contactEmail: 'sbm-clean@uddbtc.org',
    gradient: 'from-blue-500 to-teal-500 shadow-blue-500/10'
  }
];

const CATEGORIES = ['All', 'Civil Works', 'Electrical & Energy', 'Sanitation', 'Consultancies & IT', 'Procurement'];

export default function TendersPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeTab, setActiveTab] = useState<'all' | 'active' | 'closed'>('all');

  const filteredTenders = ALL_TENDERS.filter(tender => {
    const matchesSearch = 
      tender.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.refNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.authority.toLowerCase().includes(searchTerm.toLowerCase()) ||
      tender.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || tender.category === selectedCategory;

    let matchesTab = true;
    if (activeTab === 'active') {
      matchesTab = tender.status === 'Active';
    } else if (activeTab === 'closed') {
      matchesTab = tender.status === 'Closed' || tender.status === 'Under Evaluation';
    }

    return matchesSearch && matchesCategory && matchesTab;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <div className="sticky top-0 z-[110]">
        <UtilityBar />
        <Header />
      </div>

      {/* Main Page Layout Header Banner with traditional Bodo Aronai horizontal pattern */}
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

        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-20">
          <a 
            href="/" 
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-sky-200 hover:text-white mb-6 transition-all font-semibold text-xs border border-white/5 backdrop-blur-sm shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Portal Home
          </a>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 text-[10px] uppercase tracking-widest font-bold text-amber-200 mb-3 backdrop-blur-sm shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.35)]" /> Public Tendering Portal
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-3 uppercase leading-none font-sans text-white drop-shadow-sm">
                UDD BTC Portal <span className="text-amber-300">Tenders</span>
              </h1>
              <p className="text-sky-100/90 max-w-2xl text-xs sm:text-base font-medium leading-relaxed">
                Procurement board and open bidding notice system. Access, evaluate, and download technical specifications or submit commercial tenders securely managed by BTC municipal committees.
              </p>
            </div>

            {/* Quick Stat boxes inside header */}
            <div className="grid grid-cols-2 gap-3 shrink-0">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl backdrop-blur-md shadow-sm">
                <span className="text-[9px] uppercase font-bold text-slate-300 block tracking-widest leading-none mb-1">CUMULATIVE BID VALUE</span>
                <span className="text-lg sm:text-2xl font-black text-amber-300">₹11.7 Cr</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl backdrop-blur-md shadow-sm">
                <span className="text-[9px] uppercase font-bold text-slate-300 block tracking-widest leading-none mb-1">OPEN TENDERS</span>
                <span className="text-lg sm:text-2xl font-black text-emerald-400">5 Active</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Dashboard Tenders Context */}
      <main className="flex-grow max-w-6xl w-full mx-auto p-4 sm:p-6 md:p-8">
        
        {/* Tab Selection Filter for Tender Activity */}
        <div className="flex justify-center mb-8 border-b border-slate-300 max-w-md mx-auto">
          {[
            { id: 'all', label: 'All Bids' },
            { id: 'active', label: 'Active Notices' },
            { id: 'closed', label: 'Historic / Closed' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`flex-1 py-3 text-xs sm:text-sm font-black uppercase tracking-wider text-center transition-all cursor-pointer border-b-2 -mb-[2px] ${
                activeTab === tab.id
                  ? 'border-[#003366] text-[#003366]'
                  : 'border-transparent text-slate-500 hover:text-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Search & Filter Dock */}
        <div className="bg-white p-4 rounded-2xl border border-slate-400 shadow-md mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          <div className="relative flex-grow">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
            <input 
              type="text" 
              placeholder="Search tender titles, reference numbers, ULB names..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-400 rounded-xl text-slate-700 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#003366]/40 focus:bg-white transition-all"
            />
          </div>

          {/* Clean Category Filters */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none scroll-smooth">
            <Filter className="text-slate-400 w-4 h-4 shrink-0 hidden sm:block mr-1" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-4 py-2.5 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat 
                    ? 'bg-[#003366] text-white shadow-md' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Dynamic Tender Listings Grid */}
        {filteredTenders.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
            {filteredTenders.map((tender) => {
              const isClosed = tender.status === 'Closed';
              const isEvaluation = tender.status === 'Under Evaluation';

              return (
                <motion.div
                  layout
                  key={tender.id}
                  className="bg-white border-2 border-slate-400 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-350 flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Card Header */}
                    <div className="flex justify-between items-start mb-5">
                      <span className="text-[10px] font-mono font-black text-[#003366] bg-slate-100 border border-slate-300 rounded px-2.5 py-1 select-none">
                        Ref: {tender.refNo}
                      </span>
                      
                      <div className="flex items-center">
                        {tender.status === 'Active' && (
                          <span className="bg-emerald-500/10 text-emerald-600 font-extrabold uppercase text-[10px] tracking-widest py-1 px-2.5 rounded border border-emerald-500/20 flex items-center gap-1.5 animate-pulse">
                            <CheckCircle2 className="w-3.5 h-3.5" /> OPEN
                          </span>
                        )}
                        {tender.status === 'Closed' && (
                          <span className="bg-red-500/10 text-red-600 font-extrabold uppercase text-[10px] tracking-widest py-1 px-2.5 rounded border border-red-500/20 flex items-center gap-1.5">
                            <Clock className="w-3.5 h-3.5" /> CLOSED
                          </span>
                        )}
                      </div>
                    </div>

                    <span className="text-[10px] text-saffron uppercase font-extrabold tracking-widest block mb-1">
                      {tender.category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black font-sans text-navy mb-2 leading-tight">
                      {tender.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-bold leading-normal mb-3 italic">
                      &quot;{tender.tagline}&quot;
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {tender.description}
                    </p>

                    {/* Detailed Bidding Parameters Panel */}
                    <div className="bg-slate-50/70 p-4 sm:p-5 rounded-2xl border border-slate-400 mb-6 space-y-3">
                      <div className="flex justify-between items-center text-xs border-b border-slate-200 pb-2">
                        <span className="text-[10px] uppercase font-black text-slate-400 tracking-wider">Authority Agency</span>
                        <span className="font-extrabold text-[#003366] flex items-center gap-1">
                          <Building2 className="w-3.5 h-3.5 text-orange-500" />
                          {tender.authority}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-xs">
                        <div>
                          <span className="text-[9px] uppercase font-black text-slate-400 block leading-none mb-1">Estimated Budget</span>
                          <span className="font-extrabold text-slate-800">{tender.estimatedValue}</span>
                        </div>
                        <div>
                          <span className="text-[9px] uppercase font-black text-slate-400 block leading-none mb-1">Tender Fee</span>
                          <span className="font-extrabold text-slate-800">{tender.tenderFee}</span>
                        </div>
                        <div>
                          <span className="text-[9px] uppercase font-black text-slate-400 block leading-none mb-1">Earnest Money (EMD)</span>
                          <span className="font-extrabold text-slate-800">{tender.emd}</span>
                        </div>
                        <div>
                          <span className="text-[9px] uppercase font-black text-slate-400 block leading-none mb-1">Deadline Date</span>
                          <span className="font-extrabold text-red-500 flex items-center gap-1">
                            <Calendar className="w-3.5 h-3.5" />
                            {tender.submissionDeadline}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Attachment Box and contact details */}
                  <div className="border-t border-slate-400 pt-5 space-y-4">
                    
                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-300">
                      <div className="flex items-center gap-2.5 min-w-0">
                        <FileText className="w-7 h-7 text-red-500 shrink-0" />
                        <div className="min-w-0">
                          <p className="text-xs font-bold text-slate-800 truncate leading-none">{tender.docName}</p>
                          <p className="text-[10px] text-slate-400 font-bold mt-1">Size: {tender.docSize} | PDF Format</p>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => alert(`Downloading specification documents for tender ${tender.refNo}...`)}
                        className="p-2 bg-white hover:bg-[#003366] text-slate-600 hover:text-white rounded-lg border border-slate-300 shadow-sm transition-all shrink-0"
                        title="Download Tender doc"
                      >
                        <Download className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between gap-4 text-[11px] text-slate-500 font-bold pt-1">
                      <span className="flex items-center gap-1.5 truncate">
                        <span>Queries: </span>
                        <strong className="text-slate-700 truncate block">{tender.contactEmail}</strong>
                      </span>
                      <span className="text-slate-400 font-bold text-[10px] shrink-0">
                        Published: {tender.datePublished}
                      </span>
                    </div>

                  </div>

                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-slate-200/80 rounded-2xl p-8 max-w-lg mx-auto shadow-sm">
            <FileSpreadsheet className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-black text-navy uppercase tracking-tight mb-2">No Matching Tenders</h3>
            <p className="text-slate-500 text-xs sm:text-sm font-semibold mb-6">
              We couldn&apos;t find any procurement postings matching your query &quot;{searchTerm}&quot; under filter categories. Please adjust your keywords.
            </p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="bg-[#003366] hover:bg-navy text-white text-xs font-black uppercase tracking-wider py-3 px-6 rounded-xl transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Informative block on bottom of page */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 border-l-4 border-orange-500 p-6 md:p-8 rounded-r-2xl shadow-sm mb-16">
          <h3 className="text-xs font-black text-orange-950 uppercase tracking-widest flex items-center gap-2 mb-3">
            <ShieldCheck className="w-4 h-4 text-orange-600 shrink-0" /> Official E-Bidding Terms & Compliance
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            All prospective bidders are mandated to submit complete commercial layouts, certified GST logs, and treasury EMD deposits inside strict schedules via registered post or digital tenders channels. Enquiries regarding physical bidding formats or layouts under statutory municipal limits may be routed to division technical desks.
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
