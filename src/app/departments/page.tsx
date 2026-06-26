"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Building2, 
  Users, 
  FileText, 
  Phone, 
  Mail, 
  User, 
  MapPin, 
  ChevronRight,
  ShieldCheck
} from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface Personnel {
  name: string;
  designation: string;
  email: string;
  phone: string;
}

interface Department {
  id: string;
  title: string;
  tagline: string;
  category: string;
  functions: string[];
  contactEmail: string;
  contactPhone: string;
  location: string;
  personnel: Personnel[];
}

const ALL_DEPARTMENTS: Department[] = [
  {
    id: 'dma',
    title: 'Municipal Administration',
    tagline: 'Oversees all municipal boards and their administrative functions',
    category: 'Administration',
    functions: [
      'Municipal governance',
      'Administrative oversight',
      'Policy implementation',
      'ULB coordination'
    ],
    contactEmail: 'municipal@udd.bodoland.gov.in',
    contactPhone: '03661-234502',
    location: 'Block B, UDD Office, Kokrajhar',
    personnel: [
      {
        name: 'Dr. Rajesh Kumar',
        designation: 'Director, UDD',
        email: 'director@udd.bodoland.gov.in',
        phone: '03661-234500'
      },
      {
        name: 'Shri Bipul Sharma',
        designation: 'Superintendent (Municipal)',
        email: 'super.municipal@udd.bodoland.gov.in',
        phone: '03661-234502'
      }
    ]
  },
  {
    id: 'sbm',
    title: 'Sanitation & Solid Waste Management',
    tagline: 'Manages sanitation services and solid waste management across urban areas',
    category: 'Sanitation',
    functions: [
      'Waste collection',
      'Disposal management',
      'Sanitation services',
      'Clean city initiatives'
    ],
    contactEmail: 'sanitation@udd.bodoland.gov.in',
    contactPhone: '03661-234503',
    location: 'Block C, UDD Office, Kokrajhar',
    personnel: [
      {
        name: 'Dr. J. Basumatary',
        designation: 'Chief Sanitation Coordinator',
        email: 'sanitation@udd.bodoland.gov.in',
        phone: '03661-234503'
      }
    ]
  },
  {
    id: 'tcp',
    title: 'Urban Planning & Development',
    tagline: 'Responsible for urban planning, infrastructure development, and city beautification projects',
    category: 'Town Planning',
    functions: [
      'Urban planning',
      'Master plan preparation',
      'Infrastructure development',
      'Smart city initiatives'
    ],
    contactEmail: 'planning@udd.bodoland.gov.in',
    contactPhone: '03661-234501',
    location: 'Block A, UDD Office, Kokrajhar',
    personnel: [
      {
        name: 'Smt. Anjali Devi',
        designation: 'Additional Director (Planning)',
        email: 'addl.director.planning@udd.bodoland.gov.in',
        phone: '03661-234501'
      }
    ]
  },
  {
    id: 'infra',
    title: 'Urban Infrastructure & Engineering',
    tagline: 'Building high-grade structural pathways, drainage grids, and municipal buildings',
    category: 'Infrastructure',
    functions: [
      'Road paving setups',
      'Concrete pedestrian lanes',
      'Storm water drains engineering',
      'Street lighting logistics'
    ],
    contactEmail: 'engg-urbandev@uddbtc.org',
    contactPhone: '+91-3661-295056',
    location: 'Engineering Cell, CHD Campus, Kokrajhar',
    personnel: [
      {
        name: 'Shri A. K. Boro',
        designation: 'Superintending Engineer (Urban Projects)',
        email: 'engg-urbandev@uddbtc.org',
        phone: '+91-3661-295056'
      }
    ]
  },
  {
    id: 'sulm',
    title: 'State Urban Livelihoods Wing (SULM)',
    tagline: 'DAY-NULM execution for poverty alleviation and self-employment funding structures',
    category: 'Social Welfare',
    functions: [
      'Capital subsidies disbursement',
      'Skill certificate testing',
      'Night shelters supervision',
      'Street vendor records'
    ],
    contactEmail: 'sulm-livelihood@uddbtc.org',
    contactPhone: '+91-3661-295484',
    location: 'SULM Operations Wing, CHD Campus, Kokrajhar',
    personnel: [
      {
        name: 'Smt. R. Narzary',
        designation: 'Nodal Officer & State Program Manager',
        email: 'sulm-livelihood@uddbtc.org',
        phone: '+91-3661-295484'
      }
    ]
  },
  {
    id: 'egov',
    title: 'e-Governance & Digital Services',
    tagline: 'Technological setups for online licenses, property taxes, and system transparency logs',
    category: 'Digital Services',
    functions: [
      'Unified system portals hosting',
      'Online Trade licenses renewals',
      'Automatic billing queries',
      'Digital Grievance channels'
    ],
    contactEmail: 'itcell@uddbtc.org',
    contactPhone: '+91-3661-295057',
    location: 'IT Operations Lab, Secretariat, Kokrajhar',
    personnel: [
      {
        name: 'Shri D. Brahma',
        designation: 'Joint Director & IT Head',
        email: 'itcell@uddbtc.org',
        phone: '+91-3661-295057'
      }
    ]
  }
];

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <div className="sticky top-0 z-[110]">
        <UtilityBar />
        <Header />
      </div>

      {/* Styled Banner Section matching exact design layout */}
      <section className="relative py-12 overflow-hidden bg-emerald-950 text-white border-t-[5px] border-[#ea580c] border-b border-emerald-900/40 shadow-md">
        {/* Traditional Bodo Aronai vertical pattern tiling horizontally */}
        <div 
          className="absolute inset-0 z-0 opacity-35 bg-repeat-x bg-center"
          style={{ 
            backgroundImage: "url('/aronai.png')",
            backgroundSize: "auto 100%"
          }}
        />
        {/* Rich Green Overlay to match screenshot exactly */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0b3c22]/75 via-[#072d19]/60 to-[#0e4d2b]/80 mix-blend-multiply" />

        <div className="max-w-7xl mx-auto relative z-20 px-4 sm:px-6 md:px-8 flex flex-col md:flex-row items-center gap-5 justify-start">
          {/* Circular badge container exactly like the screenshot */}
          <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-lg shrink-0">
            <Building2 className="w-7 h-7 text-white stroke-[2]" />
          </div>
          
          <div className="text-center md:text-left min-w-0">
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Departments & Personnel
            </h1>
            <p className="mt-1.5 text-slate-200 text-sm sm:text-base leading-relaxed">
              Organizational structure and key personnel of UDD, BTR
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Workspace - Layout set to spacious max-w-7xl */}
      <main className="flex-grow max-w-7xl w-full mx-auto p-4 sm:p-6 md:p-8">

        {/* List of Elegant, High-contrast increased cards */}
        <div className="space-y-12 pb-16 pt-4">
          {ALL_DEPARTMENTS.map((dept) => {
            return (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                key={dept.id}
                className="bg-white border-2 border-emerald-500/30 border-l-[4px] border-l-[#2ecc71] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              >
                {/* Card Header with larger building icon, fonts, and padding */}
                <div className="bg-[#eafaf1] border-b-2 border-emerald-200/65 px-8 py-5 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#2ecc71] flex items-center justify-center text-white shadow-sm shrink-0">
                    <Building2 className="w-6 h-6 text-white stroke-[2]" />
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-slate-850 tracking-tight">
                    {dept.title}
                  </h2>
                </div>

                <div className="p-8">
                  {/* Tagline text below the header line with increased font size */}
                  <p className="text-slate-600 text-base sm:text-lg font-bold mb-8">
                    {dept.tagline}
                  </p>

                  {/* Functions & Contact grid column splits with larger gap */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    
                    {/* Left Block (Functions) - Blue themed container with expanded elements */}
                    <div className="bg-[#f0f7ff] border border-[#3b82f6]/30 border-l-[4px] border-l-[#3b82f6] p-4.5 rounded-lg flex flex-col justify-start">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-full bg-[#3b82f6] text-white flex items-center justify-center shadow-sm shrink-0">
                          <FileText className="w-5.5 h-5.5 text-white" />
                        </div>
                        <h3 className="font-extrabold text-[#1e3a8a] text-lg sm:text-xl uppercase tracking-wider">
                          Functions
                        </h3>
                      </div>
                      <p className="text-slate-700 text-base font-bold leading-relaxed">
                        {dept.functions.join(', ')}
                      </p>
                    </div>

                    {/* Right Block (Contact Information) - Light orange cream container */}
                    <div className="bg-[#fffdf5] border border-[#f97316]/30 border-l-[4px] border-l-[#f97316] p-4.5 rounded-lg">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-full bg-[#f97316] text-white flex items-center justify-center shadow-sm shrink-0">
                          <Phone className="w-5.5 h-5.5 text-white" />
                        </div>
                        <h3 className="font-extrabold text-[#7c2d12] text-lg sm:text-xl uppercase tracking-wider">
                          Contact Information
                        </h3>
                      </div>

                      {/* Detail Capsules with increased text & padding */}
                      <div className="space-y-2.5 text-sm sm:text-base">
                        <div className="bg-white/90 p-2.5 rounded-md flex items-center gap-3 text-slate-755 font-bold shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                          <Mail className="w-4 h-4 text-orange-600 shrink-0" />
                          <span className="truncate text-slate-700">{dept.contactEmail}</span>
                        </div>
                        <div className="bg-white/90 p-2.5 rounded-md flex items-center gap-3 text-slate-755 font-bold shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                          <Phone className="w-4 h-4 text-orange-600 shrink-0" />
                          <span className="text-slate-700">{dept.contactPhone}</span>
                        </div>
                        <div className="bg-white/90 p-2.5 rounded-md flex items-center gap-3 text-slate-755 font-bold shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                          <MapPin className="w-4 h-4 text-orange-600 shrink-0" />
                          <span className="truncate text-slate-700">{dept.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Personnel Section with increased visual sizes */}
                  {dept.personnel.length > 0 && (
                    <div className="pt-8">
                      <div className="flex items-center gap-3.5 mb-6">
                        <div className="w-11 h-11 rounded-full bg-[#9b59b6] text-white flex items-center justify-center shadow-sm shrink-0">
                          <Users className="w-5.5 h-5.5 text-white" />
                        </div>
                        <h3 className="font-extrabold text-slate-800 text-xl uppercase tracking-wider">
                          Personnel
                        </h3>
                      </div>

                      {/* Purple sub cards with border-purple-400 and custom border-l-[4px] */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {dept.personnel.map((person, index) => (
                          <div 
                            key={index}
                            className="bg-[#faf5ff] border border-purple-400 border-l-[4px] border-l-[#8b5cf6] p-4.5 rounded-lg flex items-start gap-4 shadow-sm hover:border-purple-300 transition-all"
                          >
                            <div className="w-12 h-12 rounded-full bg-[#8b5cf6] text-white flex items-center justify-center shrink-0 shadow-sm">
                              <User className="w-6 h-6 text-white" />
                            </div>
                            <div className="min-w-0 flex-grow text-sm sm:text-base">
                              <h4 className="font-extrabold text-slate-800 text-lg sm:text-xl leading-tight">
                                {person.name}
                              </h4>
                              <span className="text-purple-600 font-extrabold text-xs sm:text-sm block mt-1.5 uppercase tracking-wide">
                                {person.designation}
                              </span>

                              <div className="space-y-2 mt-3">
                                <div className="bg-white/90 py-1.5 px-3 rounded-md flex items-center gap-2.5 font-bold text-xs sm:text-sm text-slate-700 shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                                  <Mail className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                                  <span className="truncate text-slate-600">{person.email}</span>
                                </div>
                                <div className="bg-white/90 py-1.5 px-3 rounded-md flex items-center gap-2.5 font-bold text-xs sm:text-sm text-slate-700 shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                                  <Phone className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                                  <span className="text-slate-600">{person.phone}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>
              </motion.div>
            );
          })}
        </div>

      </main>

      <Footer />
    </div>
  );
}
