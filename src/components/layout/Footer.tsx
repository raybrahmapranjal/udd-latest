"use client";
import React from 'react';
import Image from 'next/image';
import { Phone, Mail, Building2, ExternalLink, Heart, Facebook, Twitter, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#121d42] via-[#153482] to-[#080f27] text-white pt-16 pb-10 px-6 md:px-12 lg:px-24 xl:px-32 relative overflow-hidden border-t border-slate-700/50">
      
      {/* 1. Header Brand block matched to image */}
      <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center pb-10 relative z-10">
        
        {/* Double-ring concentric circle styled logo matching screenshot with gradient and glow logo */}
        <div className="relative w-28 h-28 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#131b3e] via-[#1a2d6b] to-[#0e1635] shadow-[0_0_35px_rgba(59,130,246,0.55),_0_0_15px_rgba(255,153,51,0.35),_0_8px_16px_rgba(0,0,0,0.4)] border-4 border-gradient select-none mb-6 border-[#ff9933]/60 transition-transform duration-300 hover:scale-105">
          {/* Inner metallic glowing ring */}
          <div className="absolute inset-[3px] rounded-full border border-[#ff9933]/30 shadow-[0_0_10px_rgba(255,153,51,0.2)]"></div>
          
          {/* Transparent inner canvas circle for emblem */}
          <div className="relative h-16 w-16 bg-transparent rounded-full flex items-center justify-center">
            <Image 
              src="https://cdn.abacus.ai/images/8409d4a8-4907-46a5-ac73-f478108354d6.png" 
              alt="BTC Department Emblem" 
              fill
              className="object-contain"
              referrerPolicy="no-referrer"
              priority
            />
          </div>
        </div>

        {/* Brand Headings matched exactly to screenshot */}
        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
          Urban Development Department
        </h3>
        <p className="text-sm sm:text-base font-extrabold tracking-wide text-[#ff9933] mt-2">
          Kokrajhar, BTC, Assam
        </p>

        {/* Social media connections matched to screenshot */}
        <div className="flex items-center gap-4 mt-8">
          <a 
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-[#3b5998] hover:scale-105 active:scale-95 transition-all duration-250 cursor-pointer shadow-md text-white"
            title="Facebook"
            id="footer-social-facebook"
          >
            <Facebook className="w-5 h-5 text-white fill-current" />
          </a>

          <a 
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-[#1da1f2] hover:scale-105 active:scale-95 transition-all duration-250 cursor-pointer shadow-md text-white"
            title="Twitter"
            id="footer-social-twitter"
          >
            <Twitter className="w-5 h-5 text-white fill-current" />
          </a>

          <a 
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 rounded-full flex items-center justify-center bg-[#e1306c] hover:scale-105 active:scale-95 transition-all duration-250 cursor-pointer shadow-md text-white"
            title="Instagram"
            id="footer-social-instagram"
          >
            <Instagram className="w-5 h-5 text-white" />
          </a>

          <a 
            href="#"
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
              className="flex items-center gap-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-3 rounded-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="bg-[#ff6600] p-2 rounded-lg text-white group-hover:scale-105 transition-transform">
                <Phone className="h-4 w-4" />
              </div>
              <span className="font-extrabold text-[#ff6600] text-sm md:text-base tracking-tight transition-colors">
                8812825012
              </span>
            </a>

            {/* Email contact card */}
            <a 
              href="mailto:contact@uddbtr.org" 
              className="flex items-center gap-3.5 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 p-3 rounded-xl transition-all duration-300 group cursor-pointer"
            >
              <div className="bg-[#ff6600] p-2 rounded-lg text-white group-hover:scale-105 transition-transform">
                <Mail className="h-4 w-4" />
              </div>
              <span className="font-extrabold text-[#ff6600] text-xs sm:text-sm tracking-tight transition-colors">
                contact@uddbtr.org
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
              { label: 'About Us', href: '/#about' },
              { label: 'Citizen Charter', href: '/citizen-charter' },
              { label: 'Departments', href: '/#departments' },
              { label: 'Government Schemes', href: '/schemes' },
              { label: 'News & Events', href: '/#news' },
              { label: 'Gallery', href: '/#gallery' },
              { label: 'File Grievance', href: '/grievance' },
              { label: 'Contact Us', href: '/contact' },
            ].map((link, idx) => (
              <li key={idx} className="flex items-center">
                <a 
                  href={link.href} 
                  className="text-slate-300 hover:text-[#ff6600] font-bold flex items-center gap-1.5 transition-colors duration-200"
                >
                  <span className="text-[#ff6600] font-extrabold text-sm">&rarr;</span> {link.label}
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
              { label: 'Government of Assam', href: 'https://assam.gov.in', external: true },
              { label: 'Government of India', href: 'https://india.gov.in', external: true },
              { label: 'Ministry of Housing & Urban Affairs', href: 'https://mohua.gov.in', external: true },
              { label: 'Digital India', href: 'https://digitalindia.gov.in', external: true },
              { label: 'Swachh Bharat Mission', href: 'https://swachhbharatmission.ddp.gov.in', external: true },
              { label: 'Tenders & Procurement', href: '/tenders', external: false },
            ].map((link, idx) => (
              <li key={idx}>
                <a 
                  href={link.href}
                  target={link.external ? "_blank" : undefined}
                  rel={link.external ? "noopener noreferrer" : undefined}
                  className="text-slate-300 hover:text-[#ff6600] font-bold flex items-center gap-2 transition-colors duration-200"
                >
                  {link.external ? (
                    <ExternalLink className="h-3.5 w-3.5 text-blue-450 shrink-0" />
                  ) : (
                    <span className="text-[#ff6600] font-extrabold text-sm">&rarr;</span>
                  )}
                  <span>{link.label}</span>
                </a>
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
            ].map((link, idx) => (
              <li key={idx} className="flex items-center">
                <a 
                  href={link.href} 
                  className="text-slate-300 hover:text-[#ff6600] font-bold flex items-center gap-1.5 transition-colors duration-200"
                >
                  <span className="text-[#ff6600] text-base leading-none">•</span> <span>{link.label}</span>
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
          <a href="/privacy-policy" className="text-slate-300 hover:text-[#ff6600] transition-colors">Privacy Policy</a>
          <span className="text-[#ff6600]">•</span>
          <a href="/terms-of-use" className="text-slate-300 hover:text-[#ff6600] transition-colors">Terms of Use</a>
          <span className="text-[#ff6a00]">•</span>
          <a href="/accessibility" className="text-slate-300 hover:text-[#ff6600] transition-colors">Accessibility</a>
        </div>

        {/* Developer Credit & Copyright matching screenshot requirements */}
        <div className="flex flex-col gap-1 text-xs text-slate-400 font-semibold tracking-wide">
          <p className="flex flex-wrap items-center justify-center gap-1">
            <span>Made with</span>
            <Heart className="h-3.5 w-3.5 text-red-500 fill-red-500 animate-pulse" />
            <span>in India 🇮🇳</span>
            <span className="mx-1">|</span>
            <span>Developed & Maintained by</span>
            <span className="text-orange-400 font-extrabold uppercase">smartbtr private limited</span>
          </p>
          <p className="text-slate-500/90 text-[11px] mt-1 font-medium">
            &copy; {currentYear} smartbtr private limited. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
