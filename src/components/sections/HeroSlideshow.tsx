"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
      url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1600&h=600&q=80",
      caption: "Lush Tea Gardens of Gossaigaon, Kokrajhar"
    },
    {
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&h=600&q=80",
      caption: "Misty Foothills & Serene Rivers of BTR Region"
    },
    {
      url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1600&h=600&q=80",
      caption: "Pristine Reserve Forests & Natural Habitat of Assam"
    },
    {
      url: "https://images.unsplash.com/photo-1502082553048-f009c37129b9?auto=format&fit=crop&w=1600&h=600&q=80",
      caption: "Lush Biodiversity & Canopy in Kokrajhar Sub-division"
    }
  ],
  kokrajhar_mb: [
    {
      url: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1600&h=600&q=80",
      caption: "Breathtaking landscapes of Kokrajhar Capital"
    },
    {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&h=600&q=80",
      caption: "Scenic Champamati River of Kokrajhar District"
    },
    {
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&h=600&q=80",
      caption: "Evergreen Sal Canopy in Bodoland Territorial Region"
    }
  ],
  basugaon_mb: [
    {
      url: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&w=1600&h=600&q=80",
      caption: "Serene Agricultural Meadows, Chirang"
    },
    {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&h=600&q=80",
      caption: "Stunning Northern Hills Interface in Basugaon Grid"
    }
  ],
  bijni_mb: [
    {
      url: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1600&h=600&q=80",
      caption: "Pragmatic River-basin Settlements, Bijni"
    },
    {
      url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1600&h=600&q=80",
      caption: "Lush Reserve Greenery of Chirang Borderlands"
    }
  ],
  fakiragram_mb: [
    {
      url: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&h=600&q=80",
      caption: "Historical Railway Junction Vista, Fakiragram"
    }
  ],
  goreswar_mb: [
    {
      url: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&h=600&q=80",
      caption: "Warm Solar Golden Meadows of Tamulpur"
    }
  ],
  kajalgaon_mb: [
    {
      url: "https://images.unsplash.com/photo-1433832597046-4f10e10ac764?auto=format&fit=crop&w=1600&h=600&q=80",
      caption: "District Headquarters Nature Vistas, Chirang"
    }
  ],
  mushalpur_mb: [
    {
      url: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&h=600&q=80",
      caption: "Majestic Bhutan Foothills Panorama from Baksa"
    },
    {
      url: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?auto=format&fit=crop&w=1600&h=600&q=80",
      caption: "Evergreen Sal Valleys of Manas Foothills"
    }
  ],
  tamulpur_mb: [
    {
      url: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=1600&h=600&q=80",
      caption: "Dense Agro-Forestry & Nature, Tamulpur District"
    }
  ],
  tangla_mb: [
    {
      url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=1600&h=600&q=80",
      caption: "Bountiful Tea Plantations, Udalguri"
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
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 pointer-events-none z-20 flex justify-between px-3 md:px-8">
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
