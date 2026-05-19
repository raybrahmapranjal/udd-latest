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
        { content: 'New AI-powered citizen portal now live! File grievances, track applications, and access services...', time: '12 hours ago', likes: 428, comments: 89 },
        { content: 'Water supply infrastructure projects worth ₹45 crore underwater...', time: '1 day ago', likes: 156, comments: 34 },
      ]
    },
    {
      name: 'Twitter',
      handle: '@UDD_Bodoland',
      icon: Twitter,
      gradient: 'from-sky-400 to-sky-600',
      posts: [
        { content: 'Urban Planning Workshop concludes successfully with 120+ stakeholders...', time: '7 hours ago', likes: 74, comments: 28 },
        { content: 'PPP model for LED street lighting installation across BTR...', time: '1 day ago', likes: 45, comments: 12 },
      ]
    },
    {
      name: 'Instagram',
      handle: '@udd.bodoland',
      icon: Instagram,
      gradient: 'from-pink-500 to-purple-600',
      posts: [
        { content: 'Construction milestone: New administrative building in Tangla MB...', time: '9 hours ago', likes: 756, comments: 42 },
        { content: 'Street art beautification project transforms Udalguri town center...', time: '14 hours ago', likes: 210, comments: 18 },
      ]
    },
    {
      name: 'YouTube',
      handle: 'UDD Bodoland Official',
      icon: Youtube,
      gradient: 'from-red-500 to-red-700',
      posts: [
        { content: 'Interview with CHD Shri Lankeshwar Owarie on Urban Development Vision 2030...', time: '2 days ago', likes: 520, comments: 85 },
        { content: 'Swachh Bharat Success Story: Kokrajhar Municipal Board achieves...', time: '3 days ago', likes: 310, comments: 45 },
      ]
    },
  ];

  return (
    <section className="py-24 px-6 md:px-16 lg:px-32 bg-white">
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
              
              {/* Body */}
              <div className="p-5 flex-grow space-y-4">
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
            <div className="flex justify-center gap-4">
                <motion.button whileHover={{scale: 1.05}} className="flex items-center gap-2 bg-blue-700 text-white px-6 py-3 rounded-full font-medium shadow-md">
                    <Facebook className="w-4 h-4" /> Follow on Facebook
                </motion.button>
                <motion.button whileHover={{scale: 1.05}} className="flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-full font-medium shadow-md">
                    <Twitter className="w-4 h-4" /> Follow on Twitter
                </motion.button>
            </div>
        </div>
      </div>
    </section>
  );
}
