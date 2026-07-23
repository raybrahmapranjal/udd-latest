"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Phone, Mail, Building2, ExternalLink, Heart, Facebook, Twitter, Youtube, Instagram, ChevronRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0e1635] bg-gradient-to-b from-[#121d42] to-[#080f27] text-white pt-16 pb-10 px-6 md:px-12 lg:px-24 xl:px-32 relative overflow-hidden border-t border-slate-700/50">
      
      {/* 1. Header Brand block matched to image */}
      <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center pb-10 relative z-10">
        
        {/* Double-ring concentric circle styled logo matching screenshot with gradient and glow logo */}
        <a href="/" className="block relative w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#131b3e] to-[#0e1635] shadow-lg md:shadow-[0_0_35px_rgba(59,130,246,0.55),_0_0_15px_rgba(255,153,51,0.35),_0_8px_16px_rgba(0,0,0,0.4)] border-4 border-gradient select-none mb-6 border-[#ff9933]/60 transition-transform duration-300 hover:scale-105 hover:opacity-95">
          {/* Inner metallic glowing ring */}
          <div className="absolute inset-[3px] rounded-full border border-[#ff9933]/30 shadow-[0_0_10px_rgba(255,153,51,0.2)]"></div>
          
          {/* Transparent inner canvas circle for emblem */}
          <div className="relative h-16 w-16 bg-transparent rounded-full flex items-center justify-center">
            <Image 
              src="/btc-logo.png" 
              alt="BTC Department Emblem" 
              fill
              className="object-contain"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
        </a>

        {/* Brand Headings matched exactly to screenshot */}
        <a href="/" className="hover:opacity-90 transition-opacity">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
            Urban Development Department
          </h3>
          <p className="text-sm sm:text-base font-extrabold tracking-wide text-[#ff9933] mt-2">
            Kokrajhar, BTC, Assam
          </p>
        </a>

        {/* Social media connections matched to screenshot */}
        <div className="flex items-center gap-4 mt-8">
          <a 
            href="https://www.facebook.com/@uddbtr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-[#3b5998] hover:scale-105 active:scale-95 transition-all duration-250 cursor-pointer shadow-md text-white"
            title="Facebook"
            id="footer-social-facebook"
          >
            <Facebook className="w-5 h-5 text-white fill-current" />
          </a>

          <a 
            href="https://x.com/uddbtr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1da1f2] hover:scale-105 active:scale-95 transition-all duration-250 cursor-pointer shadow-md text-white"
            title="Twitter"
            id="footer-social-twitter"
          >
            <Twitter className="w-5 h-5 text-white fill-current" />
          </a>

          <a 
            href="https://www.instagram.com/uddbtr/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-[#e1306c] hover:scale-105 active:scale-95 transition-all duration-250 cursor-pointer shadow-md text-white"
            title="Instagram"
            id="footer-social-instagram"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>

          <a 
            href="https://www.youtube.com/@uddbtr"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-[#ff0000] hover:scale-105 active:scale-95 transition-all duration-250 cursor-pointer shadow-md text-white"
            title="YouTube"
            id="footer-social-youtube"
          >
            <Youtube className="w-5 h-5 text-white fill-current" />
          </a>
        </div>
      </div>

      {/* 2. Bold Orange Horizontal divider line matching requested visual */}
      <div className="max-w-[1400px] mx-auto border-t-2 border-[#ff6600]/80 mb-12 relative z-10" />

      {/* 3. Grid structure for columns */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 xl:gap-12 relative z-10 text-left">
        
        {/* About Us Column */}
        <div className="flex flex-col gap-5">
          <div className="flex items-center gap-3">
            <div className="bg-[#ff6600] p-2.5 rounded-xl text-white shadow-lg shadow-orange-500/10 shrink-0">
              <Building2 className="h-6 w-6" />
            </div>
            <h4 className="font-extrabold text-xl lg:text-2xl text-white tracking-tight">About Us</h4>
          </div>
          <p className="text-sm text-slate-300/90 leading-relaxed font-semibold">
            Urban Development Department - Building sustainable and modern urban infrastructure for the people of Bodoland.
          </p>
          
          <div className="flex flex-col gap-3 mt-2">
            {/* Phone contact card */}
            <a 
              href="tel:8812825012" 
              className="flex items-center gap-3 bg-transparent md:bg-white/5 md:hover:bg-white/10 border-0 md:border md:border-white/10 hover:border-orange-500/30 p-1 md:p-3 rounded-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="bg-[#ff6600] p-2 rounded-lg text-white group-hover:scale-105 transition-transform shrink-0">
                <Phone className="h-4 w-4 text-white" />
              </div>
              <span className="font-extrabold text-white group-hover:text-orange-400 text-sm md:text-base tracking-tight transition-colors">
                8812825012
              </span>
            </a>

            {/* Email contact card */}
            <a 
              href="mailto:contact@uddbtr.in" 
              className="flex items-center gap-3 bg-transparent md:bg-white/5 md:hover:bg-white/10 border-0 md:border md:border-white/10 hover:border-orange-500/30 p-1 md:p-3 rounded-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="bg-[#ff6600] p-2 rounded-lg text-white group-hover:scale-105 transition-transform shrink-0">
                <Mail className="h-4 w-4 text-white" />
              </div>
              <span className="font-extrabold text-white group-hover:text-orange-400 text-xs sm:text-sm tracking-tight transition-colors font-sans truncate">
                contact@uddbtr.in
              </span>
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h4 className="border-l-4 border-[#ff6600] pl-3 font-extrabold text-lg text-white tracking-wider uppercase">
            Quick Links
          </h4>
          <ul className="space-y-3.5 mt-6 text-sm">
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Citizen Charter', href: '/services' },
              { label: 'Departments', href: '/departments' },
              { label: 'Government Schemes', href: '/schemes' },
              { label: 'News & Events', href: '/news' },
              { label: 'Gallery', href: '/gallery' },
              { label: 'File Grievance', href: '/grievance' },
              { label: 'Contact Us', href: '/contact' },
            ].map((link, idx) => (
              <li key={idx} className="flex items-center">
                <a 
                  href={link.href} 
                  className="text-slate-300 hover:text-[#ff6600] font-bold flex items-center gap-2 transition-colors duration-200"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-[#ff6600] shrink-0" /> {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Important Links Column */}
        <div>
          <h4 className="border-l-4 border-[#ff6600] pl-3 font-extrabold text-lg text-white tracking-wider uppercase">
            Important Links
          </h4>
          <ul className="space-y-3.5 mt-6 text-sm">
            {[
              { label: 'BTC Government Portal', href: 'https://bodoland.gov.in', external: true },
              { label: 'Government of Assam', href: 'https://assam.gov.in/', external: true },
              { label: 'Government of India', href: 'https://www.india.gov.in/', external: true },
              { label: 'Ministry of Housing & Urban Affairs', href: 'https://mohua.gov.in/', external: true },
              { label: 'Digital India', href: 'https://www.digitalindia.gov.in/', external: true },
              { label: 'Swachh Bharat Mission', href: 'https://sbmurban.org/', external: true },
              { label: 'Tenders & Procurement', href: '/tenders', external: false },
            ].map((link, idx) => (
              <li key={idx}>
                {link.external ? (
                  <a 
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-[#ff6600] font-bold flex items-center gap-2 transition-colors duration-200"
                  >
                    <ExternalLink className="h-3.5 w-3.5 text-[#ff6600] shrink-0" />
                    <span>{link.label}</span>
                  </a>
                ) : (
                  <a 
                    href={link.href}
                    className="text-slate-300 hover:text-[#ff6600] font-bold flex items-center gap-2 transition-colors duration-200"
                  >
                    <ChevronRight className="h-3.5 w-3.5 text-[#ff6600] shrink-0" />
                    <span>{link.label}</span>
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Our ULBs Column */}
        <div>
          <h4 className="border-l-4 border-[#ff6600] pl-3 font-extrabold text-lg text-white tracking-wider uppercase">
            Our ULBs
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2.5 mt-6 text-sm">
            {[
              { label: 'Kokrajhar MB', href: '/ulb/kokrajhar_mb' },
              { label: 'Gossaigaon MB', href: '/ulb/gossaigaon_mb' },
              { label: 'Fakiragram MB', href: '/ulb/fakiragram_mb' },
              { label: 'Basugaon MB', href: '/ulb/basugaon_mb' },
              { label: 'Kajalgaon MB', href: '/ulb/kajalgaon_mb' },
              { label: 'Bijni MB', href: '/ulb/bijni_mb' },
              { label: 'Tangla MB', href: '/ulb/tangla_mb' },
              { label: 'Mushalpur MB', href: '/ulb/mushalpur_mb' },
              { label: 'Goreswar MB', href: '/ulb/goreswar_mb' },
              { label: 'Tamulpur MB', href: '/ulb/tamulpur_mb' },
              { label: 'Udalguri MB', href: '/ulb/udalguri_mb' },
            ].map((link, idx) => (
              <li key={idx} className="flex items-center">
                <a 
                  href={link.href} 
                  className="text-slate-300 hover:text-[#ff6600] font-bold flex items-center gap-2 transition-colors duration-200"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-[#ff6600] shrink-0" /> <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>

      </div>

      {/* Footer Bottom section */}
      <div className="max-w-[1400px] mx-auto border-t border-slate-700/60 mt-12 pt-8 flex flex-col items-center gap-4 text-center relative z-10">
        
        {/* Navigation row */}
        <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm font-extrabold tracking-tight">
          <a href="/privacy-policy" className="text-slate-300 hover:text-[#ff6600] transition-colors font-bold">Privacy Policy</a>
          <span className="text-[#ff6600]">•</span>
          <a href="/terms-of-use" className="text-slate-300 hover:text-[#ff6600] transition-colors font-bold">Terms of Use</a>
          <span className="text-[#ff6a00]">•</span>
          <a href="/accessibility" className="text-slate-300 hover:text-[#ff6600] transition-colors font-bold">Accessibility</a>
        </div>

        {/* Developer Credit & Copyright matching screenshot requirements */}
        <div className="flex flex-col gap-1.5 text-sm sm:text-base text-slate-300 font-bold tracking-wide">
          <p className="flex flex-wrap items-center justify-center gap-1">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" />
            <span>in India 🇮🇳</span>
            <span className="mx-1">|</span>
            <span>Developed & Maintained by</span>
            <a 
              href="https://smartbtr.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-orange-400 font-extrabold uppercase hover:underline hover:text-orange-350 transition-colors"
            >
              SMARTBTR PRIVATE LIMITED
            </a>
          </p>
          <p className="text-slate-400 text-xs sm:text-sm mt-1 font-semibold">
            &copy; {currentYear} <a href="https://smartbtr.com/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-slate-300 transition-colors">SMARTBTR PRIVATE LIMITED</a>. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
