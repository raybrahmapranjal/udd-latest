"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, ExternalLink, Heart, MessageSquare, Clock, Eye, Repeat, Share2 } from 'lucide-react';

function PlatformCard({ platform }: { platform: any }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Elegant vertical auto-slide top simulation
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % platform.posts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [platform.posts.length]);

  // Handle dot click
  const handleDotClick = (e: React.MouseEvent, targetIdx: number) => {
    e.preventDefault();
    e.stopPropagation();
    setIndex(targetIdx);
  };

  // Modern background gradient theme combinations matching actual client branding color scheme
  const headerBgClass = 
    platform.name === 'Facebook' ? 'bg-gradient-to-r from-[#1877F2] to-[#3b5998]' :
    platform.name === 'Twitter' ? 'bg-gradient-to-r from-[#1DA1F2] to-[#0d8ad9]' :
    platform.name === 'Instagram' ? 'bg-gradient-to-r from-[#ca1d7e] via-[#e1306c] to-[#f77737]' :
    'bg-gradient-to-r from-[#e52d27] to-[#b31217]'; // YouTube

  const dotColorClass = 'bg-[#1877F2]'; // Standard blue capsule indicator for "swipper slider top"

  return (
    <div 
      className="bg-[#fafbfc] rounded-xl overflow-hidden shadow-sm hover:shadow-xl border border-slate-200/90 flex flex-col transition-all duration-300 h-[415px] group/card relative"
    >
      {/* Header exactly matched to image structure */}
      <div className={`${headerBgClass} py-4 px-5 text-white flex items-center justify-between shrink-0 relative z-10`}>
        <div className="flex items-center gap-3">
          {/* Circular logo shape matching image exactly */}
          <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center text-white border border-white/20 shadow-inner shrink-0 group-hover/card:scale-105 transition-transform duration-300">
            <platform.icon className="w-5 h-5 text-white" strokeWidth={2} />
          </div>
          <div>
            <h4 className="font-extrabold text-[#ffffff] font-sans text-[16px] tracking-wide leading-tight">{platform.name}</h4>
            <p className="text-[12px] font-medium text-white/90 tracking-tight font-sans">{platform.handle}</p>
          </div>
        </div>
        
        {/* Clickable redirection arrow on right inside light transparent circle */}
        <a 
          href={platform.link}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="w-10 h-10 rounded-full bg-white/15 hover:bg-white/35 active:scale-95 transition-all flex items-center justify-center text-white border border-white/20 shadow-sm shrink-0 cursor-pointer group/arrow"
          title={`Visit our official ${platform.name}`}
        >
          <ExternalLink className="w-4 h-4 text-white group-hover/arrow:translate-x-0.5 group-hover/arrow:-translate-y-0.5 transition-transform" />
        </a>
      </div>
      
      {/* Container greyish background holding the moving white card matching image exactly */}
      <div className="p-4 bg-[#f4f6f9] flex-grow flex flex-col justify-between relative overflow-hidden select-none">
        
        {/* Sliding Card Window Area containing sliding cards */}
        <div className="relative h-[215px] w-full overflow-hidden">
          {platform.posts.map((post: any, pIdx: number) => {
            // Determine vertical offset, scale, and opacity for 3D stack feel
            let yOffset = 0;
            let opacity = 0;
            let scale = 1;
            let zIndex = 0;

            const total = platform.posts.length;
            const diff = (pIdx - index + total) % total;

            if (diff === 0) {
              // Current Active Card (centered top)
              yOffset = 0;
              opacity = 1;
              scale = 1;
              zIndex = 20;
            } else if (diff === 1) {
              // Peeking at the bottom (partially visible)
              yOffset = 158;
              opacity = 0.55;
              scale = 0.97;
              zIndex = 10;
            } else if (diff === total - 1) {
              // Sliding out upwards
              yOffset = -158;
              opacity = 0;
              scale = 0.97;
              zIndex = 0;
            } else {
              // Completely out of view
              yOffset = 260;
              opacity = 0;
              scale = 0.90;
              zIndex = 0;
            }

            return (
              <div
                key={pIdx}
                className="absolute inset-x-0 bg-white rounded-xl border border-slate-200/80 shadow-[0_4px_16px_rgba(0,0,0,0.015)] p-4 flex flex-col justify-between h-[145px] transition-all duration-700 ease-in-out"
                style={{
                  transform: `translateY(${yOffset}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
              >
                {/* Content body text styled matching fonts & weights */}
                <p className="text-slate-800 font-sans font-semibold text-[12.5px] leading-relaxed line-clamp-4">
                  {post.content}
                </p>

                {/* Bottom Metadata stats bar exactly matching spacing & fonts */}
                <div className="flex items-center justify-between border-t border-slate-100 pt-2 text-[10px] font-extrabold text-slate-500 uppercase tracking-wide shrink-0">
                  <span className="text-slate-400 font-bold whitespace-nowrap">
                    {post.time}
                  </span>

                  <div className="flex items-center gap-2.5">
                    {platform.name === 'Facebook' && (
                      <>
                        <span className="flex items-center gap-1 text-rose-500 font-extrabold">
                          <Heart className="w-3 h-3 fill-rose-500 text-rose-500 shrink-0" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1 text-[#1877F2] font-extrabold">
                          <Repeat className="w-3 h-3 text-[#1877F2] shrink-0" />
                          {post.shares}
                        </span>
                      </>
                    )}
                    {platform.name === 'Twitter' && (
                      <>
                        <span className="flex items-center gap-1 text-emerald-500 font-extrabold">
                          <Repeat className="w-3 h-3 text-emerald-500 shrink-0" />
                          {post.retweets}
                        </span>
                        <span className="flex items-center gap-1 text-rose-500 font-extrabold">
                          <Heart className="w-3 h-3 fill-rose-500 text-rose-500 shrink-0" />
                          {post.likes}
                        </span>
                      </>
                    )}
                    {platform.name === 'Instagram' && (
                      <>
                        <span className="flex items-center gap-1 text-[#e1306c] font-extrabold">
                          <Heart className="w-3.5 h-3.5 fill-[#e1306c] text-[#e1306c] shrink-0" />
                          {post.likes}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500 font-extrabold">
                          <MessageSquare className="w-3 h-3 text-slate-400 shrink-0" />
                          {post.comments}
                        </span>
                      </>
                    )}
                    {platform.name === 'YouTube' && (
                      <>
                        <span className="flex items-center gap-1 text-sky-600 font-extrabold">
                          <Eye className="w-3 h-3 text-sky-500 shrink-0" />
                          {post.views}
                        </span>
                        <span className="flex items-center gap-1 text-slate-500 font-extrabold">
                          <Clock className="w-3 h-3 text-slate-400 shrink-0" />
                          {post.duration}
                        </span>
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dynamic Pagination bullet navigation (Swipper capsule design) overlaying nicely */}
        <div className="flex items-center justify-center gap-1 mt-1 shrink-0 relative z-20">
          {platform.posts.map((_: any, pIdx: number) => {
            const isActive = pIdx === index;
            return (
              <button
                key={pIdx}
                onClick={(e) => handleDotClick(e, pIdx)}
                className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                  isActive 
                    ? `${dotColorClass} w-5` 
                    : 'bg-slate-300 hover:bg-slate-400 w-1.5'
                }`}
                aria-label={`Go to slide ${pIdx + 1}`}
              />
            );
          })}
        </div>
      </div>

      {/* Styled text footer bar exactly matching screenshot layout */}
      <a 
        href={platform.link}
        target="_blank"
        rel="noopener noreferrer"
        className={`${headerBgClass} py-3 px-5 text-white text-[11px] tracking-wider uppercase font-extrabold text-center group-hover/card:brightness-105 transition-all shrink-0 cursor-pointer`}
      >
        Follow us for latest updates & announcements
      </a>
    </div>
  );
}

export default function SocialMedia() {
  const platforms = [
    {
      name: 'Facebook',
      handle: '@UDDBodoland',
      icon: Facebook,
      link: 'https://www.facebook.com/@uddbtr',
      posts: [
        { 
          content: 'Swachh Bharat Mission 2.0 achieves 92% waste segregation compliance across BTR urban areas. Thank you citizens! 🙏', 
          time: '8 hours ago', 
          likes: '312', 
          shares: '56' 
        },
        { 
          content: 'New AI-powered citizen portal now live! File grievances, track status of application papers, and access basic civic services seamlessly...', 
          time: '12 hours ago', 
          likes: '428', 
          shares: '89' 
        },
        { 
          content: 'Water supply infrastructure projects successfully approved under the newly proposed Urban Water Supply Scheme across BTC jurisdiction.', 
          time: '1 day ago', 
          likes: '156', 
          shares: '34' 
        },
        { 
          content: 'Shri Lankeshwar Owarie, CHD, reviewed the construction progress of the Kokrajhar Municipal Market Complex expansion project today.', 
          time: '3 days ago', 
          likes: '245', 
          shares: '19' 
        },
      ]
    },
    {
      name: 'Twitter',
      handle: '@UDD_Bodoland',
      icon: Twitter,
      link: 'https://x.com/uddbtr',
      posts: [
        { 
          content: '🎯 Digital Property Tax Portal achieving 85% online payment adoption. Paperless governance in action! #DigitalBTR', 
          time: '4 hours ago', 
          retweets: '32', 
          likes: '96' 
        },
        { 
          content: 'Urban Planning Workshop concludes successfully with 120+ key town stakeholders. Highly productive sessions on BTC Master Plan 2040.', 
          time: '7 hours ago', 
          retweets: '28', 
          likes: '74' 
        },
        { 
          content: 'Implementation of PPP model for LED street lighting installation starts across all Municipal Boards in the Bodoland region. #SmartCities', 
          time: '1 day ago', 
          retweets: '12', 
          likes: '45' 
        },
        { 
          content: 'Updated standard operating procedures (SOPs) have been uploaded for online Building Permission approvals on our primary website dashboard.', 
          time: '3 days ago', 
          retweets: '15', 
          likes: '68' 
        },
      ]
    },
    {
      name: 'Instagram',
      handle: '@udd.bodoland',
      icon: Instagram,
      link: 'https://www.instagram.com/uddbtr/',
      posts: [
        { 
          content: '🎨 Street art beautification project transforms Udalguri town center. Local artists bring culture to urban spaces!', 
          time: '14 hours ago', 
          likes: '1456', 
          comments: '103' 
        },
        { 
          content: '⚡ Solar-powered bus shelters now operational in all 9 ULBs. Sustainable transport infrastructure in BTR.', 
          time: '1 day ago', 
          likes: '892', 
          comments: '56' 
        },
        { 
          content: 'Construction milestone! Framing completed for the state-of-the-art administrative block expansion at Tangla Municipal Board.', 
          time: '3 days ago', 
          likes: '756', 
          comments: '42' 
        },
        { 
          content: 'The street art and urban beautification project is bringing vibrant colors and local Bodo culture depictions to Udalguri town center! 🎨✨', 
          time: '4 days ago', 
          likes: '210', 
          comments: '18' 
        },
      ]
    },
    {
      name: 'YouTube',
      handle: 'UDD Bodoland Official',
      icon: Youtube,
      link: 'https://www.youtube.com/@uddbtr',
      posts: [
        { 
          content: '▶️ How to File Online Grievance | Step-by-Step Guide in English, Assamese & Bodo', 
          time: '1 day ago', 
          views: '8.3K views', 
          duration: '8:45' 
        },
        { 
          content: 'Exclusive Interview with CHD Shri Lankeshwar Owarie on Urban Development Vision 2030 and planned investments in town roads.', 
          time: '2 days ago', 
          views: '5.2K views', 
          duration: '12:30' 
        },
        { 
          content: 'Swachh Bharat Success Story: Deep dive documentary on Kokrajhar Municipal Board achieving verified ODF+ status with public support.', 
          time: '3 days ago', 
          views: '3.1K views', 
          duration: '15:10' 
        },
        { 
          content: 'Step-by-step tutorial: Registering and submitting applications for online Trade License issuance on the newly developed G2C digital app.', 
          time: '5 days ago', 
          views: '8.9K views', 
          duration: '10:45' 
        },
      ]
    },
  ];

  return (
    <section id="social-connect" className="py-24 px-4 md:px-8 lg:px-12 bg-white border-t border-slate-100">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center relative mb-8 group">
            <div className="absolute inset-0 bg-pink-600/40 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-rose-600 rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(219,39,119,0.5)]">
              <Share2 className="w-10 h-10 text-white" />
            </div>
            <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(219,39,119,0.4)] animate-pulse -z-10"></div>
          </div>
          <div className="inline-block border-b-4 border-pink-600 pb-2 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-[#003366] uppercase tracking-tight font-sans">Social Connect</h2>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">Follow our official channels for real-time updates and community engagement.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {platforms.map((platform, idx) => (
            <PlatformCard key={idx} platform={platform} />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
            <h3 className="text-xl font-sans font-bold text-gray-800 mb-8">Join our growing community and be part of Bodoland&apos;s urban transformation</h3>
            <div className="flex flex-wrap justify-center gap-6">
                <motion.a 
                  href="https://www.facebook.com/@uddbtr"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{scale: 1.05, translateY: -2}} 
                  className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-200"
                >
                    <Facebook className="w-5 h-5" /> Follow on Facebook
                </motion.a>
                <motion.a 
                  href="https://x.com/uddbtr"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{scale: 1.05, translateY: -2}} 
                  className="flex items-center gap-3 bg-gradient-to-r from-sky-400 to-sky-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-sky-200"
                >
                    <Twitter className="w-5 h-5" /> Follow on Twitter
                </motion.a>
                <motion.a 
                  href="https://www.instagram.com/uddbtr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{scale: 1.05, translateY: -2}} 
                  className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-pink-200"
                >
                    <Instagram className="w-5 h-5" /> Follow on Instagram
                </motion.a>
            </div>
        </div>
      </div>
    </section>
  );
}
