"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { navLinks } from '@/lib/data';
import { Menu, X, ChevronDown, Home, Building, Briefcase, MapPin, Phone, Sparkles, MessageSquare, FileText, Info, Target, ChevronRight, Network, Landmark, Award, Users, FileCheck } from 'lucide-react';
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

const servicesMenu = [
  { name: 'Property Tax', href: '/services/property-tax' },
  { name: 'Trade Licence Application', href: '/services/trade-license' },
  { name: 'Hoarding Permission', href: '/services/hoarding-permission' },
  { name: 'Cesspool Request', href: '/services/cesspool-request' },
  { name: 'Film Shooting Permission', href: '/services/film-shooting' },
  { name: 'Field & Hall Booking', href: '/services/field-hall-booking' },
  { name: 'Water Connection', href: '/services/water-supply' },
  { name: 'TDR (Transfer of Development Rights)', href: '/services/transfer-development-rights' },
  { name: 'OBPS (Online Building Permission System)', href: '/services/building-permission' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const getIcon = (label: string) => {
    switch (label) {
      case 'Home': return <Home className="w-[18px] h-[18px] text-orange-500" />;
      case 'About UDD': return <Building className="w-[18px] h-[18px] text-blue-600" />;
      case 'Services': return <Briefcase className="w-[18px] h-[18px] text-green-600" />;
      case 'Grievance': return <MessageSquare className="w-[18px] h-[18px] text-red-500 animate-pulse" />;
      case 'Governance': return <Landmark className="w-[18px] h-[18px] text-purple-600" />;
      case 'ULBs': return <MapPin className="w-[18px] h-[18px] text-blue-600" />;
      case 'Contact': return <Phone className="w-[18px] h-[18px] text-green-600" />;
      default: return null;
    }
  };

  const getBorderColor = (label: string) => {
    switch (label) {
      case 'About UDD': return 'border-blue-600/30';
      case 'Services': return 'border-green-600/30';
      case 'Governance': return 'border-purple-600/30';
      case 'ULBs': return 'border-blue-600/30';
      default: return 'border-slate-200';
    }
  };

  const getHoverTextColor = (label: string) => {
    switch (label) {
      case 'About UDD': return 'hover:text-blue-600 hover:bg-blue-50/50';
      case 'Services': return 'hover:text-green-600 hover:bg-green-50/50';
      case 'Governance': return 'hover:text-purple-600 hover:bg-purple-50/50';
      case 'ULBs': return 'hover:text-blue-600 hover:bg-blue-50/50';
      default: return 'hover:text-[#ff6600]';
    }
  };

  return (
    <>
      <header className="bg-white py-3 md:py-4 px-4 sm:px-6 md:px-8 border-b-4 border-[#f26522] shadow-sm transition-all duration-300 relative z-[111]">
        <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-1.5 sm:gap-4">
          {/* Logo Section */}
          <a href="/" className="flex items-center gap-2 md:gap-4 shrink overflow-hidden hover:opacity-90 transition-opacity cursor-pointer">
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
              <h1 className="text-sm sm:text-base md:text-lg lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-black uppercase text-[#0d3b84] tracking-tight leading-none select-none whitespace-nowrap">
                <span className="block sm:hidden">UDD BTC</span>
                <span className="hidden sm:block">Urban Development Department</span>
              </h1>
              <h2 className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[9px] xl:text-[10px] 2xl:text-[11px] font-extrabold text-[#f26522] uppercase tracking-wider leading-none select-none mt-1">
                KOKRAJHAR, BTC, ASSAM
              </h2>
            </div>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2.5 2xl:gap-3 px-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <a 
                  href={link.href} 
                  className="flex items-center gap-1.5 py-2 px-[6px] xl:px-[8px] 2xl:px-[10px] rounded-lg text-slate-750 font-bold hover:bg-gray-50/70 hover:text-[#003366] transition-all duration-200 select-none whitespace-nowrap"
                >
                  {getIcon(link.label)}
                  <span className="text-[14px] xl:text-[15px] 2xl:text-[16px] tracking-tight">{link.label}</span>
                  {link.children && <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:rotate-180 transition-transform duration-200 shrink-0" />}
                </a>
                
                {link.label === 'About UDD' ? (
                  /* Custom Designed About UDD Dropdown matching user's image */
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-[360px] bg-white rounded-lg shadow-2xl border border-orange-200 p-0 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-[120] overflow-hidden">
                    {/* Peach gradient banner header */}
                    <div className="bg-[#FFF7ED] px-5 py-4 flex items-center gap-3 border-b border-orange-100">
                      <div className="bg-orange-100/40 p-2 text-[#9A3412] shrink-0 rounded-lg">
                        <Building className="w-5.5 h-5.5 text-[#9A3412]" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-[#7C2D12] text-xs uppercase tracking-wider">
                          ABOUT UDD
                        </h4>
                        <p className="text-[11px] text-[#A14E1B] font-bold mt-0.5">Learn more about our department</p>
                      </div>
                    </div>

                    {/* Menu items inside the dropdown */}
                    <div className="p-3 bg-white flex flex-col gap-1.5">
                      {[
                        { 
                          name: 'About UDD', 
                          href: '/about', 
                          icon: Info 
                        },
                        { 
                          name: 'Objectives', 
                          href: '/about/objectives', 
                          icon: Target 
                        },
                        { 
                          name: 'Organizational Structure', 
                          href: '/about/organization', 
                          icon: Network 
                        }
                      ].map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <a 
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-between hover:bg-orange-50/40 p-2.5 rounded-lg transition-all duration-200 group/item border border-transparent"
                          >
                            <div className="flex items-center gap-3">
                              {/* Orange rounded square backdrop for items */}
                              <div className="w-10 h-10 bg-[#ED6A1C] text-white flex items-center justify-center rounded-xl shrink-0 transition-transform duration-300 group-hover/item:scale-105 group-hover/item:shadow-sm">
                                <IconComponent className="w-5 h-5 text-white stroke-[2.5]" />
                              </div>
                              <span className="font-extrabold text-[#003366] text-sm group-hover/item:text-[#ED6A1C] transition-colors leading-snug">
                                {item.name}
                              </span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-400 group-hover/item:translate-x-0.5 transition-transform shrink-0" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ) : link.label === 'ULBs' ? (
                  /* Custom Designed ULB Menu matching image */
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-[640px] bg-white rounded-lg shadow-2xl border-2 border-blue-600/30 p-0 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-[120] overflow-hidden">
                    {/* Blue gradient banner header */}
                    <div className="bg-sky-50 px-6 py-4 flex items-center gap-3 border-b border-blue-600/20">
                      <div className="bg-sky-500/10 p-2.5 rounded-xl text-[#003366] shrink-0">
                        <MapPin className="w-5 h-5 text-blue-600" />
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
                          <span className="font-extrabold text-[#003366] text-[13px] leading-snug group-hover/item:text-blue-600 transition-colors">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </div>

                    {/* Footer Button Block */}
                    <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center flex-row">
                      <a 
                        href="/schemes"
                        className="w-full text-center py-3 bg-gradient-to-r from-[#2176ff] to-[#01acff] hover:from-[#0052cc] hover:to-[#017fff] text-white rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-1.5"
                      >
                        View All ULBs &rarr;
                      </a>
                    </div>
                  </div>
                ) : link.label === 'Services' ? (
                  /* Custom Designed Services Menu matching uploaded image */
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-[640px] bg-white rounded-lg shadow-2xl border-2 border-green-600/30 p-0 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-[120] overflow-hidden">
                    {/* Green banner header matching the photo */}
                    <div className="bg-emerald-50 px-6 py-4 flex items-center gap-3 border-b border-green-600/20">
                      <div className="bg-emerald-500/10 p-2.5 rounded-xl text-emerald-600 shrink-0">
                        <Briefcase className="w-5 h-5 text-emerald-600" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-emerald-800 text-sm uppercase tracking-wider flex items-center gap-1.5">
                          ALL SERVICES
                        </h4>
                        <p className="text-xs text-emerald-600 font-bold mt-0.5">Access municipal services online</p>
                      </div>
                    </div>

                    {/* 2-Column Selector Grid */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-3.5 p-6 bg-white">
                      {servicesMenu.map((item) => (
                        <a 
                          key={item.name}
                          href={item.href}
                          className="flex items-center gap-3.5 hover:bg-slate-50 p-2 rounded-xl transition-all duration-200 group/item border border-transparent hover:border-slate-100"
                        >
                          <div className="w-10 h-10 bg-emerald-600 text-white flex items-center justify-center rounded-xl shrink-0 transition-all duration-300 shadow-sm group-hover/item:scale-105 group-hover/item:shadow-md">
                            <FileText className="w-5 h-5 text-white" />
                          </div>
                          <span className="font-extrabold text-[#003366] text-[13px] leading-snug group-hover/item:text-emerald-650 transition-colors">
                            {item.name}
                          </span>
                        </a>
                      ))}
                    </div>

                    {/* Footer Button Block */}
                    <div className="p-4 bg-emerald-50/50 border-t border-emerald-100 flex items-center">
                      <a 
                        href="/services"
                        className="w-full text-center py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-1.5"
                      >
                        View All Services &rarr;
                      </a>
                    </div>
                  </div>
                ) : link.label === 'Governance' ? (
                  /* Custom Designed Governance Menu matching uploaded image */
                  <div className="absolute left-1/2 -translate-x-1/2 top-full w-[380px] bg-white rounded-xl shadow-2xl border-2 border-[#7C3AED]/20 p-0 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-[120] overflow-hidden">
                    {/* Header banner exactly matching the style in the uploaded image */}
                    <div className="bg-gradient-to-r from-violet-50 via-white to-fuchsia-50/10 px-6 py-5 flex items-start gap-4 border-b border-violet-100">
                      <div className="bg-violet-100 p-2 text-violet-700 shrink-0 rounded-xl">
                        <Landmark className="w-5.5 h-5.5 stroke-[1.5] text-violet-600" />
                      </div>
                      <div>
                        <h4 className="font-extrabold text-[#5B21B6] text-xs tracking-wider uppercase flex items-center gap-1.5 leading-none">
                          GOVERNANCE & SERVICES
                        </h4>
                        <p className="text-[11px] text-[#7C3AED] font-bold mt-1.5 leading-normal">Smart solutions and government services</p>
                      </div>
                    </div>

                    {/* Content List containing the four items from the photo (RTI removed) */}
                    <div className="p-4 bg-white flex flex-col gap-1">
                      {[
                        { name: 'Schemes', href: '/schemes', icon: Award, iconColor: 'text-amber-500' },
                        { name: 'Departments', href: '/departments', icon: Users, iconColor: 'text-blue-500' },
                        { name: 'Tenders', href: '/tenders', icon: FileCheck, iconColor: 'text-emerald-500' },
                        { name: 'Grievance', href: '/grievance', icon: MessageSquare, iconColor: 'text-rose-500' }
                      ].map((item) => {
                        const IconComponent = item.icon;
                        return (
                          <a 
                            key={item.name}
                            href={item.href}
                            className="flex items-center justify-between p-3 rounded-xl transition-all duration-250 group/item border border-transparent hover:bg-slate-50"
                          >
                            <div className="flex items-center gap-4">
                              {/* Left icon with clean styled color - only icon is colored */}
                              <IconComponent className={`w-5.5 h-5.5 stroke-[1.5] shrink-0 transition-transform duration-300 group-hover/item:scale-110 ${item.iconColor}`} />
                              <span className="font-extrabold text-black text-[15px] transition-colors">
                                {item.name}
                              </span>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-300 group-hover/item:translate-x-1 transition-all shrink-0 group-hover/item:text-slate-450" />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                ) : link.children && (
                  <div className={`absolute left-0 top-full w-56 bg-white shadow-2xl py-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-200 z-[120] border-2 ${getBorderColor(link.label)} rounded-md`}>
                    {link.children.map((child) => (
                      <a 
                        key={typeof child === 'string' ? child : child.label}
                        href={typeof child === 'string' ? '#' : child.href} 
                        className={`block px-4 py-2 text-xs font-bold text-gray-600 hover:bg-gray-50 ${getHoverTextColor(link.label)} transition-all`}
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
            
            <a 
              href="/login"
              className="hidden lg:block bg-[#ff6a00] hover:bg-[#e05315] text-white px-6 py-2.5 rounded-lg font-bold text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5 text-center"
            >
              Login
            </a>

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
                  {link.children ? (
                    <button 
                      onClick={() => setActiveDropdown(activeDropdown === link.label ? null : link.label)}
                      className="text-[#003366] font-black text-sm uppercase tracking-wide flex items-center justify-between w-full text-left py-1 cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        {getIcon(link.label)}
                        {link.label}
                      </div>
                      <ChevronDown className={`w-4 h-4 text-[#003366] transition-transform duration-300 ${activeDropdown === link.label ? 'rotate-180' : ''}`} />
                    </button>
                  ) : (
                    <a 
                      href={link.href}
                      className="text-[#003366] font-black text-sm uppercase tracking-wide flex items-center justify-between py-1"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <div className="flex items-center gap-3">
                        {getIcon(link.label)}
                        {link.label}
                      </div>
                    </a>
                  )}

                  <AnimatePresence>
                    {activeDropdown === link.label && link.children && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        {link.label === 'ULBs' ? (
                          <div className="mt-3 ml-4 grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2">
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
                        ) : link.label === 'Services' ? (
                          <div className="mt-3 ml-4 grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2">
                            {servicesMenu.map((item) => (
                              <a 
                                key={item.name}
                                href={item.href}
                                className="flex items-center gap-2 text-gray-500 font-bold text-xs hover:text-emerald-600 transition-colors py-1.5 pl-2 border-l-2 border-slate-200 hover:border-emerald-600"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                <FileText className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                <span>{item.name}</span>
                              </a>
                            ))}
                          </div>
                        ) : link.label === 'Governance' ? (
                          <div className="mt-3 ml-4 grid grid-cols-1 sm:grid-cols-2 gap-2 pb-2">
                            {[
                              { name: 'Schemes', href: '/schemes', icon: Award, iconColor: 'text-amber-500', hoverBorder: 'hover:border-amber-500' },
                              { name: 'Departments', href: '/departments', icon: Users, iconColor: 'text-blue-500', hoverBorder: 'hover:border-blue-500' },
                              { name: 'Tenders', href: '/tenders', icon: FileCheck, iconColor: 'text-emerald-500', hoverBorder: 'hover:border-emerald-500' },
                              { name: 'Grievance', href: '/grievance', icon: MessageSquare, iconColor: 'text-rose-500', hoverBorder: 'hover:border-rose-500' }
                            ].map((item) => {
                              const IconComponent = item.icon;
                              return (
                                <a 
                                  key={item.name}
                                  href={item.href}
                                  className={`flex items-center gap-2 text-black font-extrabold text-xs transition-colors py-1.5 pl-2 border-l-2 border-slate-200 ${item.hoverBorder}`}
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  <IconComponent className={`w-3.5 h-3.5 stroke-[1.5] shrink-0 ${item.iconColor}`} />
                                  <span>{item.name}</span>
                                </a>
                              );
                            })}
                          </div>
                        ) : (
                          <div className="mt-3 ml-4 space-y-3 pb-2">
                            {link.children.map((child) => (
                              <a 
                                key={typeof child === 'string' ? child : child.label}
                                href={typeof child === 'string' ? '#' : child.href}
                                className="block text-gray-500 font-bold text-xs hover:text-[#ff6600] transition-colors py-1 pl-2 border-l-2 border-slate-200 hover:border-[#ff6600]"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {typeof child === 'string' ? child : child.label}
                              </a>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
              
              {/* Login Button in Mobile Menu */}
              <div className="pt-6">
                <a 
                  href="/login"
                  onClick={() => setIsMenuOpen(false)}
                  className="block w-full text-center bg-[#ff6b00] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#e05315] shadow-md hover:shadow-lg transition-all"
                >
                  Login
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
