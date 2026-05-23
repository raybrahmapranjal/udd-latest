"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  Building, 
  Leaf, 
  Droplet, 
  Trash2, 
  Lightbulb, 
  Map, 
  Activity, 
  Clock, 
  Coins, 
  Globe, 
  FileText, 
  PhoneCall, 
  Mail, 
  Search, 
  CreditCard, 
  ChevronRight, 
  ShieldCheck, 
  AlertTriangle,
  ChevronDown,
  ArrowLeft
} from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Dynamic Services Database matching exact layout of Bodoland portal
interface ServiceDetail {
  slug: string;
  title: string;
  category: string;
  iconName: 'green' | 'water' | 'sbm' | 'obps' | 'lights' | 'gis' | 'drainage';
  hoverUrl: string;
  processing: string;
  fee: string;
  mode: string;
  overviewHeading: string;
  overviewParagraphs: string[];
  noticeTitle: string;
  noticeContent: string;
  helpline: string;
  email: string;
  officeHours: string;
}

const SERVICES_DB: Record<string, ServiceDetail> = {
  'green-mission': {
    slug: 'green-mission',
    title: 'Bodoland Green Clean Mission',
    category: 'Civic Programs',
    iconName: 'green',
    hoverUrl: '/services/green-mission',
    processing: '3 - 5 Working Days',
    fee: 'Free of Cost',
    mode: 'Online Registration',
    overviewHeading: 'Green Mission Overview',
    overviewParagraphs: [
      'The Bodoland Green Clean Mission is an eco-restoration initiative aiming to expand public canopy structures, develop community gardens, and drive tree plantations inside all major BTC municipal sectors.',
      'Through this service, registered property owners or neighborhood councils can sign up as Green Volunteers, request custom saplings, and propose municipal roadside spaces for automated tree guard allocations.'
    ],
    noticeTitle: 'Voluntary Guidelines',
    noticeContent: 'All registered saplings are delivered with high-durability tree-guards directly at the location. Periodic growth reviews are scheduled by municipal botanical departments.',
    helpline: '8812825013',
    email: 'greenmission@uddbtr.org',
    officeHours: 'Mon-Fri: 10 AM - 5 PM'
  },
  'water-supply': {
    slug: 'water-supply',
    title: 'AMRUT Water Supply Connection',
    category: 'Public Utilities',
    iconName: 'water',
    hoverUrl: '/services/water-supply',
    processing: '7 - 10 Working Days',
    fee: 'As per connection tier',
    mode: 'Online Application',
    overviewHeading: 'AMRUT Water Connection Overview',
    overviewParagraphs: [
      'The AMRUT Mission guarantees direct treated water connections to every household within active municipal boundaries. Formulated with robust steel transmission grids, centralized storage towers, and digital chemical filters.',
      'Eligible citizens can easily register their residential holdings online to request automated plinth plumbing, verify zone availability, and process pipeline configuration clearances.'
    ],
    noticeTitle: 'Plumbing Guidelines',
    noticeContent: 'Assessment surveys are completed by PHE engineers within 5 business days of application submission. Connections are activated post installation of secure volumetric meters.',
    helpline: '8812825014',
    email: 'watersupply@uddbtr.org',
    officeHours: 'Mon-Fri: 10 AM - 5 PM'
  },
  'solid-waste': {
    slug: 'solid-waste',
    title: 'Integrated Solid Waste Management',
    category: 'Public Utilities',
    iconName: 'sbm',
    hoverUrl: '/services/solid-waste',
    processing: 'Daily Services',
    fee: 'Covered under urban tax services',
    mode: 'Grievance / Request Registration',
    overviewHeading: 'Waste Management Overview',
    overviewParagraphs: [
      'Empowered by the "Swachh Bodoland" program, the department structures extensive door-to-door garbage collection, dry/wet source segregation, organic compost converters, and commercial mechanical sanitation drives.',
      'Active commercial properties can request specialized container swaps, book large volume waste transfers, or file quick reports on local roadside public litter spots.'
    ],
    noticeTitle: 'Segregation Mandate',
    noticeContent: 'Citizens are requested to mandatory isolate dry (blue bin) and wet (green bin) waste items at source. Mixing hospital or hazard products leads to automated municipal penalties.',
    helpline: '8812825015',
    email: 'solidwaste@uddbtr.org',
    officeHours: 'Mon-Fri: 10 AM - 5 PM'
  },
  'building-permission': {
    slug: 'building-permission',
    title: 'Online Building Permission System',
    category: 'Digital Governance',
    iconName: 'obps',
    hoverUrl: '/services/building-permission',
    processing: '14 - 21 Working Days',
    fee: 'As per plinth square yards',
    mode: '100% Online Clearances',
    overviewHeading: 'OBPS Clearance Overview',
    overviewParagraphs: [
      'The Online Building Permission System (OBPS) optimizes architectural structural clearances. Registered draftsmen or land owners submit engineering drawing files online to secure immediate certificates.',
      'Integrating geospatial database indexes allows instant compliant checks regarding road width offsets, seismic guidelines, height boundaries, and environmental clearances.'
    ],
    noticeTitle: 'Filing Prerequisite',
    noticeContent: 'All drawings must be created in CAD formatting aligned completely with BTR Unified Building bylaws. On-site physically coordinates are verified post online draft approval.',
    helpline: '8812825016',
    email: 'obps@uddbtr.org',
    officeHours: 'Mon-Fri: 10 AM - 5 PM'
  },
  'street-lighting': {
    slug: 'street-lighting',
    title: 'Smart LED Street Lighting',
    category: 'Civic Programs',
    iconName: 'lights',
    hoverUrl: '/services/street-lighting',
    processing: 'Resolves in 48 Hours',
    fee: 'Free Public Service',
    mode: 'Online Report Module',
    overviewHeading: 'Street Lighting Overview',
    overviewParagraphs: [
      'The municipal smart lighting project ensures safety in local routes, replacing older mercury bulb sockets with state-of-the-art power-saving LEDs and erecting tall high-masts.',
      'Through this service interface, citizens can report dark-zone concerns, file complaint logs on non-operative lamps, or request automated timer schedule reviews.'
    ],
    noticeTitle: 'SLA Timeline',
    noticeContent: 'Malfunctioning public LED street lamps are evaluated and replaced within 48 hours of ticket placement. High-mast assembly is decided under structural town budgets.',
    helpline: '8812825017',
    email: 'streetlights@uddbtr.org',
    officeHours: 'Mon-Fri: 10 AM - 5 PM'
  },
  'spatial-mapping': {
    slug: 'spatial-mapping',
    title: 'GIS-Based Spatial Mapping & Records',
    category: 'Planning & Zoning',
    iconName: 'gis',
    hoverUrl: '/services/spatial-mapping',
    processing: 'Instant Registry lookup',
    fee: 'Free Public Masterplan Searches',
    mode: 'Online Spatial Records',
    overviewHeading: 'GIS Mapping Overview',
    overviewParagraphs: [
      'By processing aerial drone coordinate tracking databases, the planning division secures clear mappings indicating land classifications, town master plans, and buffer spaces.',
      'Property owners can query individual spatial categories, cross-reference boundary maps, and check regional industrial, commercial, or residential zoning tags.'
    ],
    noticeTitle: 'Legal Coordinates Disclaimer',
    noticeContent: 'GIS-based records are for information purposes. Judicial mutations or real-estate transfers require paper validations from authorized BTC Land Survey units.',
    helpline: '8812825018',
    email: 'gismapping@uddbtr.org',
    officeHours: 'Mon-Fri: 10 AM - 5 PM'
  },
  'drainage-schemes': {
    slug: 'drainage-schemes',
    title: 'Stormwater Drainage Schemes',
    category: 'Public Utilities',
    iconName: 'drainage',
    hoverUrl: '/services/drainage-schemes',
    processing: 'Seasonal Pre-Monsoon Services',
    fee: 'Fully Funded Public Services',
    mode: 'Online Complaint Redressal',
    overviewHeading: 'Urban Drainage Overview',
    overviewParagraphs: [
      'Structuring deep masonry conduits, robust water outfall routes, and retaining walls alongside major avenues to ensure swift transit during heavy seasonal monsoon rainfalls.',
      'Active local communities can flag blocked storm drains, request pre-season mechanical desiltations, or call for emergency water pump deploys.'
    ],
    noticeTitle: 'Maintenance Notice',
    noticeContent: 'Stormwater conduit sweeps are executed intensively during April-June. Citizens are requested to strictly avoid throwing commercial wrappers into drainage entries.',
    helpline: '8812825019',
    email: 'drainagedispatch@uddbtr.org',
    officeHours: 'Mon-Fri: 10 AM - 5 PM'
  }
};

export default function ServiceSpecificPage() {
  const params = useParams();
  const rawSlug = params?.slug as string;
  const slug = rawSlug || '';

  // Fallback to property-tax if slug doesn't match
  const service = SERVICES_DB[slug] || SERVICES_DB['green-mission'];

  // Local state for online action simulate
  const [ticketCreated, setTicketCreated] = useState(false);
  const [formData, setFormData] = useState({
    citizenName: '',
    mobile: '',
    wardNum: '',
    ulbName: 'Kokrajhar MB',
    desc: ''
  });

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'green': return <Leaf className="w-8 h-8 text-white" />;
      case 'water': return <Droplet className="w-8 h-8 text-white" />;
      case 'sbm': return <Trash2 className="w-8 h-8 text-white" />;
      case 'obps': return <Building className="w-8 h-8 text-white" />;
      case 'lights': return <Lightbulb className="w-8 h-8 text-white" />;
      case 'gis': return <Map className="w-8 h-8 text-white" />;
      case 'drainage': return <Activity className="w-8 h-8 text-white" />;
      default: return <Building className="w-8 h-8 text-white" />;
    }
  };

  const handleActionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTicketCreated(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <div className="sticky top-0 z-[110]">
        <UtilityBar />
        <Header />
      </div>

      {/* Main content body in light style exactly looking like screenshot */}
      <main className="flex-1 max-w-[1400px] w-full mx-auto px-4 sm:px-6 md:px-8 py-8 md:py-12">
        
        {/* Breadcrumb row matching styling requirements */}
        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-500 font-bold mb-6 select-none bg-white p-3 rounded-xl border border-slate-200 inline-flex shadow-sm">
          <a href="/" className="hover:text-emerald-600 transition-colors uppercase tracking-wider">Home</a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <a href="/services" className="hover:text-emerald-600 transition-colors uppercase tracking-wider">Services</a>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
          <span className="text-emerald-600 font-black uppercase tracking-wider">{service.title}</span>
        </div>

        {/* Master columns split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left core overview block */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            <div className="bg-white border border-slate-200/80 shadow-sm rounded-2xl p-6 sm:p-8 flex flex-col gap-6">
              
              {/* Service header containing exact styling inside screenshot */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 border-b border-slate-100 pb-6 shrink-0">
                <div className="w-16 h-16 bg-blue-600 rounded-2xl text-white flex items-center justify-center shrink-0 shadow-md">
                  {getServiceIcon(service.iconName)}
                </div>
                
                <div className="space-y-1.5 flex-grow">
                  <h1 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight leading-tight">
                    {service.title}
                  </h1>
                  
                  {/* Metadata Row matching styling precisely */}
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-slate-500 font-semibold select-none">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-slate-400" />
                      <span>Processing: {service.processing}</span>
                    </div>
                    <div className="hidden sm:block text-slate-300">|</div>
                    <div className="flex items-center gap-1">
                      <Coins className="w-4 h-4 text-slate-400" />
                      <span>Fee: {service.fee}</span>
                    </div>
                    <div className="hidden sm:block text-slate-300">|</div>
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4 text-slate-400" />
                      <span>{service.mode}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service Overview body details */}
              <div className="space-y-4">
                <h3 className="text-lg font-black text-slate-900 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-blue-600" />
                  <span>{service.overviewHeading}</span>
                </h3>
                
                {service.overviewParagraphs.map((para, i) => (
                  <p key={i} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              {/* Blue styled highlighted notice container mimicking screenshot */}
              <div className="bg-blue-50/70 border-l-4 border-blue-600 rounded-r-xl p-5 mt-2 shadow-sm space-y-1">
                <h4 className="font-extrabold text-blue-900 text-sm uppercase tracking-wide flex items-center gap-1.5">
                  <ShieldCheck className="w-4.5 h-4.5 text-blue-700" />
                  <span>{service.noticeTitle}</span>
                </h4>
                <p className="text-xs sm:text-sm text-blue-800 leading-relaxed font-semibold">
                  {service.noticeContent}
                </p>
              </div>

            </div>

            {/* Bottom Form box that animates/opens up when we submit actions */}
            <div id="avail-form-block" className="bg-white border border-slate-200/80 shadow-sm rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-black text-slate-900 flex items-center gap-2 border-b border-slate-100 pb-4">
                <Building className="w-5 h-5 text-emerald-600" />
                <span>ONLINE PORTAL ACTION REGISTRATION</span>
              </h3>

              {!ticketCreated ? (
                <form onSubmit={handleActionSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">Citizen Full Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.citizenName}
                        onChange={e => setFormData({...formData, citizenName: e.target.value})}
                        placeholder="e.g. Swgwmswr Brahma" 
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">Mobile Contact No</label>
                      <input 
                        type="tel" 
                        required
                        value={formData.mobile}
                        onChange={e => setFormData({...formData, mobile: e.target.value})}
                        placeholder="e.g. 9876543210" 
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">Ward Number / Locality</label>
                      <input 
                        type="text" 
                        required
                        value={formData.wardNum}
                        onChange={e => setFormData({...formData, wardNum: e.target.value})}
                        placeholder="e.g. Ward No. 3, Kokrajhar" 
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">Select Municipal Board</label>
                      <select 
                        value={formData.ulbName}
                        onChange={e => setFormData({...formData, ulbName: e.target.value})}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                      >
                        <option>Basugaon Municipal Board</option>
                        <option>Bijni Municipal Board</option>
                        <option>Fakiragram Municipal Board</option>
                        <option>Goreswar Municipal Board</option>
                        <option>Gossaigaon Municipal Board</option>
                        <option>Kajalgaon Municipal Board</option>
                        <option>Kokrajhar Municipal Board</option>
                        <option>Mushalpur Municipal Board</option>
                        <option>Tamulpur Municipal Board</option>
                        <option>Tangla Municipal Board</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] uppercase tracking-wider text-slate-500 font-bold block mb-1">Detailed Description of Requirement / Complaint</label>
                    <textarea 
                      rows={4}
                      required
                      value={formData.desc}
                      onChange={e => setFormData({...formData, desc: e.target.value})}
                      placeholder="Please explicitly describe your layout parameters or details..."
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="bg-[#1a56db] hover:bg-[#1a56db]/90 text-white font-extrabold uppercase tracking-wide text-xs px-6 py-3.5 rounded-xl transition-all cursor-pointer inline-flex items-center gap-1.5 shadow-md hover:translate-y-[-1px] active:translate-y-[0px]"
                  >
                    <ShieldCheck className="w-4.5 h-4.5" /> Submit Connection Application
                  </button>
                </form>
              ) : (
                <div className="p-6 bg-emerald-50 border border-emerald-500/20 rounded-xl text-center space-y-3">
                  <ShieldCheck className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="font-extrabold text-emerald-900 text-base">Application Submitted Successfully!</h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto">
                    Your citizen request ticket for <strong className="text-slate-800">{service.title}</strong> has been registered with ID: <span className="font-mono text-emerald-700 bg-white border px-1.5 py-0.5 rounded font-black">BTC-SRV-{Math.floor(100000 + Math.random() * 900000)}</span>.
                  </p>
                  <button 
                    onClick={() => setTicketCreated(false)}
                    className="border border-emerald-400 bg-white hover:bg-emerald-100 text-emerald-800 text-xs font-black uppercase tracking-wider px-5 py-2.5 rounded-lg mt-3"
                  >
                    File New Application
                  </button>
                </div>
              )}
            </div>

          </div>

          {/* Right sidebar block matching layout elements inside the screenshot */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Quick Actions Card */}
            <div className="bg-white border border-slate-200/80 shadow-sm rounded-2xl p-6 space-y-4">
              <h3 className="font-black text-slate-900 text-sm uppercase tracking-wide border-b border-slate-100 pb-2">
                Quick Actions
              </h3>
              
              <a 
                href="https://service.assamurban.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-wider text-xs rounded-xl py-3 px-4 w-full flex items-center justify-center gap-2 cursor-pointer transition-all shadow-sm"
              >
                <CreditCard className="w-4 h-4 shrink-0 text-white/90" />
                <span>Avail Service</span>
              </a>

              <a 
                href="https://service.assamurban.in/login"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-800 font-black uppercase tracking-wider text-xs rounded-xl py-3 px-4 w-full flex items-center justify-center gap-2 cursor-pointer transition-all border block text-center"
              >
                <Search className="w-4 h-4 shrink-0 text-slate-500 inline-block mr-1.5" />
                <span>Check Status</span>
              </a>
            </div>

            {/* Contact Support Card inside screenshot precisely */}
            <div className="bg-white border border-slate-200/80 shadow-sm rounded-2xl p-6 space-y-5">
              <h3 className="font-black text-slate-900 text-sm uppercase tracking-wide border-b border-slate-100 pb-2">
                Contact Support
              </h3>

              <div className="space-y-4 text-xs sm:text-sm font-semibold">
                
                {/* Helpline */}
                <div className="flex gap-3.5 items-start">
                  <PhoneCall className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-slate-900 font-black block leading-none">Helpline</span>
                    <a href={`tel:${service.helpline}`} className="text-[#1a56db] hover:underline font-extrabold">{service.helpline}</a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-3.5 items-start">
                  <Mail className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-slate-900 font-black block leading-none">Email</span>
                    <a href={`mailto:${service.email}`} className="text-[#1a56db] hover:underline font-extrabold">{service.email}</a>
                  </div>
                </div>

                {/* Office hours */}
                <div className="flex gap-3.5 items-start">
                  <Clock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <span className="text-slate-900 font-black block leading-none">Office Hours</span>
                    <span className="text-slate-600 font-bold block">{service.officeHours}</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Related Services List Card */}
            <div className="bg-white border border-slate-200/80 shadow-sm rounded-2xl p-6 space-y-4">
              <h3 className="font-black text-slate-900 text-sm uppercase tracking-wide border-b border-slate-100 pb-2">
                Related Services
              </h3>

              <div className="flex flex-col gap-2.5">
                {Object.values(SERVICES_DB)
                  .filter(srv => srv.slug !== service.slug)
                  .slice(0, 3)
                  .map((srv, idx) => (
                    <a 
                      key={idx} 
                      href={srv.hoverUrl}
                      className="group p-3 border border-slate-100 hover:border-slate-300 rounded-xl hover:bg-slate-50 transition-all flex items-center justify-between gap-2.5"
                    >
                      <div className="flex items-center gap-2.5 overflow-hidden">
                        <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                          {srv.iconName === 'green' && <Leaf className="w-4.5 h-4.5" />}
                          {srv.iconName === 'water' && <Droplet className="w-4.5 h-4.5" />}
                          {srv.iconName === 'sbm' && <Trash2 className="w-4.5 h-4.5" />}
                          {srv.iconName === 'obps' && <Building className="w-4.5 h-4.5" />}
                          {srv.iconName === 'lights' && <Lightbulb className="w-4.5 h-4.5" />}
                          {srv.iconName === 'gis' && <Map className="w-4.5 h-4.5" />}
                          {srv.iconName === 'drainage' && <Activity className="w-4.5 h-4.5" />}
                        </div>
                        <span className="text-xs font-bold text-slate-800 truncate block group-hover:text-blue-600">
                          {srv.title}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 shrink-0 transition-transform group-hover:translate-x-0.5" />
                    </a>
                  ))
                }
              </div>
            </div>

          </div>

        </div>

        {/* Back to All Services Button at the bottom */}
        <div className="mt-12 flex justify-center border-t border-slate-200 pt-8">
          <Link 
            id="back-to-services-btn"
            href="/services" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 rounded-xl text-slate-700 font-extrabold text-sm hover:bg-slate-50 transition-all shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 text-[#F97316] transition-transform group-hover:-translate-x-1 animate-pulse" />
            <span>Back to All Services</span>
          </Link>
        </div>

      </main>

      <Footer />
    </div>
  );
}
