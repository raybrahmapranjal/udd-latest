"use client";
import React, { useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaClipboardList, FaGlobe } from 'react-icons/fa';

export default function UtilityBar() {
  useEffect(() => {
    // Check if script already exists
    if (document.querySelector('script[src*="translate.google.com"]')) {
      if ((window as any).google && (window as any).google.translate) {
        try {
          new (window as any).google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'as,hi,en', 
            autoDisplay: false
          }, 'google_translate_element');
        } catch (e) {
          console.error('Google Translate Init Error:', e);
        }
      }
      return;
    }

    const addScript = document.createElement('script');
    addScript.setAttribute('src', 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
    addScript.setAttribute('crossorigin', 'anonymous');
    addScript.async = true;
    document.body.appendChild(addScript);

    (window as any).googleTranslateElementInit = () => {
      new (window as any).google.translate.TranslateElement({
        pageLanguage: 'en',
        includedLanguages: 'as,hi,en', 
        autoDisplay: false
      }, 'google_translate_element');
    };
  }, []);

  const notices = [
    "Annual Development Plan 2025-26 Open for Public Consultation till 31st December 2025",
    "Tender Notice for Road Construction Works in Kokrajhar Municipal Board Area",
    "Applications invited for Trade License Renewal 2024-25"
  ];

  return (
    <div className="hidden lg:block bg-[#ff6600] text-white py-2.5 px-4 shadow-inner relative z-[150]">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between gap-4">
        {/* Social Icons Left */}
        <div className="flex items-center gap-2 shrink-0">
          {[
            { Icon: FaFacebookF, href: "https://www.facebook.com/@uddbtr" },
            { Icon: FaTwitter, href: "https://x.com/uddbtr" },
            { Icon: FaInstagram, href: "https://www.instagram.com/uddbtr/" },
            { Icon: FaYoutube, href: "https://www.youtube.com/@uddbtr" }
          ].map(({ Icon, href }, i) => (
            <a 
              key={i} 
              href={href} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-all text-sm text-white"
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Professional Scrolling News */}
        <div className="flex-1 overflow-hidden h-7 flex items-center bg-black/10 rounded-full px-4">
          <div className="animate-marquee whitespace-nowrap flex items-center font-bold text-xs lg:text-[13px] uppercase tracking-wider text-white">
             {notices.map((notice, idx) => (
               <span key={idx} className="flex items-center gap-2 mx-8 text-white">
                  <FaClipboardList className="text-white" />
                  {notice}
               </span>
             ))}
             {/* Duplicate for loop */}
             {notices.map((notice, idx) => (
               <span key={`dup-${idx}`} className="flex items-center gap-2 mx-8 text-white">
                  <FaClipboardList className="text-white" />
                  {notice}
               </span>
             ))}
          </div>
        </div>

        {/* Language Right (Custom Styled Dropdown) */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="flex items-center gap-1.5 bg-white/15 px-3 py-1 rounded border border-white/20 hover:bg-white/25 transition-all">
            <FaGlobe className="text-xs text-white" />
            <span className="text-[11px] font-extrabold tracking-tight uppercase whitespace-nowrap">Language</span>
            <div id="google_translate_element" className="google-translate-styled"></div>
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        /* Aggressively hide ALL Google Translate UI */
        .goog-te-banner-frame,
        .goog-te-banner,
        .goog-te-balloon-frame,
        #goog-gt-tt,
        .goog-te-spinner-pos,
        .goog-te-gadget-icon,
        .skiptranslate > iframe,
        .goog-tooltip,
        .goog-tooltip:hover {
          display: none !important;
          visibility: hidden !important;
          height: 0 !important;
          width: 0 !important;
          opacity: 0 !important;
        }

        /* Prevent body shift/scrolling issues caused by Translate */
        html, body {
          top: 0px !important;
          position: static !important;
        }

        /* Hide Clutter in the gadget */
        .goog-te-gadget {
          color: transparent !important;
          font-size: 0 !important;
          line-height: 0 !important;
          display: flex !important;
          align-items: center !important;
        }
        
        .goog-te-gadget span,
        .goog-te-gadget div {
          display: none !important;
        }

        /* Style the actual dropdown */
        .google-translate-styled select.goog-te-combo {
          display: inline-block !important;
          background-color: transparent !important;
          color: white !important;
          border: none !important;
          font-size: 11px !important;
          font-weight: 800 !important;
          text-transform: uppercase !important;
          outline: none !important;
          cursor: pointer !important;
          padding: 0 !important;
          margin: 0 !important;
          font-family: inherit !important;
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
          min-width: 70px;
        }

        .google-translate-styled select.goog-te-combo option {
          background-color: #f26522 !important;
          color: white !important;
          font-weight: 700 !important;
          padding: 10px !important;
        }
      `}</style>
    </div>

  );
}
