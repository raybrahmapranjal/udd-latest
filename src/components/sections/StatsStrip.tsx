"use client";
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { stats } from '@/lib/data';
import { motion } from 'framer-motion';
import { Building, Map, Users, Zap } from 'lucide-react';

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

  return (
    <section ref={ref} className="relative z-20 py-16 px-6 md:px-16 lg:px-32 bg-lightgray">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">UDD at a Glance</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {stats.map((stat, idx) => {
           const Icon = iconMap[stat.icon];
           return (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: idx * 0.1 }}
            className={`p-8 rounded-2xl border-2 ${borderColors[idx % 4]} flex flex-col items-center gap-4`}
            style={{ fontFamily: '__Inter_f367f3, __Inter_Fallback_f367f3' }}
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
