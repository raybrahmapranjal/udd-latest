"use client";
import { motion } from 'framer-motion';
import { BookOpen, Target, ShieldCheck, ArrowRight, Scroll } from 'lucide-react';

export default function Schemes() {
  const schemes = [
    {
      title: 'National Urban Livelihoods Mission',
      desc: 'Skill development and employment generation',
      status: 'Active',
      amount: '₹8.2 Cr',
      fy: 'FY 2024-25',
      icon: Target,
      color: 'border-emerald-500'
    },
    {
      title: 'Pradhan Mantri Awas Yojana',
      desc: 'Housing for all urban poor',
      status: 'Ongoing',
      amount: '₹45 Cr',
      fy: 'FY 2024-25',
      icon: BookOpen,
      color: 'border-blue-500'
    },
    {
      title: 'Amrit Mission 2.0',
      desc: 'Water supply and sewerage management',
      status: 'Upcoming',
      amount: '₹120 Cr',
      fy: 'FY 2025-26',
      icon: ShieldCheck,
      color: 'border-orange-500'
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 lg:px-32 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
           <div className="w-24 h-24 rounded-full flex items-center justify-center relative mb-8 group">
              <div className="absolute inset-0 bg-emerald-600/40 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-green-700 rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(5,150,105,0.5)]">
                <Scroll className="w-10 h-10 text-white" />
              </div>
              <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(5,150,105,0.4)] animate-pulse -z-10"></div>
           </div>
           <div className="inline-block border-b-4 border-emerald-500 pb-2 mb-4">
              <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tight">Active Schemes of UDD BTC</h2>
           </div>
           <p className="text-gray-500 max-xl mx-auto font-medium text-lg leading-relaxed">Flagship programs and initiatives driving urban growth in Bodoland.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schemes.map((scheme, idx) => (
            <motion.div 
               key={idx}
               whileHover={{ y: -5 }}                
               className={`bg-white p-8 rounded-lg border-l-4 ${scheme.color} shadow-sm group cursor-pointer hover:shadow-xl transition-all`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center text-navy">
                    <scheme.icon className="w-6 h-6" />
                </div>
                <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase">{scheme.status}</span>
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">{scheme.title}</h4>
              <p className="text-sm text-gray-500 mb-8">{scheme.desc}</p>
              <div className="flex justify-between items-center text-xs text-gray-700 font-bold border-t pt-4">
                <span>{scheme.amount}</span>
                <span>{scheme.fy}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
