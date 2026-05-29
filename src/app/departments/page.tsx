"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Building2, 
  Map, 
  Users, 
  Trash2, 
  Cpu, 
  FileText, 
  ArrowLeft,
  Search,
  Filter,
  Phone,
  Mail,
  User,
  MapPin,
  Sparkles,
  Layers,
  ChevronRight,
  ShieldAlert,
  ArrowRight
} from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface DepartmentWing {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  responsibilities: string[];
  headName: string;
  headDesignation: string;
  officeLocation: string;
  email: string;
  phone: string;
  icon: any;
  color: string;
  badge: string;
  gradient: string;
}

const ALL_DEPARTMENTS: DepartmentWing[] = [
  {
    id: 'tcp',
    title: 'Town & Country Planning Directorate',
    category: 'Town Planning',
    tagline: 'GIS Spatial Mapping & Orderly Urban Blueprinting',
    description: 'Enforces long-term spatial and architectural development plans across Bodoland municipal zones. Directs satellite-based GIS mapping, master planning, zoning controls, and manages the automated Online Building Permission System (OBPS).',
    responsibilities: [
      'Drafting and statutory enforcement of spatial master plans for all district HQs and town groups.',
      'Providing technical clearances and structural appraisals under unified BTC building bylaws.',
      'Managing and scaling the GIS-based regional geographic index for systematic spatial plotting.',
      'Administering the digital Online Building Permission portal for swift layout approvals.'
    ],
    headName: 'Shri Lankeshwar Owarie',
    headDesignation: 'Council Head of Department (CHD), BTC',
    officeLocation: 'Department of Urban Development, CHD Campus, Kokrajhar',
    email: 'chd-urbandev@btc.gov.in',
    phone: '+91-3661-295055',
    icon: Map,
    color: 'purple',
    badge: 'Spatial Head',
    gradient: 'from-purple-500 to-indigo-600 shadow-purple-500/10'
  },
  {
    id: 'dma',
    title: 'Directorate of Municipal Administration',
    category: 'Administration',
    tagline: 'Empowering & Auditing BTC’s 10 Urban Local Bodies',
    description: 'The administrative and fiscal backbone of the department. Governs the fiscal allocation of state grants (including 15th Finance Commission and disaster relief), audits urban local bodies (ULBs), and coordinates central schemes such as PMAY-U housing installations.',
    responsibilities: [
      'Statutory supervision, policy coaching, and administrative audits of 10 BTC Municipal Boards.',
      'Direct disbursement and regulatory compliance tracking of Central and State finance grants.',
      'Supervising PMAY-Urban (Pradhan Mantri Awas Yojana) for affordable social housing.',
      'Calculating municipal trade licenses, property taxes, and regional garbage collection tariffs.'
    ],
    headName: 'Smt. Moon Moon Brahma',
    headDesignation: 'Executive Member (EM) for Urban Development',
    officeLocation: 'Urban Development Secretariat Office, Kokrajhar',
    email: 'em-urbandev@btc.gov.in',
    phone: '+91-3661-270114',
    icon: Building2,
    color: 'blue',
    badge: 'Administrative Lead',
    gradient: 'from-blue-500 to-indigo-600 shadow-blue-500/10'
  },
  {
    id: 'infra',
    title: 'Urban Infrastructure & Engineering Division',
    category: 'Infrastructure',
    tagline: 'Building High-Grade Roads, Drain Networks & Utilities',
    description: 'Coordinates physical development projects across BTAD municipal limits. Managed by superintending civil engineers and junior officers to execute modern road-paving setups, concrete pedestrian lanes, robust storm water drains, and street lighting grids.',
    responsibilities: [
      'Planning and laying climate-resilient concrete roads and high-density paver networks.',
      'Erecting wide storm water storm conduit systems to prevent monsoonal town waterlogging.',
      'Sourcing, evaluating, and installing solar streetlight fixtures across high-density markets.',
      'Engineering city parks, municipal reading halls, and community multi-purpose buildings.'
    ],
    headName: 'Shri A. K. Boro',
    headDesignation: 'Superintending Engineer (Urban Projects)',
    officeLocation: 'Engineering Cell, CHD Campus, Kokrajhar',
    email: 'engg-urbandev@uddbtc.org',
    phone: '+91-3661-295056',
    icon: Layers,
    color: 'amber',
    badge: 'Physical Works',
    gradient: 'from-orange-500 to-amber-600 shadow-orange-500/10'
  },
  {
    id: 'sbm',
    title: 'Clean BTC Cell (Swachh Bharat Mission)',
    category: 'Sanitation',
    tagline: 'Pioneering Garbage-Free Municipalities',
    description: 'Spearheads solid and liquid waste management initiatives under the Swachh Bharat Mission (Urban). Organizes residential waste segregation loops, material recovery facilities (MRF), decentralized compost yards, and regional sanitation awareness drives.',
    responsibilities: [
      'Managing color-coded garbage container trucks and modern vacuum suction tankers bookings.',
      'Establishing modern separation hubs to sort plastics, bio-waste, and composting slurry.',
      'Directing regional "Clean BTC" civic awareness programs for citizens and business houses.',
      'Administering the compost protocol to scientifically manage and sell bio-fertilizers.'
    ],
    headName: 'Dr. J. Basumatary',
    headDesignation: 'Chief Sanitation Coordinator',
    officeLocation: 'SBM-U Division, Secretariat Campus, Kokrajhar',
    email: 'sbm-clean@uddbtc.org',
    phone: '+91-3661-295511',
    icon: Trash2,
    color: 'emerald',
    badge: 'Green Mission',
    gradient: 'from-emerald-500 to-teal-600 shadow-emerald-500/10'
  },
  {
    id: 'sulm',
    title: 'State Urban Livelihoods Wing (SULM)',
    category: 'Social Welfare',
    tagline: 'Poverty Alleviation, Capital Grants & Youth Skills',
    description: 'Implements poverty alleviation mandates under the DAY-NULM central program. Boosts local trade livelihood security by helping Self-Help Groups (SHGs) secure bank loans, distributing trade micro-grants, and holding vocational skill certifications.',
    responsibilities: [
      'Aiding women Self-Help Groups (SHGs) through joint development micro-capital allowances.',
      'Formulating digital registry systems and trade identification cards for local street vendors.',
      'Providing certified vocational placement training courses for municipal unemployed youth.',
      'Building and maintaining night shelter homes for disadvantaged urban populations.'
    ],
    headName: 'Smt. R. Narzary',
    headDesignation: 'Nodal Officer & State Program Manager',
    officeLocation: 'SULM Operations Wing, CHD Campus, Kokrajhar',
    email: 'sulm-livelihood@uddbtc.org',
    phone: '+91-3661-295484',
    icon: Users,
    color: 'rose',
    badge: 'Livelihood Focus',
    gradient: 'from-rose-500 to-red-600 shadow-rose-500/10'
  },
  {
    id: 'egov',
    title: 'e-Governance & Digital Services Cell',
    category: 'Digital Services',
    tagline: 'Unified Citizens Portals & Swift Online Assistance',
    description: 'Drives digital transformation across BTC Municipal Administration, managing this unified portal. Integrates online citizens utilities like Trade License renewals, property tax assessment tools, cesspool tankers booking services, and the Grievance Redressal system.',
    responsibilities: [
      'Integrating advanced software layers to process online citizen utility and service requests.',
      'Running secure databases for dynamic online payment verifications and tax calculations.',
      'Engineering the end-to-end Grievance Redressal status system with automated tracking tokens.',
      'Structuring regional database safety to secure personal citizen records off-site.'
    ],
    headName: 'Shri D. Brahma',
    headDesignation: 'Joint Director & IT Head',
    officeLocation: 'IT Operations Lab, Secretariat, Kokrajhar',
    email: 'itcell@uddbtc.org',
    phone: '+91-3661-295057',
    icon: Cpu,
    color: 'sky',
    badge: 'Smart Gov Cell',
    gradient: 'from-sky-500 to-blue-600 shadow-sky-500/10'
  }
];

const CATEGORIES = ['All', 'Town Planning', 'Administration', 'Infrastructure', 'Sanitation', 'Social Welfare', 'Digital Services'];

export default function DepartmentsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredDepartments = ALL_DEPARTMENTS.filter(dept => {
    const matchesSearch = 
      dept.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dept.headName.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || dept.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <div className="sticky top-0 z-[110]">
        <UtilityBar />
        <Header />
      </div>

      {/* Hero Banner Section with traditional Bodo Aronai horizontal pattern */}
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
                <Sparkles className="w-3.5 h-3.5 text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.35)]" /> Department Architecture
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-3 uppercase leading-none font-sans text-white drop-shadow-sm">
                UDD BTC <span className="text-amber-300">Departments</span>
              </h1>
              <p className="text-sky-100/90 max-w-2xl text-xs sm:text-base font-medium leading-relaxed">
                Explore the foundational wings, specialized directorates, and engineering cells that power the administration, physical growth, and e-governance solutions across Bodoland.
              </p>
            </div>

            {/* Quick Stat boxes inside header */}
            <div className="grid grid-cols-2 gap-3 shrink-0">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl backdrop-blur-md shadow-sm">
                <span className="text-[9px] uppercase font-bold text-slate-300 block tracking-widest leading-none mb-1">CORE DIVISIONS</span>
                <span className="text-lg sm:text-2xl font-black text-amber-300">6 Specialized</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl backdrop-blur-md shadow-sm">
                <span className="text-[9px] uppercase font-bold text-slate-300 block tracking-widest leading-none mb-1">ACTIVE ULBS</span>
                <span className="text-lg sm:text-2xl font-black text-emerald-400">10 Boards</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Interactive Workspace */}
      <main className="flex-grow max-w-6xl w-full mx-auto p-4 sm:p-6 md:p-8">
        
        {/* Search & Filter Dock */}
        <div className="bg-white p-4 rounded-2xl border border-slate-400 shadow-md mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          <div className="relative flex-grow">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
            <input 
              type="text" 
              placeholder="Search department, wing name, division heads..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-400 rounded-xl text-slate-700 placeholder-slate-400 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-[#003366]/40 focus:bg-white transition-all"
            />
          </div>

          {/* Category Filters */}
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

        {/* Departments Grid */}
        {filteredDepartments.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
            {filteredDepartments.map((dept) => {
              const IconComp = dept.icon;

              return (
                <motion.div
                  layout
                  key={dept.id}
                  className="bg-white border-2 border-slate-400 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-350 flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Card Header */}
                    <div className="flex justify-between items-start mb-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${dept.gradient} flex items-center justify-center text-white shadow-md`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                          {dept.category}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] text-saffron uppercase font-extrabold tracking-widest block mb-1">
                      {dept.badge}
                    </span>
                    <h3 className="text-xl font-black font-sans text-navy mb-2 leading-tight">
                      {dept.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-bold leading-normal mb-3 italic">
                      &quot;{dept.tagline}&quot;
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {dept.description}
                    </p>

                    {/* Responsibilities list box */}
                    <div className="bg-slate-50/70 p-4 sm:p-5 rounded-2xl border border-slate-400 mb-6">
                      <h4 className="text-[10px] uppercase font-black tracking-wide text-slate-400 mb-3 flex items-center justify-between">
                        <span>Key Responsibilities</span>
                        <span className="text-emerald-500 font-extrabold">Mandates ({dept.responsibilities.length})</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {dept.responsibilities.map((pt, i) => (
                          <li key={i} className="flex gap-2 items-start text-slate-600 text-xs font-semibold leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-2 shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Leadership Section & Contact details */}
                  <div className="border-t border-slate-400 pt-5 space-y-4">
                    <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
                      <div className="flex items-center gap-2 mb-2">
                        <User className="w-4 h-4 text-orange-500" />
                        <span className="text-xs uppercase font-black text-[#003366] tracking-wider">Division Leadership</span>
                      </div>
                      <div className="text-xs">
                        <p className="font-extrabold text-slate-800 text-sm">{dept.headName}</p>
                        <p className="text-slate-500 font-bold text-[11px] mt-0.5">{dept.headDesignation}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-600 font-semibold">
                      <span className="flex items-center gap-1.5">
                        <Mail className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                        <span className="truncate">{dept.email}</span>
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Phone className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span>{dept.phone}</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-1 text-[11px] text-slate-500 font-bold border-t border-slate-100 pt-3">
                      <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                      <span className="truncate">{dept.officeLocation}</span>
                    </div>
                  </div>

                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-slate-200/80 rounded-2xl p-8 max-w-lg mx-auto shadow-sm">
            <Layers className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-black text-navy uppercase tracking-tight mb-2">No Matching Wings</h3>
            <p className="text-slate-500 text-xs sm:text-sm font-semibold mb-6">
              We couldn&apos;t find any divisions matching &quot;{searchTerm}&quot; under filter category &quot;{selectedCategory}&quot;. Please adjust your keywords.
            </p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="bg-[#003366] hover:bg-navy text-white text-xs font-black uppercase tracking-wider py-3 px-6 rounded-xl transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Guidelines / Info Section */}
        <div className="bg-gradient-to-r from-violet-50 to-indigo-50 border-l-4 border-violet-500 p-6 md:p-8 rounded-r-2xl shadow-sm mb-16">
          <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest flex items-center gap-2 mb-3">
            <ShieldAlert className="w-4 h-4 text-violet-600 shrink-0" /> Administrative Transparency Accord
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            All departments of the Urban Development Department, BTC coordinate closely on multi-disciplinary town councils. Budget transparency, structural checklists, site audits, and administrative regulations are made accessible to local residents under e-governance guidelines to empower inclusive community and spatial growth.
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
