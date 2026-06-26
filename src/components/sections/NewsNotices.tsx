"use client";
import { newsNotices } from '@/lib/data';
import { motion } from 'framer-motion';
import { Newspaper, BellRing, FileText } from 'lucide-react';

export default function NewsNotices() {
  const news = newsNotices.filter(item => item.type === 'news');
  const notices = newsNotices.filter(item => item.type === 'notice');

  return (
    <section id="news" className="py-24 px-6 md:px-16 lg:px-32 bg-gray-50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* News */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <div className="flex flex-col items-center mb-12 text-center">
             <div className="w-24 h-24 rounded-full flex items-center justify-center relative mb-8 group">
                <div className="absolute inset-0 bg-orange-600/40 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(234,88,12,0.5)]">
                  <Newspaper className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(234,88,12,0.4)] animate-pulse -z-10"></div>
             </div>
             <div className="inline-block border-b-4 border-orange-500 mb-4">
                <h2 className="text-4xl font-black text-navy uppercase tracking-tight">Latest News</h2>
             </div>
          </div>
          <div className="space-y-8">
            {news.map((item, idx) => (
              <div key={idx} className="group cursor-pointer border-l-4 border-transparent hover:border-orange-500 pl-6 transition-all">
                <span className="inline-block bg-navy/5 text-navy text-[10px] font-bold px-2 py-1 rounded mb-2 group-hover:bg-orange-500 group-hover:text-white transition-colors uppercase tracking-widest">
                  {item.date}
                </span>
                <h4 className="font-bold text-gray-800 text-lg leading-snug group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h4>
              </div>
            ))}
            <a href="/news" className="mt-8 inline-flex text-[11px] font-black uppercase tracking-widest text-orange-600 hover:text-navy transition-colors items-center gap-2 group">
               View All News <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>

        {/* Notices */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <div className="flex flex-col items-center mb-12 text-center">
             <div className="w-24 h-24 rounded-full flex items-center justify-center relative mb-8 group">
                <div className="absolute inset-0 bg-blue-600/40 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(37,99,235,0.5)]">
                  <BellRing className="w-10 h-10 text-white" />
                </div>
                <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(37,99,235,0.4)] animate-pulse -z-10"></div>
             </div>
             <div className="inline-block border-b-4 border-blue-500 mb-4">
                <h2 className="text-4xl font-black text-navy uppercase tracking-tight">Important Notices</h2>
             </div>
          </div>
          <div className="space-y-4">
            {notices.map((item, idx) => (
              <div key={idx} className="flex items-start gap-5 p-6 rounded-lg bg-gray-50 border border-gray-100 hover:bg-white hover:border-blue-400 hover:shadow-xl hover:shadow-blue-900/5 transition-all cursor-pointer group shadow-sm">
                <div className="w-12 h-12 rounded-md bg-blue-600 flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-blue-200">
                  <FileText className="w-6 h-6" />
                </div>
                <div>
                   <h4 className="text-sm font-bold text-gray-800 leading-tight mb-2 group-hover:text-blue-700 transition-colors">{item.title}</h4>
                   <p className="text-[10px] text-gray-400 font-bold uppercase flex items-center gap-2">
                     <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                     Published on: {item.date}
                   </p>
                </div>
              </div>
            ))}
            <a href="/news?tab=notices" className="mt-8 inline-flex text-[11px] font-black uppercase tracking-widest text-blue-600 hover:text-navy transition-colors items-center gap-2 group">
               View All Notices <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
