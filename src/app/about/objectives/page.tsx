"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Building, 
  Target,
  ChevronRight, 
  FileText,
  TrendingUp,
  Award,
  Users,
  Eye,
  Briefcase,
  Compass,
  ArrowRight,
  ShieldCheck,
  TreePine,
  Activity
} from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ObjectivesPage() {
  const objectiveItems = [
    {
      title: "Master Plan Facilitation",
      description: "Support Urban Local Bodies (ULBs) and Town Development Authorities to draft, dynamically update, and implement robust Master Plans for structured and orderly urban expansion.",
      icon: Building,
      badge: "Structure",
      colorClass: "border-l-[#2563EB]",
      bgClass: "bg-blue-50/50 hover:bg-blue-50",
      iconBag: "bg-[#2563EB]"
    },
    {
      title: "Urban Growth Monitoring",
      description: "Monitor and evaluate the birth, alignment, and infrastructure growth of rapid new Kokrajhar and BTR township regions to incorporate them under strict planning regulations.",
      icon: TrendingUp,
      badge: "Regulation",
      colorClass: "border-l-[#10B981]",
      bgClass: "bg-emerald-50/50 hover:bg-emerald-50",
      iconBag: "bg-[#10B981]"
    },
    {
      title: "Governance Capacity Building",
      description: "Facilitate specialized technical training, system updates, and governance workshops for ULB commissioners, town planner cadres, and municipal engineers.",
      icon: Award,
      badge: "Empowerment",
      colorClass: "border-l-[#ED6A1C]",
      bgClass: "bg-orange-50/50 hover:bg-orange-50",
      iconBag: "bg-[#ED6A1C]"
    },
    {
      title: "Hygienic & Slum-Free Cities",
      description: "Perform comprehensive local area plans aimed at resolving basic sanitization, clean storm drainage, public space, and healthy housings, rendering BTR towns slum-free.",
      icon: Users,
      badge: "Welfare",
      colorClass: "border-l-[#8B5CF6]",
      bgClass: "bg-purple-50/50 hover:bg-purple-50",
      iconBag: "bg-[#8B5CF6]"
    },
    {
      title: "Environmental Sustainability",
      description: "Integrate water-harvesting regulations, green spaces/parks management, and flood mitigation paths across municipal systems to adapt to changing environments safely.",
      icon: TreePine,
      badge: "Ecology",
      colorClass: "border-l-teal-600",
      bgClass: "bg-teal-50/50 hover:bg-teal-50",
      iconBag: "bg-teal-600"
    },
    {
      title: "Policy & Scheme Execution",
      description: "Successfully supervise and accelerate state and central government urban development schemes (such as PMAY-U, Swachh Bharat Mission, AMRUT, and 15th FC) to completion.",
      icon: ShieldCheck,
      badge: "Delivery",
      colorClass: "border-l-rose-500",
      bgClass: "bg-rose-50/50 hover:bg-rose-50",
      iconBag: "bg-rose-500"
    }
  ];

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
          
          {/* BREADCRUMB STYLE KEY REQUIREMENT */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-bold mb-6 select-none bg-white/5 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/5 inline-flex">
            <Link href="/" className="hover:text-emerald-400 transition-colors uppercase tracking-wider">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <Link href="/about" className="hover:text-emerald-400 transition-colors uppercase tracking-wider">About Us</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="text-emerald-400 font-black uppercase tracking-wider">Our Objectives</span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight text-white font-sans drop-shadow-sm mt-4">
            Our Objectives
          </h1>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        
        {/* Section header & intro */}
        <section className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-800 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest">
            <Compass className="w-4 h-4 text-emerald-600 animate-spin-slow" />
            Strategic Mission
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#003366] tracking-tight">
            Key Objectives of UDD BTR
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-medium">
            The fundamental objectives of the Urban Development Department (UDD) under the Bodoland Territorial Council are designed to catalyze high-quality urban governance, orderly master-planned layouts, and clean civic services.
          </p>
        </section>

        {/* Objectives Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {objectiveItems.map((obj, idx) => {
            const IconComponent = obj.icon;
            return (
              <motion.div 
                key={obj.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className={`bg-white border border-slate-200 border-l-4 ${obj.colorClass} ${obj.bgClass} rounded-2xl p-6 sm:p-8 hover:shadow-lg hover:border-slate-300 transition-all flex flex-col justify-between`}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${obj.iconBag} rounded-full flex items-center justify-center text-white shadow-md`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-black tracking-widest uppercase bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-md border border-slate-200 text-slate-500">
                      {obj.badge}
                    </span>
                  </div>
                  
                  <div className="space-y-3">
                    <h3 className="text-xl font-bold text-[#0F172A] tracking-tight">
                      {obj.title}
                    </h3>
                    <p className="text-slate-600 font-medium text-sm sm:text-base leading-relaxed">
                      {obj.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </section>

        {/* Section 3: Roadmap or Goals Action card */}
        <section className="pt-4 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#FAF5FF]/60 border border-purple-100 border-l-4 border-l-[#8B5CF6] rounded-2xl p-8 sm:p-10 shadow-xs hover:shadow-md transition-all space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center shrink-0 shadow-lg shadow-purple-500/15">
                <Activity className="w-7 h-7" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0F172A] tracking-tight">
                Our Strategic Implementation Policy
              </h2>
            </div>
            
            <div className="space-y-5 text-slate-700 font-medium text-sm sm:text-base leading-relaxed">
              <p>
                To achieve these objectives, the Urban Development Department works meticulously through <strong>9 active Municipal Boards</strong> across Kokrajhar, Chirang, Baksa, Udalguri, and Tamulpur districts. Each board acts as a local node ensuring rapid grass-root compliance with approved rules and standards.
              </p>
              <p>
                We focus on regular policy updates, dynamic resource routing, citizen service digitalization, and strict environmental impact surveys. By doing so, the BTR government provides sustainable, well-arranged urban settings that combine economic growth with tribal conservation.
              </p>
            </div>

            <div className="pt-4 border-t border-purple-150 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <span className="text-xs text-slate-500 font-black uppercase tracking-wider">
                Urban Development Department • BTC Government
              </span>
              <Link 
                href="/services"
                className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5 inline-flex items-center gap-2"
              >
                Explore Online Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
