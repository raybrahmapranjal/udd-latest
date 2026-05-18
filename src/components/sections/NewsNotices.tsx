"use client";
import { newsNotices } from '@/lib/data';
import { motion } from 'framer-motion';
import { FaFileAlt, FaRss } from 'react-icons/fa';

export default function NewsNotices() {
  const news = newsNotices.filter(item => item.type === 'news');
  const notices = newsNotices.filter(item => item.type === 'notice');

  return (
    <section id="news" className="py-24 px-6 md:px-16 lg:px-32 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* News */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <div className="flex items-center gap-3 mb-10 border-b border-gray-100 pb-4">
             <FaRss className="text-saffron text-xl" />
             <h2 className="text-2xl font-serif text-navy">Latest News</h2>
          </div>
          <div className="space-y-8">
            {news.map((item, idx) => (
              <div key={idx} className="group cursor-pointer">
                <span className="inline-block bg-navy/5 text-navy text-[10px] font-bold px-2 py-1 rounded mb-2 group-hover:bg-saffron group-hover:text-white transition-colors">
                  {item.date}
                </span>
                <h4 className="font-bold text-gray-800 leading-snug group-hover:text-saffron transition-colors">
                  {item.title}
                </h4>
              </div>
            ))}
            <button className="text-[10px] font-black uppercase tracking-widest text-gray-400 hover:text-navy transition-colors">
               View All News →
            </button>
          </div>
        </motion.div>

        {/* Notices */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <div className="flex items-center gap-3 mb-10 border-b border-gray-100 pb-4">
             <FaFileAlt className="text-saffron text-xl" />
             <h2 className="text-2xl font-serif text-navy">Notices & Tenders</h2>
          </div>
          <div className="space-y-6">
            {newsNotices.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl hover:bg-lightgray transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-saffron/10 flex items-center justify-center text-saffron shrink-0 group-hover:bg-saffron group-hover:text-white transition-colors">
                  <FaFileAlt />
                </div>
                <div>
                   <h4 className="text-sm font-bold text-gray-700 leading-tight mb-1">{item.title}</h4>
                   <p className="text-[10px] text-gray-400 font-bold uppercase">{item.date}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
