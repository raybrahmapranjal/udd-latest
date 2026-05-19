"use client";
import React from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden flex items-center">
      {/* Video Background */}
      <div className="absolute inset-0 bg-black z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://uddbtr.online/videos/kokrajhar-modify.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Brand-Coordinated Transparent Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-950/80 via-blue-900/40 to-cyan-900/40 z-10" />
        <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px] z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          {/* Logo at Center with Glass Sphere Effect */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-24 h-24 sm:w-32 sm:h-32 md:w-44 md:h-44 bg-white/5 backdrop-blur-[2px] rounded-full flex items-center justify-center mb-8 border border-white/10 relative"
          >
            {/* Pulsing Outer soft glow */}
            <motion.div 
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.1, 0.3, 0.1]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full bg-white shadow-[0_0_60px_rgba(255,255,255,0.4)]" 
            />
            
            {/* Middle Glass Layer */}
            <div className="w-[85%] h-[85%] bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20 shadow-lg relative z-10">
              {/* Inner Logo Layer - Semi-transparent background to allow image feel */}
              <div className="w-[90%] h-[90%] bg-white/10 rounded-full p-2 flex items-center justify-center relative overflow-hidden">
                 <img 
                  src="/images/logo.png" 
                  alt="UDD Logo" 
                  className="w-full h-full object-contain relative z-10 brightness-110 contrast-125"
                />
                {/* Subtle highlight/sheen */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent rounded-t-full" />
              </div>
            </div>
          </motion.div>
          
          <h1 className="text-[5vw] sm:text-[6vw] md:text-5xl lg:text-7xl xl:text-[85px] font-sans font-bold text-white mb-2 leading-none tracking-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)] whitespace-nowrap w-full">
            Urban Development Department
          </h1>
          <h2 className="text-[3vw] sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white/90 mb-8 md:mb-12 tracking-wide drop-shadow-md whitespace-nowrap">
            Bodoland Territorial Region (BTR)
          </h2>
          
          <motion.a 
            whileHover={{ scale: 1.05, translateY: -2, boxShadow: "0 10px 40px -10px rgba(249, 115, 22, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            href="#" 
            className="relative group transition-all duration-300"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-500 via-yellow-400 to-purple-600 rounded-xl blur-lg opacity-40 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <div className="relative bg-gradient-to-r from-orange-600 via-amber-400 to-purple-700 text-white px-6 py-3 sm:px-12 sm:py-4 rounded-xl font-extrabold text-[10px] sm:text-lg uppercase tracking-[0.15em] sm:tracking-[0.2em] flex items-center justify-center shadow-2xl">
              Submit Grievance
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
