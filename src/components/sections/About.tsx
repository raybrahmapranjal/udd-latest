"use client";
import { motion } from 'framer-motion';
import { Target, Eye, ShieldCheck } from 'lucide-react';

export default function About() {
  const pillars = [
    { icon: Target, title: 'Vision', text: 'Sustainable and inclusive urban growth across the Bodoland region.' },
    { icon: Eye, title: 'Mission', text: 'Ensuring efficient delivery of civic services and urban infrastructure.' },
    { icon: ShieldCheck, title: 'Values', text: 'Transparency, accountability, and citizen-first governance.' },
  ];

  return (
    <section id="about" className="py-32 px-6 md:px-16 lg:px-32 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-lightgray/30 -z-10 rounded-l-[100px]"></div>
      
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-saffron font-bold text-xs uppercase tracking-[5px] block mb-6">Our Legacy</span>
            <h2 className="text-4xl md:text-6xl font-serif text-navy mb-8 leading-tight">
              Transforming Urban <br/> Landscapes in BTR
            </h2>
            <div className="space-y-6 text-gray-500 leading-relaxed font-medium text-lg">
              <p>
                The Urban Development Department (UDD), Bodoland Territorial Region is the nodal agency for planning and implementing sustainable urban infrastructure solutions.
              </p>
              <p>
                Working under the Bodoland Territorial Council, we manage 12 Urban Local Bodies with a focus on modernizing sanitation, housing, and digital governance.
              </p>
            </div>
            
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="group cursor-pointer">
                  <div className="w-12 h-12 rounded-2xl bg-navy/5 flex items-center justify-center text-navy group-hover:bg-navy group-hover:text-white transition-all mb-4">
                    <pillar.icon size={20} />
                  </div>
                  <h4 className="font-bold text-navy mb-2">{pillar.title}</h4>
                  <p className="text-xs text-gray-400 font-medium leading-relaxed">{pillar.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-40 h-40 border-[20px] border-saffron/10 rounded-full"></div>
            <div className="relative bg-navy overflow-hidden rounded-[60px] aspect-[4/5] shadow-[0_50px_100px_rgba(0,0,0,0.1)]">
                <img 
                  src="https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=2000&auto=format&fit=crop" 
                  alt="Urban Infrastructure" 
                  className="w-full h-full object-cover opacity-80" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-12 left-12 right-12">
                   <div className="bg-white/10 backdrop-blur-xl p-8 rounded-3xl border border-white/20">
                      <p className="text-white/60 font-bold uppercase text-[10px] tracking-widest mb-2">Since inception</p>
                      <h4 className="text-white font-serif text-2xl leading-tight">Committed to Bodoland&apos;s Urban Excellence</h4>
                   </div>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
