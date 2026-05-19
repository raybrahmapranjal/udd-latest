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

const sectionData: { title: string; badge: string; icon: any; items: Item[]; bg:string; border:string; topBorder: string; badgeBg:string; badgeText:string; iconColor:string }[] = [
  {
    title: 'Latest News',
    badge: 'Updated Today',
    icon: Newspaper,
    bg: 'bg-white',
    border: 'border-blue-200',
    topBorder: 'border-blue-300',
    badgeBg: 'bg-green-100',
    badgeText: 'text-green-800',
    iconColor: 'text-blue-600',
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
    border: 'border-emerald-200',
    topBorder: 'border-emerald-300',
    badgeBg: 'bg-emerald-200',
    badgeText: 'text-emerald-900',
    iconColor: 'text-emerald-700',
    items: [
      { title: 'National Urban Livelihoods Mission', desc: 'Skill development and employment generation', amount: '₹8.2 Cr', status: 'Active' },
      { title: 'Smart City Initiative', desc: 'Modernizing core infrastructure in BTR', amount: '₹15 Cr', status: 'Ongoing' },
      { title: 'Urban Sanitation Program', desc: 'Enhancing sanitation facilities in ULBs', amount: '₹5 Cr', status: 'Upcoming' },
    ]
  },
  {
    title: 'Important Notices',
    badge: 'This Week',
    icon: Bell,
    bg: 'bg-orange-50',
    border: 'border-orange-200',
    topBorder: 'border-orange-300',
    badgeBg: 'bg-orange-200',
    badgeText: 'text-orange-900',
    iconColor: 'text-orange-700',
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
    <section className="py-24 px-6 md:px-16 lg:px-32 bg-gray-50">
      <div className="flex flex-col items-center mb-20 text-center">
        <div className="w-24 h-24 rounded-full flex items-center justify-center relative mb-8 group">
          <div className="absolute inset-0 bg-blue-600/40 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(37,99,235,0.5)]">
            <LayoutDashboard className="w-10 h-10 text-white" />
          </div>
          <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(37,99,235,0.4)] animate-pulse -z-10"></div>
        </div>
        <div className="inline-block border-b-4 border-blue-600 pb-2 mb-4">
          <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tight">Integrated Dashboard</h2>
        </div>
        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">Real-time updates, news, and notifications from the Urban Development Department at one place.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {sectionData.map((section, sIdx) => {
          const item = section.items[activeIndices[sIdx]];
          return (
          <div key={sIdx} className={`bg-gradient-to-br ${section.bg} via-white to-white/50 p-6 sm:p-8 rounded-md border-2 ${section.border} shadow-lg relative`}>
            <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-3">
                    <section.icon className={`w-8 h-8 ${section.iconColor}`} />
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">{section.title}</h3>
                </div>
                <span className={`px-3 py-1 ${section.badgeBg} ${section.badgeText} text-[10px] sm:text-xs font-bold rounded-full whitespace-nowrap`}>{section.badge}</span>
            </div>
            
            <div className={`h-48 border ${section.border} border-l-4 ${section.iconColor.replace('text-', 'border-')} bg-white/40 rounded-lg p-4 sm:p-6 mb-4`}>
                <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm sm:text-md text-gray-700 mb-4">{item.desc}</p>
                <div className="flex flex-wrap gap-2">
                    {item.date && <span className="text-xs sm:text-sm text-gray-600 bg-white/70 px-3 py-1 rounded-full border border-gray-200">{item.date}</span>}
                    {item.tag && <span className="text-xs sm:text-sm text-gray-600 bg-white/70 px-3 py-1 rounded-full border border-gray-200">{item.tag}</span>}
                    {item.amount && <span className="text-xs sm:text-sm font-bold text-emerald-800 bg-emerald-50/70 px-3 py-1 rounded-full border border-emerald-200">{item.amount}</span>}
                    {item.status && <span className="text-xs sm:text-sm font-bold text-gray-800 bg-gray-50/70 px-3 py-1 rounded-full border border-gray-200">{item.status}</span>}
                </div>
             </div>

             <div className="flex justify-between items-center mt-4">
                 <div className="flex gap-1">
                     {section.items.map((_, dotIdx) => <div key={dotIdx} className={`w-2 h-2 rounded-full ${dotIdx === activeIndices[sIdx] ? 'bg-navy' : 'bg-gray-200'}`}></div>)}
                 </div>
                 <div className="flex gap-2">
                     <button onClick={() => handlePrev(sIdx)} className="p-1 rounded-full border border-gray-200 hover:bg-gray-100"><ChevronLeft className="w-4 h-4" /></button>
                     <button onClick={() => handleNext(sIdx)} className="p-1 rounded-full border border-gray-200 hover:bg-gray-100"><ChevronRight className="w-4 h-4" /></button>
                 </div>
             </div>
          </div>
        )})}
      </div>
    </section>
  );
}
