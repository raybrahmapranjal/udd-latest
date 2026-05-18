"use client";
import { navLinks } from '@/lib/data';
import { FaChevronDown } from 'react-icons/fa';

export default function Navbar() {
  return (
    <nav className="bg-navy sticky top-0 z-[100] shadow-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-wrap lg:flex-nowrap">
        {navLinks.map((link) => (
          <div key={link.label} className="relative group dd-parent">
            <a 
              href={link.href} 
              className="px-4 xl:px-6 py-4 text-[11px] xl:text-[12px] font-bold text-white uppercase tracking-wider flex items-center gap-1.5 hover:bg-white/5 hover:text-saffron transition-all cursor-pointer border-r border-white/5"
            >
              {link.label}
              {link.children && <FaChevronDown className="text-[8px] opacity-40 group-hover:rotate-180 transition-transform" />}
            </a>
            {link.children && (
              <div className="absolute left-0 top-full w-72 bg-white shadow-2xl py-0 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-300 z-[101] border-t-[3px] border-saffron dd-menu overflow-hidden rounded-b-xl">
                {link.children.map((child, idx) => (
                  <a 
                    key={typeof child === 'string' ? child : child.label}
                    href={typeof child === 'string' ? '#' : child.href} 
                    className="block px-6 py-4 text-xs font-bold text-gray-600 hover:bg-lightgray hover:text-saffron transition-all border-b border-gray-50 last:border-0"
                  >
                    {typeof child === 'string' ? child : child.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
}
