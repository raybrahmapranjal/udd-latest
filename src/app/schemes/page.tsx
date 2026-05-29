"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Building2, 
  Home, 
  Heart, 
  Map, 
  Activity, 
  Droplet, 
  Leaf, 
  TrendingUp, 
  ArrowLeft,
  Search,
  Filter,
  DollarSign,
  Target,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  Award,
  BookOpen
} from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface FullScheme {
  id: string;
  title: string;
  category: string;
  tagline: string;
  description: string;
  scope: string[];
  budget: string;
  impactRate: string;
  outcomeTarget: string;
  districtFocus: string;
  fy: string;
  icon: any;
  color: string;
  badge: string;
  gradient: string;
}

const ALL_SCHEMES: FullScheme[] = [
  {
    id: 'infra',
    title: 'Urban Infrastructure Development',
    category: 'Infrastructure',
    tagline: 'Comprehensive Development of Roads & Amenities',
    description: 'Transforming connectivity inside key municipal zones of Bodoland by laying permanent climate-resilient roads, integrated sewer networks, and essential public utilities.',
    scope: [
      'Laying high-grade, durable concrete roads and paver-block pedestrian loops.',
      'Integrating smart drainage conduits side-by-side with new road structures.',
      'Upgrading safety through solar street light grids at high-density commercial spots.',
      'Creating clean street furniture and public resting areas across central hubs.'
    ],
    budget: '₹42.5 Crores',
    impactRate: '92% Connectivity Improvement',
    outcomeTarget: '350 km High-Grade Roads',
    districtFocus: 'All 12 ULBs in BTC',
    fy: 'FY 2025-26',
    icon: Building2,
    color: 'blue',
    badge: 'Primary Flagship',
    gradient: 'from-blue-500 to-indigo-600 shadow-blue-500/10'
  },
  {
    id: 'slum',
    title: 'Slum Improvement Program',
    category: 'Welfare',
    tagline: 'Upgrading Habitats with Dignified Standards',
    description: 'Targeted elevation of notified slam wards and neighborhood pockets through structural upgrades under decentralized hygienic standards.',
    scope: [
      'Constructing dry/wet color-coded solid waste collection docks adjacent to slums.',
      'Erecting high-standard masonry community bathrooms and clean toilet cabins.',
      'Ensuring continuous drinking water connection lines through joint AMRUT setups.',
      'Paving narrow internal pathways with concrete blocks for safe all-weather mobility.'
    ],
    budget: '₹14.8 Crores',
    impactRate: '8,500+ Slum Dwellers uplifted',
    outcomeTarget: '52 Wards Fully Sanitized',
    districtFocus: 'Kokrajhar, Udalguri, Basugaon',
    fy: 'FY 2025-26',
    icon: Home,
    color: 'emerald',
    badge: 'Habitat Elevation',
    gradient: 'from-emerald-500 to-teal-600 shadow-emerald-500/10'
  },
  {
    id: 'poverty',
    title: 'Urban Poverty Alleviation',
    category: 'Welfare',
    tagline: 'Livelihood Capital & Vocational Training',
    description: 'Deploying direct capital grants, collateral-free credit connections, and technical vocational courses to empower urban low-income households.',
    scope: [
      'Establishing specialized high-income skill centers for local municipal youth.',
      'Distributing micro-grants to Self-Help Groups (SHGs) to trigger small businesses.',
      'Setting up vending carts and authorized trade zones for pavement hawkers.',
      'Providing soft-loans and low-interest capital via centralized banks.'
    ],
    budget: '₹9.2 Crores',
    impactRate: '15,000+ Livelihoods Secured',
    outcomeTarget: '80% Employment Placement',
    districtFocus: 'Chirang, Baksa, Udalguri',
    fy: 'FY 2025-26',
    icon: Heart,
    color: 'orange',
    badge: 'Social Security',
    gradient: 'from-orange-500 to-amber-600 shadow-orange-500/10'
  },
  {
    id: 'masterplan',
    title: 'Master Plan Implementation',
    category: 'Planning',
    tagline: 'GIS Spatial Mapping & Orderly Expansion',
    description: 'Enforcing long-term spatial and architectural blueprints to steer towns, industrial zones, and green fields towards organized, sustainable expansion.',
    scope: [
      'Using satellite imaging and drone flights to construct dynamic geographic indexes.',
      'Drafting specific zoning grids for commerce, residences, and green eco-belts.',
      'Streamlining online portal processing for layout approvals and building licenses.',
      'Setting strict buffer rules near clean local rivers and wetland resources.'
    ],
    budget: '₹6.5 Crores',
    impactRate: '100% GIS Zonal Accuracy',
    outcomeTarget: '4 Dist. Headquarter Maps Complete',
    districtFocus: 'All District HQs',
    fy: 'FY 2024-26',
    icon: Map,
    color: 'purple',
    badge: 'Smart Growth Reform',
    gradient: 'from-purple-500 to-indigo-600 shadow-purple-500/10'
  },
  {
    id: 'health',
    title: 'Public Health & Sanitation',
    category: 'Health',
    tagline: 'Disease Prevention & Modern waste Processing',
    description: 'Upholding safe municipal health records, decentralized material separation, bio-processing, and regular disease immunization sweeps.',
    scope: [
      'Forming high-efficiency mobile sanitation crews to clean commercial markets daily.',
      'Providing safe pathogen treatment sprays in monsoonal waterlogging hotspots.',
      'Interlinking veterinary clinics with disease surveillance indicators.',
      'Constructing highly sanitated compost yards and recovery zones.'
    ],
    budget: '₹18.4 Crores',
    impactRate: '98% Disease Free Rate',
    outcomeTarget: 'Zero Waste Landfills in Towns',
    districtFocus: 'All 12 Municipalities',
    fy: 'FY 2025-26',
    icon: Activity,
    color: 'rose',
    badge: 'Public Hygiene',
    gradient: 'from-rose-500 to-red-600 shadow-rose-500/10'
  },
  {
    id: 'water',
    title: 'Water Supply Enhancement',
    category: 'Infrastructure',
    tagline: 'AMRUT Integrated Pure Tap Water',
    description: 'Overhauling public municipal water mains, building major concrete filtration reservoirs, and guaranteeing direct drinking water inside every house.',
    scope: [
      'Laying leak-proof high-density pipe runs directly down residential avenues.',
      'Converting public water points into heavy solar-powered filtering centers.',
      'Enforcing strict real-time laboratory quality checks on storage reservoirs.',
      'Deploying automated metering to prevent over-use of natural aquifers.'
    ],
    budget: '₹28.4 Crores',
    impactRate: '100% Purity Compliance',
    outcomeTarget: '48,000 Tap Connections',
    districtFocus: 'Basugaon, Gossaigaon, Kokrajhar',
    fy: 'FY 2025-26',
    icon: Droplet,
    color: 'sky',
    badge: 'Utility Mission',
    gradient: 'from-sky-500 to-blue-600 shadow-sky-500/10'
  },
  {
    id: 'forestry',
    title: 'Urban Forestry & Environment',
    category: 'Environment',
    tagline: 'Sustaining Green Belts & Micro-Ecology',
    description: 'Enforcing robust local tree grids, scenic public eco-parks, urban flora barriers, and continuous sapling distribution drives to protect Bodoland biodiversity.',
    scope: [
      'Planting 25,000+ native plants along dividers and primary avenues.',
      'Reviving community wetlands and building wooden walkway public parks.',
      'Distributing fruit and shade saplings to local primary schools for planting.',
      'Integrating vertical wall gardens along public office concrete complexes.'
    ],
    budget: '₹8.0 Crores',
    impactRate: '32% Urban Carbon Sink Increase',
    outcomeTarget: '35% Green Cover Ratio',
    districtFocus: 'Udalguri, Bijni, Kajalgaon',
    fy: 'FY 2024-25',
    icon: Leaf,
    color: 'emerald',
    badge: 'Green Bodoland',
    gradient: 'from-emerald-400 to-green-600 shadow-emerald-500/10'
  },
  {
    id: 'economic',
    title: 'Economic & Social Development',
    category: 'Planning',
    tagline: 'Vibrant Public Arenas & Cultural Havens',
    description: 'Expanding public spaces, community assembly halls, physical active zones, and cultural preservation libraries across BTC municipalities.',
    scope: [
      'Architecting modern multi-purpose community assembly halls for civic operations.',
      'Laying out children gardens, open exercise zones, and walking circuits.',
      'Restoring rich cultural archives, legacy buildings, and library reading rooms.',
      'Funding creative art panels and local sculpture pieces near key city portals.'
    ],
    budget: '₹15.2 Crores',
    impactRate: 'Loved by 1.2 Lakh residents yearly',
    outcomeTarget: '14 Multipurpose Parks & Halls',
    districtFocus: 'Kokrajhar, Tangla, Goreswar',
    fy: 'FY 2025-26',
    icon: TrendingUp,
    color: 'orange',
    badge: 'Socio-Cultural',
    gradient: 'from-orange-500 to-red-500 shadow-orange-500/10'
  }
];

const CATEGORIES = ['All', 'Infrastructure', 'Welfare', 'Planning', 'Health', 'Environment'];

export default function SchemesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [expandedScheme, setExpandedScheme] = useState<string | null>(null);

  // Filter schemes based on search input and category selection
  const filteredSchemes = ALL_SCHEMES.filter(scheme => {
    const matchesSearch = 
      scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.tagline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || scheme.category === selectedCategory;

    return matchesSearch && matchesCategory;
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
                <Sparkles className="w-3.5 h-3.5 text-amber-300 drop-shadow-[0_0_8px_rgba(251,191,36,0.35)]" /> Department Actions
              </div>
              <h1 className="text-3xl sm:text-5xl font-black tracking-tight mb-3 uppercase leading-none font-sans text-white drop-shadow-sm">
                UDD BTC Portal <span className="text-amber-300">Schemes</span>
              </h1>
              <p className="text-sky-100/90 max-w-2xl text-xs sm:text-base font-medium leading-relaxed">
                A transparent, digital directory detailing all ongoing developmental schemes, physical allocation budgets, and structural community impacts tracked under the Urban Development Department, BTC.
              </p>
            </div>

            {/* Quick Stat boxes inside header */}
            <div className="grid grid-cols-2 gap-3 shrink-0">
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl backdrop-blur-md shadow-sm">
                <span className="text-[9px] uppercase font-bold text-slate-300 block tracking-widest leading-none mb-1">CUMULATIVE POOL</span>
                <span className="text-lg sm:text-2xl font-black text-amber-300">₹142.5 Cr</span>
              </div>
              <div className="bg-white/5 border border-white/10 p-3.5 rounded-xl backdrop-blur-md shadow-sm">
                <span className="text-[9px] uppercase font-bold text-slate-300 block tracking-widest leading-none mb-1">TOTAL SCHEMES</span>
                <span className="text-lg sm:text-2xl font-black text-emerald-400">8 Flagship</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schemes Interactive Dashboard Context */}
      <main className="flex-grow max-w-6xl w-full mx-auto p-4 sm:p-6 md:p-8">
        
        {/* Search & Filter Dock */}
        <div className="bg-white p-4 rounded-2xl border border-slate-400 shadow-md mb-8 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Dynamic Search Input */}
          <div className="relative flex-grow">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4.5 h-4.5" />
            <input 
              type="text" 
              placeholder="Search scheme name, keywords, outcomes..." 
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

        {/* Dynamic Schemes Results Grid */}
        {filteredSchemes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
            {filteredSchemes.map((scheme) => {
              const IconComp = scheme.icon;
              const isExpanded = expandedScheme === scheme.id;

              return (
                <motion.div
                  layout
                  key={scheme.id}
                  className="bg-white border-2 border-slate-400 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-350 flex flex-col justify-between"
                >
                  <div>
                    {/* Visual Card Header */}
                    <div className="flex justify-between items-start mb-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${scheme.gradient} flex items-center justify-center text-white shadow-md`}>
                        <IconComp className="w-6 h-6" />
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] uppercase font-bold tracking-widest px-2.5 py-1 rounded bg-slate-100 text-slate-700 border border-slate-200">
                          {scheme.category}
                        </span>
                        <span className="text-[9px] uppercase font-black tracking-widest px-2.5 py-1 rounded bg-[#003366]/5 text-[#003366] border border-[#003366]/10">
                          {scheme.fy}
                        </span>
                      </div>
                    </div>

                    <span className="text-[10px] text-saffron uppercase font-extrabold tracking-widest block mb-1">
                      {scheme.badge}
                    </span>
                    <h3 className="text-xl font-black font-sans text-navy mb-2 leading-tight">
                      {scheme.title}
                    </h3>
                    <p className="text-slate-400 text-xs font-bold leading-normal mb-3 italic">
                      &quot;{scheme.tagline}&quot;
                    </p>
                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                      {scheme.description}
                    </p>

                    {/* Detailed scope sub-points */}
                    <div className="bg-slate-50/70 p-4 sm:p-5 rounded-2xl border border-slate-400 mb-6">
                      <h4 className="text-[10px] uppercase font-black tracking-wide text-slate-400 mb-3 flex items-center justify-between">
                        <span>Key Action Scope</span>
                        <span className="text-emerald-600 font-bold">Scope Points ({scheme.scope.length})</span>
                      </h4>
                      <ul className="space-y-2.5">
                        {scheme.scope.map((pt, i) => (
                          <li key={i} className="flex gap-2 items-start text-slate-600 text-xs font-semibold leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-saffron mt-2 shrink-0" />
                            <span>{pt}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Metadata statistics footer */}
                  <div className="border-t border-slate-400 pt-5 space-y-4">
                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="bg-blue-50/50 p-2.5 rounded-xl border border-blue-100/50">
                        <span className="text-[9px] uppercase font-black text-blue-500 block leading-none mb-1">Budget</span>
                        <span className="font-extrabold text-[#003366] flex items-center gap-0.5">
                          <DollarSign className="w-3.5 h-3.5" />
                          {scheme.budget}
                        </span>
                      </div>

                      <div className="bg-emerald-50/50 p-2.5 rounded-xl border border-emerald-100/50">
                        <span className="text-[9px] uppercase font-black text-emerald-600 block leading-none mb-1">Target Outcome</span>
                        <span className="font-extrabold text-slate-700 flex items-center gap-1">
                          <Target className="w-3.5 h-3.5 text-emerald-500" />
                          {scheme.outcomeTarget}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between gap-2.5 text-[11px] text-slate-500 font-bold pt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-orange-500" />
                        Focus: <strong className="text-slate-700">{scheme.districtFocus}</strong>
                      </span>
                      <span className="text-emerald-600 font-extrabold bg-emerald-50 px-2 py-0.5 rounded-md">
                        {scheme.impactRate}
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
            <h3 className="text-lg font-black text-navy uppercase tracking-tight mb-2">No Matching Schemes</h3>
            <p className="text-slate-500 text-xs sm:text-sm font-semibold mb-6">
              We couldn&apos;t find any schemes matching &quot;{searchTerm}&quot; under direct filter category &quot;{selectedCategory}&quot;. Please adjust your search input.
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
            <Layers className="w-4 h-4 text-orange-600" /> Guidelines for Scheme Approvals & Funds
          </h3>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            All schemes listed above are processed, managed, and authorized under direct state guidelines of Bodoland Territorial Council and Centrally Sponsored Schemes (CSS). Citizen bodies are invited to access budget allocation indexes or log grievances regarding public infrastructure projects via our integrated **Citizen Grievance Redressal** section.
          </p>
        </div>

      </main>

      <Footer />
    </div>
  );
}
