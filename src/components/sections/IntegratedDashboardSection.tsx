"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Newspaper, Target, Bell, LayoutDashboard } from 'lucide-react';

interface Item {
  title: string;
  desc: string;
  date?: string;
  tag?: string;
  amount?: string;
  status?: string;
}

const sectionData: { title: string; badge: string; icon: any; items: Item[]; bg:string; border:string; accentColor: string; badgeBgGradient:string; badgeText:string; iconBgGradient:string; glowColor: string }[] = [
  {
    title: 'Latest News',
    badge: 'Updated Today',
    icon: Newspaper,
    bg: 'bg-white',
    border: 'border-blue-400',
    accentColor: 'border-blue-500',
    badgeBgGradient: 'from-blue-600 to-indigo-700',
    badgeText: 'text-white',
    iconBgGradient: 'from-blue-600 to-indigo-700',
    glowColor: 'rgba(37,99,235,0.5)',
    items: [
      { title: 'Digital Payment Integration Completed', desc: 'All ULBs now support online payment for services', date: '10 Dec 2024', tag: 'Technology' },
      { title: 'New Sanitation Drive Launched', desc: 'Focusing on waste management in urban areas', date: '05 Dec 2024', tag: 'Sanitation' },
      { title: 'Housing Scheme Beneficiaries List', desc: 'Check your eligibility and status online', date: '01 Dec 2024', tag: 'Housing' },
    ]
  },
  {
    title: 'Active Schemes',
    badge: 'FY 2024-25',
    icon: Target,
    bg: 'bg-emerald-50',
    border: 'border-emerald-400',
    accentColor: 'border-emerald-500',
    badgeBgGradient: 'from-emerald-500 to-teal-600',
    badgeText: 'text-white',
    iconBgGradient: 'from-emerald-500 to-teal-600',
    glowColor: 'rgba(16,185,129,0.5)',
    items: [
      { title: 'National Urban Livelihoods Mission', desc: 'Skill development and employment generation', amount: '₹8.2 Cr', status: 'Active' },
      { title: 'Smart City Initiative', desc: 'Modernizing core infrastructure in BTC', amount: '₹15 Cr', status: 'Ongoing' },
      { title: 'Urban Sanitation Program', desc: 'Enhancing sanitation facilities in ULBs', amount: '₹5 Cr', status: 'Upcoming' },
    ]
  },
  {
    title: 'Important Notices',
    badge: 'This Week',
    icon: Bell,
    bg: 'bg-orange-50',
    border: 'border-orange-400',
    accentColor: 'border-orange-500',
    badgeBgGradient: 'from-orange-500 to-red-600',
    badgeText: 'text-white',
    iconBgGradient: 'from-orange-500 to-red-600',
    glowColor: 'rgba(249,115,22,0.5)',
    items: [
      { title: 'Public Consultation on Master Plan', desc: 'Citizens invited to provide feedback and suggestions', status: 'High' },
      { title: 'ULB Meeting Schedule', desc: 'Meeting for all municipal board members', status: 'Medium' },
      { title: 'Tender for New Road Projects', desc: 'Proposal submission deadline extended', status: 'Urgent' },
    ]
  }
];

export default function IntegratedSection() {
  const [activeIndices, setActiveIndices] = useState([0, 0, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndices(prev => prev.map((idx, sIdx) => (idx + 1) % sectionData[sIdx].items.length));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = (sIdx: number) => {
    setActiveIndices(prev => prev.map((idx, i) => i === sIdx ? (idx + 1) % sectionData[sIdx].items.length : idx));
  };
  const handlePrev = (sIdx: number) => {
    setActiveIndices(prev => prev.map((idx, i) => i === sIdx ? (idx - 1 + sectionData[sIdx].items.length) % sectionData[sIdx].items.length : idx));
  };

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 md:px-12 lg:px-24 bg-gray-50 overflow-hidden">
      <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
        <motion.div 
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center relative mb-6 md:mb-8 group"
        >
          <div className="absolute inset-0 bg-blue-600/40 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(37,99,235,0.5)]">
            <LayoutDashboard className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(37,99,235,0.4)] animate-pulse -z-10"></div>
        </motion.div>
        
        <div className="inline-block border-b-4 border-blue-600 pb-2 mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-navy uppercase tracking-tight">Integrated UDD BTC Dashboard</h2>
        </div>
        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-sm sm:text-base md:text-lg leading-relaxed px-4">
          Real-time updates, news, and notifications from the Urban Development Department at one place.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {sectionData.map((section, sIdx) => {
          const item = section.items[activeIndices[sIdx]];
          return (
          <motion.div 
            key={sIdx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: sIdx * 0.1 }}
            className={`bg-gradient-to-br ${section.bg} via-white to-white/50 p-5 sm:p-8 rounded-xl border-2 ${section.border} shadow-lg relative flex flex-col justify-between`}
          >
            <div>
              <div className="flex justify-between items-start sm:items-center mb-6 gap-2">
                  <div className="flex items-center gap-3">
                      <div 
                        className={`p-2 sm:p-2.5 rounded-full bg-gradient-to-br ${section.iconBgGradient} border border-white/20 shadow-lg relative cursor-default`}
                        style={{ boxShadow: `0 0 15px ${section.glowColor}` }}
                      >
                        <section.icon className="w-5 h-5 sm:w-7 sm:h-7 text-white" />
                        <div className="absolute inset-0 rounded-full animate-pulse blur-md bg-white/20 -z-10"></div>
                      </div>
                      <h3 className="text-lg sm:text-2xl font-bold text-gray-900 leading-tight">{section.title}</h3>
                  </div>
                  <span className={`px-3 py-1 sm:px-4 sm:py-1.5 bg-gradient-to-r ${section.badgeBgGradient} ${section.badgeText} text-[9px] sm:text-xs font-black rounded-full whitespace-nowrap shadow-sm uppercase tracking-wider`}>
                    {section.badge}
                  </span>
              </div>
              
              <AnimatePresence mode="wait">
                <motion.div 
                  key={`${sIdx}-${activeIndices[sIdx]}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className={`min-h-[12rem] md:min-h-[14rem] border ${section.border} border-l-4 ${section.accentColor} bg-white/60 backdrop-blur-sm rounded-lg p-4 sm:p-6 mb-4 flex flex-col`}
                >
                    <h4 className="text-base sm:text-xl font-bold text-gray-900 mb-2 line-clamp-2">{item.title}</h4>
                    <p className="text-xs sm:text-base text-gray-700 mb-4 flex-grow line-clamp-3 md:line-clamp-none">{item.desc}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                        {item.date && <span className="text-[10px] sm:text-xs font-bold text-blue-700 bg-blue-50/50 px-2.5 py-1 rounded-md border border-blue-200/50 shadow-sm">{item.date}</span>}
                        {item.tag && <span className="text-[10px] sm:text-xs font-bold text-indigo-700 bg-indigo-50/50 px-2.5 py-1 rounded-md border border-indigo-200/50 shadow-sm">{item.tag}</span>}
                        {item.amount && <span className="text-[10px] sm:text-xs font-black text-emerald-700 bg-emerald-50/80 px-2.5 py-1 rounded-md border border-emerald-300 shadow-sm">{item.amount}</span>}
                        {item.status && <span className="text-[10px] sm:text-xs font-black text-amber-700 bg-amber-50/80 px-2.5 py-1 rounded-md border border-amber-300 shadow-sm">{item.status}</span>}
                    </div>
                 </motion.div>
              </AnimatePresence>
            </div>

             <div className="flex justify-between items-center mt-2 px-1">
                 <div className="flex gap-1.5">
                     {section.items.map((_, dotIdx) => (
                       <button 
                        key={dotIdx}
                        onClick={() => setActiveIndices(prev => prev.map((idx, i) => i === sIdx ? dotIdx : idx))}
                        className={`w-2 h-2 rounded-full transition-all ${dotIdx === activeIndices[sIdx] ? 'bg-blue-600 w-4' : 'bg-gray-300 hover:bg-gray-400'}`}
                       />
                     ))}
                 </div>
                 <div className="flex gap-2">
                     <button 
                        onClick={() => handlePrev(sIdx)} 
                        className="p-1.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm"
                     >
                        <ChevronLeft className="w-4 h-4 text-gray-600" />
                     </button>
                     <button 
                        onClick={() => handleNext(sIdx)} 
                        className="p-1.5 rounded-full border border-gray-200 bg-white hover:bg-gray-50 transition-colors shadow-sm"
                     >
                        <ChevronRight className="w-4 h-4 text-gray-600" />
                     </button>
                 </div>
             </div>
          </motion.div>
        )})}
      </div>
    </section>
  );
}
