"use client";
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { Landmark } from 'lucide-react';
import Image from 'next/image';

export default function LeaderStrip() {
  const leaders = [
    {
      name: "Shri Hagrama Mohilary",
      role: "Visionary Leader & Former CEM",
      subRole: "Bodoland Territorial Council",
      img: "/images/leaders/hagrama_mohilary.png",
      content: "To transform BTR into a model of self-reliance and urban excellence through sustainable growth and inclusive governance.",
      contentType: "Key Vision"
    },
    {
      name: "Smt. Moon Moon Brahma",
      role: "Hon'ble Executive Member",
      subRole: "Urban Development Dept, BTC",
      img: "/images/leaders/moon_moon_brahma.png",
      content: "Empowering our urban centers with modern infrastructure while preserving our unique cultural heritage and green landscapes.",
      contentType: "Key Vision"
    },
    {
       name: "Shri Lankeshwar Owarie",
       role: "Secretary & CHD",
       subRole: "Urban Development Dept, BTC",
       img: "/images/leaders/lankeshwar_owarie.png",
       content: "Implementation of urban policies, technical supervision of infrastructure projects, and ensuring efficient service delivery across all Urban Local Bodies.",
       contentType: "Key Responsibilities"
    }
  ];

  return (
    <section className="bg-[#f8f9fb] py-20 px-6 md:px-16 lg:px-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center relative mb-8 group">
            <div className="absolute inset-0 bg-navy/40 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-navy to-blue-800 rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(30,58,138,0.5)]">
              <Landmark className="w-10 h-10 text-white" />
            </div>
            <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(30,58,138,0.4)] animate-pulse -z-10"></div>
          </div>
          <div className="inline-block border-b-4 border-navy pb-2 mb-4">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tight">Leadership & Vision</h2>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">Guided by the commitment to sustainable urban development and citizen welfare.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {leaders.map((leader, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-md overflow-hidden shadow-lg transition-all duration-300 border-2 ${idx === 0 ? 'border-sky-300' : idx === 1 ? 'border-orange-300' : 'border-emerald-300'} group ${idx === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className={`relative h-72 md:h-80 overflow-hidden bg-gradient-to-br ${
                idx === 0 ? 'from-sky-100 to-sky-200' : 
                idx === 1 ? 'from-orange-100 to-orange-200' : 
                'from-emerald-100 to-emerald-200'
              }`}>
                <Image 
                  src={leader.img} 
                  alt={leader.name} 
                  fill
                  className="object-cover transition-all duration-700" 
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-6 flex justify-center gap-4">
                  <a href="#" className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-saffron transition-colors border border-white/20"><FaFacebookF className="text-xs" /></a>
                  <a href="#" className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-saffron transition-colors border border-white/20"><FaTwitter className="text-xs" /></a>
                  <a href="#" className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-saffron transition-colors border border-white/20"><FaEnvelope className="text-xs" /></a>
                </div>
              </div>
              <div className="p-8 text-center bg-white">
                <h4 className="text-xl font-bold text-navy mb-1">{leader.name}</h4>
                <p className="text-saffron font-bold text-[11px] uppercase tracking-[0.2em] mb-4">
                  {leader.role}
                </p>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest border-t border-gray-50 pt-4">
                    {leader.subRole}
                  </p>
                  <div className="text-left mt-2 border-t border-gray-100 pt-4">
                    <p className="text-navy font-black text-[9px] uppercase tracking-wider mb-2 opacity-60">{leader.contentType}</p>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      {leader.content}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
