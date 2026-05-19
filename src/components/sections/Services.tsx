"use client";
import { services } from '@/lib/data';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Building2, 
  Droplets, 
  CreditCard, 
  Baby, 
  Trash2, 
  Users, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

const iconMap: { [key: string]: any } = {
  'id-card': FileText,
  'building': Building2,
  'droplet': Droplets,
  'file-invoice-dollar': CreditCard,
  'baby': Baby,
  'trash': Trash2,
  'users': Users,
  'file-alt': MessageSquare,
};

const colorMap: { [key: string]: string } = {
  'sky': 'from-sky-400 to-sky-600',
  'orange': 'from-orange-400 to-orange-600',
  'emerald': 'from-emerald-400 to-emerald-600',
  'purple': 'from-purple-400 to-purple-600',
  'rose': 'from-rose-400 to-rose-600',
  'indigo': 'from-indigo-400 to-indigo-600',
  'amber': 'from-amber-400 to-amber-600',
  'teal': 'from-teal-400 to-teal-600',
};

const borderMap: { [key: string]: string } = {
  'sky': 'border-sky-300',
  'orange': 'border-orange-300',
  'emerald': 'border-emerald-300',
  'purple': 'border-purple-300',
  'rose': 'border-rose-300',
  'indigo': 'border-indigo-300',
  'amber': 'border-amber-300',
  'teal': 'border-teal-300',
};

export default function Services() {
  return (
    <section id="services" className="py-24 px-6 md:px-16 lg:px-32 bg-white">
      <div className="flex flex-col items-center mb-20 text-center">
        <div className="w-24 h-24 rounded-full flex items-center justify-center relative mb-8 group">
          <div className="absolute inset-0 bg-saffron/40 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <div className="w-20 h-20 bg-gradient-to-br from-saffron to-orange-600 rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(247,148,31,0.5)]">
            <Users className="w-10 h-10 text-white" />
          </div>
          <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(247,148,31,0.4)] animate-pulse -z-10"></div>
        </div>
        <div className="inline-block border-b-4 border-saffron pb-2 mb-4">
          <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tight">E-Governance Services</h2>
        </div>
        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">Access essential municipal services and portals digitally for a faster experience.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, idx) => {
          const IconComponent = iconMap[service.icon] || MessageSquare;
          const gradient = colorMap[service.color] || 'from-navy to-navy/80';
          const border = borderMap[service.color] || 'border-gray-200';

          return (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className={`bg-white p-6 md:p-8 rounded-lg border-2 ${border} group cursor-pointer transition-all duration-300 hover:shadow-lg flex flex-col items-center`}
            >
              <div className={`w-14 h-14 md:w-16 md:h-16 rounded-md flex items-center justify-center text-white mb-6 shadow-md bg-gradient-to-br ${gradient}`}>
                <IconComponent className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.5} />
              </div>
              <h3 className="font-bold text-navy text-sm md:text-base mb-3 leading-tight group-hover:text-saffron transition-colors">{service.label}</h3>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-4 opacity-60">Online Service</p>
              
              <div className="mt-auto pt-4 border-t border-gray-50 w-full flex items-center justify-center gap-2 text-navy/40 group-hover:text-saffron transition-all font-black text-[9px] uppercase tracking-widest">
                <span>Go to Portal</span>
                <ArrowRight size={12} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="mt-20 text-center">
         <button className="bg-navy text-white px-12 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-saffron shadow-2xl transition-all hover:-translate-y-1">
            View All Citizen Services
         </button>
      </div>
    </section>
  );
}
