"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Building, 
  Leaf, 
  Droplet, 
  Trash2, 
  Lightbulb, 
  Map, 
  Activity, 
  ArrowLeft,
  Search,
  Filter,
  DollarSign,
  Target,
  MapPin,
  Sparkles,
  Layers,
  ArrowRight,
  ShieldCheck,
  Building2,
  FileSpreadsheet,
  FileCheck,
  CreditCard,
  MessageSquare,
  Scale,
  X,
  TrendingUp,
  Award
} from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface FullService {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  longDescription: string;
  scope: string[];
  budget: string;
  impactRate: string;
  outcomeTarget: string;
  officerInCharge: string;
  timeline: string;
  icon: any;
  color: string;
  badge: string;
  gradient: string;
  actions: { label: string; href: string }[];
}

const ALL_SERVICES: FullService[] = [
  {
    id: 'green',
    title: 'Bodoland Green Mission',
    category: 'Civic Programs',
    tagline: 'Eco-Restoration & Urban Greening',
    description: 'A stellar flagship initiative dedicated to transforming public urban zones with massive plantation drives, scenic public parks, and eco-friendly recreational spaces.',
    longDescription: 'Under the Bodoland Green Mission, the Urban Development Department aims to mitigate micro-urban heat effects, enrich city aesthetics, and improve health indexes. High-density block forestation, botanical recreation centers, and active tree guards around newly paved avenues form the bedrock of this eco-recovery system.',
    scope: [
      'Planting 10,000+ indigenous trees to maximize local biodiversity density.',
      'Establishing eco-conscious urban gardens, children parks, and walking tracks across BTC towns.',
      'Integrating vertical landscaping along prime town dividers and institutional boundary walls.',
      'Conducting regular municipal workshops and sapling donation camps to involve student bodies.'
    ],
    budget: '₹8.5 Crores',
    impactRate: '35% Carbon Sink Increase',
    outcomeTarget: '33% Urban Canopy Cover',
    officerInCharge: 'Nodal Director (Eco), BTC',
    timeline: 'Ongoing (Phase III Active)',
    icon: Leaf,
    color: 'emerald',
    badge: 'Green Initiative',
    gradient: 'from-emerald-400 to-emerald-600 shadow-emerald-500/10',
    actions: [
      { label: 'Register as Green Volunteer', href: '/grievance' }
    ]
  },
  {
    id: 'water',
    title: 'AMRUT Water Supply Mission',
    category: 'Public Utilities',
    tagline: 'Guaranteed Piped Water for All Wards',
    description: 'Accelerating pure, treated water connections to every municipal home with centralized storage projects and IoT monitoring.',
    longDescription: 'This utility overhauls outdated shallow wells with heavy steel transmission pipelines, clean water filter stations, and storage reservoirs. Fully monitored with online pressure logs and computerized chemical analyzers to ensure excellent hygienic delivery standards.',
    scope: [
      'Laying leak-proof high-grade pipe grids directly to and inside residential wards.',
      'Constructing modern water filtering plants and high-capacity storage reservoirs.',
      'Implementing automated digital water meters for sustainable usage diagnostics.',
      'Expanding safe drinking water kiosks at central market hubs and public transit points.'
    ],
    budget: '₹24.5 Crores',
    impactRate: '100% Payer Supply Security',
    outcomeTarget: '42,000+ Connected Households',
    officerInCharge: 'Executive Engineer (PHE), Kokrajhar',
    timeline: 'Target Completion: Dec 2026',
    icon: Droplet,
    color: 'sky',
    badge: 'Central Scheme',
    gradient: 'from-sky-400 to-sky-600 shadow-sky-500/10',
    actions: [
      { label: 'Apply for Water Connection', href: '/grievance' }
    ]
  },
  {
    id: 'sbm',
    title: 'Integrated Solid Waste Management',
    category: 'Public Utilities',
    tagline: 'Waste-to-Wealth Zero Landfill Goals',
    description: 'Deploying source segregation standards, decentralized composting, and modern processing yards to secure 100% garbage cleanups.',
    longDescription: 'Driven by "Swachh Bodoland", we deploy modernized secondary waste transport vehicles, sorting plants, and organic fertilizer converters, removing unmonitored garbage heaps from open public areas.',
    scope: [
      'Comprehensive door-to-door waste collection services across all 12 ULBs in BTC.',
      'Providing color-segregated bins (dry/wet/hazardous) to families.',
      'Establishing high-capacity bio-methanation and composting stations.',
      'Mechanized road swept fleet operations for high-density commercial centers.'
    ],
    budget: '₹12.0 Crores',
    impactRate: '98% Daily Collection coverage',
    outcomeTarget: 'Zero Open Refuse Dumps',
    officerInCharge: 'Chief Project Manager, Swachh Bodoland',
    timeline: 'Active / Scaling',
    icon: Trash2,
    color: 'indigo',
    badge: 'High Impact',
    gradient: 'from-indigo-400 to-indigo-600 shadow-indigo-500/10',
    actions: [
      { label: 'Report Local Litter Hotspot', href: '/grievance' }
    ]
  },
  {
    id: 'obps',
    title: 'Online Building Permission System (OBPS)',
    category: 'Digital Governance',
    tagline: 'Instant Automated Structural Clearance',
    description: 'Submit designs, process application files, and download authorized certificates in a fast, transparent digital portal.',
    longDescription: 'OBPS removes unnecessary administrative loops from commercial and housing layouts. Integrates geo-coordinate matching to ensure structural compliance, setbacks, and seismic guidelines are automatically processed.',
    scope: [
      'Eliminating manual, slow file routing with structured CAD drawing upload.',
      'Unified processing of fire safety, aviation, and environment clearances.',
      'Transparent tracking of application processing phases at any hour.',
      'Automated payments via multiple secured UPI and banking gateways.'
    ],
    budget: '₹3.2 Crores',
    impactRate: 'Under 14 Days Approval Cycle',
    outcomeTarget: '100% Paperless Clearance',
    officerInCharge: 'Zonal Urban Planner, BTC Office',
    timeline: 'Fully Operational',
    icon: FileCheck,
    color: 'amber',
    badge: 'E-Gov Reform',
    gradient: 'from-amber-500 to-orange-600 shadow-amber-500/10',
    actions: [
      { label: 'Enter OBPS Portal', href: 'https://udd.bodoland.gov.in/' }
    ]
  },
  {
    id: 'tax',
    title: 'e-Property Tax & Assessment',
    category: 'Digital Governance',
    tagline: 'Swift Online Tax Calculations & Receipts',
    description: 'Assess property assets systematically, clear outstanding municipal dues, and manage receipt records in our unified billing dashboard.',
    longDescription: 'Bringing all standard spatial layouts under a unified computerized system allows people to view records, calculate dynamic taxes based on built zone categories, and file returns efficiently.',
    scope: [
      'Interactive online self-assessment calculators matching actual property categories.',
      'Instant verification via mapped GIS Unique Property Identification Numbers.',
      'Saves historical clearance certificates in secure profile digital wallets.',
      'Immediate alert notification on pending annual dues via mobile SMS.'
    ],
    budget: '₹2.5 Crores',
    impactRate: '99% Error-Free billing',
    outcomeTarget: '90,000+ Property Accounts',
    officerInCharge: 'Revenue & Valuation Officer, BTC',
    timeline: 'Fully Operational',
    icon: CreditCard,
    color: 'purple',
    badge: 'Online Services',
    gradient: 'from-purple-500 to-indigo-600 shadow-purple-500/10',
    actions: [
      { label: 'Pay Property Tax Online', href: 'https://udd.bodoland.gov.in/' }
    ]
  },
  {
    id: 'lights',
    title: 'Smart LED Street Lighting',
    category: 'Civic Programs',
    tagline: 'High-Efficiency Grid for Commuter Safety',
    description: 'Replacing legacy mercury bulbs with power-saving LEDs and installing tall structural high-masts at main intersections.',
    longDescription: 'This mission eliminates dark-spot vulnerability zones across all our 12 major towns. Installing dust-proof fixtures connected into astronomical tracking schedules helps lower energy waste while keeping high street light counts active.',
    scope: [
      'Replacing old lighting assets with power-saving smart LED fixtures.',
      'Erecting multi-directional decorative high-mast lights over major community nodes.',
      'Deploying automatic dusk-to-dawn astronomical timer sensors to save electricity.',
      'Setting up continuous centralized control system networks for reporting faults.'
    ],
    budget: '₹6.2 Crores',
    impactRate: '55% Power Bill Savings',
    outcomeTarget: '100% Covered Major Roads',
    officerInCharge: 'Project Engineer, Municipal Electricals',
    timeline: 'Ongoing Implementation',
    icon: Lightbulb,
    color: 'rose',
    badge: 'Safety First',
    gradient: 'from-rose-400 to-rose-600 shadow-rose-500/10',
    actions: [
      { label: 'Request Lighting or Fixes', href: '/grievance' }
    ]
  },
  {
    id: 'gis',
    title: 'GIS-Based Spatial Mapping',
    category: 'Planning & Zoning',
    tagline: 'Digitized Records & Structural Planning',
    description: 'Formulating satellite property mappings and digitized master records to streamline municipal building clearances and zoning.',
    longDescription: 'Using drone aerial photographic surveys and geo-indices, we create reliable records for master-planning, developmental buffer margins, and layout validations.',
    scope: [
      'Utilizing high-precision geospatial surveys to map residential layouts.',
      'Upgrading municipal building layout approval cycles with precise reference maps.',
      'Interlinking property identifiers for swift online digital tax processing.',
      'Designing smart spatial growth frameworks to assist strategic town councils.'
    ],
    budget: '₹4.8 Crores',
    impactRate: '100% Digital GIS Trace',
    outcomeTarget: 'All 12 ULBs Digitized',
    officerInCharge: 'Chief GIS Advisor, Town & Country Planning',
    timeline: 'Active Progress: 80% Complete',
    icon: Map,
    color: 'orange',
    badge: 'Infrastructure',
    gradient: 'from-orange-400 to-orange-600 shadow-orange-500/10',
    actions: [
      { label: 'View Spatial Master Plan', href: 'https://udd.bodoland.gov.in/' }
    ]
  },
  {
    id: 'drainage',
    title: 'Stormwater Drainage Schemes',
    category: 'Public Utilities',
    tagline: 'Climate-Resilient Monsoonal Security',
    description: 'Constructing robust masonry drains and strategic outfall channels to prevent monsoonal waterlogging in municipal marketplaces.',
    longDescription: 'Enabling planned runoff routes protects structural properties, controls public sanitation degradation risks, and secures daily commutes through storm waves.',
    scope: [
      'Drafting deep-masonry water drainage conduits to evacuate stormwater highflows.',
      'Conducting routine pre-monsoon mechanical desiltation on primary feeder trunks.',
      'Deploying secure retaining walls alongside urban riverfronts and major water outfalls.',
      'Creating flood-vulnerable spot lists paired with mobile pump-out crews.'
    ],
    budget: '₹15.5 Crores',
    impactRate: 'Zero Waterlog Transit Incidents',
    outcomeTarget: '120 km Retaining Conduits',
    officerInCharge: 'Asst. General Director, Urban Drainage Civil',
    timeline: 'Pre-Monsoon Upgrades Active',
    icon: Activity,
    color: 'blue',
    badge: 'Disaster Prevention',
    gradient: 'from-blue-400 to-cyan-600 shadow-blue-500/10',
    actions: [
      { label: 'Register Waterlogging Complaint', href: '/grievance' }
    ]
  }
];

const CATEGORIES = ['All', 'Public Utilities', 'Digital Governance', 'Civic Programs', 'Planning & Zoning'];

export default function ServicesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedService, setSelectedService] = useState<FullService | null>(null);

  const filteredServices = ALL_SERVICES.filter(service => {
    const matchesSearch = 
      service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || service.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <div className="sticky top-0 z-[110]">
        <UtilityBar />
        <Header />
      </div>

      {/* Main Banner Header */}
      <div className="relative py-16 bg-gradient-to-br from-[#0c1a30] via-[#041a2f] to-[#010915] overflow-hidden text-white shadow-md">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(16,185,129,0.12),rgba(255,255,255,0))]" />
        
        {/* Accent graphics */}
        <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <a href="/" className="inline-flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 font-extrabold text-xs uppercase tracking-wider mb-6 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Portal Home
          </a>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full border border-white/15 text-[10px] uppercase tracking-widest font-bold text-emerald-300 mb-3 animate-pulse">
                <Sparkles className="w-3.5 h-3.5" /> Department Services
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-3 uppercase leading-none font-sans">
                UDD BTC <span className="text-saffron">Services</span>
              </h1>
              <p className="text-slate-300 max-w-2xl text-xs sm:text-base font-medium leading-relaxed">
                Explore, track, and apply for digital and physical municipal utilities, planning reforms, and public ecosystem programs initiated by the Urban Development Department, BTC.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 shrink-0">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl backdrop-blur-md">
                <span className="text-[9px] uppercase font-black text-slate-300 block tracking-widest leading-none mb-1">E-TRANSFORMATION</span>
                <span className="text-lg sm:text-2xl font-black text-saffron">100% Online</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl backdrop-blur-md">
                <span className="text-[9px] uppercase font-black text-slate-300 block tracking-widest leading-none mb-1">MUNICIPALITIES</span>
                <span className="text-lg sm:text-2xl font-black text-emerald-400">12 Towns</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Areas */}
      <main className="flex-grow max-w-6xl w-full mx-auto p-4 sm:p-6 md:p-8">
        
        {/* Search & Filter Component Dock */}
        <div className="bg-white p-4 rounded-2xl border border-slate-400 shadow-md mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          <div className="relative flex-grow">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
            <input 
              type="text" 
              placeholder="Search active utilities, planning approvals, taxes..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-400 rounded-xl text-slate-700 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500/40 focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none scroll-smooth">
            <Filter className="text-slate-400 w-4 h-4 shrink-0 hidden sm:block mr-1" />
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-4 py-2.5 rounded-xl font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat 
                    ? 'bg-emerald-600 text-white shadow-md' 
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-600'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Grid and listings */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
            {filteredServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.05 }}
                  whileHover={{ y: -5 }}
                  className="bg-white border-2 border-slate-400 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between cursor-pointer"
                  onClick={() => setSelectedService(service)}
                >
                  <div>
                    <div className="flex justify-between items-start mb-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center text-white shadow-md`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                          {service.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] text-saffron uppercase font-extrabold tracking-widest block mb-1">
                      {service.badge}
                    </span>
                    <h3 className="text-xl font-black font-sans text-navy mb-2 leading-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-bold leading-normal mb-3 italic">
                      &quot;{service.tagline}&quot;
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-1.5 text-xs text-[#003366] font-black uppercase tracking-wider">
                      <span>Explore Service Details & Apply</span>
                      <ArrowRight className="w-4 h-4 text-saffron transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>

                  {/* Metadata and statistics footer */}
                  <div className="border-t border-slate-400 pt-5 mt-6 grid grid-cols-2 gap-3 text-xs">
                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-400">
                      <span className="text-[9px] uppercase font-black text-slate-400 block leading-none mb-1">Target Metric</span>
                      <span className="font-extrabold text-slate-700 flex items-center gap-1">
                        <Target className="w-3.5 h-3.5 text-emerald-500" />
                        {service.outcomeTarget}
                      </span>
                    </div>

                    <div className="bg-slate-50 p-2.5 rounded-xl border border-slate-400">
                      <span className="text-[9px] uppercase font-black text-slate-400 block leading-none mb-1">Impact Goal</span>
                      <span className="font-extrabold text-navy flex items-center gap-1">
                        <TrendingUp className="w-3.5 h-3.5 text-orange-500" />
                        {service.impactRate}
                      </span>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-slate-200/80 rounded-2xl p-8 max-w-lg mx-auto shadow-sm">
            <Layers className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-black text-navy uppercase tracking-tight mb-2">No Matching Services</h3>
            <p className="text-slate-500 text-xs sm:text-sm font-semibold mb-6">
              We couldn&apos;t find any services matching &quot;{searchTerm}&quot; under direct filter category &quot;{selectedCategory}&quot;. Please adjust your search input.
            </p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider py-3 px-6 rounded-xl transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Detailed Modal view */}
        <AnimatePresence>
          {selectedService && (
            <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 30 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.35)] border border-slate-100 relative z-10 flex flex-col max-h-[90vh]"
              >
                <div className={`h-3 bg-gradient-to-r ${selectedService.gradient}`} />

                <div className="p-6 md:p-8 flex items-start justify-between border-b border-slate-100 shrink-0 bg-slate-50/50">
                  <div className="flex gap-4 items-center">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${selectedService.gradient} flex items-center justify-center text-white shrink-0 shadow-md`}>
                      {React.createElement(selectedService.icon, { className: "w-6 h-6" })}
                    </div>
                    <div>
                      <span className="text-[9px] font-black uppercase text-emerald-600 tracking-widest block mb-0.5">
                        {selectedService.category} Service Code
                      </span>
                      <h3 className="text-xl md:text-2xl font-black text-navy leading-tight uppercase">
                        {selectedService.title}
                      </h3>
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedService(null)}
                    className="p-1.5 rounded-full hover:bg-slate-200 text-slate-400 hover:text-slate-700 transition-colors"
                    aria-label="Close modal"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1 text-slate-700 scrollbar-thin">
                  <div>
                    <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-1">Tagline Purpose</h4>
                    <p className="text-sm md:text-base font-bold text-navy italic leading-snug">
                      &quot;{selectedService.tagline}&quot;
                    </p>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-2">Detailed Scope</h4>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {selectedService.longDescription}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-100 flex flex-col justify-between">
                      <span className="text-[9px] font-extrabold uppercase text-emerald-600 tracking-wider flex items-center gap-1 mb-1">
                        <DollarSign className="w-3.5 h-3.5" /> Allocated Funds
                      </span>
                      <span className="text-base font-extrabold text-navy">{selectedService.budget}</span>
                    </div>

                    <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100 flex flex-col justify-between">
                      <span className="text-[9px] font-extrabold uppercase text-blue-600 tracking-wider flex items-center gap-1 mb-1">
                        <Award className="w-3.5 h-3.5" /> Scope Target
                      </span>
                      <span className="text-xs font-extrabold text-[#003366] leading-snug">{selectedService.outcomeTarget}</span>
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50 border border-slate-100 rounded-2xl space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-bold uppercase tracking-wide">Officer-in-Charge:</span>
                      <strong className="text-slate-800">{selectedService.officerInCharge}</strong>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400 font-bold uppercase tracking-wide">Timeline Frame:</span>
                      <strong className="text-slate-800">{selectedService.timeline}</strong>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-wider mb-3">Project Action Pillars</h4>
                    <ul className="space-y-3 font-semibold text-xs sm:text-sm text-slate-600">
                      {selectedService.scope.map((point, idx) => (
                        <li key={idx} className="flex gap-2.5 items-start">
                          <ShieldCheck className="w-[18px] h-[18px] text-emerald-500 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-slate-50 border-t border-slate-400 flex flex-col sm:flex-row gap-2 justify-end shrink-0">
                  {selectedService.actions.map((act, i) => (
                    <a
                      key={i}
                      href={act.href}
                      onClick={() => setSelectedService(null)}
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all text-center"
                    >
                      {act.label}
                    </a>
                  ))}
                  <button
                    onClick={() => setSelectedService(null)}
                    className="border border-slate-400 bg-white hover:bg-slate-100 font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all"
                  >
                    Close Window
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </main>

      <Footer />
    </div>
  );
}
