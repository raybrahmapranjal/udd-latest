"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const LOADING_MESSAGES = [
  "Connecting to UDD BTC Portal...",
  "Loading citizen e-Services...",
  "Retrieving municipal schemes...",
  "Styling with traditional Aronai...",
  "Portal ready!"
];

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [currMessageIndex, setCurrMessageIndex] = useState(0);

  useEffect(() => {
    // Increment progress from 0 to 100
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        // Increment by a satisfying random amount
        const inc = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + inc, 100);
      });
    }, 80);

    // Rotate messages
    const messageInterval = setInterval(() => {
      setCurrMessageIndex((prev) => (prev < LOADING_MESSAGES.length - 1 ? prev + 1 : prev));
    }, 400);

    return () => {
      clearInterval(progressInterval);
      clearInterval(messageInterval);
    };
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const finishTimer = setTimeout(() => {
        setLoading(false);
      }, 400); // Small pause at 100% for a smooth exit transition
      return () => clearTimeout(finishTimer);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="fixed inset-0 z-[99999] flex flex-col items-center justify-center bg-[#070b1e] overflow-hidden select-none"
        >
          {/* Subtle Bodo Aronai Background Pattern with very low opacity */}
          <div 
            className="absolute inset-0 z-0 opacity-[0.04] bg-repeat pointer-events-none mix-blend-overlay"
            style={{ 
              backgroundImage: "url('/aronai.png')",
              backgroundSize: "240px auto"
            }}
          />

          {/* Deep royal glow effect in the center */}
          <div className="absolute w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[100px] pointer-events-none z-0" />
          <div className="absolute w-[250px] h-[250px] rounded-[#f26522]/5 blur-[80px] pointer-events-none z-0" />

          <div className="relative z-10 flex flex-col items-center max-w-md px-6 text-center">
            
            {/* Animated Logo Container with glowing outer rings */}
            <div className="relative mb-8 flex items-center justify-center">
              
              {/* Outer Outer rotating decorative dashes */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute w-44 h-44 rounded-full border border-dashed border-[#f26522]/30"
              />

              {/* Inner rotating gradient indicator */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute w-40 h-40 rounded-full border border-t-[#00ccff] border-r-transparent border-b-[#f26522] border-l-transparent"
              />
              
              {/* Pulsing glow ring */}
              <motion.div 
                animate={{ scale: [1, 1.08, 1], opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute w-[136px] h-[136px] rounded-full bg-gradient-to-tr from-[#0d3b84] to-[#f26522] blur-md opacity-60"
              />

              {/* Logo Box - transparent backing and made larger for clear visibility */}
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
                className="relative w-32 h-32 rounded-full flex items-center justify-center p-2 shadow-[0_10px_35px_rgba(0,0,0,0.6)] border-2 border-[#f26522]/40"
              >
                <div className="relative w-full h-full z-10">
                  <Image 
                    src="/btc-logo.png" 
                    alt="UDD BTC Logo" 
                    fill
                    className="object-contain p-0.5 filter drop-shadow-[0_4px_12px_rgba(0,0,0,0.85)]"
                    referrerPolicy="no-referrer"
                    priority
                  />
                </div>
              </motion.div>
            </div>

            {/* Department Titles */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-lg sm:text-xl font-extrabold uppercase text-white tracking-wider leading-tight drop-shadow-md">
                Urban Development Department
              </h1>
              <h2 className="text-[11px] sm:text-[12px] font-bold text-amber-400 uppercase tracking-widest mt-1.5 opacity-90">
                Bodoland Territorial Council (BTC)
              </h2>
            </motion.div>

            {/* Progress Container */}
            <div className="w-56 mt-8 mb-4 relative">
              {/* Outer Track */}
              <div className="h-[3px] w-full bg-white/10 rounded-full overflow-hidden">
                {/* Active fill */}
                <motion.div 
                  className="h-full bg-gradient-to-r from-[#0d3b84] via-[#3b82f6] to-[#f26522]"
                  style={{ width: `${progress}%` }}
                  transition={{ ease: "easeInOut" }}
                />
              </div>
              
              {/* Percentage Indicator */}
              <div className="flex justify-between items-center mt-2.5 px-0.5 text-[10px] font-mono tracking-wider font-semibold text-slate-400">
                <span className="uppercase text-slate-500">MUNICIPAL SERVICES</span>
                <span className="text-[#f26522]">{progress}%</span>
              </div>
            </div>

            {/* Animated Loading Status messages */}
            <div className="h-5 overflow-hidden relative w-full">
              <AnimatePresence mode="wait">
                <motion.p
                  key={currMessageIndex}
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -15, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-xs font-semibold text-slate-300 tracking-wide text-[#b9cbe7]/80"
                >
                  {LOADING_MESSAGES[currMessageIndex]}
                </motion.p>
              </AnimatePresence>
            </div>

          </div>

          {/* Golden bottom highlights matching portal */}
          <div className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0d3b84] via-[#f26522] to-[#ffc000] opacity-80" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
