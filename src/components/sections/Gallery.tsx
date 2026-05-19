"use client";
import { motion } from 'framer-motion';
import { Image as ImageIcon } from 'lucide-react';

import Image from 'next/image';

export default function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517733948473-ef8bb7304303?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577083552431-6e5fd01988ec?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519010398647-65481353e97a?q=80&w=600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1493238792000-8113da705763?q=80&w=600&auto=format&fit=crop",
  ];

  return (
    <section id="gallery" className="py-24 px-6 md:px-16 lg:px-32 bg-lightgray">
       <div className="flex flex-col items-center mb-16 text-center">
        <div className="w-24 h-24 rounded-full flex items-center justify-center relative mb-8 group">
          <div className="absolute inset-0 bg-navy/40 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <div className="w-20 h-20 bg-gradient-to-br from-navy to-blue-800 rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(30,58,138,0.5)]">
            <ImageIcon className="w-10 h-10 text-white" />
          </div>
          <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(30,58,138,0.4)] animate-pulse -z-10"></div>
        </div>
        <div className="inline-block border-b-4 border-navy pb-2 mb-4">
          <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tight">Our Gallery</h2>
        </div>
        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">Visualizing the urban transformation and infrastructure development across BTR.</p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-md aspect-video bg-navy group"
          >
            <Image 
              src={img} 
              alt={`Gallery ${idx}`} 
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110" 
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-navy/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
               <span className="bg-white text-navy px-4 py-2 rounded-full text-xs font-bold shadow-xl">
                 Expand View
               </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
