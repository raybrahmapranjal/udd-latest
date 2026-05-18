"use client";
import { ulbs } from '@/lib/data';
import { motion } from 'framer-motion';

export default function UrbanLocalBodies() {
  const districts = ['Kokrajhar', 'Chirang', 'Baksa', 'Udalguri'];

  return (
    <section id="ulb" className="py-24 px-6 md:px-16 lg:px-32 bg-lightgray">
      <div className="text-center mb-16">
        <span className="text-saffron font-bold text-xs uppercase tracking-[5px] block mb-3">Governance</span>
        <h2 className="text-3xl font-serif text-navy mb-4 tracking-tight">Urban Local Bodies in BTR</h2>
        <div className="w-12 h-1 bg-saffron mx-auto rounded-full"></div>
      </div>
      
      <div className="space-y-12">
        {districts.map(district => {
          const districtUlbs = ulbs.filter(u => u.district === district);
          if (districtUlbs.length === 0) return null;

          return (
            <div key={district}>
              <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest mb-6 flex items-center gap-4">
                {district} District
                <div className="flex-1 h-px bg-gray-200"></div>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {districtUlbs.map((ulb, idx) => {
                  const borderColors = ['border-sky-300', 'border-orange-300', 'border-emerald-300', 'border-purple-300'];
                  const border = borderColors[idx % 4];
                  return (
                  <motion.div 
                    key={idx}
                    whileHover={{ y: -3 }}
                    className={`bg-white p-5 md:p-6 rounded-2xl border-2 ${border} shadow-sm group cursor-pointer transition-all duration-300 hover:shadow-lg`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all duration-300 border border-gray-300">
                          <span className="text-lg">🏙️</span>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-navy text-sm mb-1 group-hover:text-saffron transition-colors leading-tight">{ulb.name}</h4>
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-[8px] bg-navy/5 text-navy font-black px-2 py-0.5 rounded-full uppercase tracking-widest">{ulb.type}</span>
                          <span className="text-[8px] text-gray-400 font-bold uppercase">{ulb.district} Dist.</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
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
