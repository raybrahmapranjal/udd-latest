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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif mb-4">Citizen Services</h2>
          <p className="text-white/60 font-medium">We value your participation in building a better BTR</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {actions.map((action, idx) => (
            <motion.div 
               key={idx}
               whileHover={{ scale: 1.03 }}
               className="bg-white/5 backdrop-blur-md p-10 rounded-[40px] text-center border border-white/10 group cursor-pointer"
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
