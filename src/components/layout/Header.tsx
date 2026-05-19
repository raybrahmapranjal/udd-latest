"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { navLinks } from '@/lib/data';
import { Menu, X, ChevronDown, Home, Building, Briefcase, MapPin, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getIcon = (label: string) => {
    switch (label) {
      case 'Home': return <Home className="w-5 h-5 text-orange-500" />;
      case 'About UDD': return <Building className="w-5 h-5 text-blue-600" />;
      case 'Services': return <Briefcase className="w-5 h-5 text-green-600" />;
      case 'ULBs': return <MapPin className="w-5 h-5 text-teal-600" />;
      case 'Contact': return <Phone className="w-5 h-5 text-green-600" />;
      default: return null;
    }
  };

  return (
    <>
      <header className="bg-white py-4 px-6 border-b-4 border-[#f26522] shadow-sm sticky top-0 z-[110] transition-all duration-300">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
          {/* Logo Section */}
          <div className="flex items-center gap-4 shrink-0">
            <div className="relative h-16 w-16 md:h-20 md:w-20 shrink-0">
              <img 
                src="/images/logo.png" 
                alt="Logo" 
                className="h-full w-full object-contain scale-125"
              />
            </div>
            <div className="text-left ml-2">
              <h1 className="text-[10px] md:text-sm lg:text-base font-black uppercase text-[#003366] tracking-tight leading-tight">
                Urban Development Department
              </h1>
              <h2 className="text-[8px] md:text-[10px] font-bold text-[#ff6600] uppercase tracking-wide leading-none">
                KOKRAJHAR, BTC, ASSAM
              </h2>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <a 
                  href={link.href} 
                  className={`flex items-center gap-2 py-2 px-3 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                    link.label === 'ULBs' ? 'border-2 border-blue-600 text-[#003366] font-bold' : 'text-gray-700 font-bold'
                  }`}
                >
                  {getIcon(link.label)}
                  <span className="text-sm tracking-tight">{link.label}</span>
                  {link.children && <ChevronDown className="w-3 h-3 text-gray-400 group-hover:rotate-180 transition-transform" />}
                </a>
                
                {link.children && (
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

          <div className="flex items-center gap-4 shrink-0">
            <div className="hidden xl:block h-8 w-px bg-gray-200 mx-2" />
            
            <button className="bg-[#ff6600] hover:bg-[#e65c00] text-white px-8 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
              Login
            </button>

            {/* Mobile Toggle */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-[#003366] p-2 rounded-lg bg-gray-50 transition-colors hover:bg-gray-100"
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
            className="fixed inset-0 top-[96px] md:top-[116px] bg-white z-[100] lg:hidden overflow-y-auto"
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
                  {link.children && (
                    <div className="mt-4 ml-4 space-y-3">
                      {link.children.map((child) => (
                        <a 
                          key={typeof child === 'string' ? child : child.label}
                          href={typeof child === 'string' ? '#' : child.href}
                          className="block text-gray-500 font-bold text-xs hover:text-saffron transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {typeof child === 'string' ? child : child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
