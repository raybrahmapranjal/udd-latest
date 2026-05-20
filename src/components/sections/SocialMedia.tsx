"use client";
import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, ExternalLink, Heart, MessageSquare, Clock, Share2 } from 'lucide-react';

export default function SocialMedia() {
  const platforms = [
    {
      name: 'Facebook',
      handle: '@UDDBodoland',
      icon: Facebook,
      gradient: 'from-blue-500 to-blue-700',
      posts: [
        { content: 'New AI-powered citizen portal now live! File grievances, track status of application papers, and access basic civic services seamlessly...', time: '12 hours ago', likes: 428, comments: 89 },
        { content: 'Water supply infrastructure projects worth ₹45 crore successfully approved under the newly proposed Urban Water Supply Scheme...', time: '1 day ago', likes: 156, comments: 34 },
        { content: 'Direct Benefit Transfer (DBT) funds disbursed to 14,200 beneficiaries under rural-urban linkage schemes. Verify eligibility on portal.', time: '3 days ago', likes: 312, comments: 54 },
        { content: 'Shri Lankeshwar Owarie, CHD, reviewed the construction progress of the Kokrajhar Municipal Market Complex expansion today.', time: '5 days ago', likes: 245, comments: 19 },
        { content: 'A public consultation meeting was organized at Gossaigaon Town Hall to discuss the decentralization of town waste management schemes.', time: '1 week ago', likes: 189, comments: 23 },
      ]
    },
    {
      name: 'Twitter',
      handle: '@UDD_Bodoland',
      icon: Twitter,
      gradient: 'from-sky-400 to-sky-600',
      posts: [
        { content: 'Urban Planning Workshop concludes successfully with 120+ key town stakeholders. Highly productive sessions on BTC Master Plan 2040.', time: '7 hours ago', likes: 74, comments: 28 },
        { content: 'Implementation of PPP model for LED street lighting installation starts across all Municipal Boards in the Bodoland region. #SmartCities', time: '1 day ago', likes: 45, comments: 12 },
        { content: 'Updated standard operating procedures (SOPs) have been uploaded for online Building Permission approvals. Please refer to citizen circulars.', time: '3 days ago', likes: 68, comments: 15 },
        { content: 'Draft zoning regulations released for urban council jurisdictions. Comments are welcome from citizens until June 15th.', time: '4 days ago', likes: 93, comments: 21 },
        { content: 'Review underway with municipal engineers regarding Drainage Master Plans of prime town blocks to combat rainy season waterlogging.', time: '6 days ago', likes: 82, comments: 30 },
      ]
    },
    {
      name: 'Instagram',
      handle: '@udd.bodoland',
      icon: Instagram,
      gradient: 'from-pink-500 to-purple-600',
      posts: [
        { content: 'Construction milestone! Framing completed for the state-of-the-art administrative block expansion at Tangla Municipal Board.', time: '9 hours ago', likes: 756, comments: 42 },
        { content: 'The street art and urban beautification project is bringing vibrant colors and local Bodo culture depictions to Udalguri town center! 🎨✨', time: '14 hours ago', likes: 210, comments: 18 },
        { content: 'Check out this video tour of the newly commissioned automated solid waste sorting plant at Gossaigaon. Clean tech in action!', time: '2 days ago', likes: 520, comments: 31 },
        { content: 'Creating lush green public spaces. Highlights from the ongoing landscaping and leisure pathway construction at Kokrajhar central park.', time: '4 days ago', likes: 412, comments: 29 },
        { content: 'CHD Shri Lankeshwar Owarie participating in the morning clean-up initiative together with volunteer civic youth clubs for Environment Week.', time: '6 days ago', likes: 610, comments: 48 },
      ]
    },
    {
      name: 'YouTube',
      handle: 'UDD Bodoland Official',
      icon: Youtube,
      gradient: 'from-red-500 to-red-700',
      posts: [
        { content: 'Exclusive Interview with CHD Shri Lankeshwar Owarie on Urban Development Vision 2030 and planned investments in town roads.', time: '2 days ago', likes: 520, comments: 85 },
        { content: 'Swachh Bharat Success Story: Deep dive documentary on Kokrajhar Municipal Board achieving verified ODF+ status with public support.', time: '3 days ago', likes: 310, comments: 45 },
        { content: 'Step-by-step tutorial: Registering and submitting applications for online Trade License issuance on the newly developed G2C digital app.', time: '5 days ago', likes: 890, comments: 112 },
        { content: 'Keynote & Panel Discussions: Highlights from Bodoland Territorial Council urban infrastructure and master planning summit 2026.', time: '1 week ago', likes: 450, comments: 62 },
        { content: 'Project Spotlight: Decongesting town centers using modern digital transit management systems and designated parking corridors.', time: '10 days ago', likes: 670, comments: 78 },
      ]
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 lg:px-32 bg-white">
      {/* Styles for custom scrollbars inside posts container without polluting global css */}
      <style>{`
        .custom-posts-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-posts-scrollbar::-webkit-scrollbar-track {
          background: rgba(244, 246, 249, 0.5);
          border-radius: 4px;
        }
        .custom-posts-scrollbar::-webkit-scrollbar-thumb {
          background-color: rgba(156, 163, 175, 0.4);
          border-radius: 9999px;
        }
        .custom-posts-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: rgba(156, 163, 175, 0.6);
        }
      `}</style>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-20 text-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center relative mb-8 group">
            <div className="absolute inset-0 bg-pink-600/40 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-rose-600 rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(219,39,119,0.5)]">
              <Share2 className="w-10 h-10 text-white" />
            </div>
            <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(219,39,119,0.4)] animate-pulse -z-10"></div>
          </div>
          <div className="inline-block border-b-4 border-pink-600 pb-2 mb-4">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tight">Social Connect</h2>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">Follow our official channels for real-time updates and community engagement.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform, idx) => (
            <div key={idx} className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100 flex flex-col">
              {/* Header */}
              <div className={`bg-gradient-to-br ${platform.gradient} p-5 text-white flex justify-between items-start`}>
                <div className="flex gap-3">
                  <platform.icon className="w-6 h-6" />
                  <div>
                    <h4 className="font-bold">{platform.name}</h4>
                    <p className="text-xs opacity-90">{platform.handle}</p>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 opacity-70" />
              </div>
              
              {/* Body with height limit and custom scrollbar */}
              <div className="p-5 flex-grow space-y-4 max-h-[380px] overflow-y-auto custom-posts-scrollbar pr-2">
                {platform.posts.map((post, pIdx) => (
                    <div key={pIdx} className="text-xs text-gray-700 bg-gray-100 p-4 rounded-md border border-gray-100 space-y-2">
                        <p className="italic">&quot;{post.content}&quot;</p>
                        <div className="flex items-center gap-3 text-gray-500 mt-2">
                            <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.time}</span>
                            <span className="flex items-center gap-1"><Heart className="w-3 h-3 text-red-400" /> {post.likes}</span>
                            <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3 text-blue-400" /> {post.comments}</span>
                        </div>
                    </div>
                ))}
              </div>

              {/* Footer */}
              <div className={`bg-gradient-to-br ${platform.gradient} py-3 px-5 text-white text-[10px] uppercase font-bold text-center`}>
                Follow us for latest updates & announcements
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-20 text-center">
            <h3 className="text-xl font-sans font-bold text-gray-800 mb-8">Join our growing community and be part of Bodoland&apos;s urban transformation</h3>
            <div className="flex flex-wrap justify-center gap-6">
                <motion.button 
                  whileHover={{scale: 1.05, translateY: -2}} 
                  className="flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-blue-200"
                >
                    <Facebook className="w-5 h-5" /> Follow on Facebook
                </motion.button>
                <motion.button 
                  whileHover={{scale: 1.05, translateY: -2}} 
                  className="flex items-center gap-3 bg-gradient-to-r from-sky-400 to-sky-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-sky-200"
                >
                    <Twitter className="w-5 h-5" /> Follow on Twitter
                </motion.button>
                <motion.button 
                  whileHover={{scale: 1.05, translateY: -2}} 
                  className="flex items-center gap-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-bold shadow-lg shadow-pink-200"
                >
                    <Instagram className="w-5 h-5" /> Follow on Instagram
                </motion.button>
            </div>
        </div>
      </div>
    </section>
  );
}
