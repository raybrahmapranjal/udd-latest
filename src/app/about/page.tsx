"use client";
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Building, 
  Target, 
  Users, 
  Award, 
  ChevronRight, 
  FileText,
  Eye,
  TrendingUp,
  MapPin
} from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <div className="sticky top-0 z-[110]">
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
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight text-white font-sans drop-shadow-sm mt-4">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-sky-100 max-w-3xl mx-auto drop-shadow-xs font-normal leading-relaxed mt-4">
            Committed to sustainable urban development and improving quality of life across Bodoland Territorial Region
          </p>
        </div>
      </section>

      {/* Main Content Areas with Separate Visual Sections exactly matching screenshots */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Section 1: Our Vision & Our Mission side-by-side (Image 1) */}
        <section id="vision-mission-section" className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* left blue theme box */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-blue-50/50 border border-blue-100 border-l-4 border-l-[#2563EB] rounded-2xl p-8 sm:p-10 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 bg-[#2563EB] rounded-full flex items-center justify-center text-white shadow-lg shadow-blue-500/15">
                <Eye className="w-7 h-7" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">
                  Our Vision
                </h3>
                <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
                  To achieve quality of life for all citizens, particularly focusing on the weaker sections and women.
                </p>
              </div>
            </div>
          </motion.div>

          {/* right orange theme box */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-orange-50/40 border border-orange-100 border-l-4 border-l-[#ED6A1C] rounded-2xl p-8 sm:p-10 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
          >
            <div className="space-y-6">
              <div className="w-14 h-14 bg-[#ED6A1C] rounded-full flex items-center justify-center text-white shadow-lg shadow-orange-500/15">
                <Target className="w-7 h-7" />
              </div>
              <div className="space-y-3">
                <h3 className="text-2xl font-extrabold text-[#0F172A] tracking-tight">
                  Our Mission
                </h3>
                <p className="text-slate-600 font-medium text-base sm:text-lg leading-relaxed">
                  To monitor the growth of new Kokrajhar Municipal areas in BTC and include them under planning procedures to ensure their efficient and orderly growth.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Section 2: Our Objectives (Image 2) */}
        <section id="objectives-section" className="space-y-8 pt-4">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003366] tracking-tight">
              Our Objectives
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-semibold">
              Key focus areas driving our urban development initiatives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Objective 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFBF7]/50 border border-slate-200 border-l-4 border-l-[#ED6A1C] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start transition-all hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-[#2563EB] text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-500/15">
                <Building className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  Master Plan Facilitation
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                  Facilitate ULBs and Development Authorities to implement Master plans for orderly urban development.
                </p>
              </div>
            </motion.div>

            {/* Objective 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFBF7]/50 border border-slate-200 border-l-4 border-l-[#ED6A1C] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start transition-all hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-500/15">
                <TrendingUp className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  Urban Area Monitoring
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                  Monitor new urban area growth in BTC and ensure compliance with planning procedures.
                </p>
              </div>
            </motion.div>

            {/* Objective 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFBF7]/50 border border-slate-200 border-l-4 border-l-[#ED6A1C] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start transition-all hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-[#ED6A1C] text-white flex items-center justify-center shrink-0 shadow-md shadow-orange-500/15">
                <Award className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  Capacity Building
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                  Facilitate capacity building for officials to understand urban governance policies.
                </p>
              </div>
            </motion.div>

            {/* Objective 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FFFBF7]/50 border border-slate-200 border-l-4 border-l-[#ED6A1C] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-5 items-start transition-all hover:shadow-md"
            >
              <div className="w-12 h-12 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-500/15">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                  Slum-Free Towns
                </h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed font-semibold">
                  Plan for slum-free towns with improved hygiene and sanitation.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 3: Our Leadership Team (Image 3) */}
        <section id="leadership-section" className="space-y-8 pt-4">
          <div className="text-center space-y-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003366] tracking-tight">
              Our Leadership Team
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-semibold">
              Experienced professionals dedicated to urban development
            </p>
          </div>

          {/* First Row of Leadership (3 Columns) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Leader 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FAF5FF]/50 border border-purple-100 border-l-4 border-l-[#8B5CF6] rounded-2xl p-8 shadow-xs flex flex-col items-center text-center space-y-4 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center shadow-lg shadow-purple-500/15">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-black text-slate-900 tracking-tight">
                  Sri Lankeswar Owarie
                </h4>
                <p className="text-xs text-slate-500 font-extrabold leading-relaxed uppercase max-w-[240px] mx-auto">
                  CHD, Urban Development Department BTC, Kokrajhar
                </p>
              </div>
            </motion.div>

            {/* Leader 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FAF5FF]/50 border border-purple-100 border-l-4 border-l-[#8B5CF6] rounded-2xl p-8 shadow-xs flex flex-col items-center text-center space-y-4 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center shadow-lg shadow-purple-500/15">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-black text-slate-900 tracking-tight">
                  Sri Biren Swargiary
                </h4>
                <p className="text-xs text-slate-500 font-extrabold leading-relaxed uppercase max-w-[240px] mx-auto">
                  Deputy Director, Town and Country Planning, Kokrajhar
                </p>
              </div>
            </motion.div>

            {/* Leader 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FAF5FF]/50 border border-purple-100 border-l-4 border-l-[#8B5CF6] rounded-2xl p-8 shadow-xs flex flex-col items-center text-center space-y-4 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center shadow-lg shadow-purple-500/15">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-black text-slate-900 tracking-tight">
                  Sri Neepjyoti Das
                </h4>
                <p className="text-xs text-slate-500 font-extrabold leading-relaxed uppercase max-w-[240px] mx-auto">
                  Assistant Director, Town and Country Planning, Chirang
                </p>
              </div>
            </motion.div>
          </div>

          {/* Second Row of Leadership (2 Columns, Centered nicely on Desktop) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Leader 4 */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FAF5FF]/50 border border-purple-100 border-l-4 border-l-[#8B5CF6] rounded-2xl p-8 shadow-xs flex flex-col items-center text-center space-y-4 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center shadow-lg shadow-purple-500/15">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-black text-slate-900 tracking-tight">
                  Smt Trishna Gogoi
                </h4>
                <p className="text-xs text-slate-500 font-extrabold leading-relaxed uppercase max-w-[240px] mx-auto">
                  Assistant Director, Town and Country Planning, Baksa
                </p>
              </div>
            </motion.div>

            {/* Leader 5 */}
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#FAF5FF]/50 border border-purple-100 border-l-4 border-l-[#8B5CF6] rounded-2xl p-8 shadow-xs flex flex-col items-center text-center space-y-4 hover:shadow-md transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center shadow-lg shadow-purple-500/15">
                <Users className="w-6 h-6" />
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-black text-slate-900 tracking-tight">
                  Sri Santanu Das
                </h4>
                <p className="text-xs text-slate-500 font-extrabold leading-relaxed uppercase max-w-[240px] mx-auto">
                  Assistant Director, Town and Country Planning, Udalguri
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Section 4: About Bodoland Territorial Council Card on Left & Maps on Right (without Card wrapper) */}
        <section id="btc-info-section" className="pt-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Card: About Bodoland Territorial Council */}
            <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
              className="lg:col-span-7 bg-[#F0FDF4]/60 border border-slate-200 border-l-4 border-l-[#10B981] rounded-2xl p-8 sm:p-10 shadow-xs hover:shadow-md transition-all space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#10B981] text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/15">
                  <Building className="w-7 h-7" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                  About Bodoland Territorial Council
                </h2>
              </div>
              
              <div className="space-y-5 text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
                <p>
                  The Bodoland Territorial Council (BTC) is an autonomous administrative council in Assam, comprising five districts: Kokrajhar, Chirang, Baksa, Udalguri, and Tamulpur. With a total area of 8,970 sq km and a population of over 3.1 million, BTC represents a unique governance model in Northeast India.
                </p>
                <p>
                  The Urban Development Department plays a crucial role in shaping the urban landscape of BTC, working closely with 9 Municipal Boards to deliver essential services and infrastructure to the urban population of 150,530 citizens.
                </p>
                <p>
                  Our department is committed to sustainable development, ensuring that urban growth is planned, inclusive, and environmentally responsible while preserving the rich cultural heritage of the Bodo people and other communities in the region.
                </p>
              </div>
            </motion.div>

            {/* Right Side: Maps shown clean without any card / container */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-10 justify-center items-center w-full"
            >
              
              {/* Section 4a: Assam Map */}
              <div className="w-full max-w-[420px] flex flex-col items-center">
                <div className="w-full flex items-center justify-center">
                  <Image 
                    src="/assammap.png" 
                    alt="Assam Map showing Bodoland" 
                    width={420}
                    height={280}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[280px] object-contain transition-all hover:scale-[1.03] duration-300 select-none filter drop-shadow-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).onerror = null;
                      (e.target as HTMLImageElement).src = 'https://udd-latest.vercel.app/assammap.png';
                    }}
                  />
                </div>
              </div>

              {/* Section 4b: BTC Map */}
              <div className="w-full max-w-[420px] flex flex-col items-center">
                <div className="w-full flex items-center justify-center">
                  <Image 
                    src="/map.png" 
                    alt="Bodoland Territorial Council Map" 
                    width={420}
                    height={280}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto max-h-[280px] object-contain transition-all hover:scale-[1.03] duration-300 select-none filter drop-shadow-md"
                    onError={(e) => {
                      (e.target as HTMLImageElement).onerror = null;
                      (e.target as HTMLImageElement).src = 'https://udd-latest.vercel.app/map.png';
                    }}
                  />
                </div>
              </div>

            </motion.div>

          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
