"use client";
import { motion } from 'framer-motion';
import { BookOpen, Target, ShieldCheck, ArrowRight } from 'lucide-react';

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
        <h2 className="text-4xl font-serif text-navy mb-16 text-center">Active Schemes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schemes.map((scheme, idx) => (
            <motion.div 
               key={idx}
               whileHover={{ y: -5 }}                
               className={`bg-white p-8 rounded-2xl border-l-4 ${scheme.color} shadow-sm group cursor-pointer hover:shadow-xl transition-all`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center text-navy">
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
