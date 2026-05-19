"use client";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { stats } from '@/lib/data';
import { motion } from 'framer-motion';
import { Building, Map, Users, Zap, BarChart3 } from 'lucide-react';

export default function StatsStrip() {
  const { ref, inView } = useInView({ triggerOnce: true });
  
  const iconMap: { [key: string]: any } = {
    building: Building,
    map: Map,
    users: Users,
    zap: Zap
  };

  const iconGradients = [
    'bg-gradient-to-tr from-orange-400 to-orange-600',
    'bg-gradient-to-tr from-sky-400 to-sky-600',
    'bg-gradient-to-tr from-emerald-400 to-emerald-600',
    'bg-gradient-to-tr from-purple-400 to-purple-600'
  ];

  const borderColors = ['border-orange-400', 'border-sky-400', 'border-emerald-400', 'border-purple-400'];
  const glowShadows = ['shadow-orange-500/50', 'shadow-sky-500/50', 'shadow-emerald-500/50', 'shadow-purple-500/50'];
  const shadowClasses = [
    'shadow-[3px_-3px_#fb923c]', 
    'shadow-[3px_-3px_#38bdf8]', 
    'shadow-[3px_-3px_#34d399]', 
    'shadow-[3px_-3px_#c084fc]'
  ];

  return (
    <section ref={ref} className="relative z-20 py-24 px-6 md:px-16 lg:px-32 bg-lightgray">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="w-24 h-24 rounded-full flex items-center justify-center relative mb-8 group">
          <div className="absolute inset-0 bg-orange-600/40 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(234,88,12,0.5)]">
            <BarChart3 className="w-10 h-10 text-white" />
          </div>
          <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(234,88,12,0.4)] animate-pulse -z-10"></div>
        </div>
        <div className="inline-block border-b-4 border-orange-500 pb-2 mb-4">
          <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tight">UDD at a Glance</h2>
        </div>
        <p className="text-gray-500 max-w-xl mx-auto font-medium text-lg leading-relaxed">Key metrics and developmental statistics of Urban Development Department in BTR.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((stat, idx) => {
           const Icon = iconMap[stat.icon];
           return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            whileHover={{ 
               y: -10, 
               scale: 1.02,
               transition: { duration: 0.2 }
            }}
            transition={{ delay: idx * 0.1 }}
            className={`p-8 rounded-[10px] border-2 ${borderColors[idx % 4]} bg-[rgb(230,242,246)] ${shadowClasses[idx % 4]} flex flex-col items-center gap-4 cursor-pointer`}
          >
            <div className={`p-4 rounded-full ${iconGradients[idx % 4]} shadow-lg ${glowShadows[idx % 4]} border-2 ${borderColors[idx % 4]}`}>
              <Icon className={`w-12 h-12 text-white`} />
            </div>
            <div className={`flex-1 text-center`}>
              <div className={`text-5xl md:text-6xl font-black text-gray-900 mb-2 flex items-center justify-center gap-1`}>
                  {inView ? <CountUp end={stat.value} duration={3} decimals={stat.value % 1 !== 0 ? 1 : 0} /> : 0}
                  <span>{stat.suffix}</span>
              </div>
              <p className="text-[10px] md:text-sm text-gray-600 font-bold uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          </motion.div>
        )})}
      </div>
    </section>
  );
}
