"use client";
import { motion } from 'framer-motion';
import { Landmark, ExternalLink } from 'lucide-react';
import Image from 'next/image';

export default function LeaderStrip() {
  const leaders = [
    {
      name: "Shri Hagrama Mohilary",
      role: "Visionary Leader & CEM",
      subRole: "Bodoland Territorial Council",
      img: "https://uddbtr.online/images/hagrama_mohilary.jpg",
      description: "Shri Hagrama Mohilary is the Chief Executive of the Bodoland Territorial Region and a prominent leader who has played a decisive role in shaping peace, stability, and development in Bodoland.",
      focusTitle: "KEY FOCUS AREAS",
      focusItems: [
        "Sustainable urban development",
        "Institutional strengthening",
        "Technology integration in public services"
      ],
      theme: "sky"
    },
    {
      name: "Smt. Moon Moon Brahma",
      role: "Hon'ble Executive Member",
      subRole: "Urban Development Dept, BTC",
      img: "https://uddbtr.online/images/moon_moon_brahma.jpg",
      description: "Smt. Moon Moon Brahma, representing Parbatjhora constituency (BPF), oversees the Urban Development Department and was sworn in on October 14, 2025, marking a historic milestone as one of the first female EMs in BTC in 22 years.",
      focusTitle: "KEY FOCUS AREAS",
      focusItems: [
        "Strengthening Urban Local Bodies",
        "Improving sanitation & civic amenities",
        "Digital transformation initiatives"
      ],
      theme: "purple"
    },
    {
      name: "Shri Lankeshwar Owarie",
      role: "Council Head of Department",
      subRole: "Urban Development Dept, BTC",
      img: "https://uddbtr.online/images/lankeshwar_owarie.jpg",
      description: "Shri Lankeshwar Owarie serves as the Council Head of Department for Urban Development. He holds an M.R.P. (Urban Planning) from IIT Kharagpur (1990-91) and is responsible for operational leadership across 9 Municipal Boards and 1 Development Authority.",
      focusTitle: "KEY RESPONSIBILITIES",
      focusItems: [
        "Implementation of urban policies & schemes",
        "Coordination with ULBs & technical agencies",
        "Monitoring of projects & service delivery"
      ],
      theme: "orange"
    }
  ];

  const getThemeClasses = (theme: string) => {
    switch(theme) {
      case 'sky': return {
        border: 'border-sky-450',
        bg: 'bg-sky-50/50',
        text: 'text-sky-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        bullet: 'bg-blue-500',
        cardBorder: 'border-sky-400',
        cardBg: 'bg-gradient-to-br from-white to-sky-50'
      };
      case 'purple': return {
        border: 'border-purple-450',
        bg: 'bg-purple-50/50',
        text: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        bullet: 'bg-purple-500',
        cardBorder: 'border-purple-400',
        cardBg: 'bg-gradient-to-br from-white to-purple-50'
      };
      case 'orange': return {
        border: 'border-orange-450',
        bg: 'bg-orange-50/50',
        text: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700',
        bullet: 'bg-orange-500',
        cardBorder: 'border-orange-400',
        cardBg: 'bg-gradient-to-br from-white to-orange-50'
      };
      default: return {
        border: 'border-gray-400',
        bg: 'bg-gray-50/50',
        text: 'text-gray-600',
        button: 'bg-gray-600 hover:bg-gray-700',
        bullet: 'bg-gray-500',
        cardBorder: 'border-gray-400',
        cardBg: 'bg-gradient-to-br from-white to-gray-50'
      };
    }
  };

  return (
    <section className="bg-[#f8f9fb] py-16 md:py-20 px-4 sm:px-6 md:px-16 lg:px-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center mb-12 md:mb-20 text-center">
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center relative mb-6 md:mb-8 group">
            <div className="absolute inset-0 bg-navy/40 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-navy to-blue-800 rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(30,58,138,0.5)]">
              <Landmark className="w-8 h-8 md:w-10 md:h-10 text-white" />
            </div>
            <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(30,58,138,0.4)] animate-pulse -z-10"></div>
          </div>
          <div className="inline-block border-b-4 border-navy pb-2 mb-4">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-navy uppercase tracking-tight">Leadership & Vision of UDD BTC Governance</h2>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium text-sm md:text-lg leading-relaxed px-4">Guided by the commitment to sustainable urban development and citizen welfare.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-12">
          {leaders.map((leader, idx) => {
            const theme = getThemeClasses(leader.theme);
            return (
              <div key={idx} className="relative group pt-16">
                {/* Custom multi-layered themed circular border mimicking the exact double-circle visual */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
                  <div className={`p-1.5 rounded-full transition-all duration-500 ${
                    leader.theme === 'sky' ? 'bg-sky-400/35 shadow-[0_4px_25px_rgba(56,189,248,0.3)] group-hover:bg-sky-400/45' : 
                    leader.theme === 'purple' ? 'bg-purple-400/35 shadow-[0_4px_25px_rgba(168,85,247,0.3)] group-hover:bg-purple-400/45' : 
                    'bg-orange-400/35 shadow-[0_4px_25px_rgba(251,146,60,0.3)] group-hover:bg-orange-400/45'
                  }`}>
                    <div className="bg-white p-1 rounded-full shadow-lg">
                      <div className="w-[128px] h-[128px] rounded-full overflow-hidden relative bg-white">
                        <Image 
                          src={leader.img} 
                          alt={leader.name} 
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105" 
                          referrerPolicy="no-referrer"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Animated Card Content */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className={`rounded-2xl p-8 pt-24 text-left shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-2 flex flex-col h-full transition-all duration-300 group-hover:shadow-2xl ${theme.cardBg} ${theme.cardBorder}`}
                >
                  <div className="mb-6 text-center">
                    <h4 className="text-xl font-black text-navy mb-1 tracking-tight">{leader.name}</h4>
                    <div className="flex flex-col items-center gap-1">
                      <p className={`text-sm font-bold uppercase tracking-wider ${theme.text}`}>
                        {leader.role}
                      </p>
                      <p className="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em]">
                        {leader.subRole}
                      </p>
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed mb-6 font-medium">
                    {leader.description}
                  </p>

                  <div className={`p-5 rounded-xl mb-8 flex-grow ${theme.bg}`}>
                    <p className={`font-black text-[10px] uppercase tracking-wider mb-4 ${theme.text}`}>
                      {leader.focusTitle}
                    </p>
                    <ul className="space-y-3">
                      {leader.focusItems.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm text-gray-700 font-medium leading-tight">
                          <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${theme.bullet}`}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-4 rounded-xl text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors shadow-lg ${theme.button}`}
                  >
                    Read Full Profile <ExternalLink className="w-4 h-4" />
                  </motion.button>
                </motion.div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
