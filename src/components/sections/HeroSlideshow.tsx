"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from 'next/image';
interface HeroSlideshowProps {
  ulbId: string;
  children: React.ReactNode;
}

interface SlideImage {
  url: string;
  caption: string;
}

const slideshowImages: Record<string, SlideImage[]> = {
  gossaigaon_mb: [
    {
      url: "/images/ulbs/gossaigaon_mb2.jpg",
      caption: "Gossaigaon, Kokrajhar"
    },
    {
      url: "/images/ulbs/gossaigaon_mb.jpg",
      caption: "Gossaigaon MB"
    }
    
  ],
  kokrajhar_mb: [
    {
      url: "/images/ulbs/kok1.jpg",
      caption: "Kokrajhar MB"
    },
    {
      url: "/images/ulbs/kok2.jpg",
      caption: "Kokrajhar MB"
    },
    {
      url: "/images/ulbs/kok3.jpg",
      caption: "Kokrajhar MB"
    }
  ],
  basugaon_mb: [
    {
      url: "/images/ulbs/bas1.jpg",
      caption: "Basugaon MB"
    },
    {
      url: "/images/ulbs/bas_2.jpg",
      caption: "Basugaon MB"
    },
    {
      url: "/images/ulbs/bas_3.jpg",
      caption: "Basugaon MB"
    }
  ],
  bijni_mb: [
    {
      url: "/images/ulbs/bij1.jpg",
      caption: "Bijni MB"
    },
    {
      url: "/images/ulbs/bij2.jpg",
      caption: "Bijni MB"
    }
  ],
  fakiragram_mb: [
    {
      url: "/images/ulbs/fak1.jpg",
      caption: "Fakiragram MB"
    },
    {
      url: "/images/ulbs/fak2.jpg",
      caption: "Fakiragram MB"
    }
  ],
  goreswar_mb: [
    {
      url: "/images/ulbs/gores1.jpg",
      caption: "Goreswar MB"
    },
    {
      url: "/images/ulbs/gores2.jpg",
      caption: "Goreswar MB"
    },
    {
      url: "/images/ulbs/gores3.jpg",
      caption: "Goreswar MB"
    }
  ],
  kajalgaon_mb: [
    {
      url: "/images/ulbs/kajal1.jpg",
      caption: "Kajalgaon MB"
    },
    {
      url: "/images/ulbs/kajal2.jpg",
      caption: "Kajalgaon MB"
    }
  ],
  mushalpur_mb: [
    {
      url: "/images/ulbs/udd.jpg",
      caption: "Mushalpur MB"
    }
  ],
  tamulpur_mb: [
    {
      url: "/images/ulbs/udd.jpg",
      caption: "Tamulpur MB"
    }
  ],
  tangla_mb: [
    {
      url: "/images/ulbs/udd.jpg",
      caption: "Tangla MB"
    }
  ],
  udalguri_mb: [
    {
      url: "/images/ulbs/udal1.jpg",
      caption: "Udalguri MB"
    },
    {
      url: "/images/ulbs/udal2.jpg",
      caption: "Udalguri MB"
    }
  ]
};

const defaultSlides: SlideImage[] = [
  {
    url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1600&h=600&q=80",
    caption: "Verdant Tea Fields & Scenic Vistas of Assam"
  },
  {
    url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&h=600&q=80",
    caption: "Breath-taking Nature Lands in Bodoland Territorial Region"
  },
  {
    url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&h=600&q=80",
    caption: "Scenic Rivers Feeding Fertile Agricultural Plains"
  }
];

export default function HeroSlideshow({ ulbId, children }: HeroSlideshowProps) {
  const slides = slideshowImages[ulbId] || defaultSlides;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // Touch Swipe State
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Minimum swipe distance in pixels
  const minSwipeDistance = 50;

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    if (!isPlaying || slides.length <= 1) return;

    timerRef.current = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // 5 seconds interval

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, slides.length]);

  const handlePrev = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  };

  const handleNext = (e?: React.MouseEvent) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <div 
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      className="relative overflow-hidden w-full h-full min-h-[500px] sm:min-h-[440px] md:min-h-[420px] lg:min-h-[450px] flex flex-col justify-between"
    >
      {/* 1. Slides Background Stack */}
      <div className="absolute inset-0 z-0">
        {slides.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
              idx === currentIndex 
                ? "opacity-100 scale-100 pointer-events-auto" 
                : "opacity-0 scale-105 pointer-events-none"
            }`}
          >
            {/* Slide Image */}
            <img
              src={slide.url}
              alt={slide.caption}
              className="w-full h-full object-cover object-center"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}

        {/* Dynamic dark multi-layered overlay for ultimate text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/65 to-slate-950/75 z-10" />
        <div className="absolute inset-0 bg-black/40 z-10 mix-blend-overlay" />
      </div>

      {/* Floating Interactive Left and Right Arrows (Placed slightly higher/elevated for premium look) */}
      {slides.length > 1 && (
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none z-20 hidden md:flex justify-between px-3 md:px-8">
          <button
            onClick={(e) => handlePrev(e)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/75 hover:scale-105 active:scale-95 text-white flex items-center justify-center transition-all border border-white/10 shadow-lg pointer-events-auto cursor-pointer"
            title="Previous slide"
            id="btn-slideshow-prev"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6" />
          </button>
          
          <button
            onClick={(e) => handleNext(e)}
            className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-black/40 hover:bg-black/75 hover:scale-105 active:scale-95 text-white flex items-center justify-center transition-all border border-white/10 shadow-lg pointer-events-auto cursor-pointer"
            title="Next slide"
            id="btn-slideshow-next"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6" />
          </button>
        </div>
      )}

      {/* 3. Actual Foreground children layout */}
      <div className="relative z-10 w-full h-full flex flex-col justify-center py-6 pb-6 sm:pb-6 md:py-8 flex-1">
        {children}
      </div>
    </div>
  );
}
