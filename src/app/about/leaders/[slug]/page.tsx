"use client";

import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Calendar, 
  Award, 
  User, 
  GraduationCap, 
  Target, 
  Globe, 
  Building2, 
  ExternalLink 
} from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Image from 'next/image';

interface LeaderProfile {
  name: string;
  role: string;
  subRole: string;
  img: string;
  theme: 'sky' | 'purple' | 'orange';
  designation: string;
  department: string;
  jurisdiction: string;
  swornIn: string;
  bio: string;
  educationList: string[];
  focusAreas: string[];
  officeTitle: string;
  officeLoc: string;
  phone: string;
  email: string;
  careerHighlights: string[];
  responsibilities: string[];
  achievements: string[];
  officialLink: string;
}

const leadersData: Record<string, LeaderProfile> = {
  "hagrama-mohilary": {
    name: "Shri Hagrama Mohilary",
    role: "Visionary Leader & CEM",
    subRole: "Bodoland Territorial Council",
    img: "/images/leaders/hagrama.jpg",
    theme: "sky",
    designation: "Chief Executive Member (CEM)",
    department: "Executive Council, Bodoland Territorial Council",
    jurisdiction: "All Districts & Departments under BTC Accords",
    swornIn: "Multiple Terms Since 2005",
    bio: "Shri Hagrama Mohilary is a prominent political leader and the Chief Executive of the Bodoland Territorial Council (BTC). With decades of experience in governance and administration, he has been instrumental in bringing peace and development to the Bodoland region. His leadership has focused on inclusive growth, institutional strengthening, and sustainable development of the Bodoland Territorial Council.",
    educationList: [
      "Bachelor of Arts - Gauhati University",
      "Diploma in Public Administration"
    ],
    focusAreas: [
      "Sustainable Development",
      "Institutional Strengthening",
      "Technology Integration",
      "Peace & Harmony",
      "Economic Growth"
    ],
    officeTitle: "Office of the Chief Executive Member, BTC",
    officeLoc: "Bodoland Territorial Council Secretariat, Kokrajhar, Assam",
    phone: "+91-3661-270100",
    email: "cem@bodoland.gov.in",
    careerHighlights: [
      "Chief Executive Member, Bodoland Territorial Council (Multiple Terms)",
      "Former Member of Parliament, Rajya Sabha",
      "President, Bodoland People's Front (BPF)",
      "Key architect of Bodo Peace Accord",
      "Recipient of numerous awards for peace-building initiatives"
    ],
    responsibilities: [
      "Overall governance and administration of BTC",
      "Policy formulation and strategic planning",
      "Coordination with Central and State Governments",
      "Implementation of development initiatives",
      "Peace and harmony in Bodoland region"
    ],
    achievements: [
      "Successfully negotiated and implemented Bodo Peace Accord",
      "Strengthened governance institutions in BTC",
      "Promoted education and skill development programs",
      "Enhanced infrastructure across Bodoland region",
      "Fostered inter-community harmony and peace"
    ],
    officialLink: "https://udd-latest.vercel.app/"
  },
  "moon-moon-brahma": {
    name: "Smt. Moon Moon Brahma",
    role: "Hon'ble Executive Member",
    subRole: "Urban Development Dept, BTC",
    img: "/images/leaders/moon_moon.jpg",
    theme: "purple",
    designation: "Executive Member (EM) for Urban Development",
    department: "Urban Development Department, Bodoland Territorial Council",
    jurisdiction: "All 9 Municipal Boards & Town & Country Planning in BTC",
    swornIn: "14 October 2025",
    bio: "Smt. Moon Moon Brahma is an esteemed Leader and Executive Member overseeing the high-visibility portfolios of Urban Development. A fierce advocate for clean water access, public waste integration, and safe urban neighborhoods, her leadership has consistently prioritized basic civic amenities, local drainage structures, and gender-inclusive municipal planning.",
    educationList: [
      "Post Graduate (Master of Arts) - Leadership & Civic Studies",
      "Diploma in Urban Governance Systems"
    ],
    focusAreas: [
      "Municipal Sanitation",
      "Urban Governance",
      "Gender Inclusivity",
      "Public Waste Integration",
      "Sustainable Civic Amenities"
    ],
    officeTitle: "Office of the Hon'ble Executive Member, BTC",
    officeLoc: "Urban Development Secretariat Office, CHD Campus, Kokrajhar, BTC, Assam",
    phone: "+91-3661-270114",
    email: "em-urbandev@btc.gov.in",
    careerHighlights: [
      "Executive Member, Bodoland Territorial Council (Urban Development)",
      "First Female Executive Member in BTC executive governance in 22 years",
      "Pioneered customized training programs under NULM",
      "Spearheaded the 'Clean BTC' civic campaign"
    ],
    responsibilities: [
      "Direct legislative oversight of Urban Development and Town Planning",
      "Formulation and implementation of composting protocols across BTC",
      "Securing municipal infrastructure and modern public conveniences",
      "Managing municipal boards welfare and sanitization teams"
    ],
    achievements: [
      "Eliminated structural bottlenecks for 9 Municipal Boards in BTC",
      "Pioneered the 'Clean Town - Green Town' municipal challenge",
      "Authorized localized garbage fleet in five municipal zones",
      "Promoted education and minority youth welfare under NULM"
    ],
    officialLink: "https://udd-latest.vercel.app/about"
  },
  "lankeshwar-owarie": {
    name: "Shri Lankeshwar Owarie",
    role: "Council Head of Department",
    subRole: "Urban Development Dept, BTC",
    img: "/images/leaders/lankeshwar.jpg",
    theme: "orange",
    designation: "Council Head of Department (CHD)",
    department: "Urban Development Department, Bodoland Territorial Council",
    jurisdiction: "Technical & Operational Management of 9 Municipal Boards",
    swornIn: "Operational Civil Lead Since Appointment",
    bio: "Shri Lankeshwar Owarie is one of the most respected planning minds in Western Assam. Serving as the Council Head of Department (CHD) for Urban Development, he brings an outstanding technical pedigree with a Master's degree in Regional Planning from Indian Institute of Technology (IIT) Kharagpur, managing technical assessments and physical master plans.",
    educationList: [
      "Master of Regional Planning (M.R.P.) - IIT Kharagpur (Batch 1990-91)",
      "Bachelor of Engineering (B.E. Civil) - Engineering & Spatial Design"
    ],
    focusAreas: [
      "Technical Appraisals",
      "BTC Master Blueprints",
      "Online Building Permissions",
      "Water Supply Rejuvenation",
      "GIS Spatial Mapping"
    ],
    officeTitle: "Office of the Council Head of Department (CHD), BTC",
    officeLoc: "Department of Urban Development of BTC, Kokrajhar, BTC, Assam",
    phone: "+91-3661-295055",
    email: "chd-urbandev@btc.gov.in",
    careerHighlights: [
      "Council Head of Department (CHD), Urban Development, BTC",
      "Highly accomplished regional planning expert spanning three decades",
      "Master architect of unified municipal building bylaws in BTC",
      "Technical advisor to BTC executive body and senior commissioners"
    ],
    responsibilities: [
      "Directing technical assessments and detailed project reports (DPRs)",
      "Enforcement of BTC Municipal building bylaws and spatial town planning",
      "Managing funds allocation and budgets for developmental projects",
      "Formulation of environmental zoning and municipal frameworks"
    ],
    achievements: [
      "Formulated and drafted the foundational BTC Urban Development Blueprint",
      "Coordinated the Online Building Permission System (OBPS) across BTC",
      "Designed the Kokrajhar Water Supply Rejuvenation engineering system",
      "Streamlined municipal land recording and spatial mapping via GIS tools"
    ],
    officialLink: "https://udd-latest.vercel.app/"
  }
};

export default function LeaderProfilePage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const leader = leadersData[slug] || leadersData["hagrama-mohilary"];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans select-none">
      <div className="sticky top-0 z-[110]">
        <UtilityBar />
        <Header />
      </div>

      {/* Banner Section matching the uploaded design exactly */}
      <section className="bg-gradient-to-r from-[#2563eb] via-[#1d4ed8] to-[#1e40af] text-white border-b border-blue-700 py-16 relative overflow-hidden shadow-md">
        {/* Traditional Bodo Aronai vertical pattern tiling horizontally */}
        <div 
          className="absolute inset-0 z-0 opacity-15 bg-repeat-x bg-center mix-blend-overlay"
          style={{ 
            backgroundImage: "url('/aronai.png')",
            backgroundSize: "auto 100%"
          }}
        />

        <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Back to Home top link matching the screenshot exactly */}
          <div className="mb-8 text-left">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm sm:text-base font-extrabold text-blue-100/90 hover:text-white transition-all tracking-wide group"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Home</span>
            </Link>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            {/* Left aligned Circular Avatar matching the design */}
            <div className="relative shrink-0 select-none">
              {/* Outer translucent blue ring border */}
              <div className="w-44 h-44 sm:w-52 sm:h-52 rounded-full p-2 bg-[#4f8eff]/35 border border-white/20 shadow-2xl flex items-center justify-center">
                {/* Inner solid white ring border */}
                <div className="w-full h-full rounded-full p-1.5 bg-white shadow-lg flex items-center justify-center">
                  {/* Image container */}
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <Image 
                      src={leader.img} 
                      alt={leader.name}
                      fill
                      unoptimized
                      className="object-cover animate-fade-in"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right aligned details panel */}
            <div className="space-y-4 text-center md:text-left flex-1 max-w-3xl">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight text-white drop-shadow-sm font-sans">
                {leader.name}
              </h1>
              
              <div className="space-y-1">
                <p className="text-xl sm:text-2xl font-bold text-white/95 tracking-wide">
                  {leader.role === "Visionary Leader & CEM" ? "Chief Executive" : leader.role}
                </p>
                <p className="text-base sm:text-lg text-blue-100/80 font-semibold tracking-wide">
                  {leader.role === "Visionary Leader & CEM" ? "Bodoland Territorial Council (BTC)" : leader.department}
                </p>
              </div>

               {/* Modern Pill Badges at the bottom matching the design */}
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 pt-2">
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-xs sm:text-sm font-extrabold text-white backdrop-blur-md transition-colors shadow-xs">
                  <MapPin className="w-4 h-4 text-blue-200 shrink-0" />
                  <span>{leader.role === "Visionary Leader & CEM" ? "Bodoland Territorial Council" : leader.jurisdiction.split('under')[0].split('&')[0].trim()}</span>
                </div>
                
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/10 text-xs sm:text-sm font-extrabold text-white backdrop-blur-md transition-colors shadow-xs">
                  <Calendar className="w-4 h-4 text-blue-200 shrink-0" />
                  <span>{leader.role === "Visionary Leader & CEM" ? "Multiple Terms Since 2005" : leader.swornIn}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Details Grid - TWO COLUMNS matching the image layout */}
      <main id="leader-main-content" className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN (Span 8): Biography, Education, Career Highlights, Key Responsibilities, Key Achievements */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Biography Card */}
            <div id="leader-biography-card" className="bg-white rounded-xl shadow-[0_-12px_24px_rgba(0,0,0,0.04),0_-4px_10px_rgba(0,0,0,0.03)] border border-slate-100 p-6 sm:p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-md">
                  <User className="w-5.5 h-5.5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-none">Biography</h2>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                {leader.bio}
              </p>
            </div>

            {/* Education Card */}
            <div id="leader-education-card" className="bg-white rounded-xl shadow-[-12px_0_24px_rgba(0,0,0,0.04),-4px_0_10px_rgba(0,0,0,0.03)] border border-slate-100 p-6 sm:p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-md">
                  <GraduationCap className="w-5.5 h-5.5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-none">Education</h2>
              </div>
              <div className="flex flex-col gap-4">
                {leader.educationList.map((edu, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="w-2.5 h-2.5 rounded-full border-2 border-[#2563eb] bg-transparent mt-1.5 shrink-0" />
                    <span className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed">
                      {edu}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Highlights Card */}
            <div id="leader-career-highlights-card" className="bg-white rounded-xl shadow-[-12px_0_24px_rgba(0,0,0,0.04),-4px_0_10px_rgba(0,0,0,0.03)] border border-slate-100 p-6 sm:p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Award className="w-5.5 h-5.5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-none">Career Highlights</h2>
              </div>
              <div className="flex flex-col gap-4">
                {leader.careerHighlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="w-2.5 h-2.5 rounded-full border-2 border-[#2563eb] bg-transparent mt-1.5 shrink-0" />
                    <span className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed">
                      {highlight}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Responsibilities Card */}
            <div id="leader-responsibilities-card" className="bg-white rounded-xl shadow-[-12px_0_24px_rgba(0,0,0,0.04),-4px_0_10px_rgba(0,0,0,0.03)] border border-slate-100 p-6 sm:p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Building2 className="w-5.5 h-5.5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-none">Key Responsibilities</h2>
              </div>
              <div className="flex flex-col gap-4">
                {leader.responsibilities.map((resp, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="w-2.5 h-2.5 rounded-full border-2 border-[#2563eb] bg-transparent mt-1.5 shrink-0" />
                    <span className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed">
                      {resp}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Achievements Card */}
            <div id="leader-achievements-card" className="bg-white rounded-xl shadow-[-12px_0_24px_rgba(0,0,0,0.04),-4px_0_10px_rgba(0,0,0,0.03)] border border-slate-100 p-6 sm:p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Target className="w-5.5 h-5.5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-none">Key Achievements</h2>
              </div>
              <div className="flex flex-col gap-4">
                {leader.achievements.map((ach, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <span className="w-2.5 h-2.5 rounded-full border-2 border-[#2563eb] bg-transparent mt-1.5 shrink-0" />
                    <span className="text-slate-700 text-sm sm:text-base font-semibold leading-relaxed">
                      {ach}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN (Span 4): Focus Areas, Contact, Official Links */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Focus Areas Card */}
            <div id="leader-focus-areas-card" className="bg-white rounded-xl shadow-[0_-12px_24px_rgba(0,0,0,0.04),0_-4px_10px_rgba(0,0,0,0.03)] border border-slate-100 p-6 sm:p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Target className="w-5.5 h-5.5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-none">Focus Areas</h2>
              </div>
              
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {leader.focusAreas.map((area, index) => (
                  <div 
                    key={index} 
                    className="border border-[#2563eb] text-[#2563eb] px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold tracking-wide hover:bg-blue-50/50 transition-colors"
                  >
                    {area}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Card */}
            <div id="leader-contact-card" className="bg-white rounded-xl shadow-[-12px_0_24px_rgba(0,0,0,0.04),-4px_0_10px_rgba(0,0,0,0.03)] border border-slate-100 p-6 sm:p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Mail className="w-5.5 h-5.5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-none">Contact</h2>
              </div>

              <div className="flex flex-col gap-5">
                {/* Office Title & Location */}
                <div className="flex items-start gap-4">
                  <Building2 className="w-5 h-5 text-[#2563eb] shrink-0 mt-0.5" />
                  <div className="flex flex-col gap-1">
                    <h3 className="font-extrabold text-slate-800 text-sm sm:text-base leading-tight">
                      {leader.officeTitle}
                    </h3>
                    <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold">
                      {leader.officeLoc}
                    </p>
                  </div>
                </div>

                {/* Telephone */}
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-[#2563eb] shrink-0" />
                  <span className="font-extrabold text-slate-800 text-sm sm:text-base">
                    {leader.phone}
                  </span>
                </div>

                {/* Email */}
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[#2563eb] shrink-0" />
                  <span className="font-extrabold text-slate-800 text-sm sm:text-base select-all hover:text-blue-600 transition-colors cursor-pointer">
                    {leader.email}
                  </span>
                </div>
              </div>
            </div>

            {/* Official Links Card */}
            <div id="leader-official-links-card" className="bg-white rounded-xl shadow-[-12px_0_24px_rgba(0,0,0,0.04),-4px_0_10px_rgba(0,0,0,0.03)] border border-slate-100 p-6 sm:p-8 flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-[#2563eb] text-white flex items-center justify-center shrink-0 shadow-md">
                  <Globe className="w-5.5 h-5.5" />
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-slate-800 tracking-tight leading-none">Official Links</h2>
              </div>

              <a 
                href={leader.officialLink}
                target="_blank"
                rel="noreferrer"
                className="w-full flex items-center justify-between px-4 py-3.5 bg-blue-50/50 hover:bg-blue-50 text-[#2563eb] font-extrabold text-sm sm:text-base rounded-xl border border-blue-100 transition-all shadow-xs"
              >
                <span>Visit Official Page</span>
                <ExternalLink className="w-4.5 h-4.5" />
              </a>
            </div>

          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
