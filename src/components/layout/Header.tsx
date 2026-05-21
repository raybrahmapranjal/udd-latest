"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { navLinks } from '@/lib/data';
import { Menu, X, ChevronDown, Home, Building, Briefcase, MapPin, Phone, Sparkles, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ulbItems = [
  { id: 'basugaon_mb', name: 'Basugaon Municipal Board' },
  { id: 'bijni_mb', name: 'Bijni Municipal Board' },
  { id: 'fakiragram_mb', name: 'Fakiragram Municipal Board' },
  { id: 'goreswar_mb', name: 'Goreswar Municipal Board' },
  { id: 'gossaigaon_mb', name: 'Gossaigaon Municipal Board' },
  { id: 'kajalgaon_mb', name: 'Kajalgaon Municipal Board' },
  { id: 'kokrajhar_mb', name: 'Kokrajhar Municipal Board' },
  { id: 'mushalpur_mb', name: 'Mushalpur Municipal Board' },
  { id: 'tamulpur_mb', name: 'Tamulpur Municipal Board' },
  { id: 'tangla_mb', name: 'Tangla Municipal Board' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getIcon = (label: string) => {
    switch (label) {
      case 'Home': return <Home className="w-4 h-4 text-orange-500" />;
      case 'About UDD': return <Building className="w-4 h-4 text-blue-600" />;
      case 'Services': return <Briefcase className="w-4 h-4 text-green-600" />;
      case 'Grievance': return <MessageSquare className="w-4 h-4 text-red-500 animate-pulse" />;
      case 'AI Services': return <Sparkles className="w-4 h-4 text-purple-600 animate-pulse" />;
      case 'ULBs': return <MapPin className="w-4 h-4 text-teal-600" />;
      case 'Contact': return <Phone className="w-4 h-4 text-green-600" />;
      default: return null;
    }
  };

  return (
    <>
      <header className="bg-white py-3 md:py-4 px-4 sm:px-6 md:px-8 border-b-4 border-[#f26522] shadow-sm transition-all duration-300 relative z-[111]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-1.5 sm:gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-2 md:gap-4 shrink overflow-hidden">
            <div className="relative h-11 w-11 sm:h-16 sm:w-16 md:h-[72px] md:w-[72px] lg:h-20 lg:w-20 shrink-0 bg-transparent">
              <Image 
                src="https://cdn.abacus.ai/images/8409d4a8-4907-46a5-ac73-f478108354d6.png" 
                alt="Logo" 
                fill
                sizes="(max-width: 640px) 44px, (max-width: 768px) 64px, (max-width: 1024px) 72px, 80px"
                className="object-contain"
                referrerPolicy="no-referrer"
                priority
              />
            </div>
            <div className="text-left min-w-0">
              <h1 className="text-xs sm:text-sm md:text-base lg:text-[16px] xl:text-[17px] font-black uppercase text-[#003366] tracking-tight leading-tight select-none">
                <span className="block sm:hidden">UDD BTC</span>
                <span className="hidden sm:block">Urban Development Department</span>
              </h1>
              <h2 className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-[#ff6600] uppercase tracking-wider leading-none select-none mt-0.5">
                KOKRAJHAR, BTC, ASSAM
              </h2>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-5">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <a 
                  href={link.href} 
                  className="flex items-center gap-1.5 py-2 px-2.5 rounded-lg text-slate-700 font-bold hover:bg-gray-50 hover:text-[#003366] transition-all duration-200"
                >
                  {getIcon(link.label)}
                  <span className="text-sm tracking-tight">{link.label}</span>
                  {link.children && <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:rotate-180 transition-transform duration-200" />}
                </a>
                
                {link.label === 'ULBs' ? (
                  /* Custom Designed ULB Menu matching image */
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-[640px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-0 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-[120] overflow-hidden">
                    {/* Blue gradient banner header */}
                    <div className="bg-sky-50 px-6 py-4 flex items-center gap-3 border-b border-sky-100">
                      <div className="bg-sky-500/10 p-2.5 rounded-xl text-[#003366] shrink-0">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-[#003366] text-sm uppercase tracking-wider">
                          Urban Local Bodies
                        </h4>
                        <p className="text-xs text-[#0066cc] font-black mt-0.5">Explore 10 ULBs across BTC</p>
                      </div>
                    </div>

                    {/* 2-Column Responsive Board Selector Grid */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 p-6 bg-white">
                      {ulbItems.map((item) => (
                        <a 
                          key={item.id}
                          href={`/ulb/${item.id}`}
                          className="flex items-center gap-3.5 hover:bg-slate-50 p-2 rounded-xl transition-all duration-200 group/item border border-transparent hover:border-slate-100"
                        >
                          <div className="w-10 h-10 bg-gradient-to-tr from-[#3b82f6] to-[#0284c7] hover:from-[#2563eb] hover:to-[#0369a1] text-white flex items-center justify-center rounded-xl shrink-0 transition-all duration-300 shadow-sm group-hover/item:scale-105 group-hover/item:shadow-md">
                            <Building className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-extrabold text-[#003366] text-[13px] leading-snug group-hover/item:text-[#f26522] transition-colors">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </div>

                    {/* Footer Button Block */}
                    <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center">
                      <a 
                        href="/schemes/15fc"
                        className="w-full text-center py-3 bg-gradient-to-r from-[#2176ff] to-[#01acff] hover:from-[#0052cc] hover:to-[#017fff] text-white rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-1.5"
                      >
                        View All ULBs &rarr;
                      </a>
                    </div>
                  </div>
                ) : link.children && (
                  <div className="absolute left-0 top-full w-56 bg-white shadow-2xl py-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-[120] border-t-2 border-[#ff6600] rounded-b-lg">
                    {link.children.map((child) => (
                      <a 
                        key={typeof child === 'string' ? child : child.label}
                        href={typeof child === 'string' ? '#' : child.href} 
                        className="block px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-50 hover:text-[#ff6600] transition-all"
                      >
                        {typeof child === 'string' ? child : child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Login and Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-4 shrink-0">
            <div className="hidden lg:block h-8 w-px bg-gray-200 mx-1" />
            
            <button className="hidden lg:block bg-[#ff6a00] hover:bg-[#e05315] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
              Login
            </button>

            {/* Mobile Toggle Button (Visible strictly on mobile/tablet) */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[#003366] p-2 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="fixed inset-x-0 top-[72px] sm:top-[92px] md:top-[112px] bottom-0 bg-white z-[100] lg:hidden overflow-y-auto shadow-inner"
          >
            <div className="p-6 space-y-4">
              {navLinks.map((link) => (
                <div key={link.label} className="border-b border-gray-50 pb-4 last:border-0 last:pb-0">
                  <a 
                    href={link.href}
                    className="text-[#003366] font-black text-sm uppercase tracking-wide flex items-center justify-between"
                    onClick={() => !link.children && setIsMenuOpen(false)}
                  >
                    <div className="flex items-center gap-3">
                      {getIcon(link.label)}
                      {link.label}
                    </div>
                  </a>
                  {link.label === 'ULBs' ? (
                    <div className="mt-4 ml-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {ulbItems.map((item) => (
                        <a 
                          key={item.id}
                          href={`/ulb/${item.id}`}
                          className="flex items-center gap-2 text-gray-500 font-bold text-xs hover:text-[#ff6600] transition-colors py-1.5 pl-2 border-l-2 border-slate-200 hover:border-[#ff6600]"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <Building className="w-3.5 h-3.5 text-sky-500 shrink-0" />
                          <span>{item.name}</span>
                        </a>
                      ))}
                    </div>
                  ) : link.children && (
                    <div className="mt-4 ml-4 space-y-3">
                      {link.children.map((child) => (
                        <a 
                          key={typeof child === 'string' ? child : child.label}
                          href={typeof child === 'string' ? '#' : child.href}
                          className="block text-gray-500 font-bold text-xs hover:text-[#ff6600] transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {typeof child === 'string' ? child : child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Login Button in Mobile Menu */}
              <div className="pt-6">
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full bg-[#ff6600] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#e05315] shadow-md hover:shadow-lg transition-all"
                >
                  Login
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
