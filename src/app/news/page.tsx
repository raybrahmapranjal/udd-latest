"use client";
import React, { useState, useMemo, useEffect, Suspense } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Newspaper, 
  Search, 
  SlidersHorizontal, 
  Calendar, 
  User, 
  BookOpen, 
  ArrowRight, 
  X,
  FileText,
  Building,
  BellRing,
  Tag
} from 'lucide-react';
import { useSearchParams } from 'next/navigation';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Rich Mock blog items dataset
const newsAndEventsList = [
  {
    id: 1,
    title: "Official Notification regarding Ward Delimitation for ULB Elections 2026",
    type: "notice",
    date: "20 May 2026",
    author: "Joint Secretary, UDD BTR",
    readTime: "4 mins read",
    imgUrl: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    summary: "Complete breakdown of geographical boundaries, ward re-structuring drafts, guidelines, and feedback submission forms for the ahead BTC Urban Local Bodies election.",
    content: `The Urban Development Department, Bodoland Territorial Council, has released the draft proposal for the delimitation of wards across various Municipal Boards within the Bodoland Territorial Region. 

This initiative aims to establish balanced demographic representation and geographical cohesion. Citizens and stakeholders are requested to review the draft schedules and maps available at their respective Civil Offices. Written objections, recommendations, or suggestions can be submitted to the Office of the Joint Secretary, UDD, BTC, Kokrajhar within 15 days from the date of publication. 

Post consideration of all valid suggestions, the final delimitation order will be gazetted and published on this portal.`
  },
  {
    id: 2,
    title: "UDD BTC Organizes Regional Workshop on Climate Resilient Cities in NE India",
    type: "news",
    date: "15 May 2026",
    author: "Public Relations Officer, BTR Portal",
    readTime: "3 mins read",
    imgUrl: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop",
    summary: "BTR delegates and administrative leaders gathered in Kokrajhar to adopt smart solid waste strategies, bio-retention modeling, and climate mitigation layouts.",
    content: `The Urban Development Department of BTC successfully conducted a high-level regional workshop titled "Climate Resilient Cities - Navigating Sustainable Urban Growth in Northeast India". 

The summit was attended by environmental analysts, town planners, and municipal engineers. Discussions centered around adapting local sewage frameworks to torrential rainfall, reinforcing drain capacities, and planning eco-conscious urban zones. Key speaker Hon. Lankeshwar Owarie emphasized the alignment of local policies with international green development declarations.`
  },
  {
    id: 3,
    title: "Procurement Tender: Modern Solid Waste Management Equipments & Vehicles",
    type: "tender",
    date: "18 May 2026",
    author: "Executive Engineers, Kokrajhar Division",
    readTime: "5 mins read",
    imgUrl: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop",
    summary: "Competitive bids are invited from approved suppliers and engineering firms for supplying waste disposal trucks, skip-loaders, and heavy mechanical organic compost units.",
    content: `Sealed tenders are invited under two-bid systems (Technical & Financial) from registered, resourceful manufacturing houses or certified suppliers. 

The scope includes the procurement and commissioning of Modern Solid Waste Management Vehicles, hydraulic skip loaders, and smart compost bins. Detailed tender specifications, eligibility criteria, and EMD documents can be downloaded freely from the e-procurement portal. Tenders must be physically submitted or couriered before June 15, 2026, 3:00 PM.`
  },
  {
    id: 4,
    title: "Applications Invited for PMAY-Urban Beneficiary Led Construction (BLC) Scheme",
    type: "notice",
    date: "10 May 2026",
    author: "State Nodal Officer, PMAY-U",
    readTime: "2 mins read",
    imgUrl: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    summary: "Eligible urban poor residing in BTR town areas can apply for financial assistance of Rs. 2 Lakhs to construct solid concrete houses on owned land patches.",
    content: `The Urban Development Department announces the commencement of scheme registrations for the Pradhan Mantri Awas Yojana - Urban (PMAY-U) under the Beneficiary Led Construction (BLC) model. 

Low-income group families who possess registered land deeds or valid occupancy rights but do not have a cement/pucca roof can apply for up to Rs. 2,00,000 in structural assistance. Applications must be submitted through physical registers at Municipal headquarters or digitized directly via our online services page.`
  },
  {
    id: 5,
    title: "Swachh Bharat Cleanliness Protocol Drive Launched across 10 BTR Municipal Boards",
    type: "news",
    date: "02 May 2026",
    author: "SBM Urban Coordinator",
    readTime: "3 mins read",
    imgUrl: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop",
    summary: "Honorable Chief of BTC inaugurated the massive zero-waste community drive targeting zero legacy landfill expansion and widespread household compost bins.",
    content: `A massive collaborative urban mobilization campaign under Swachh Bharat Mission 2.0 has been launched across all urban boards in the Bodoland Territorial Region. 

The program aims to eliminate single-use plastics, implement source-segregation in all wards, and clear legacy dumpsites. Swachhata command centers will inspect weekly municipal reports to reward the cleanest ward of the month.`
  },
  {
    id: 6,
    title: "LED High Mast Lighting Project Successfully Commissioned at Bijni Towns",
    type: "news",
    date: "28 Apr 2026",
    author: "PRO, Urban Infrastructure Wing BTR",
    readTime: "2 mins read",
    imgUrl: "https://images.unsplash.com/photo-1517733948473-ef8bb7304303?q=80&w=800&auto=format&fit=crop",
    summary: "To reinforce citizen safety and night commuter visibility, 15 high-intensity solar hybrid high mast grids have been placed across core commercial squares.",
    content: `The Municipal Infrastructure Board has announced the successful completion of the LED Street illumination phase in Bijni Town. 

The new high mast systems are equipped with smart twilight sensors to auto-adjust lighting intensity, lowering energy draw during late night hours. Local vendors and pedestrians have welcomed this infrastructure upgrade.`
  },
  {
    id: 7,
    title: "UDD BTC Launches Integrated Citizen Grievance Redressal (CGR) Mobile App",
    type: "news",
    date: "15 Apr 2026",
    author: "IT Cell, Bodoland Council Secretariat",
    readTime: "3 mins read",
    imgUrl: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=800&auto=format&fit=crop",
    summary: "Citizens can now capture geo-tagged civic photos of waste accumulation, malfunctioning smart streetlights, or water line leakages for direct 48-hour resolution.",
    content: `The IT Wing in collaboration with the Urban Development Department has rolled out a unified portal for citizen complaint tracking. 

Through this system, users can easily snap and upload geo-tagged cell photos representing local infrastructure grievances. The complaints are routed instantly to the corresponding Ward Commissioner and Executive Officer, with complete 48-hour resolution progress monitoring.`
  },
  {
    id: 8,
    title: "AMRUT Clean Drinking Water Pipeline Work Commences at Gossaigaon MB",
    type: "news",
    date: "10 Apr 2026",
    author: "AMRUT Nodal Director",
    readTime: "4 mins read",
    imgUrl: "https://images.unsplash.com/photo-1581094288338-2314dddb7ecc?q=80&w=800&auto=format&fit=crop",
    summary: "Phase 3 Pipeline engineering blueprint starts today to supply safe filtration water to over 14,000 households across Gossaigaon ward sectors.",
    content: `Under the AMRUT drinking water initiative, ground excavation has commenced for the deep purification supply pipelines. 

The project aims to supply filtered, contaminant-free drinking water. The system leverages state-of-the-art filtration units ensuring compliance with safe consumption guidelines.`
  }
];

function NewsEventsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get('type') || searchParams.get('tab') || 'all';

  const [searchQuery, setSearchQuery] = useState('');
  const [filterType, setFilterType] = useState<string>('all');
  const [selectedPost, setSelectedPost] = useState<typeof newsAndEventsList[0] | null>(null);

  // Sync with searchParams on load
  useEffect(() => {
    if (initialCategory && ['all', 'news', 'notice', 'tender'].includes(initialCategory.toLowerCase())) {
      setFilterType(initialCategory.toLowerCase());
    }
  }, [initialCategory]);

  const filteredItems = useMemo(() => {
    return newsAndEventsList.filter((item) => {
      const matchesSearch = 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.author.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesType = filterType === 'all' || item.type === filterType;
      
      return matchesSearch && matchesType;
    });
  }, [searchQuery, filterType]);

  const typeLabel = (type: string) => {
    switch (type) {
      case 'notice': return 'Important Notice';
      case 'tender': return 'Tender Procurement';
      case 'news': return 'Latest News';
      default: return 'Announcement';
    }
  };

  const typeColorClass = (type: string) => {
    switch (type) {
      case 'notice': return 'bg-orange-100 text-orange-850 border border-orange-200';
      case 'tender': return 'bg-emerald-100 text-emerald-850 border border-emerald-200';
      case 'news': return 'bg-blue-100 text-blue-850 border border-blue-200';
      default: return 'bg-slate-100 text-slate-800';
    }
  };

  const typeIcon = (type: string) => {
    switch (type) {
      case 'notice': return <BellRing className="w-3.5 h-3.5" />;
      case 'tender': return <FileText className="w-3.5 h-3.5" />;
      case 'news': return <Newspaper className="w-3.5 h-3.5" />;
      default: return <Tag className="w-3.5 h-3.5" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      <div className="sticky top-0 z-[110]">
        <UtilityBar />
        <Header />
      </div>

      {/* Styled royal blue banner with traditional Bodo Aronai vertical pattern styling like the grievance page */}
      <section className="relative py-20 text-center bg-slate-950 overflow-hidden text-white border-b border-purple-950/30 shadow-lg">
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
          {/* Circular banner icon container exactly as pictured */}
          <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 rounded-full flex items-center justify-center border border-white/20 shadow-2xl backdrop-blur-md mb-5">
            <Newspaper className="w-8 h-8 md:w-10 md:h-10 text-sky-200" />
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4 text-white uppercase">
            News & Events
          </h1>
          <p className="text-blue-100 max-w-2xl text-sm md:text-lg leading-relaxed font-semibold">
            Stay updated with the latest developments, initiatives, and events from Urban Development Department, BTR
          </p>
        </div>
      </section>

      {/* Search and Filters Input Bar Section matching design */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="max-w-[1400px] mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Search Input Box */}
            <div className="relative w-full md:max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                id="news_search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search news and events..."
                className="w-full pl-11 pr-5 py-3.5 bg-slate-50 border border-slate-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white text-sm font-semibold text-slate-800 shadow-inner transition-all"
              />
            </div>

            {/* Filter Dropdown & Sliders controls */}
            <div className="flex items-center gap-3 w-full md:w-auto self-stretch md:self-auto shrink-0">
              <div className="bg-slate-100 p-2.5 rounded border border-slate-200 text-slate-650 flex items-center justify-center">
                <SlidersHorizontal className="w-5 h-5 text-slate-500" />
              </div>
              
              <div className="relative flex-grow md:flex-grow-0">
                <select
                  id="categories_filter"
                  value={filterType}
                  onChange={(e) => setFilterType(e.target.value)}
                  className="w-full md:w-56 bg-white border border-slate-200 px-4 py-3.5 pr-10 rounded font-extrabold text-sm sm:text-base text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm cursor-pointer transition-all appearance-none font-sans tracking-wide"
                >
                  <option value="all" className="font-sans text-sm font-bold text-slate-900">All Categories</option>
                  <option value="news" className="font-sans text-sm font-bold text-slate-900">Latest News</option>
                  <option value="notice" className="font-sans text-sm font-bold text-slate-900">Important Notices</option>
                  <option value="tender" className="font-sans text-sm font-bold text-slate-900">Tenders / RFPs</option>
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 flex items-center text-slate-750 font-extrabold text-sm">
                  &darr;
                </div>
              </div>
            </div>

          </div>

          {/* Status info bar */}
          <div className="mt-4 flex items-center justify-between text-xs text-slate-500 font-bold tracking-tight">
            <span>Showing {filteredItems.length} of {newsAndEventsList.length} items</span>
          </div>
        </div>
      </section>

      {/* Blog Cards Grid list layout */}
      <main className="flex-grow max-w-[1400px] mx-auto w-full px-4 sm:px-6 md:px-8 py-10 md:py-16">
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog_grid">
            {filteredItems.map((post) => (
              <article
                key={post.id}
                id={`blog_post_card_${post.id}`}
                onClick={() => setSelectedPost(post)}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-2xl border border-slate-100 hover:border-blue-200 cursor-pointer transition-all duration-300 transform hover:-translate-y-1 flex flex-col h-full"
              >
                {/* Accent Header Image */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-100 shrink-0">
                  <Image
                    src={post.imgUrl}
                    alt={post.title}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Absolute Badge Category exact design */}
                  <span className={`absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-md text-[10px] font-extrabold uppercase tracking-wider z-10 shadow ${typeColorClass(post.type)}`}>
                    {typeIcon(post.type)}
                    <span>{typeLabel(post.type)}</span>
                  </span>
                </div>

                {/* Body Details Info */}
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    {/* Date info with beautiful violet/purple color layout */}
                    <div className="flex items-center gap-1.5 text-purple-600 font-extrabold text-[11px] mb-3 uppercase tracking-wider">
                      <Calendar className="w-3.5 h-3.5 text-purple-650 shrink-0" />
                      <span>{post.date}</span>
                    </div>

                    <h3 className="font-extrabold text-[#003366] text-base md:text-lg leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 mb-3">
                      {post.title}
                    </h3>

                    <p className="text-slate-500 line-clamp-3 text-xs sm:text-sm font-semibold leading-relaxed">
                      {post.summary}
                    </p>
                  </div>

                  {/* Read More button */}
                  <div className="mt-6 pt-4 border-t border-slate-100/80 flex items-center justify-between text-xs text-blue-600 font-bold group-hover:text-blue-700 transition-colors">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-4 h-4 shrink-0" />
                      Read Entire Details
                    </span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform duration-300" />
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-lg p-16 text-center border border-slate-100 shadow-lg max-w-lg mx-auto">
            <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-100 text-slate-400">
              <Search className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-black text-[#003366]">No matching articles found</h3>
            <p className="text-sm text-slate-450 mt-2 font-semibold">Try adjusting keywords, correct typographical spacing, or clear your category filter.</p>
            <button
               onClick={() => {
                 setSearchQuery('');
                 setFilterType('all');
               }}
               className="mt-6 px-5 py-2.5 bg-blue-650 hover:bg-blue-700 text-white rounded-lg text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Reset Search Filter
            </button>
          </div>
        )}
      </main>

      {/* Styled Dialog modal box for detailed news viewing */}
      <AnimatePresence>
        {selectedPost && (
          <div className="fixed inset-0 z-[150] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-xl overflow-hidden max-w-3xl w-full shadow-2xl relative border border-slate-100 flex flex-col h-full max-h-[85vh]"
            >
              {/* Abs Close Button top right */}
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-all shadow focus:outline-none"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Scrollable container box */}
              <div className="overflow-y-auto w-full flex-grow">
                {/* Header aspect thumbnail */}
                <div className="relative aspect-video w-full bg-slate-100 shrink-0">
                  <Image
                    src={selectedPost.imgUrl}
                    alt={selectedPost.title}
                    fill
                    referrerPolicy="no-referrer"
                    className="object-cover"
                  />
                  {/* Float Category Category */}
                  <span className={`absolute bottom-4 left-4 flex items-center gap-1.5 px-3.5 py-2 rounded-md text-xs font-bold uppercase tracking-wider z-10 shadow-lg ${typeColorClass(selectedPost.type)}`}>
                    {typeIcon(selectedPost.type)}
                    <span>{typeLabel(selectedPost.type)}</span>
                  </span>
                </div>

                {/* Written text detail blocks */}
                <div className="p-6 sm:p-8 md:p-10">
                  {/* Meta Information details with purple date display only */}
                  <div className="flex flex-wrap items-center gap-4 text-xs font-extrabold text-purple-600 border-b border-slate-100 pb-5 mb-5 uppercase tracking-wider">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-purple-600 shrink-0" />
                      Published: {selectedPost.date}
                    </span>
                  </div>

                  <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#003366] tracking-tight leading-snug mb-6">
                    {selectedPost.title}
                  </h2>

                  {/* Summary high impact callout card */}
                  <div className="bg-slate-50 border-l-4 border-blue-600 rounded-r-lg p-4 sm:p-5 mb-6 text-sm font-bold text-slate-650 leading-relaxed italic">
                    &ldquo;{selectedPost.summary}&rdquo;
                  </div>

                  {/* Full detailed body lines structure */}
                  <div className="whitespace-pre-line text-sm sm:text-base text-slate-600 font-semibold leading-relaxed space-y-4">
                    {selectedPost.content}
                  </div>

                  {/* Traditional authority stamps at end */}
                  <div className="mt-12 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md bg-orange-50 border border-orange-100 flex items-center justify-center text-orange-600 font-bold text-sm shrink-0">
                        UDD
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-700 leading-none">Bodoland Secretariat</p>
                        <p className="text-[10px] text-slate-400 font-semibold uppercase mt-1">Kokrajhar Town Council</p>
                      </div>
                    </div>

                    <span className="text-[11px] text-slate-400 font-bold uppercase tracking-wider">
                      Reference: UDD/BTC/NEWS-P62
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Sticky Action Banner inside dialog */}
              <div className="bg-slate-50 border-t border-slate-100 px-6 py-4 flex items-center justify-end shrink-0">
                <button
                  onClick={() => setSelectedPost(null)}
                  className="px-6 py-2.5 bg-[#003366] hover:bg-slate-800 text-white rounded-lg font-bold text-xs tracking-wider uppercase transition-colors"
                >
                  Close Reader
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}

export default function NewsEventsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-slate-50 flex flex-col justify-center items-center font-sans">
        <div className="w-10 h-10 border-4 border-t-blue-600 border-blue-200 rounded-full animate-spin"></div>
        <p className="text-xs font-extrabold text-blue-600 uppercase tracking-widest mt-4">Loading News & Events Feed...</p>
      </div>
    }>
      <NewsEventsContent />
    </Suspense>
  );
}
