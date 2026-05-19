"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { motion } from 'framer-motion';

export default function HeroSlider() {
  const slides = [
    {
      title: "Building Better Cities for a Better Tomorrow",
      subtitle: "Serving 12 Urban Local Bodies across Kokrajhar, Chirang, Baksa & Udalguri districts",
      img: "https://images.unsplash.com/photo-1517733948473-ef8bb7304303?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Sustainable Urban Infrastructure",
      subtitle: "Creating world-class facilities and modern housing projects",
      img: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=2070&auto=format&fit=crop"
    },
    {
      title: "Clean & Green Bodoland",
      subtitle: "Join our initiative for smart and sustainable urban living",
      img: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  return (
    <section className="relative h-[650px] w-full overflow-hidden bg-navy">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        effect="fade"
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="h-full w-full"
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx} className="relative h-full w-full">
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[10s] hover:scale-110"
              style={{ backgroundImage: `url(${slide.img})` }}
            />
            <div className="absolute inset-0 hero-overlay flex items-center px-6 md:px-16 lg:px-32">
              <div className="dot-pattern absolute inset-0 opacity-20"></div>
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-10 max-w-3xl"
              >
                <span className="inline-block bg-saffron text-white text-[10px] font-bold uppercase tracking-[4px] px-3 py-1 mb-6 rounded-sm">
                  UDD BTR Official
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-6xl font-sans font-black text-white mb-4 md:mb-6 leading-tight">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-xl text-white/80 mb-8 md:mb-10 leading-relaxed font-medium">
                  {slide.subtitle}
                </p>
                <div className="flex flex-wrap gap-4">
                  <a href="#services" className="bg-saffron hover:bg-orange-600 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base transition-all shadow-xl hover:-translate-y-1">
                    Our Services
                  </a>
                  <a href="#contact" className="border-2 border-white/50 hover:border-white hover:bg-white/10 text-white px-6 py-3 md:px-8 md:py-4 rounded-full font-bold text-sm md:text-base transition-all">
                    Contact Us
                  </a>
                </div>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
