"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Leaf, 
  Droplet, 
  Trash2, 
  Lightbulb, 
  Map, 
  Activity, 
  ArrowRight, 
  X, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  Sparkles,
  Building,
  DollarSign
} from 'lucide-react';

// Data structure for the flagship BTR Urban Development Department key initiatives
interface Initiative {
  id: string;
  title: string;
  tagline: string;
  description: string;
  detailedScope: string[];
  icon: string;
  color: string;
  badge: string;
  budget: string;
  impact: string;
  activeProject: string;
  focusGoal: string;
}

const keyInitiatives: Initiative[] = [
  {
    id: 'green',
    title: 'Bodoland Green Mission',
    tagline: 'Eco-Restoration & Urban Greening',
    description: 'A stellar flagship initiative dedicated to transforming public urban zones with massive plantation drives, scenic public parks, and eco-friendly recreational spaces.',
    detailedScope: [
      'Planting 10,000+ indigenous trees to maximize local biodiversity.',
      'Establishing eco-conscious urban gardens, children parks, and walking tracks across BTC towns.',
      'Integrating vertical landscaping along prime town dividers and institutional boundary walls.',
      'Conducting regular workshops and sapling donation camps to involve student bodies.'
    ],
    icon: 'leaf',
    color: 'emerald',
    badge: 'Flagship Program',
    budget: '₹8.5 Crores',
    impact: '35% reduction in micro-urban heat island effects',
    activeProject: 'Kokrajhar Green Corridor & Udalguri Eco-Park',
    focusGoal: '33% Urban Green Canopy Cover'
  },
  {
    id: 'water',
    title: 'AMRUT Water Supply Mission',
    tagline: 'Guaranteed Piped Water for All',
    description: 'Accelerating pure, treated water connections to every municipal home with centralized storage projects and IoT monitoring.',
    detailedScope: [
      'Laying leak-proof high-grade pipe grids directly to and inside residential wards.',
      'Constructing modern water filtering plants and high-capacity storage reservoirs.',
      'Implementing automated digital water meters for sustainable usage diagnostics.',
      'Expanding safe drinking water kiosks at central market hubs and public transit points.'
    ],
    icon: 'droplet',
    color: 'sky',
    badge: 'Central Scheme',
    budget: '₹24.5 Crores',
    impact: '42,000+ urban households provided instant potable water',
    activeProject: 'Kajalgaon Phase II Treatment Plant & Basugaon Pipeline',
    focusGoal: '100% Ward Water Coverage'
  },
  {
    id: 'sbm',
    title: 'Integrated SWM (Swachh Bodoland)',
    tagline: 'Waste-to-Wealth Zero Landfill Goals',
    description: 'Deploying source segregation standards, decentralized composting, and modern processing yards to secure 100% garbage cleanups.',
    detailedScope: [
      'Comprehensive door-to-door waste collection services across all 12 ULBs in BTC.',
      'Providing color-segregated bins (dry/wet/hazardous) to families.',
      'Establishing high-capacity bio-methanation and composting stations.',
      'Mechanized road swept fleet operations for high-density commercial centers.'
    ],
    icon: 'trash',
    color: 'indigo',
    badge: 'High Impact',
    budget: '₹12.0 Crores',
    impact: '98% daily household garbage collection coverage',
    activeProject: 'Kajalgaon Material Recovery Facility & Tangla Solid Waste Unit',
    focusGoal: '100% Zero-Landfill Cities'
  },
  {
    id: 'lights',
    title: 'Smart LED Street Lighting',
    tagline: 'High-Efficiency Grid for Safety',
    description: 'Replacing legacy mercury bulbs with power-saving LEDs and installing tall structural high-masts at junctions to ensure total commuter safety.',
    detailedScope: [
      'Replacing old lighting assets with power-saving smart LED fixtures.',
      'Erecting multi-directional decorative high-mast lights over major community nodes.',
      'Deploying automatic dusk-to-dawn astronomical timer sensors to save electricity consumption.',
      'Setting up continuous centralized control system networks for reporting faults.'
    ],
    icon: 'lightbulb',
    color: 'amber',
    badge: 'Active Grid',
    budget: '₹6.2 Crores',
    impact: '55% reduction in municipal electrical bills',
    activeProject: 'Kokrajhar High-Mast Initiative & Gossaigaon Street Grid',
    focusGoal: '100% Smart Grid Safety'
  },
  {
    id: 'gis',
    title: 'GIS-Based Spatial Mapping',
    tagline: 'Digitized Records & Smart Planning',
    description: 'Formulating satellite property mappings and digitized master records to streamline municipal building clearances and tax networks.',
    detailedScope: [
      'Utilizing high-precision geospatial survey planes to map residential layouts.',
      'Upgrading municipal building layout approval cycles into simple digital web files.',
      'Interlinking property identifiers for swift online digital tax processing.',
      'Designing smart spatial growth frameworks to assist strategic town councils.'
    ],
    icon: 'map',
    color: 'purple',
    badge: 'E-Gov Reform',
    budget: '₹4.8 Crores',
    impact: '100% digital trace for building clearance and records',
    activeProject: 'Zonal Urban Spatial Mapping of All 12 ULBs',
    focusGoal: 'Fully Automated Web Governance'
  },
  {
    id: 'drain',
    title: 'Stormwater Drainage Schemes',
    tagline: 'Climate-Resilient Monsoonal Security',
    description: 'Constructing robust masonry drains and strategic outfall channels to prevent monsoonal waterlogging in municipal marketplaces.',
    detailedScope: [
      'Drafting deep-masonry water drainage conduits to evacuate stormwater high-flows.',
      'Conducting routine pre-monsoon mechanical desiltation on primary feeder trunks.',
      'Deploying secure retaining walls alongside urban riverfronts and major water outfalls.',
      'Creating flood-vulnerable spot lists paired with mobile pump-out crews.'
    ],
    icon: 'activity',
    color: 'rose',
    badge: 'Critical Works',
    budget: '₹15.5 Crores',
    impact: 'Zero waterlogging reports at core town transit zones',
    activeProject: 'Gossaigaon Urban Drainage Re-engineering & Basugaon Conduits',
    focusGoal: 'Flood & Waterlogging Free Towns'
  }
];

const iconMap: { [key: string]: any } = {
  leaf: Leaf,
  droplet: Droplet,
  trash: Trash2,
  lightbulb: Lightbulb,
  map: Map,
  activity: Activity,
};

const gradientMap: { [key: string]: string } = {
  emerald: 'from-emerald-400 to-emerald-600 shadow-emerald-500/20',
  sky: 'from-sky-400 to-sky-600 shadow-sky-500/20',
  indigo: 'from-indigo-400 to-indigo-600 shadow-indigo-500/20',
  amber: 'from-amber-400 to-amber-600 shadow-amber-500/20',
  purple: 'from-purple-400 to-purple-600 shadow-purple-500/20',
  rose: 'from-rose-400 to-rose-600 shadow-rose-500/20',
};

const borderMap: { [key: string]: string } = {
  emerald: 'hover:border-emerald-400 border-slate-100',
  sky: 'hover:border-sky-400 border-slate-100',
  indigo: 'hover:border-indigo-400 border-slate-100',
  amber: 'hover:border-amber-400 border-slate-100',
  purple: 'hover:border-purple-400 border-slate-100',
  rose: 'hover:border-rose-400 border-slate-100',
};

const textGroupMap: { [key: string]: string } = {
  emerald: 'text-emerald-700 bg-emerald-50 border-emerald-100',
  sky: 'text-sky-700 bg-sky-50 border-sky-100',
  indigo: 'text-indigo-700 bg-indigo-50 border-indigo-100',
  amber: 'text-amber-700 bg-amber-50 border-amber-100',
  purple: 'text-purple-700 bg-purple-50 border-purple-100',
  rose: 'text-rose-700 bg-rose-50 border-rose-100',
};

export default function Services() {
  const [selectedInitiative, setSelectedInitiative] = useState<Initiative | null>(null);

  return (
    <section id="services" className="py-16 md:py-24 px-4 sm:px-6 md:px-16 lg:px-32 bg-slate-50/50 relative overflow-hidden">
      {/* Light styling decorative accents */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-100/35 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Flagship Header */}
      <div className="flex flex-col items-center mb-12 md:mb-18 text-center relative z-10">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center relative mb-5 group">
          <div className="absolute inset-0 bg-saffron/40 blur-3xl rounded-full opacity-60 group-hover:opacity-85 transition-opacity"></div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-saffron to-[#f26522] rounded-full flex items-center justify-center border border-white/30 shadow-xl relative z-10 transition-transform group-hover:scale-105 shadow-[0_0_40px_rgba(242,101,34,0.45)]">
            <Sparkles className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
        </div>
        
        <div className="inline-block border-b-4 border-saffron pb-2 mb-4">
          <h2 className="text-3xl md:text-[44px] font-black text-navy uppercase tracking-tight font-sans">
            E-Governance Services of UDD BTC
          </h2>
        </div>
        <p className="text-slate-500 max-w-2xl mx-auto font-medium text-xs sm:text-base leading-relaxed px-4">
          Enhancing ease of living through unified electronic service delivery systems and digital smart city frameworks across Bodoland.
        </p>
      </div>

      {/* Initiatives Responsive Bento Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {keyInitiatives.map((initiative, idx) => {
          const Icon = iconMap[initiative.icon] || Leaf;
          const bgGrad = gradientMap[initiative.color];
          const bStyle = borderMap[initiative.color];
          const textGroup = textGroupMap[initiative.color];

          return (
            <motion.div
              key={initiative.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedInitiative(initiative)}
              className={`bg-white border rounded-2xl p-6 md:p-8 cursor-pointer transition-all duration-300 hover:shadow-2xl hover:-translate-y-1.5 flex flex-col justify-between group ${bStyle}`}
            >
              <div>
                {/* Visual Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br ${bgGrad} flex items-center justify-center text-white shadow-lg`}>
                    <Icon className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
                  </div>
                  <span className={`text-[10px] uppercase font-black tracking-widest px-3 py-1 rounded-full border ${textGroup}`}>
                    {initiative.badge}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg md:text-xl font-bold font-sans text-navy mb-2 group-hover:text-saffron transition-colors">
                  {initiative.title}
                </h3>
                <p className="text-slate-400 text-xs font-semibold mb-3">
                  {initiative.tagline}
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                  {initiative.description}
                </p>
              </div>

              {/* Card Footer details */}
              <div className="border-t border-slate-100 pt-4 mt-auto">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-3.5">
                  <span className="flex items-center gap-1.5 font-bold">
                    <Target className="w-3.5 h-3.5 text-orange-500" />
                    Goal: {initiative.focusGoal}
                  </span>
                </div>
                <div className="flex items-center gap-1 text-[#003366] text-xs font-black uppercase tracking-wider group-hover:gap-2 transition-all">
                  <span>Explore Initiative Details</span>
                  <ArrowRight size={14} className="text-saffron transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Secondary Bottom Citizen Action Link */}
      <div className="mt-14 text-center">
         <a 
           href="#quick-services" 
           className="inline-block bg-gradient-to-r from-navy via-slate-800 to-navy text-white px-8 py-4 rounded-xl font-extrabold text-xs tracking-widest uppercase hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
         >
           Access Digital Civic Services
         </a>
      </div>

      {/* Interactive Detail Modal Backdrop & Content */}
      <AnimatePresence>
        {selectedInitiative && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
            {/* Dark glass backdrop with blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedInitiative(null)}
              className="absolute inset-0 bg-slate-900/60 backdrop-blur-md"
            />

            {/* Modal Body Container with slide-up zoom */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="bg-white rounded-3xl w-full max-w-2xl overflow-hidden shadow-[0_30px_70px_rgba(0,0,0,0.35)] border border-slate-100 relative z-10 flex flex-col max-h-[90vh]"
            >
              {/* Colored Ribbon matching the active initiative theme */}
              <div className={`h-3 bg-gradient-to-r ${gradientMap[selectedInitiative.color]}`} />

              {/* Header Container / Scrollable inner space */}
              <div className="p-6 md:p-8 flex items-start justify-between border-b border-slate-100">
                <div className="flex gap-4 items-center">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradientMap[selectedInitiative.color]} flex items-center justify-center text-white min-w-[48px]`}>
                    {React.createElement(iconMap[selectedInitiative.icon] || Leaf, { className: "w-6 h-6" })}
                  </div>
                  <div>
                    <span className="text-[10px] font-black uppercase text-saffron tracking-widest block mb-0.5">
                      Flagship Initiative Detail
                    </span>
                    <h3 className="text-xl md:text-2xl font-black text-navy leading-tight">
                      {selectedInitiative.title}
                    </h3>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedInitiative(null)}
                  className="p-1.5 rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-700 transition-colors"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Scrollable details contents */}
              <div className="p-6 md:p-8 overflow-y-auto space-y-6 flex-1 text-slate-700 scrollbar-thin">
                {/* Tagline / Core Scope */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-1">Scope Tagline</h4>
                  <p className="text-sm md:text-base font-bold text-slate-800 italic">
                    &quot;{selectedInitiative.tagline}&quot;
                  </p>
                </div>

                {/* Key statistics row */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-orange-50/50 p-4 rounded-xl border border-orange-100/60 flex flex-col justify-between">
                    <span className="text-[10px] font-extrabold uppercase text-orange-600 tracking-wider flex items-center gap-1 mb-1">
                      <DollarSign className="w-3.5 h-3.5" /> Allocated Budget
                    </span>
                    <span className="text-lg font-extrabold text-navy">{selectedInitiative.budget}</span>
                  </div>

                  <div className="bg-blue-50/50 p-4 rounded-xl border border-blue-100/60 flex flex-col justify-between">
                    <span className="text-[10px] font-extrabold uppercase text-blue-600 tracking-wider flex items-center gap-1 mb-1">
                      <TrendingUp className="w-3.5 h-3.5" /> Measured Impact
                    </span>
                    <span className="text-xs font-extrabold text-[#003366] leading-snug">{selectedInitiative.impact}</span>
                  </div>
                </div>

                {/* Active Projects */}
                <div className="border border-slate-100 p-4 rounded-2xl">
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider flex items-center gap-1.5 mb-2">
                    <Building className="w-3.5 h-3.5 text-saffron" /> Active Project Site / Focus
                  </h4>
                  <p className="text-sm font-bold text-navy bg-slate-50 py-2 px-3.5 rounded-lg inline-block">
                    {selectedInitiative.activeProject}
                  </p>
                </div>

                {/* Direct Points of Action */}
                <div>
                  <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider mb-3">
                    Project Work Blocks
                  </h4>
                  <ul className="space-y-3 font-medium text-xs sm:text-sm text-slate-600">
                    {selectedInitiative.detailedScope.map((point, i) => (
                      <li key={i} className="flex gap-2.5 items-start">
                        <ShieldCheck className="w-[18px] h-[18px] text-emerald-500 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom footer button close */}
              <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setSelectedInitiative(null)}
                  className="bg-[#003366] hover:bg-navy text-white font-extrabold text-xs uppercase tracking-wider px-6 py-3 rounded-xl transition-all"
                >
                  Understood
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
