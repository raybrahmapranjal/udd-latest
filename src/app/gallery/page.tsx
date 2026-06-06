"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Image as ImageIcon, 
  Video, 
  Eye, 
  X,
  Play,
  ArrowRight,
  TrendingUp,
  MapPin,
  Calendar,
  Building
} from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Dynamic photo items matching actual UDD BTC projects and visual mockup
const galleryPhotos = [
  {
    id: 1,
    title: "Paver Block Pavement Construction",
    category: "Road Construction",
    location: "Kokrajhar MB",
    date: "12 May 2024",
    imgUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Storm-water RCC Drainage Project",
    category: "Sanitation & Drainage",
    location: "Gossaigaon",
    date: "25 Apr 2024",
    imgUrl: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "LED High Mast Lighting Installation",
    category: "Street Lighting",
    location: "Chirang (Kajalgaon)",
    date: "08 May 2024",
    imgUrl: "https://images.unsplash.com/photo-1517733948473-ef8bb7304303?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Kokrajhar Town Hall Renovation Work",
    category: "Public Infrastructures",
    location: "Kokrajhar MB",
    date: "02 May 2024",
    imgUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Water Supply Scheme Phase II Pipe Laying",
    category: "Water Supply",
    location: "Kajalgaon MB",
    date: "29 Apr 2024",
    imgUrl: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Modern Solid Waste Disposal Facility",
    category: "SBM Urban",
    location: "Bijni Municipal Board",
    date: "19 Apr 2024",
    imgUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 7,
    title: "PMAY-U Beneficiary Houses Completed",
    category: "Affordable Housing",
    location: "Fakiragram MB",
    date: "05 May 2024",
    imgUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 8,
    title: "Municipal Super Market Complex",
    category: "Public Infrastructures",
    location: "Basugaon MB",
    date: "15 Apr 2024",
    imgUrl: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 9,
    title: "Urban Green Park & Eco-Walkway Beautification",
    category: "Urban Parks",
    location: "Tangla Municipal Board",
    date: "22 May 2024",
    imgUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 10,
    title: "Integrated Municipal Waste Compost Unit",
    category: "SBM Urban",
    location: "Mushalpur MB",
    date: "10 May 2024",
    imgUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop"
  }
];

// Rich mock video data for Videos Tab
const galleryVideos = [
  {
    id: 1,
    title: "Bodoland Municipal Conclave 2024 Summit",
    category: "Conferences",
    location: "Kokrajhar HQ",
    duration: "4:20",
    published: "18 May 2024",
    videoPlaceholder: "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 2,
    title: "Transformative SBM Cleanliness Drive & Compost Units",
    category: "Swachh Bharat",
    location: "Bijni MB",
    duration: "3:15",
    published: "10 May 2024",
    videoPlaceholder: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 3,
    title: "PMAY-U Beneficiary Success Stories in Fakiragram",
    category: "Success Stories",
    location: "Fakiragram",
    duration: "5:45",
    published: "01 May 2024",
    videoPlaceholder: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: 4,
    title: "Smart Streetlighting & Citizen Safety Campaign BTR",
    category: "Infrastructure",
    location: "Basugaon",
    duration: "2:40",
    published: "28 Apr 2024",
    videoPlaceholder: "https://images.unsplash.com/photo-1509099836639-18ba1795216d?q=80&w=800&auto=format&fit=crop",
    youtubeUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  }
];

export default function GalleryPage() {
  const [activeTab, setActiveTab ] = useState<'photos' | 'videos'>('photos');
  const [selectedPhoto, setSelectedPhoto] = useState<typeof galleryPhotos[0] | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<typeof galleryVideos[0] | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <div className="sticky top-0 z-[110]">
        <UtilityBar />
        <Header />
      </div>

      {/* Styled deep purple majestic header banner matching user mockup exactly */}
      <section className="relative py-20 md:py-24 text-center bg-slate-950 overflow-hidden text-white border-b border-purple-950/30 shadow-lg">
        {/* Traditional Bodo Aronai vertical pattern tiling horizontally */}
        <div 
          className="absolute inset-0 z-0 opacity-45 bg-repeat-x bg-center"
          style={{ 
            backgroundImage: "url('/aronai.png')",
            backgroundSize: "auto 100%"
          }}
        />
        {/* Light Purple Overlay with decreased intensity */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#21113a]/75 via-[#180a2d]/65 to-[#2d114c]/75 mix-blend-multiply" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center">
          {/* Centered Gallery Icon with backdrop */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center border border-white/20 shadow-2xl backdrop-blur-md mb-5 group-hover:scale-105 transition-transform duration-300 animate-fade-in">
            <ImageIcon className="w-8 h-8 md:w-10 md:h-10 text-violet-300" />
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 uppercase">
            Photo & Video Gallery
          </h1>
          <p className="text-violet-100 max-w-2xl text-sm md:text-lg leading-relaxed font-semibold">
            Visual showcase of urban development projects, events, and achievements across Bodoland Territorial Region
          </p>
        </div>
      </section>

      {/* Tab select center control matching user mockup exactly */}
      <div className="bg-white border-b border-slate-200 py-4 md:py-6 font-sans">
        <div className="max-w-[1400px] mx-auto px-4 flex justify-center">
          <div className="bg-[#f0f4f8] p-1 rounded border border-[#e2e8f0] inline-flex gap-1 items-center">
            {/* Photos Tab Button */}
            <button
              id="photos_tab"
              onClick={() => setActiveTab('photos')}
              className={`flex items-center gap-2 px-3 sm:px-6 py-2.5 sm:py-3.5 rounded font-extrabold text-xs sm:text-sm md:text-base tracking-wide transition-all duration-300 ${
                activeTab === 'photos'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200 transform scale-[1.01]'
                  : 'text-slate-650 hover:text-slate-900 hover:bg-white/40'
              }`}
            >
              <ImageIcon className={`w-4 h-4 sm:w-[22px] sm:h-[22px] ${activeTab === 'photos' ? 'text-slate-900' : 'text-slate-500'}`} />
              <span>Photos ({galleryPhotos.length})</span>
            </button>

            {/* Videos Tab Button */}
            <button
              id="videos_tab"
              onClick={() => setActiveTab('videos')}
              className={`flex items-center gap-2 px-3 sm:px-6 py-2.5 sm:py-3.5 rounded font-extrabold text-xs sm:text-sm md:text-base tracking-wide transition-all duration-300 ${
                activeTab === 'videos'
                  ? 'bg-white text-slate-900 shadow-sm border border-slate-200 transform scale-[1.01]'
                  : 'text-slate-650 hover:text-slate-900 hover:bg-white/40'
              }`}
            >
              <Video className={`w-4 h-4 sm:w-[22px] sm:h-[22px] ${activeTab === 'videos' ? 'text-slate-900' : 'text-slate-500'}`} />
              <span>Videos ({galleryVideos.length})</span>
            </button>
          </div>
        </div>
      </div>

      {/* Primary Gallery Grid Container */}
      <main className="flex-grow max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-8 py-10 md:py-16">
        <div id="gallery_content_area">
          <AnimatePresence mode="wait">
            {activeTab === 'photos' ? (
              <motion.div
                key="photos"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8"
              >
                {galleryPhotos.map((photo) => (
                  <div
                    key={photo.id}
                    id={`photo_card_${photo.id}`}
                    onClick={() => setSelectedPhoto(photo)}
                    className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 hover:border-violet-200 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
                  >
                    {/* Image Box */}
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 shrink-0">
                      <Image
                        src={photo.imgUrl}
                        alt={photo.title}
                        fill
                        referrerPolicy="no-referrer"
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      {/* Floating Badge */}
                      <span className="absolute top-3 left-3 bg-violet-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider z-10 shadow-md">
                        {photo.category}
                      </span>
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-violet-950/45 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center duration-300">
                        <div className="w-11 h-11 rounded-full bg-white text-violet-800 flex items-center justify-center shadow-xl scale-90 group-hover:scale-100 transition-transform duration-300">
                          <Eye className="w-5.5 h-5.5" />
                        </div>
                      </div>
                    </div>

                    {/* Meta & Title Box */}
                    <div className="p-5 flex flex-col justify-between flex-grow">
                      <div>
                        {/* Location / Date info row stacked in separate rows for superior tablet & mobile layouts */}
                        <div className="flex flex-col gap-1 text-slate-450 font-extrabold text-[11px] mb-2.5 uppercase tracking-wide">
                          <span className="flex items-center gap-1.5 text-blue-600">
                            <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                            {photo.location}
                          </span>
                          <span className="flex items-center gap-1.5 text-purple-600">
                            <Calendar className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                            {photo.date}
                          </span>
                        </div>
                        <h3 className="font-extrabold text-slate-800 text-sm sm:text-base leading-snug group-hover:text-violet-600 transition-colors line-clamp-2">
                          {photo.title}
                        </h3>
                      </div>
                      
                      <div className="mt-4 pt-3.5 border-t border-slate-100/80 flex items-center justify-between text-xs text-slate-400 font-extrabold group-hover:text-violet-600 transition-colors">
                        <span>Click to expand view</span>
                        <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="videos"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
              >
                {galleryVideos.map((video) => (
                  <div
                    key={video.id}
                    id={`video_card_${video.id}`}
                    onClick={() => setSelectedVideo(video)}
                    className="group bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl border border-slate-100 hover:border-violet-200 cursor-pointer transition-all duration-300 transform hover:-translate-y-1"
                  >
                    {/* Media container */}
                    <div className="relative aspect-video overflow-hidden bg-slate-900 shrink-0">
                      <Image
                        src={video.videoPlaceholder}
                        alt={video.title}
                        fill
                        referrerPolicy="no-referrer"
                        className="object-cover opacity-80 group-hover:opacity-70 group-hover:scale-102 transition-all duration-500"
                      />
                      {/* Absolute duration banner bottom right */}
                      <span className="absolute bottom-3 right-3 bg-slate-950/85 text-white/95 text-xs font-bold px-2 py-1 rounded-md tracking-wider">
                        {video.duration}
                      </span>
                      {/* Floating tag top left */}
                      <span className="absolute top-4 left-4 bg-violet-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md tracking-wider">
                        {video.category}
                      </span>
                      {/* Play Action Hub */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-violet-600/95 hover:bg-violet-700 hover:scale-105 group-hover:scale-110 text-white flex items-center justify-center shadow-2xl transition-all duration-300">
                          <Play className="w-7 h-7 fill-white translate-x-0.5" />
                        </div>
                      </div>
                    </div>

                    {/* Metadata summary */}
                    <div className="p-6">
                      <div className="flex flex-col gap-1 text-slate-450 font-extrabold text-[11px] mb-2.5 uppercase tracking-wide">
                        <span className="flex items-center gap-1.5 text-blue-600">
                          <MapPin className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                          {video.location}
                        </span>
                        <span className="flex items-center gap-1.5 text-purple-600">
                          <Calendar className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                          Published: {video.published}
                        </span>
                      </div>
                      <h3 className="font-extrabold text-[#003366] text-base md:text-xl leading-snug group-hover:text-blue-650 transition-colors">
                        {video.title}
                      </h3>
                      <p className="text-xs text-slate-450 mt-2 font-semibold">
                        Exclusive video documentation representing development milestones and initiatives inside BTC municipalities.
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Dialog overlay for Photos */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl relative border border-slate-100 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh] overflow-y-auto md:overflow-hidden my-auto"
            >
              {/* Close Button strictly styled top right */}
              <button
                onClick={() => setSelectedPhoto(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-slate-950/60 rounded-full flex items-center justify-center text-white hover:bg-slate-900 transition-all shadow-md focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column Aspect Image */}
              <div className="relative aspect-video md:aspect-auto md:w-3/5 md:h-full bg-slate-950 overflow-hidden flex items-center min-h-[240px] md:min-h-0">
                <Image
                  src={selectedPhoto.imgUrl}
                  alt={selectedPhoto.title}
                  fill
                  referrerPolicy="no-referrer"
                  className="object-cover"
                />
              </div>

              {/* Right Column Project Specs */}
              <div className="p-6 md:p-8 md:w-2/5 flex flex-col justify-between md:overflow-y-auto">
                <div>
                  <span className="inline-block bg-violet-100 text-violet-800 text-[10px] font-extrabold px-3 py-1 rounded-lg uppercase tracking-wider mb-3 shadow-sm border border-violet-200/20">
                    {selectedPhoto.category}
                  </span>
                  <h2 className="text-xl md:text-2xl font-black text-[#003366] leading-tight mb-4">
                    {selectedPhoto.title}
                  </h2>

                  <div className="space-y-4 border-t border-slate-100 pt-5">
                    {/* Location Info */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-md bg-orange-50 border border-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Project Location</p>
                        <p className="text-sm font-bold text-slate-700">{selectedPhoto.location}</p>
                      </div>
                    </div>

                    {/* Date Info */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-md bg-indigo-50 border border-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
                        <Calendar className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Documentation Date</p>
                        <p className="text-sm font-bold text-slate-700">{selectedPhoto.date}</p>
                      </div>
                    </div>

                    {/* Responsible Authority Info */}
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                        <Building className="w-4 h-4" />
                      </div>
                      <div>
                        <p className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">Executive Authority</p>
                        <p className="text-sm font-bold text-slate-700">Urban Development Department, BTC</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <button
                    onClick={() => setSelectedPhoto(null)}
                    className="w-full text-center py-3 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    Close Preview
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Dialog overlay for Videos */}
      <AnimatePresence>
        {selectedVideo && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-slate-900 rounded-xl overflow-hidden max-w-4xl w-full shadow-2xl relative border border-slate-800 my-auto max-h-[95vh] overflow-y-auto"
            >
              {/* Close Button top right */}
              <button
                onClick={() => setSelectedVideo(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 rounded-full flex items-center justify-center text-white hover:bg-slate-950 transition-all shadow-lg"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Big video wrapper */}
              <div className="relative aspect-video w-full bg-black">
                {/* Simulated Youtube playing screen beautifully styled */}
                <iframe
                  className="w-full h-full"
                  src={`${selectedVideo.youtubeUrl}?autoplay=1`}
                  title={selectedVideo.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

              {/* Video Title and Bottom Banner */}
              <div className="p-6 md:p-8 bg-slate-950 text-white">
                <span className="bg-violet-600 text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-lg tracking-wider shadow">
                  {selectedVideo.category}
                </span>
                <h3 className="text-xl md:text-2xl font-black mt-3 leading-snug">
                  {selectedVideo.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-xs font-bold text-slate-400">
                  <span className="flex items-center gap-1.5 uppercase tracking-wide text-blue-400">
                    <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    Location: <span className="text-white">{selectedVideo.location}</span>
                  </span>
                  <span className="text-slate-600">•</span>
                  <span className="text-slate-300">Duration: {selectedVideo.duration} mins</span>
                  <span className="text-slate-600">•</span>
                  <span className="flex items-center gap-1.5 uppercase tracking-wide text-purple-400">
                    <Calendar className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    Published: <span className="text-white">{selectedVideo.published}</span>
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
