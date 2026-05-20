"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, MessageSquare } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] md:min-h-screen w-full overflow-hidden flex items-center py-16 md:py-24">
      {/* Video Background */}
      <div className="absolute inset-0 bg-black z-0 pointer-events-none select-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          className="w-full h-full object-cover opacity-60 pointer-events-none select-none"
        >
          <source src="https://uddbtr.online/videos/kokrajhar-modify.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Very light purple color overlay with glowing feel */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#4c1d95]/15 via-slate-950/30 to-[#1e1b4b]/15 z-10" />
        <div className="absolute inset-0 bg-purple-500/5 backdrop-blur-[0.5px] z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 w-full text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto flex flex-col items-center"
        >
          {/* Logo at Center with Circular Gradient Glowing Ring matching layout exactly */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full flex items-center justify-center mb-8 relative"
          >
            {/* Ambient Pulse Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/25 to-blue-500/15 blur-2xl animate-pulse" />
            
            {/* Concentric rings with glowing border state animation */}
            <motion.div 
              animate={{ 
                borderColor: ["rgba(255, 102, 0, 0.2)", "rgba(168, 85, 247, 0.6)", "rgba(59, 130, 246, 0.6)", "rgba(255, 102, 0, 0.2)"],
                boxShadow: [
                  "0 0 10px rgba(255, 102, 0, 0.1)",
                  "0 0 25px rgba(168, 85, 247, 0.4)",
                  "0 0 25px rgba(59, 130, 246, 0.4)",
                  "0 0 10px rgba(255, 102, 0, 0.1)"
                ]
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 rounded-full border-2 bg-slate-950/40 p-1 backdrop-blur-md"
            >
              <motion.div 
                animate={{
                  borderColor: ["rgba(255, 255, 255, 0.1)", "rgba(168, 85, 247, 0.35)", "rgba(255, 255, 255, 0.1)"]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="w-full h-full rounded-full border flex items-center justify-center p-1.5 bg-[#0a001a]/40"
              >
                {/* Logo Wrapper */}
                <div className="relative w-full h-full rounded-full overflow-hidden bg-transparent flex items-center justify-center p-1">
                  <Image 
                    src="https://cdn.abacus.ai/images/8409d4a8-4907-46a5-ac73-f478108354d6.png" 
                    alt="UDD Logo" 
                    fill
                    sizes="(max-width: 640px) 80px, (max-width: 768px) 110px, 140px"
                    className="object-contain"
                    referrerPolicy="no-referrer"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* State Department Header - smaller refined font size layout */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[46px] xl:text-[52px] font-sans font-bold text-white mb-2 leading-tight tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]">
            Urban Development Department
          </h1>
          <h2 className="text-base sm:text-xl md:text-2xl lg:text-[28px] font-semibold text-yellow-200 mb-8 tracking-wide drop-shadow-md">
            Bodoland Territorial Council (BTC)
          </h2>
          
          {/* Mission & Vision Statements */}
          <p className="text-sm sm:text-base md:text-[19px] text-white font-medium italic mb-2 tracking-wide drop-shadow-sm max-w-4xl leading-relaxed">
            Building Sustainable, Inclusive and Digitally Empowered Urban Bodoland
          </p>
          <p className="text-[11px] sm:text-sm md:text-[15px] text-slate-300 font-normal mb-8 max-w-3xl leading-relaxed drop-shadow-sm">
            &quot;Committed to planned urban growth, transparent governance, and citizen-first services through innovation and technology.&quot;
          </p>
          
          {/* Submit Grievance Action Button */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="mb-12 mt-2"
          >
            <a 
              href="#citizen-engagement"
              className="group inline-flex items-center gap-3 bg-white/5 backdrop-blur-md border border-purple-500 rounded-xl px-5 py-3.5 text-left shadow-lg transition-all duration-300 relative overflow-hidden select-none hover:bg-purple-600/15 hover:border-purple-400 hover:shadow-[0_0_25px_rgba(168,85,247,0.4)] hover:scale-[1.02] text-white"
            >
              <MessageSquare className="w-4 h-4 text-amber-400 group-hover:text-amber-300 transition-colors duration-300" />
              <span className="font-extrabold text-xs md:text-sm tracking-widest uppercase">Submit Grievance</span>
              <ArrowRight className="w-4 h-4 text-purple-400 group-hover:text-purple-300 transition-transform duration-300 ease-out transform group-hover:translate-x-1.5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
