"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Heart, 
  Shield, 
  Sparkles, 
  Target, 
  CircleCheckBig,
  Home,
  ChevronRight
} from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ObjectivesPage() {
  // Official Core Objectives Data
  const coreObjectives = [
    {
      id: 1,
      text: "To facilitate ULB's and Development Authorities to implement Master plan for orderly development of urban areas.",
      icon: Building2,
      color: "from-blue-500 to-blue-600"
    },
    {
      id: 2,
      text: "To monitor the growth of new urban areas in BTC and include them under planning procedures to ensure their efficient and orderly growth.",
      icon: TrendingUp,
      color: "from-green-500 to-green-600"
    },
    {
      id: 3,
      text: "To facilitate capacity building of officials and other employees for increasing efficiency to understand ever-changing policies and paradigms of urban governance.",
      icon: Users,
      color: "from-purple-500 to-purple-600"
    },
    {
      id: 4,
      text: "To facilitate planning process to make every town of BTC slum-free with better hygiene & sanitation system to improve living environment.",
      icon: Heart,
      color: "from-pink-500 to-pink-600"
    },
    {
      id: 5,
      text: "To facilitate the proper implementation of urban services and infrastructure schemes mandated under this Department.",
      icon: Shield,
      color: "from-orange-500 to-orange-600"
    },
    {
      id: 6,
      text: "To provide technical support to Urban Local Bodies for better urban management and service provision.",
      icon: Sparkles,
      color: "from-indigo-500 to-indigo-600"
    },
    {
      id: 7,
      text: "To formulate Master Plans to ensure sustainable urban development in notified urban areas of BTC.",
      icon: Target,
      color: "from-teal-500 to-teal-600"
    }
  ];

  // Official Main Areas of Focus
  const mainAreasOfFocus = [
    "Urban planning including town planning",
    "Regulation of land-use and construction of buildings",
    "Planning for economic and social development",
    "Roads and bridges",
    "Water supply for domestic, industrial and commercial purposes",
    "Public health, sanitation conservancy and solid waste management",
    "Fire services",
    "Urban forestry, protection of the environment and promotion of ecological aspects",
    "Safeguarding the interests of weaker sections of society, including the handicapped and mentally retarded"
  ];

  // Official Development Initiatives
  const developmentInitiatives = [
    "Slum improvement and upgradation",
    "Urban poverty alleviation",
    "Provision of urban amenities and facilities such as parks, gardens, playgrounds",
    "Promotion of cultural, educational and aesthetic aspects",
    "Burials and burial grounds; cremations, cremation grounds; and electric crematoriums",
    "Cattle pounds; prevention of cruelty to animals",
    "Vital statistics including registration of births and deaths",
    "Public amenities including street lighting, parking lots, bus stops and public conveniences",
    "Regulation of slaughter houses and tanneries"
  ];

  return (
    <div id="objectives-root-container" className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Dynamic unified header bars */}
      <div className="sticky top-0 z-[110] shadow-xs">
        <UtilityBar />
        <Header />
      </div>

      {/* Styled Banner Section with traditional Bodo Aronai horizontal pattern */}
      <section id="hero-banner-section" className="relative py-16 overflow-hidden bg-slate-950 text-white border-b border-purple-950/30 shadow-lg text-center">
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
            {/* Top Emblem and Icon Container */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 shadow-2xl ring-4 ring-white/20 backdrop-blur-xs mb-6"
            >
              <Target className="w-12 h-12 text-white" />
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-sm text-white"
            >
              UDD Objectives
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-xl text-sky-100 max-w-3xl mx-auto drop-shadow-xs font-normal leading-relaxed"
            >
              Our mission to build sustainable, inclusive, and well-planned urban areas across Bodoland Territorial Council
            </motion.p>
            
            {/* CHD Details Badge */}
            <motion.div 
              initial={{ y: 15, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4 }}
              className="mt-6 flex items-center justify-center gap-4 text-sm text-sky-200"
            >
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm py-1.5 px-4 rounded-full border border-white/10 shadow-sm">
                <Building2 className="w-5 h-5 text-emerald-300" />
                <span className="font-semibold tracking-wide">Led by CHD: Sri Lankeswar Owarie</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Objectives Section */}
      <section id="core-objectives-section" className="py-16 bg-gradient-to-br from-white via-blue-50/50 to-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 shadow-xl ring-4 ring-blue-100 mb-2">
              <CircleCheckBig className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Core Objectives
            </h2>
            <p className="text-gray-650 font-medium max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Seven pillars guiding our urban development strategy
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreObjectives.map((item, index) => {
              const IconComponent = item.icon;
              return (
                <motion.div 
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border-l-4 border-orange-500 hover:-translate-y-2 flex flex-col justify-between"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-6 h-full flex flex-col justify-between gap-6">
                    <div className="flex items-start gap-4">
                      {/* Left Gradient Icon */}
                      <div className={`flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg ring-4 ring-white group-hover:scale-110 transition-transform duration-305`}>
                        <IconComponent className="w-7 h-7 text-white" />
                      </div>
                      
                      {/* Right Text details */}
                      <div className="flex-1 space-y-3">
                        {/* Number Indicator badge */}
                        <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-br from-orange-100 to-orange-200 text-orange-700 font-extrabold text-sm shadow-xs">
                          {item.id}
                        </div>
                        <p className="text-slate-700 font-semibold leading-relaxed text-sm sm:text-base">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Areas of Focus Section */}
      <section id="focus-areas-section" className="py-16 bg-gradient-to-br from-orange-50/50 via-white to-blue-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-green-700 shadow-xl ring-4 ring-green-100 mb-2">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Main Areas of Focus
            </h2>
            <p className="text-gray-650 font-medium max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Key domains under the Urban Development Department
            </p>
          </div>

          {/* Bulleted Grid cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {mainAreasOfFocus.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-xl border-t-4 border-green-500 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  {/* Glowing Green Bullet Dot */}
                  <div className="flex-shrink-0 w-3 h-3 rounded-full bg-green-500 mt-2 shadow-xs group-hover:scale-125 transition-transform" />
                  <p className="text-slate-700 font-bold leading-relaxed flex-1 text-sm sm:text-base">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Initiatives Section */}
      <section id="initiatives-section" className="py-16 bg-gradient-to-br from-blue-50/50 via-white to-purple-50/50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 shadow-xl ring-4 ring-purple-100 mb-2">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">
              Development Initiatives
            </h2>
            <p className="text-gray-650 font-medium max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
              Comprehensive programs to develop UDD infrastructure
            </p>
          </div>

          {/* Numbered Grid entries */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {developmentInitiatives.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.04 }}
                className="group bg-white rounded-xl p-5 shadow-sm hover:shadow-xl border-l-4 border-purple-500 hover:-translate-y-1 transition-all duration-305"
              >
                <div className="flex items-start gap-4">
                  {/* Circular Index Number Container */}
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center text-purple-700 font-extrabold text-xs shadow-xs group-hover:scale-110 transition-transform">
                    {index + 1}
                  </div>
                  <p className="text-slate-700 font-bold leading-relaxed flex-1 text-sm sm:text-base pt-0.5">
                    {item}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Call to Action Section */}
      <section id="banner-action-section" className="py-16 bg-gradient-to-br from-blue-950 via-blue-800 to-orange-950 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-orange-400/10 via-transparent to-transparent z-0" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-xs shadow-2xl ring-4 ring-white/20 mb-6"
          >
            <Building2 className="w-10 h-10 text-orange-305" />
          </motion.div>
          
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
            Building Better Urban Spaces
          </h2>
          
          <p className="text-base sm:text-lg text-orange-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Through systematic planning, efficient implementation, and continuous monitoring, we strive to create sustainable urban ecosystems for all citizens of BTC.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              id="objectives-learn-more-btn"
              href="/about" 
              className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-blue-900 font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Learn More About UDD
            </Link>
            <Link 
              id="objectives-get-in-touch-btn"
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
