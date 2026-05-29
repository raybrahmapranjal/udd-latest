"use client";

import React from 'react';
import { motion } from 'framer-motion';
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
  Award,
  ChevronRight,
  Clock,
  Briefcase,
  FileText,
  Flag,
  Film
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
  iconBg: string;
  badge: string;
  gradient: string;
  actions: { label: string; href: string }[];
}

const ALL_SERVICES: FullService[] = [
  {
    id: 'property-tax',
    title: 'Property Tax',
    category: 'E-Services',
    tagline: 'Unified Property Valuation & Online Taxation',
    description: 'Easy online payment of property taxes for all registered properties in urban areas.',
    longDescription: 'Brings all standard holdings and properties under a fully computerized system, enabling owners to calculate tax indices, submit declarations, and download instant payment receipts.',
    scope: [
      'Self-assessment tax calculator based on structural floor area.',
      'Instant search and tracking via Unique Property Identification Numbers.',
      'Generous 5% rebate incentive for early payments cleared before September 30th.',
      'Saves historic digital tax receipts in your secure profile.'
    ],
    budget: '₹2.5 Crores',
    impactRate: '99% Error-Free Billing',
    outcomeTarget: '90,000+ Active Accounts',
    officerInCharge: 'Revenue & Valuation Director, BTC',
    timeline: 'Fully Operational',
    icon: FileText,
    iconBg: 'bg-blue-600',
    badge: 'Popular E-Service',
    gradient: 'from-purple-500 to-indigo-600 shadow-purple-500/10',
    actions: [
      { label: 'Pay Property Tax Online', href: '/services/property-tax' }
    ]
  },
  {
    id: 'trade-license',
    title: 'Trade Licence Application',
    category: 'E-Services',
    tagline: 'Digital Commercial Registration & Certifications',
    description: 'Apply for new trade licenses or renew existing ones for your business operations.',
    longDescription: 'Enables any commercial entity or merchant to file coordinates, upload requisite certificates, pay standard operational fees, and receive verified municipal commercial clearances.',
    scope: [
      'Simple online sign-up with merchant credentials.',
      'Automated commercial tax fee computation based on merchant classifications.',
      'Fast-track renewal with zero manual processing delays.',
      'Secure download of QR-scannable enterprise license certificates.'
    ],
    budget: '₹1.8 Crores',
    impactRate: '95% Merchant Compliance',
    outcomeTarget: '15,000+ Registered Trades',
    officerInCharge: 'License Officer, Municipal Commerce',
    timeline: 'Fully Operational',
    icon: Award,
    iconBg: 'bg-[#10B981]',
    badge: 'E-Commerce Desk',
    gradient: 'from-teal-500 to-emerald-600 shadow-teal-500/10',
    actions: [
      { label: 'Apply Trade Licence', href: '/services/trade-license' }
    ]
  },
  {
    id: 'hoarding-permission',
    title: 'Hoarding Permission',
    category: 'Planning & Development',
    tagline: 'Outdoor Board & Billboard Display Permissions',
    description: 'Get permissions for outdoor advertising hoardings and display boards.',
    longDescription: 'Ensures advertising assets meet structurally sound safety profiles and are designated inside permissible commercial zones to avoid visual clutter and public safety hazards.',
    scope: [
      'Interactive mapping of billboard mounting zones.',
      'Submit load-testing compliance certificates and structural layout drawings.',
      'Online renewal of advertising space licenses.',
      'Interactive ledger for advertisement sittings and public tax schedules.'
    ],
    budget: '₹1.5 Crores',
    impactRate: 'Standardized Public Landscapes',
    outcomeTarget: 'All Commercial Agencies Logged',
    officerInCharge: 'Advertisement Cell Commissioner, BTC',
    timeline: 'Active Services',
    icon: Flag,
    iconBg: 'bg-orange-600',
    badge: 'Revenue Program',
    gradient: 'from-indigo-500 to-violet-600 shadow-indigo-500/10',
    actions: [
      { label: 'Request Display Permission', href: '/services/hoarding-permission' }
    ]
  },
  {
    id: 'cesspool-request',
    title: 'Cesspool Request',
    category: 'Public Utilities',
    tagline: 'On-Demand Sludge Evacuation Services',
    description: 'Request cesspool cleaning and sanitation services for residential and commercial properties.',
    longDescription: 'Part of our Swachh Bodoland project, this service provides clean vacuum tankers on-demand to maintain household hygiene and eliminate unauthorized waste dumping.',
    scope: [
      'Book cleaning appointments online based on municipal truck calendars.',
      'Instant SMS alert with tanker details and driver contact coordinates.',
      'Standardized distance-based utility billing with digital payment.',
      'Certified mechanical disposal at designated treatment plants.'
    ],
    budget: '₹2.1 Crores',
    impactRate: '100% Sanitized Sump Drainage',
    outcomeTarget: 'Under 24-Hour Service Response',
    officerInCharge: 'Urban Sanitation Superintendent, BTC',
    timeline: 'Active & Reliable',
    icon: Droplet,
    iconBg: 'bg-violet-600',
    badge: 'Civic Utility',
    gradient: 'from-cyan-400 to-blue-600 shadow-cyan-500/10',
    actions: [
      { label: 'Book Cesspool Tanker', href: '/services/cesspool-request' }
    ]
  },
  {
    id: 'film-shooting',
    title: 'Film Shooting Permission',
    category: 'E-Services',
    tagline: 'Commercial Filming Space Clearance & Permissions',
    description: 'Obtain permissions for film and video shooting at public locations.',
    longDescription: 'A streamlined single-window option to review shooting schedules, reserve public gardens/heritage sites, pay security deposits, and receive official police and municipal NOCs.',
    scope: [
      'Online reservation of municipal property shoots and public zones.',
      'Automatic single-window security deposits clearance.',
      'Consolidated clearances from Traffic and Municipal units.',
      'Downloadable Shooting License PDF with official seal stamps.'
    ],
    budget: '₹0.8 Crores',
    impactRate: 'Boost Local Media Tourism',
    outcomeTarget: '100% Digital Filming NOCs',
    officerInCharge: 'Nodal Officer, Tourism & Culture BTC',
    timeline: 'Active Window',
    icon: Film,
    iconBg: 'bg-pink-600',
    badge: 'Single Window NOC',
    gradient: 'from-rose-500 to-pink-600 shadow-rose-500/10',
    actions: [
      { label: 'Apply Film Permission', href: '/services/film-shooting' }
    ]
  },
  {
    id: 'field-hall-booking',
    title: 'Field & Hall Booking',
    category: 'E-Services',
    tagline: 'Municipal Venue Allocations & Event Reservoirs',
    description: 'Book public fields, halls, and community centers for events and gatherings.',
    longDescription: 'Protects citizens from local middle-men by providing an online slot booking engine with dynamic rent matrix definitions and secure deposit refunds.',
    scope: [
      'Transparent live daily slot availability charts per municipality.',
      'Dynamic security deposit processing with cashless cancellations.',
      'Integrated public venue facilities assessment checklists.',
      'Automated noise level and safety guideline checklist clearances.'
    ],
    budget: '₹1.9 Crores',
    impactRate: '100% Double-Booking Prevention',
    outcomeTarget: '35+ Municipal Venues Integrated',
    officerInCharge: 'Estate Officer, Municipal Administration',
    timeline: 'Fully Operational',
    icon: Building2,
    iconBg: 'bg-indigo-600',
    badge: 'Public Reservoirs',
    gradient: 'from-emerald-500 to-teal-600 shadow-emerald-500/10',
    actions: [
      { label: 'Book Public Venue', href: '/services/field-hall-booking' }
    ]
  },
  {
    id: 'water-supply',
    title: 'Water Connection',
    category: 'Public Utilities',
    tagline: 'Guaranteed Treated Drinking Water Pipelines',
    description: 'Apply for new water connections or manage existing water supply services.',
    longDescription: 'Implements modern clean drinking water pipes and treatment plants directly to municipal families across BTC towns with automated quality monitoring systems.',
    scope: [
      'Submit connection layouts and municipal pipeline integration coordinates.',
      'Online application processing & inspector allocations under 72 hours.',
      'Track household water meter setups and usage bill receipts.',
      'Fast online requests for seasonal municipal community water tankers.'
    ],
    budget: '₹24.5 Crores',
    impactRate: '100% Payer Supply Security',
    outcomeTarget: '42,000+ Connected Households',
    officerInCharge: 'Executive Engineer (PHE), Kokrajhar',
    timeline: 'Scaling Up (Phase II Active)',
    icon: Droplet,
    iconBg: 'bg-sky-500',
    badge: 'Flagship Scheme',
    gradient: 'from-sky-400 to-sky-600 shadow-sky-500/10',
    actions: [
      { label: 'Apply for Water Connection', href: '/services/water-supply' }
    ]
  },
  {
    id: 'transfer-development-rights',
    title: 'TDR (Transfer of Development Rights)',
    category: 'Planning & Development',
    tagline: 'Development Rights Certificates Dispatch',
    description: 'Process TDR applications for urban development and infrastructure projects.',
    longDescription: 'Manages zoning right conversions and issues digital development right credits to help developers optimize heights in subsequent real estate projects.',
    scope: [
      'Submit property maps and surrender land records maps.',
      'Dynamic valuation of right index ratios matching zoning blueprints.',
      'Saves accredited TDR digital certificate credits in government ledgers.',
      'Interactive tracking of transfer rights transactions with partners.'
    ],
    budget: '₹4.3 Crores',
    impactRate: 'Transparent Land Negotiations',
    outcomeTarget: 'Fast Road Widening Clearances',
    officerInCharge: 'Zonal Commissioner, Town Planning Cell',
    timeline: 'Active Portal',
    icon: MapPin,
    iconBg: 'bg-teal-600',
    badge: 'Infrastructure Reform',
    gradient: 'from-orange-500 to-amber-600 shadow-orange-500/10',
    actions: [
      { label: 'Apply TDR Certification', href: '/services/transfer-development-rights' }
    ]
  },
  {
    id: 'building-permission',
    title: 'OBPS (Online Building Permission System)',
    category: 'Planning & Development',
    tagline: 'Instant Automated Structural Blueprints Clearance',
    description: 'Submit and track building plan approvals and construction permissions online.',
    longDescription: 'OBPS automates manual clearance bottlenecks and verifies zoning setups, height thresholds, and seismic safety protocols using computer-aided rule assessments.',
    scope: [
      'Fast AutoCAD blueprint drawing analysis pipeline.',
      'Integrated NOCs from fire safety, environmental, and disaster management cells.',
      'Track verification states by building surveyors dynamically.',
      'Auto-generation of authorized digital sanction stamps.'
    ],
    budget: '₹3.2 Crores',
    impactRate: 'Approval under 14 days',
    outcomeTarget: '100% Digital Clearances',
    officerInCharge: 'Nodal Town Planner, BTC Council Office',
    timeline: 'Fully Operational',
    icon: Building,
    iconBg: 'bg-amber-500',
    badge: 'E-Gov Reform',
    gradient: 'from-amber-500 to-orange-600 shadow-amber-500/10',
    actions: [
      { label: 'Enter OBPS Portal', href: '/services/building-permission' }
    ]
  }
];

export default function ServicesPage() {
  const handleGetStartedClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.href = '/login';
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-[#f97316] selection:text-white">
      <div className="sticky top-0 z-[110] shadow-sm">
        <UtilityBar />
        <Header />
      </div>

      {/* Styled Banner Section with traditional Bodo Aronai horizontal pattern */}
      <section className="relative py-16 overflow-hidden bg-slate-950 text-white border-b border-purple-950/30 shadow-lg text-center">
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

        <div className="max-w-4xl mx-auto relative z-20 px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight text-white font-sans drop-shadow-sm">
            Our Services
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-sky-100/90 max-w-2xl mx-auto font-medium leading-relaxed">
            Comprehensive urban development services for citizens and businesses across BTC
          </p>
        </div>
      </section>

      {/* Main Content Areas */}
      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14" id="services-list">
        
        {/* All Services Title Section */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
            All Services
          </h2>
          <p className="text-slate-500 text-sm sm:text-base mt-2 font-semibold">
            Access essential UDD services conveniently
          </p>
        </div>

        {/* Grid and list with customized border, background, and hover states per-category */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {ALL_SERVICES.map((service, idx) => {
            const IconComp = service.icon;
            const pathMapping = service.id === 'property-tax' 
              ? '/services/property-tax'
              : `/services/${service.id}`;

            // Define unique styling matching each service's icon theme
            const serviceStyles: Record<string, { bgClass: string; borderClass: string; borderLeftClass: string; hoverShadowClass: string; textClass: string }> = {
              'property-tax': {
                bgClass: 'bg-[#f0f7ff]', // soft sky/blue
                borderClass: 'border-blue-400',
                borderLeftClass: 'border-l-blue-600',
                hoverShadowClass: 'hover:shadow-[0_8px_20px_-4px_rgba(37,99,235,0.12)]',
                textClass: 'text-blue-600',
              },
              'trade-license': {
                bgClass: 'bg-[#f0fdf4]', // soft emerald/green
                borderClass: 'border-emerald-400',
                borderLeftClass: 'border-l-[#10B981]',
                hoverShadowClass: 'hover:shadow-[0_8px_20px_-4px_rgba(16,185,129,0.12)]',
                textClass: 'text-[#10B981]',
              },
              'hoarding-permission': {
                bgClass: 'bg-[#fff7ed]', // soft amber/orange
                borderClass: 'border-orange-400',
                borderLeftClass: 'border-l-orange-600',
                hoverShadowClass: 'hover:shadow-[0_8px_20px_-4px_rgba(234,88,12,0.12)]',
                textClass: 'text-orange-600',
              },
              'cesspool-request': {
                bgClass: 'bg-[#f5f3ff]', // soft violet
                borderClass: 'border-violet-400',
                borderLeftClass: 'border-l-violet-600',
                hoverShadowClass: 'hover:shadow-[0_8px_20px_-4px_rgba(124,58,237,0.12)]',
                textClass: 'text-violet-600',
              },
              'film-shooting': {
                bgClass: 'bg-[#fdf2f8]', // soft pink
                borderClass: 'border-pink-400',
                borderLeftClass: 'border-l-pink-600',
                hoverShadowClass: 'hover:shadow-[0_8px_20px_-4px_rgba(219,39,119,0.12)]',
                textClass: 'text-pink-600',
              },
              'field-hall-booking': {
                bgClass: 'bg-[#faf5ff]', // soft indigo
                borderClass: 'border-indigo-400',
                borderLeftClass: 'border-l-indigo-600',
                hoverShadowClass: 'hover:shadow-[0_8px_20px_-4px_rgba(79,70,229,0.12)]',
                textClass: 'text-indigo-600',
              },
              'water-supply': {
                bgClass: 'bg-[#f0f9ff]', // soft cyan/sky
                borderClass: 'border-sky-400',
                borderLeftClass: 'border-l-sky-500',
                hoverShadowClass: 'hover:shadow-[0_8px_20px_-4px_rgba(14,165,233,0.12)]',
                textClass: 'text-sky-500',
              },
              'transfer-development-rights': {
                bgClass: 'bg-[#f0fdfa]', // soft teal
                borderClass: 'border-teal-400',
                borderLeftClass: 'border-l-teal-600',
                hoverShadowClass: 'hover:shadow-[0_8px_20px_-4px_rgba(13,148,136,0.12)]',
                textClass: 'text-teal-600',
              },
              'building-permission': {
                bgClass: 'bg-[#fdfbeb]', // soft building/amber layout
                borderClass: 'border-amber-400',
                borderLeftClass: 'border-l-amber-500',
                hoverShadowClass: 'hover:shadow-[0_8px_20px_-4px_rgba(245,158,11,0.12)]',
                textClass: 'text-amber-500',
              },
            };

            const style = serviceStyles[service.id] || {
              bgClass: 'bg-[#fffbf8]',
              borderClass: 'border-[#f97316]',
              borderLeftClass: 'border-l-[#f97316]',
              hoverShadowClass: 'hover:shadow-[-4px_4px_12px_rgba(249,115,22,0.06)]',
              textClass: 'text-[#f97316]',
            };

            return (
              <Link
                key={service.id}
                href={pathMapping}
                className="block group h-full"
              >
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: idx * 0.04 }}
                  whileHover={{ y: -5 }}
                  className={`${style.bgClass} border ${style.borderClass} border-l-4 ${style.borderLeftClass} rounded-lg p-6 sm:p-7 flex flex-col justify-between cursor-pointer h-full shadow-[0_2px_8px_rgba(0,0,0,0.02)] ${style.hoverShadowClass} transition-all duration-300`}
                >
                  <div>
                    {/* circular icon */}
                    <div className="mb-5">
                      <div className={`w-16 h-16 rounded-full ${service.iconBg} flex items-center justify-center text-white shadow-md shadow-black/10`}>
                        <IconComp className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Card Content Titles */}
                    <h3 className="text-xl sm:text-2xl font-black font-sans text-slate-950 group-hover:text-[#f97316] transition-colors leading-tight mb-3">
                      {service.title}
                    </h3>
                    <p className="text-slate-705 text-sm sm:text-base leading-relaxed mb-6 font-semibold">
                      {service.description}
                    </p>
                  </div>

                  {/* Learn More Link matching the orange text and layout exactly */}
                  <div className="flex items-center gap-1.5 text-xs text-[#f97316] font-black uppercase tracking-wider pt-2 mt-auto">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#f97316] transition-transform group-hover:translate-x-1" />
                  </div>

                </motion.div>
              </Link>
            );
          })}
        </div>

        {/* How to Access Services Container Section - Highly Polished matching Image 4 & 5 */}
        <section className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-[#f0f7ff] via-[#f5f9ff] to-[#e6f2ff] rounded-lg border border-blue-500/30 border-l-[4px] border-l-[#2563EB] p-6 sm:p-10 relative shadow-[-6px_6px_18px_rgba(37,99,235,0.08)]">
            
            {/* Top overlapping circular badge with white text icon */}
            <div className="absolute -top-6 left-6 sm:left-10 w-12 h-12 rounded-full bg-[#2563EB] flex items-center justify-center text-white shadow-lg border-2 border-white">
              <FileText className="w-6 h-6" />
            </div>

            {/* Title block */}
            <div className="mt-2 mb-8">
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900 font-sans tracking-tight">
                How to Access Services
              </h3>
            </div>

            {/* List of Steps structured as beautifully clean soft solid-white cards */}
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="flex items-center gap-5 bg-white p-5 rounded-md border border-blue-200 shadow-sm transition-all duration-200">
                <div className="w-11 h-11 rounded-full bg-[#2563eb] text-white font-extrabold flex items-center justify-center shrink-0 shadow-md text-sm sm:text-base">
                  1
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base md:text-lg leading-tight">
                    Register/Login
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-semibold mt-1">
                    Create an account or login to access personalized services.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex items-center gap-5 bg-white p-5 rounded-md border border-blue-200 shadow-sm transition-all duration-200">
                <div className="w-11 h-11 rounded-full bg-[#10b981] text-white font-extrabold flex items-center justify-center shrink-0 shadow-md text-sm sm:text-base">
                  2
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base md:text-lg leading-tight">
                    Select Service
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-semibold mt-1">
                    Choose the service you need from the available options.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex items-center gap-5 bg-white p-5 rounded-md border border-blue-200 shadow-sm transition-all duration-200">
                <div className="w-11 h-11 rounded-full bg-[#f97316] text-white font-extrabold flex items-center justify-center shrink-0 shadow-md text-sm sm:text-base">
                  3
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base md:text-lg leading-tight">
                    Submit Application
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-semibold mt-1">
                    Fill out the required forms and submit necessary documents.
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex items-center gap-5 bg-white p-5 rounded-md border border-blue-200 shadow-sm transition-all duration-200">
                <div className="w-11 h-11 rounded-full bg-[#8b5cf6] text-white font-extrabold flex items-center justify-center shrink-0 shadow-md text-sm sm:text-base">
                  4
                </div>
                <div>
                  <h4 className="font-extrabold text-slate-900 text-sm sm:text-base md:text-lg leading-tight">
                    Track Status
                  </h4>
                  <p className="text-slate-600 text-xs sm:text-sm font-semibold mt-1">
                    Monitor your application status through your account dashboard.
                  </p>
                </div>
              </div>
            </div>

            {/* Central Get Started Button */}
            <div className="flex justify-center mt-10">
              <button
                onClick={handleGetStartedClick}
                className="bg-[#e04f10] hover:bg-[#c2410c] text-white text-xs sm:text-sm font-black uppercase tracking-wider py-3.5 px-8 rounded-xl transition-all cursor-pointer shadow-md inline-flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4 text-white" />
              </button>
            </div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
