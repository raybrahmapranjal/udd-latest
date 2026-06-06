"use client";

import React, { useState } from 'react';
import { 
  Building2, 
  Home, 
  Shield, 
  MapPin, 
  Activity, 
  Droplet, 
  TreePine, 
  TrendingUp,
  Search,
  ChevronDown,
  Check
} from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface FullScheme {
  id: string;
  title: string;
  category: string;
  description: string;
  eligibility: string;
  benefits: string;
  howToApply: string;
  icon: any;
  iconBgColor: string;
}

const ALL_SCHEMES: FullScheme[] = [
  {
    id: 'infra',
    title: 'Urban Infrastructure Development',
    category: 'Infrastructure',
    description: 'Comprehensive development of roads, bridges, water supply, and urban amenities including parks, gardens, and playgrounds.',
    eligibility: 'All Municipal Boards in BTR',
    benefits: 'Improved urban infrastructure, better connectivity, enhanced quality of life',
    howToApply: 'Apply through respective Municipal Board office',
    icon: Building2,
    iconBgColor: 'bg-[#2563eb]' // Strong blue like screenshot 1
  },
  {
    id: 'slum',
    title: 'Slum Improvement & Upgradation',
    category: 'Social',
    description: 'Upgrading slum areas with better hygiene, sanitation facilities, solid waste management, and improved living standards.',
    eligibility: 'Residents of identified slum areas',
    benefits: 'Better housing, sanitation, water supply, and overall living conditions',
    howToApply: 'Contact UDD or local Municipal Board',
    icon: Home,
    iconBgColor: 'bg-[#10b981]' // Vibrant emerald green like screenshot 1
  },
  {
    id: 'poverty',
    title: 'Urban Poverty Alleviation Program',
    category: 'Social',
    description: 'Supporting economically weaker sections with livelihood opportunities, skill development, and financial assistance.',
    eligibility: 'Families below poverty line in urban areas',
    benefits: 'Livelihood support, skill training, financial aid, employment opportunities',
    howToApply: 'Register at Municipal Board or UDD office',
    icon: Shield,
    iconBgColor: 'bg-[#ea580c]' // Deep orange like screenshot 2
  },
  {
    id: 'masterplan',
    title: 'Master Plan Implementation',
    category: 'Planning',
    description: 'Sustainable urban planning for orderly growth, development, and efficient land use across BTR.',
    eligibility: 'All ULBs and Development Authorities',
    benefits: 'Planned urban growth, regulated development, better infrastructure',
    howToApply: 'Coordinated by UDD with local authorities',
    icon: MapPin,
    iconBgColor: 'bg-[#8b5cf6]' // Rich violet like screenshot 2
  },
  {
    id: 'health',
    title: 'Public Health & Sanitation',
    category: 'Health',
    description: 'Improving public health through better sanitation, conservancy, solid waste management, and disease prevention.',
    eligibility: 'All urban residents',
    benefits: 'Improved public health, cleaner environment, disease prevention',
    howToApply: 'Services provided by Municipal Boards',
    icon: Activity,
    iconBgColor: 'bg-[#ec4899]' // Bright pink like screenshot 3
  },
  {
    id: 'water',
    title: 'Water Supply Enhancement',
    category: 'Infrastructure',
    description: 'Ensuring adequate water supply for domestic, industrial, and commercial purposes across urban areas.',
    eligibility: 'All urban households and businesses',
    benefits: 'Reliable water supply, improved quality, 24×7 availability',
    howToApply: 'Apply for new connections through Municipal Board',
    icon: Droplet,
    iconBgColor: 'bg-[#06b6d4]' // Ocean cyan like screenshot 3
  },
  {
    id: 'forestry',
    title: 'Urban Forestry & Environment',
    category: 'Environment',
    description: 'Promoting urban forestry, environmental protection, and ecological sustainability in urban areas.',
    eligibility: 'All Municipal Boards and communities',
    benefits: 'Green spaces, cleaner air, environmental conservation',
    howToApply: 'Community participation through Municipal Boards',
    icon: TreePine,
    iconBgColor: 'bg-[#0f766e]' // Teal green like screenshot 4
  },
  {
    id: 'economic',
    title: 'Economic & Social Development',
    category: 'Development',
    description: 'Planning for economic and social development, promoting cultural and educational aspects.',
    eligibility: 'All citizens and institutions in BTR',
    benefits: 'Economic growth, social welfare, cultural promotion',
    howToApply: 'Various schemes coordinated by UDD',
    icon: TrendingUp,
    iconBgColor: 'bg-[#d97706]' // Saffron/amber like screenshot 4
  }
];

const CATEGORIES = ['All', 'Infrastructure', 'Social', 'Planning', 'Health', 'Environment', 'Development'];

export default function SchemesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Filter schemes based on search input and category selection
  const filteredSchemes = ALL_SCHEMES.filter(scheme => {
    const matchesSearch = 
      scheme.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.eligibility.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.benefits.toLowerCase().includes(searchTerm.toLowerCase()) ||
      scheme.howToApply.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || scheme.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans">
      <div className="sticky top-0 z-[110]">
        <UtilityBar />
        <Header />
      </div>

      {/* Solid Vibrant Royal Blue Banner Section with Bodo Aronai pattern */}
      <section className="relative py-14 overflow-hidden bg-[#1140be] text-white border-t-[5px] border-[#ea580c] border-b border-blue-900/40 shadow-md text-center">
        {/* Traditional Bodo Aronai vertical pattern tiling horizontally */}
        <div 
          className="absolute inset-0 z-0 opacity-30 bg-repeat-x bg-center"
          style={{ 
            backgroundImage: "url('/aronai.png')",
            backgroundSize: "auto 100%"
          }}
        />
        {/* Rich Blue Overlay with decreased intensity to blend elegantly */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0d34a1]/65 via-[#0e3aba]/55 to-[#1244cf]/60 mix-blend-multiply" />

        <div className="max-w-4xl mx-auto px-4 relative z-20">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-2">
            Government Schemes
          </h1>
          <p className="text-sm sm:text-base text-blue-100 font-medium max-w-2xl mx-auto">
            Transforming urban landscapes through strategic development programs
          </p>
        </div>
      </section>

      {/* Schemes Interactive Dashboard Context */}
      <main className="flex-grow max-w-7xl w-full mx-auto p-4 sm:p-6 md:p-8">
        
        {/* Search & Filter Dock */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm mb-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Search schemes... Input */}
          <div className="relative flex-grow w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search schemes..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-slate-200/80 rounded-lg text-slate-700 placeholder-slate-400 text-sm font-medium focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500 transition-all font-sans"
            />
          </div>

          {/* Combined Custom Select for All Categories */}
          <div className="relative shrink-0 w-full sm:w-[220px]">
            <button
              type="button"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between bg-white border border-slate-200 rounded-lg py-2 pl-4 pr-3.5 text-slate-700 text-sm font-medium hover:border-slate-300 focus:outline-none focus:ring-1 focus:ring-blue-500 shadow-sm cursor-pointer font-sans transition-all text-left"
            >
              <span className="font-sans font-semibold text-slate-700">
                {selectedCategory === 'All' ? 'All Categories' : selectedCategory}
              </span>
              <ChevronDown className={`w-4 h-4 text-slate-400 font-sans transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {isDropdownOpen && (
              <>
                {/* Backdrop helper to dismiss dropdown */}
                <div 
                  className="fixed inset-0 z-[120]" 
                  onClick={() => setIsDropdownOpen(false)}
                />
                
                {/* Custom Options List Dropdown */}
                <div className="absolute right-0 mt-1.5 w-full bg-white border border-slate-200 rounded-lg shadow-lg py-1.5 z-[130] min-w-[200px]">
                  {CATEGORIES.map(cat => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => {
                        setSelectedCategory(cat);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm font-sans font-semibold transition-colors hover:bg-slate-50 flex items-center justify-between ${
                        cat === selectedCategory 
                          ? 'text-[#1140be] bg-blue-50/50' 
                          : 'text-slate-600 hover:text-[#1140be]'
                      }`}
                    >
                      <span className="font-sans">
                        {cat === 'All' ? 'All Categories' : cat}
                      </span>
                      {cat === selectedCategory && (
                        <Check className="w-4 h-4 text-[#1140be] stroke-[2.5]" />
                      )}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

        </div>

        {/* Dynamic Schemes Results Grid */}
        {filteredSchemes.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-20">
            {filteredSchemes.map((scheme) => {
              const IconComp = scheme.icon;

              return (
                <div
                  key={scheme.id}
                  className="bg-[#fffdfb] border border-[#f97316]/60 border-l-4 border-l-[#ea580c] rounded-xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col gap-6"
                >
                  {/* Header of Scheme Card */}
                  <div className="flex items-center gap-4">
                    {/* Circle badge container for custom colored icons exactly like the screenshot */}
                    <div className={`w-14 h-14 rounded-full ${scheme.iconBgColor} text-white flex items-center justify-center shadow-lg shrink-0`}>
                      <IconComp className="w-7 h-7 stroke-[2]" />
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-bold font-sans text-slate-900 leading-tight">
                        {scheme.title}
                      </h3>
                      <span className="inline-block bg-[#2563eb] text-white text-xs font-semibold px-3 py-0.5 rounded-full mt-1.5 shadow-sm">
                        {scheme.category === 'Social' ? 'Social' : scheme.category}
                      </span>
                    </div>
                  </div>

                  {/* Clean Content Sections with light white bg and no border lines */}
                  <div className="space-y-4">
                    
                    {/* Description Capsule */}
                    <div className="bg-white/90 p-4 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                      <h4 className="font-extrabold text-slate-900 text-sm mb-1 font-sans">Description</h4>
                      <p className="text-slate-700 text-sm font-medium leading-relaxed">
                        {scheme.description}
                      </p>
                    </div>

                    {/* Eligibility Capsule */}
                    <div className="bg-white/90 p-4 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                      <h4 className="font-extrabold text-slate-900 text-sm mb-1 font-sans">Eligibility</h4>
                      <p className="text-slate-700 text-sm font-medium leading-relaxed">
                        {scheme.eligibility}
                      </p>
                    </div>

                    {/* Benefits Capsule */}
                    <div className="bg-white/90 p-4 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                      <h4 className="font-extrabold text-slate-900 text-sm mb-1 font-sans">Benefits</h4>
                      <p className="text-slate-700 text-sm font-medium leading-relaxed">
                        {scheme.benefits}
                      </p>
                    </div>

                    {/* How to Apply Capsule */}
                    <div className="bg-white/90 p-4 rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.01)]">
                      <h4 className="font-extrabold text-slate-900 text-sm mb-1 font-sans">How to Apply</h4>
                      <p className="text-slate-700 text-sm font-medium leading-relaxed">
                        {scheme.howToApply}
                      </p>
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-20 bg-white border border-slate-200 rounded-2xl p-8 max-w-lg mx-auto shadow-sm">
            <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mb-2">No Matching Schemes</h3>
            <p className="text-slate-500 text-sm font-semibold mb-6">
              We couldn&apos;t find any schemes matching &quot;{searchTerm}&quot; under &quot;{selectedCategory}&quot;.
            </p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedCategory('All'); }}
              className="bg-[#1140be] hover:bg-blue-800 text-white text-xs font-black uppercase tracking-wider py-3 px-6 rounded-lg transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

      </main>

      <Footer />
    </div>
  );
}
