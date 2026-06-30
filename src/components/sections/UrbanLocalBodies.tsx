"use client";
import { ulbs } from '@/lib/data';
import { motion } from 'framer-motion';
import { Building2, Landmark, MapPin } from 'lucide-react';

export default function UrbanLocalBodies() {
  const districts = ['Kokrajhar', 'Chirang', 'Baksa', 'Udalguri', 'Tamulpur'];

  const borderColors = ['border-sky-300', 'border-orange-300', 'border-emerald-300', 'border-purple-300'];
  const leftShadows = [
    'shadow-[-6px_0px_0px_0px_#7dd3fc]',
    'shadow-[-6px_0px_0px_0px_#fdba74]',
    'shadow-[-6px_0px_0px_0px_#6ee7b7]',
    'shadow-[-6px_0px_0px_0px_#d8b4fe]'
  ];
  const iconGlows = [
    'shadow-[0_0_15px_rgba(125,211,252,0.5)]',
    'shadow-[0_0_15px_rgba(253,186,116,0.5)]',
    'shadow-[0_0_15px_rgba(110,231,183,0.5)]',
    'shadow-[0_0_15px_rgba(216,180,254,0.5)]'
  ];
  const bgGradients = [
    'bg-gradient-to-br from-sky-400 to-sky-600',
    'bg-gradient-to-br from-orange-400 to-orange-600',
    'bg-gradient-to-br from-emerald-400 to-emerald-600',
    'bg-gradient-to-br from-purple-400 to-purple-600'
  ];

  const getUlbId = (name: string) => {
    const normName = name.toLowerCase();
    if (normName.includes("gossaigaon")) return "gossaigaon_mb";
    if (normName.includes("kokrajhar")) return "kokrajhar_mb";
    if (normName.includes("basugaon")) return "basugaon_mb";
    if (normName.includes("bijni")) return "bijni_mb";
    if (normName.includes("fakiragram")) return "fakiragram_mb";
    if (normName.includes("goreswar")) return "goreswar_mb";
    if (normName.includes("kajalgaon")) return "kajalgaon_mb";
    if (normName.includes("mushalpur")) return "mushalpur_mb";
    if (normName.includes("tamulpur")) return "tamulpur_mb";
    if (normName.includes("tangla")) return "tangla_mb";
    if (normName.includes("udalguri")) return "udalguri_mb";
    return "gossaigaon_mb";
  };

  return (
    <section id="ulb" className="py-16 md:py-24 px-4 sm:px-6 md:px-16 lg:px-32 bg-lightgray">
      <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center relative mb-6 md:mb-8 group">
          <div className="absolute inset-0 bg-navy/40 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-navy to-blue-800 rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(30,58,138,0.5)]">
            <Building2 className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(30,58,138,0.4)] animate-pulse -z-10"></div>
        </div>
        <div className="inline-block border-b-4 border-saffron pb-2 mb-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-navy uppercase tracking-tight">Urban Local Bodies (ULBs) of UDD BTC</h2>
        </div>
        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-sm md:text-lg leading-relaxed px-4">Managing Municipal Boards and Urban Centers across the four districts of BTC.</p>
      </div>
      
      <div className="space-y-12">
        {districts.map(district => {
          const districtUlbs = ulbs.filter(u => u.district === district);
          if (districtUlbs.length === 0) return null;

          return (
            <div key={district}>
              <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-8 flex items-center gap-4">
                {district} District
                <div className="flex-1 h-px bg-gray-200"></div>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {districtUlbs.map((ulb, idx) => {
                  const colorIdx = idx % 4;
                  return (
                  <a href={`/ulb/${getUlbId(ulb.name)}`} key={idx} className="block">
                    <motion.div 
                      whileHover={{ x: 5, y: -2 }}
                      className={`bg-white p-6 rounded-lg border-2 ${borderColors[colorIdx]} ${leftShadows[colorIdx]} group cursor-pointer transition-all duration-300 hover:shadow-lg`}
                    >
                      <div className="flex items-center gap-5">
                        <div className={`w-14 h-14 ${bgGradients[colorIdx]} rounded-md flex items-center justify-center border border-white/20 ${iconGlows[colorIdx]} transition-all duration-300 group-hover:scale-110`}>
                            <Building2 className="w-7 h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-navy text-sm mb-1.5 group-hover:text-saffron transition-colors leading-tight">{ulb.name}</h4>
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-[9px] bg-navy/5 text-navy font-bold px-2 py-0.5 rounded-md uppercase tracking-widest flex items-center gap-1">
                              <Landmark className="w-3 h-3" />
                              {ulb.type}
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </a>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
