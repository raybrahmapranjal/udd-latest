"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Building2, 
  Home, 
  Heart, 
  Map, 
  ArrowRight, 
  Scroll,
  TrendingUp,
  Target
} from 'lucide-react';

export default function Schemes() {
  const schemes = [
    {
      id: 'infra',
      title: 'Urban Infrastructure Development',
      desc: 'Comprehensive development of roads, water supply grids, and high-quality utility networks inside Municipal Areas of Bodoland.',
      budget: '₹42.5 Crores Allocated',
      metrics: '12 Municipalities Targeted',
      icon: Building2,
      color: 'blue',
      gradient: 'from-blue-500 to-indigo-600',
      borderTheme: 'border-blue-400',
      tag: 'Infrastructure'
    },
    {
      id: 'slum',
      title: 'Slum Improvement Program',
      desc: 'Upgrading dense slum environments with better concrete roads, public toilets, and proper street sanitation networks.',
      budget: '₹14.8 Crores Allocated',
      metrics: '35+ Wards covered',
      icon: Home,
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-600',
      borderTheme: 'border-emerald-400',
      tag: 'Sanitation & Housing'
    },
    {
      id: 'poverty',
      title: 'Urban Poverty Alleviation',
      desc: 'Supporting economically weaker sections with skilled vocational courses, financial grants, and self-help-group networks.',
      budget: '₹9.2 Crores Allocated',
      metrics: '5,000+ Men & Women Trained',
      icon: Heart,
      color: 'orange',
      gradient: 'from-orange-500 to-amber-600',
      borderTheme: 'border-orange-400',
      tag: 'Livelihoods'
    },
    {
      id: 'masterplan',
      title: 'Master Plan Implementation',
      desc: 'Formulating physical master plans and implementing structured urban land pooling to guide modern strategic growth in BTC.',
      budget: '₹6.5 Crores Allocated',
      metrics: '4 Core Towns Mapped',
      icon: Map,
      color: 'purple',
      gradient: 'from-purple-500 to-indigo-600',
      borderTheme: 'border-purple-400',
      tag: 'Zonal Planning'
    }
  ];

  return (
    <section id="key-schemes" className="py-20 md:py-28 px-4 sm:px-6 md:px-16 lg:px-32 bg-slate-50 relative overflow-hidden">
      {/* Visual background accents */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-sky-200/20 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-200/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center relative mb-6 group">
            <div className="absolute inset-0 bg-[#003366]/40 blur-3xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity"></div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-[#003366] to-[#04284d] rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-105 shadow-[0_0_40px_rgba(0,51,102,0.4)]">
              <Scroll className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
          </div>
          
          <div className="inline-block border-b-4 border-saffron pb-2 mb-4">
            <h2 className="text-3xl md:text-5xl font-bold text-navy uppercase tracking-tight font-sans font-sans">
              Our Key Initiatives
            </h2>
          </div>
          <p className="text-slate-500 max-w-2xl mx-auto font-semibold text-xs sm:text-base leading-relaxed px-4">
            Driving balanced, sustainable growth and robust municipal development across the urban councils of Bodoland Territorial Region.
          </p>
        </div>

        {/* 4 Schemes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {schemes.map((scheme, idx) => {
            const IconComponent = scheme.icon;
            return (
              <motion.div 
                key={scheme.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -4 }}
                className={`bg-white p-6 sm:p-8 rounded-2xl border-2 ${scheme.borderTheme} shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between`}
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${scheme.gradient} flex items-center justify-center text-white shadow-md`}>
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold font-sans text-navy mb-2 leading-tight">
                    {scheme.title}
                  </h3>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    {scheme.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Button to View All Schemes */}
        <div className="flex justify-center">
          <Link href="/schemes" className="group relative">
            {/* Visual glow effect underneath */}
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 rounded-xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-300 pointer-events-none" />
            
            <div className="relative inline-flex items-center gap-2.5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs sm:text-sm tracking-widest uppercase px-8 py-4 sm:px-10 sm:py-4.5 rounded-xl shadow-md transition-transform duration-300 group-hover:scale-[1.03]">
              View All Schemes
              <ArrowRight className="w-4 h-4 text-white transform group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>

      </div>
    </section>
  );
}
