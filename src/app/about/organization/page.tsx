"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { 
  Building2, 
  Users, 
  Award, 
  ChevronDown, 
  Briefcase, 
  Network,
  Home,
  ChevronRight,
  Sparkles,
  MapPin
} from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface Office {
  name: string;
  color: string;
  positions: string[];
}

export default function OrganizationPage() {
  const [activeOffice, setActiveOffice] = useState<string | null>(null);

  const toggleOffice = (officeName: string) => {
    setActiveOffice(prev => prev === officeName ? null : officeName);
  };

  // Official Regional Offices and Positions data matching the source exactly
  const regionalOffices: Office[] = [
    {
      name: "Deputy Director Town & Country Planning, Kokrajhar",
      color: "from-blue-500 to-blue-600",
      positions: [
        "Assistant Director",
        "Research Assistant",
        "Planning Assistant",
        "Junior Engineer",
        "Draftsman Grade I",
        "UDA",
        "Draftsman Grade II",
        "LDA",
        "Investigator",
        "Tracer",
        "Driver",
        "Duftry",
        "Treasury Peon",
        "Khalasi",
        "Ferro Printer",
        "Peon",
        "Chowkidar"
      ]
    },
    {
      name: "Assistant Director Town & Country Planning, Chirang",
      color: "from-green-500 to-green-600",
      positions: ["Junior Engineer", "UDA", "LDA"]
    },
    {
      name: "Assistant Director Town & Country Planning, Baksa",
      color: "from-purple-500 to-purple-600",
      positions: ["Junior Engineer", "UDA", "LDA"]
    },
    {
      name: "Assistant Director Town & Country Planning, Udalguri",
      color: "from-orange-500 to-orange-600",
      positions: ["Junior Engineer", "UDA", "LDA"]
    }
  ];

  return (
    <div id="org-root-container" className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-purple-600 selection:text-white">
      {/* Sticky Top Header Elements */}
      <div className="sticky top-0 z-[110] shadow-xs">
        <UtilityBar />
        <Header />
      </div>

      {/* Styled Banner Section with traditional Bodo Aronai horizontal pattern */}
      <section id="org-hero-section" className="relative py-16 overflow-hidden bg-slate-950 text-white border-b border-purple-950/30 shadow-lg text-center">
        {/* Traditional Bodo Aronai vertical pattern tiling horizontally */}
        <div 
          className="absolute inset-0 z-0 opacity-45 bg-repeat-x bg-center"
          style={{ 
            backgroundImage: "url('/aronai.png')",
            backgroundSize: "auto 100%"
          }}
        />
        {/* Light Purple Overlay with decreased intensity */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#21113a]/70 via-[#180a2d]/60 to-[#2d114c]/70 mix-blend-multiply" />
        
        <div className="max-w-4xl mx-auto relative z-20 px-4">
          <div className="text-center">
            {/* Center Emblem Container */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow-2xl ring-4 ring-white/20 backdrop-blur-xs mb-6"
            >
              <Network className="w-12 h-12 text-white" />
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-sm text-white"
            >
              Organizational Structure
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-xl text-sky-100 max-w-3xl mx-auto drop-shadow-xs font-normal leading-relaxed"
            >
              Hierarchical framework of Urban Development Department, BTC
            </motion.p>
          </div>
        </div>
      </section>

      {/* Department Description Section */}
      <section id="hierarchy-desc-section" className="py-12 bg-gradient-to-br from-white via-blue-50/40 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-md p-8 border-l-4 border-blue-500 hover:shadow-lg transition-shadow">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              {/* Left Blue Building Emblem */}
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-lg ring-4 ring-blue-100">
                <Building2 className="w-8 h-8 text-white" />
              </div>
              
              {/* Hierarchical Text Explanations */}
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3 tracking-tight">
                  Department Hierarchy
                </h2>
                <p className="text-slate-650 leading-relaxed font-medium text-sm sm:text-base">
                  The Urban Development Department operates under a structured organizational framework headed by the Council Head of Department/Joint Director. The department extends its operations across four key districts through regional offices, ensuring comprehensive urban planning and development throughout the Bodoland Territorial Council.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership-section" className="py-16 bg-gradient-to-br from-purple-50/50 via-white to-blue-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 shadow-xl ring-4 ring-purple-100 mb-2">
              <Award className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Leadership
            </h2>
          </div>

          {/* Centralized Head Badge */}
          <div className="flex flex-col items-center justify-center">
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white rounded-2xl shadow-xl p-8 max-w-md w-full transform hover:scale-105 transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                {/* Emblem Backdrop */}
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-4 ring-white/30 shrink-0">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight">Council Head of Department</h3>
                  <p className="text-purple-200 text-sm font-bold mt-1">Joint Director</p>
                </div>
              </div>

              {/* Sub Info Container */}
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <p className="text-sm text-purple-100 font-extrabold mb-1">Top Administrative Authority</p>
                <p className="text-xs text-purple-200 font-semibold leading-relaxed">
                  Oversees all urban development activities across BTC
                </p>
              </div>
            </motion.div>

            {/* Connecting Vertical Bar resembling visual tree hierarchy */}
            <div className="flex justify-center my-6">
              <div className="w-1.5 h-16 bg-gradient-to-b from-purple-600 to-blue-500 rounded-full shadow-xs" />
            </div>
          </div>
        </div>
      </section>

      {/* Regional Offices Tree Accordions */}
      <section id="regional-offices-structure-section" className="py-16 bg-gradient-to-br from-white via-purple-50/30 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header detail */}
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-xl ring-4 ring-blue-100 mb-2">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Regional Offices
            </h2>
            <p className="text-slate-650 font-medium max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Click on any office to view its organizational structure
            </p>
          </div>

          {/* List Accordions Grid */}
          <div id="accordions-container" className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {regionalOffices.map((office, rankIdx) => {
              const borderThemeColor = office.color.replace("from-", "border-").split(" ")[0];
              const isExpanded = activeOffice === office.name;

              return (
                <div 
                  key={rankIdx} 
                  className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-100"
                >
                  {/* Interactive Button Bar Header */}
                  <button 
                    onClick={() => toggleOffice(office.name)}
                    className="w-full p-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors gap-4 select-none"
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-4 text-left">
                      {/* Logo Icon on Left */}
                      <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${office.color} flex items-center justify-center shadow-lg ring-4 ring-white shrink-0`}>
                        <Building2 className="w-7 h-7 text-white" />
                      </div>
                      
                      {/* Name & Positions Count stats */}
                      <div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
                          {office.name}
                        </h3>
                        <p className="text-sm text-slate-500 font-semibold mt-1 flex items-center gap-1.5">
                          <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" />
                          {office.positions.length} Positions Categories
                        </p>
                      </div>
                    </div>

                    {/* Chevron Indicator Rotate Trigger */}
                    <div className={`w-10 h-10 rounded-full bg-slate-150 hover:bg-slate-200 flex items-center justify-center text-slate-400 transform transition-transform duration-300 ${isExpanded ? "rotate-180 text-orange-600 bg-orange-100" : ""}`}>
                      <ChevronDown className="w-6 h-6" />
                    </div>
                  </button>

                  {/* Expandable Accordion Body Content Panel */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className={`border-t-4 border-l-4 bg-gradient-to-br from-slate-50 via-white to-slate-50/50 p-6 ${borderThemeColor}`}>
                          <h4 className="text-xs font-bold text-[#f26522] uppercase tracking-wider mb-4 flex items-center gap-1.5">
                            <Sparkles className="w-4 h-4 text-orange-500" />
                            Team Structure
                          </h4>
                          
                          {/* Inside Grid Positions category bullets */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {office.positions.map((pos, bulletIdx) => (
                              <div 
                                key={bulletIdx}
                                className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-xs hover:shadow-md transition-all duration-200 group border border-slate-100"
                              >
                                {/* Circle counter */}
                                <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${office.color} flex items-center justify-center text-white text-xs font-extrabold group-hover:scale-110 transition-transform shrink-0`}>
                                  {bulletIdx + 1}
                                </div>
                                <span className="text-sm text-slate-700 font-semibold">
                                  {pos}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Numeric Stats Counters Section */}
      <section id="org-numeric-stats-section" className="py-12 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            
            {/* Stat Item 1 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-blue-500 hover:-translate-y-1.5 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-md ring-4 ring-blue-100">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-1">4</h3>
              <p className="text-sm font-semibold text-slate-500">Regional Offices</p>
            </div>

            {/* Stat Item 2 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-green-500 hover:-translate-y-1.5 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-md ring-4 ring-green-100">
                  <Users className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-1">25+</h3>
              <p className="text-sm font-semibold text-slate-500">Team Members</p>
            </div>

            {/* Stat Item 3 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-purple-500 hover:-translate-y-1.5 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-md ring-4 ring-purple-100">
                  <Briefcase className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-1">17</h3>
              <p className="text-sm font-semibold text-slate-500">Position Categories</p>
            </div>

            {/* Stat Item 4 */}
            <div className="bg-white rounded-xl shadow-md p-6 border-t-4 border-orange-500 hover:-translate-y-1.5 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md ring-4 ring-orange-100">
                  <Award className="w-6 h-6 text-white" />
                </div>
              </div>
              <h3 className="text-3xl font-extrabold text-slate-900 mb-1">9</h3>
              <p className="text-sm font-semibold text-slate-500">Urban Local Bodies</p>
            </div>

          </div>
        </div>
      </section>

      {/* Call To Action bottom Banner segment */}
      <section id="org-action-banner" className="py-16 bg-gradient-to-br from-purple-950 via-blue-900 to-indigo-950 text-white text-center relative overflow-hidden">
        {/* Decorative mask backgrounds */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-blue-400/10 via-transparent to-transparent z-0" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xs shadow-2xl ring-4 ring-white/20 mb-6"
          >
            <Network className="w-10 h-10 text-blue-300" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Working Together for Urban Excellence
          </h2>
          
          <p className="text-base sm:text-lg text-blue-200 mb-8 max-w-2xl mx-auto leading-relaxed">
            Our dedicated team across all regional offices works collaboratively to ensure efficient urban planning and development throughout BTC.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* View Departments link routes to the core sub-route or about homepage */}
            <Link 
              id="learn-more-udd-btn"
              href="/about" 
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-900 font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Learn More About UDD
            </Link>
            <Link 
              id="get-in-touch-btn"
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Dynamic footer element */}
      <Footer />
    </div>
  );
}
