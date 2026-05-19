"use client";
import { motion } from 'framer-motion';
import { FaLightbulb, FaComments, FaStar } from 'react-icons/fa';

export default function CitizenEngagement() {
  const actions = [
    { icon: FaLightbulb, title: 'Share Suggestions', desc: 'Have an idea for urban improvement? Let us know how we can serve you better.' },
    { icon: FaComments, title: 'Give Feedback', desc: 'Rate our services and help us improve the quality of lives in our cities.' },
    { icon: FaStar, title: 'Share Your Ideas', desc: 'Join our initiative for smart and sustainable cities in the Bodoland region.' },
  ];

  return (
    <section className="bg-navy py-24 px-6 md:px-16 lg:px-32 text-white relative overflow-hidden">
      <div className="dot-pattern absolute inset-0 opacity-10"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center relative mb-8 group">
            <div className="absolute inset-0 bg-white/30 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-transparent rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              <FaStar className="text-3xl text-white" />
            </div>
            <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.2)] animate-pulse -z-10"></div>
          </div>
          <div className="inline-block border-b-4 border-saffron pb-2 mb-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Citizen Engagement</h2>
          </div>
          <p className="text-white/60 max-w-2xl mx-auto font-medium text-lg leading-relaxed">Your participation is vital in shaping the future of Bodoland Territorial Region.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action, idx) => (
            <motion.div 
               key={idx}
               whileHover={{ scale: 1.03 }}
               className="bg-white/5 backdrop-blur-md p-10 rounded-2xl text-center border border-white/10 group cursor-pointer"
            >
              <div className="w-16 h-16 bg-saffron rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
                 <action.icon className="text-2xl text-white" />
              </div>
              <h4 className="text-xl font-bold mb-4">{action.title}</h4>
              <p className="text-sm text-white/60 leading-relaxed mb-6 font-medium">
                {action.desc}
              </p>
              <span className="text-saffron font-bold text-xs uppercase tracking-widest group-hover:underline">
                 Click Here →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
