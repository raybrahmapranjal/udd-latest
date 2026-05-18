"use client";
import { motion } from 'framer-motion';

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
       <div className="text-center mb-16">
        <h2 className="text-3xl font-serif text-navy mb-4 tracking-tight">Our Gallery</h2>
        <div className="w-12 h-1 bg-saffron mx-auto rounded-full"></div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, idx) => (
          <motion.div 
            key={idx}
            whileHover={{ scale: 1.02 }}
            className="relative overflow-hidden rounded-3xl aspect-video bg-navy group"
          >
            <img 
              src={img} 
              alt={`Gallery ${idx}`} 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
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
