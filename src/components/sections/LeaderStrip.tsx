"use client";
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaEnvelope } from 'react-icons/fa';

export default function LeaderStrip() {
  const leaders = [
    {
      name: "Dr. Himanta Biswa Sarma",
      role: "Hon'ble Chief Minister",
      subRole: "Government of Assam",
      img: "https://himantabiswasarma.com/wp-content/uploads/2021/05/HBS_Profile.jpg",
      message: "Committed to the holistic development of Assam and the Bodoland region."
    },
    {
      name: "Shri Pramod Boro",
      role: "Hon'ble Chief Executive Member",
      subRole: "Bodoland Territorial Council",
      img: "https://pbs.twimg.com/profile_images/1381832000570417154/OaL8vC4A_400x400.jpg",
      message: "Working towards a peaceful, green, and smart Bodoland for every citizen."
    },
    {
       name: "Shri Wilson Hasda",
       role: "Executive Member",
       subRole: "Urban Development Dept, BTC",
       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyV7K9W7X-4GqW_R8V1b2_M_L_F-V4W_B8Gg&s",
       message: "Building sustainable urban infrastructure for the future of BTR."
    }
  ];

  return (
    <section className="bg-[#f8f9fb] py-20 px-6 md:px-16 lg:px-32 border-b border-gray-100">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-saffron font-bold text-[10px] md:text-xs uppercase tracking-[5px] block mb-3">Leadership</span>
          <h2 className="text-3xl md:text-5xl font-serif text-navy mb-4">Hon&apos;ble Dignitaries</h2>
          <div className="w-16 h-1 bg-saffron mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {leaders.map((leader, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 border-2 ${idx === 0 ? 'border-sky-300' : idx === 1 ? 'border-orange-300' : 'border-emerald-300'} group ${idx === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
            >
              <div className={`relative h-72 md:h-80 overflow-hidden bg-gradient-to-br ${
                idx === 0 ? 'from-sky-100 to-sky-200' : 
                idx === 1 ? 'from-orange-100 to-orange-200' : 
                'from-emerald-100 to-emerald-200'
              }`}>
                <img 
                  src={leader.img} 
                  alt={leader.name} 
                  className="w-full h-full object-cover transition-all duration-700" 
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy/90 to-transparent p-6 flex justify-center gap-4">
                  <a href="#" className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-saffron transition-colors border border-white/20"><FaFacebookF className="text-xs" /></a>
                  <a href="#" className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-saffron transition-colors border border-white/20"><FaTwitter className="text-xs" /></a>
                  <a href="#" className="w-9 h-9 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-saffron transition-colors border border-white/20"><FaEnvelope className="text-xs" /></a>
                </div>
              </div>
              <div className="p-8 text-center bg-white">
                <h4 className="text-xl font-bold text-navy mb-1">{leader.name}</h4>
                <p className="text-saffron font-bold text-[11px] uppercase tracking-[0.2em] mb-4">
                  {leader.role}
                </p>
                <div className="flex flex-col gap-4">
                  <p className="text-gray-400 text-[10px] font-black uppercase tracking-widest border-t border-gray-50 pt-4">
                    {leader.subRole}
                  </p>
                  <p className="text-gray-600 text-xs italic leading-relaxed bg-navy/[0.03] p-4 rounded-xl border border-gray-300">
                    &quot;{leader.message}&quot;
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
