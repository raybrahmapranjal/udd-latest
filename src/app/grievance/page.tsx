"use client";

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  UploadCloud, 
  X, 
  Search, 
  PlusCircle, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  AlertTriangle,
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Building2, 
  Tag, 
  Info,
  Check,
  Copy,
  ChevronRight,
  ShieldCheck,
  MessageSquare
} from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Define Grievance Interfaces
interface TimelineLog {
  status: string;
  timestamp: string;
  description: string;
}

interface Grievance {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  district: string;
  ulb: string;
  category: string;
  subject: string;
  description: string;
  attachmentName: string | null;
  attachmentSize: string | null;
  status: 'Initiated' | 'In Progress' | 'Resolved';
  date: string;
  timeline: TimelineLog[];
}

// Hardcoded sample grievances for immediate tracking demonstration
const PRELOADED_GRIEVANCES: Grievance[] = [
  {
    id: "UDD-GR-2026-10254",
    fullName: "Rohit Basumatary",
    email: "rohit.b@gmail.com",
    phone: "9876543210",
    district: "Kokrajhar",
    ulb: "Kokrajhar Municipal Board",
    category: "Street Light Repair & Installation",
    date: "2026-05-15",
    subject: "Non-functioning streetlights near Kokrajhar Market Central Street",
    description: "The streetlights near Kokrajhar Market Central Street have been completely blacked out for the last 5 days. It poses a security risk for business owners closing their shops late in the evening. Please address this urgently.",
    attachmentName: "dark_street_market.jpg",
    attachmentSize: "1.4 MB",
    status: "Resolved",
    timeline: [
      {
        status: "Grievance Registered",
        timestamp: "2026-05-15 09:30 AM",
        description: "Official grievance registered with ID UDD-GR-2026-10254."
      },
      {
        status: "Assigned to Division Executive",
        timestamp: "2026-05-16 11:00 AM",
        description: "Assigned to Electrical Maintenance Division (Ward No. 5), Kokrajhar Municipal Board."
      },
      {
        status: "Investigation & Action",
        timestamp: "2026-05-18 02:30 PM",
        description: "Maintenance team dispatched. Identified loose connection in the master circuit board and replaced 4 damaged 120W LED fixtures."
      },
      {
        status: "Resolved",
        timestamp: "2026-05-19 10:00 AM",
        description: "Street lighting restored completely. Inspected and approved by Junior Engineer, Kokrajhar Municipal Board."
      }
    ]
  },
  {
    id: "UDD-GR-2026-30248",
    fullName: "Prity Brahma",
    email: "prity.brahma@outlook.com",
    phone: "8877665544",
    district: "Chirang",
    ulb: "Kajalgaon Town Committee",
    category: "Solid Waste Management & Garbage Collection",
    date: "2026-05-18",
    subject: "Piles of plastic garbage accumulated next to Kajalgaon Sports Ground",
    description: "A huge accumulation of single-use plastic waste and household trash has been dump-accumulated adjacent to the sports playground boundary wall. Immediate collection and cleaning of this landfill-hazard is necessary.",
    attachmentName: "ground_waste.png",
    attachmentSize: "2.8 MB",
    status: "In Progress",
    timeline: [
      {
        status: "Grievance Registered",
        timestamp: "2026-05-18 08:15 AM",
        description: "Grievance entry catalogued. Reference ID UDD-GR-2026-30248."
      },
      {
        status: "Assigned to Division Executive",
        timestamp: "2026-05-19 02:00 PM",
        description: "Transmitted to Sanitary Inspector, Kajalgaon Town Committee for site cleaning dispatch."
      },
      {
        status: "Under Investigation",
        timestamp: "2026-05-20 09:12 AM",
        description: "Sanitation squad scheduled for mass clearance and temporary bins deployment today."
      }
    ]
  },
  {
    id: "UDD-GR-2026-45521",
    fullName: "Mukut Boro",
    email: "mukut.boro99@yahoo.com",
    phone: "7002341234",
    district: "Udalguri",
    ulb: "Tangla Municipal Board",
    category: "Water Supply Pipe leakage & Shortage",
    date: "2026-05-19",
    subject: "Major Main Line Water Leak at Ward No 3 main road",
    description: "Our municipal water main line pipeline is broken near the public tube well in Ward No 3 showing massive gushing water. Hundreds of gallons of clean drinking water are wasting onto road causing puddle pits.",
    attachmentName: null,
    attachmentSize: null,
    status: "Initiated",
    timeline: [
      {
        status: "Grievance Registered",
        timestamp: "2026-05-19 04:45 PM",
        description: "Your complaint was received successfully and added to the official UDD engineering assignment queue."
      }
    ]
  }
];

export default function GrievancePage() {
  const [activeTab, setActiveTab] = useState<'submit' | 'track'>('submit');
  
  // Submit Tab State
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    district: 'Kokrajhar',
    ulb: 'Kokrajhar Municipal Board',
    category: 'Drainage & Sewerage Water leakage',
    subject: '',
    description: ''
  });
  
  const [attachment, setAttachment] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null); // holds generated ID
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Track Tab State
  const [trackId, setTrackId] = useState('');
  const [searchResult, setSearchResult] = useState<Grievance | null>(null);
  const [hasSearched, setHasSearched] = useState(false);
  const [copiedId, setCopiedId] = useState(false);

  // Load state and store initials on load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('udd_grievances');
      if (!stored) {
        localStorage.setItem('udd_grievances', JSON.stringify(PRELOADED_GRIEVANCES));
      }
    }
  }, []);

  // District wise ULBs dictionary
  const districtUlbs: { [key: string]: string[] } = {
    'Kokrajhar': ['Kokrajhar Municipal Board', 'Gossaigaon Municipal Board', 'Fakiragram Municipal Board'],
    'Chirang': ['Basugaon Municipal Board', 'Kajalgaon Municipal Board', 'Bijni Municipal Board'],
    'Udalguri': ['Tangla Municipal Board'],
    'Baksa': ['Mushalpur Municipal Board', 'Goreswar Municipal Board'],
    'Tamulpur': ['Tamulpur Municipal Board']
  };

  const categories = [
    'Drainage & Sewerage Water leakage',
    'Solid Waste Management & Garbage Collection',
    'Street Light Repair & Installation',
    'Road Defects & Municipal Pavements',
    'Trade License Issue & Renewal',
    'Water Supply Pipe leakage & Shortage',
    'PMAY-U Housing Scheme Assistance',
    'Encroachment & Building Violations',
    'Other Municipal Issues'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => {
      const updated = { ...prev, [name]: value };
      // Auto assign first ULB of selected district
      if (name === 'district') {
        updated.ulb = districtUlbs[value][0] || '';
      }
      return updated;
    });
  };

  // Drag and Drop handlers
  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      // Basic size validation (limit 5MB)
      if (file.size <= 5 * 1024 * 1024) {
        setAttachment(file);
      } else {
        alert("File size exceeds the 5MB limit. Please upload a smaller file.");
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      if (file.size <= 5 * 1024 * 1024) {
        setAttachment(file);
      } else {
        alert("File size exceeds the 5MB limit. Please upload a smaller file.");
      }
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const removeAttachment = () => {
    setAttachment(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  // Form Submit Handler
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone || !formData.subject || !formData.description) {
      alert("Please fill in all the required fields.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      // Generate standard reference number
      const randNum = Math.floor(10000 + Math.random() * 90000);
      const generatedId = `UDD-GR-2026-${randNum}`;
      const now = new Date();
      
      const fileDetailName = attachment ? attachment.name : null;
      const fileDetailSize = attachment ? `${(attachment.size / (1024 * 1024)).toFixed(1)} MB` : null;

      const newGrievance: Grievance = {
        id: generatedId,
        fullName: formData.fullName,
        email: formData.email || "N/A",
        phone: formData.phone,
        district: formData.district,
        ulb: formData.ulb,
        category: formData.category,
        date: "2026-05-20", // Hardcoded current local year context from metadata
        subject: formData.subject,
        description: formData.description,
        attachmentName: fileDetailName,
        attachmentSize: fileDetailSize,
        status: 'Initiated',
        timeline: [
          {
            status: "Grievance Registered",
            timestamp: "2026-05-20 07:09 AM", // Metatada local clock
            description: `Grievance registered successfully. Received in queue for ${formData.ulb}.`
          }
        ]
      };

      // Store in localStorage
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('udd_grievances');
        const currentList: Grievance[] = stored ? JSON.parse(stored) : PRELOADED_GRIEVANCES;
        const updatedList = [newGrievance, ...currentList];
        localStorage.setItem('udd_grievances', JSON.stringify(updatedList));
      }

      setIsSubmitting(false);
      setSubmitSuccess(generatedId);
      
      // Auto setup track input
      setTrackId(generatedId);
    }, 1500);
  };

  // Grievance status tracker search logic
  const handleTrackSearch = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!trackId.trim()) return;

    setHasSearched(true);
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('udd_grievances');
      const list: Grievance[] = stored ? JSON.parse(stored) : PRELOADED_GRIEVANCES;
      const found = list.find(g => g.id.trim().toUpperCase() === trackId.trim().toUpperCase());
      setSearchResult(found || null);
    }
  };

  const copyToClipboard = () => {
    if (submitSuccess) {
      navigator.clipboard.writeText(submitSuccess);
      setCopiedId(true);
      setTimeout(() => setCopiedId(false), 2000);
    }
  };

  const handleSwitchToTrackAndSet = () => {
    if (submitSuccess) {
      setTrackId(submitSuccess);
      setSubmitSuccess(null);
      setActiveTab('track');
      setHasSearched(true);
      // Retrieve the freshly created item from local storage
      if (typeof window !== 'undefined') {
        const stored = localStorage.getItem('udd_grievances');
        const list: Grievance[] = stored ? JSON.parse(stored) : PRELOADED_GRIEVANCES;
        const found = list.find(g => g.id === trackId);
        setSearchResult(found || null);
      }
      // Re-trigger search to populate display
      setTimeout(() => {
        handleTrackSearch();
      }, 100);
    }
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      district: 'Kokrajhar',
      ulb: 'Kokrajhar Municipal Board',
      category: 'Drainage & Sewerage Water leakage',
      subject: '',
      description: ''
    });
    setAttachment(null);
    setSubmitSuccess(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="sticky top-0 z-[110]">
        <UtilityBar />
        <Header />
      </div>

      {/* Styled Banner Section with traditional Bodo Aronai horizontal pattern */}
      <section className="relative py-16 overflow-hidden bg-slate-950 text-white border-b border-purple-950/30 shadow-lg text-center">
        {/* Traditional Bodo Aronai vertical pattern tiling horizontally */}
        <div 
          className="absolute inset-0 z-0 opacity-45 bg-repeat-x bg-center"
          style={{ 
            backgroundImage: "url('https://as2.ftcdn.net/jpg/05/39/19/59/1000_F_539195979_di6c1j1rrc8wrybNOkactpWEgWlDioV1.webp')",
            backgroundSize: "auto 100%"
          }}
        />
        {/* Light Purple Overlay with decreased intensity */}
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#21113a]/70 via-[#180a2d]/60 to-[#2d114c]/70 mix-blend-multiply" />

        <div className="max-w-4xl mx-auto relative z-20 px-4">
          
          {/* USER SPECIFIED REQUIREMENT: Keep same breadcrumb style strictly */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-bold mb-6 select-none bg-white/5 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/5 inline-flex">
            <a href="/" className="hover:text-emerald-400 transition-colors uppercase tracking-wider">Home</a>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="text-emerald-400 font-black uppercase tracking-wider">Grievance</span>
          </div>

          <div className="block mt-4">
            <div className="inline-flex items-center gap-2 bg-sky-455/15 border border-sky-400/30 text-sky-200 font-extrabold px-4 py-1.5 rounded-full text-xs uppercase tracking-widest mb-4 backdrop-blur-sm">
              <ShieldCheck className="w-4 h-4 text-amber-200 drop-shadow-[0_0_8px_rgba(251,191,36,0.35)]" /> Integrated Redressal Portal
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-tight text-white font-sans drop-shadow-sm">
            Citizen Grievance Redressal
          </h1>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-sky-100/90 max-w-2xl mx-auto font-medium leading-relaxed">
            Welcome to the official UDD BTC online grievance registry. Lodge your municipal complaints, track investigation updates, and connect with division heads instantly.
          </p>
        </div>
      </section>

      {/* Main Interactive Work Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-4 sm:p-6 md:p-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT COLUMN: Main Form & Tracker Panels */}
          <div className="lg:col-span-8 space-y-8">

            {/* Dynamic Tab Selector Headers */}
            <div className="flex bg-white rounded-xl shadow-md p-1.5 border border-slate-200 mb-2 max-w-md mx-auto">
              <button
                onClick={() => { setActiveTab('submit'); setSubmitSuccess(null); }}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === 'submit'
                    ? 'bg-[#003366] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#003366] hover:bg-slate-50'
                }`}
              >
                <PlusCircle className="w-4 h-4 focus:outline-none" />
                File Lodge
              </button>
              
              <button
                onClick={() => setActiveTab('track')}
                className={`flex-1 flex items-center justify-center gap-2 py-3 rounded-lg text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeTab === 'track'
                    ? 'bg-[#003366] text-white shadow-md'
                    : 'text-slate-600 hover:text-[#003366] hover:bg-slate-50'
                }`}
              >
                <Search className="w-4 h-4 focus:outline-none" />
                Track Status
              </button>
            </div>

        {/* Tab Panel Sections with Framer Motion */}
        <AnimatePresence mode="wait">
          {activeTab === 'submit' ? (
            <motion.div
              key="submit-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {submitSuccess ? (
                /* LODGING SUCCESS SCREEN CARD */
                <div className="max-w-2xl mx-auto bg-white rounded-2xl border-2 border-emerald-500/30 p-8 text-center shadow-xl relative overflow-hidden">
                  <div className="absolute top-0 inset-x-0 h-2 bg-emerald-500" />
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  
                  <h2 className="text-2xl font-black text-slate-800 uppercase tracking-tight">Grievance Registered Successfully!</h2>
                  <p className="text-slate-500 text-sm sm:text-base mt-2 max-w-md mx-auto">
                    Your complaint has been logged and securely transferred to the local Municipal board for immediate evaluation.
                  </p>
                  
                  {/* Digital Complaint Slip */}
                  <div className="my-8 max-w-md mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 text-left relative">
                    <span className="absolute top-4 right-4 text-[10px] uppercase font-bold text-slate-400 bg-slate-200 px-2 py-0.5 rounded tracking-widest">Digital Token</span>
                    <div className="space-y-4">
                      <div>
                        <span className="text-xs uppercase font-bold text-slate-400 tracking-wider">Grievance Reference Number</span>
                        <div className="flex items-center justify-between gap-4 mt-1.5">
                          <code className="text-lg sm:text-xl font-mono font-black text-navy tracking-tight">{submitSuccess}</code>
                          <button
                            onClick={copyToClipboard}
                            className="text-slate-500 hover:text-[#ff6600] p-2 hover:bg-white rounded border border-slate-200 shadow-sm transition-all"
                            title="Copy ID"
                          >
                            {copiedId ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                          </button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200/60 text-xs text-slate-600">
                        <div>
                          <span className="font-bold block text-slate-400 uppercase text-[9px] tracking-widest">Citizen Name</span>
                          <span className="font-bold text-slate-800">{formData.fullName}</span>
                        </div>
                        <div>
                          <span className="font-bold block text-slate-400 uppercase text-[9px] tracking-widest">Complaint Date</span>
                          <span className="font-bold text-slate-800">20 May 2026</span>
                        </div>
                        <div>
                          <span className="font-bold block text-slate-400 uppercase text-[9px] tracking-widest">Local Jurisdiction</span>
                          <span className="font-bold text-slate-800 truncate block">{formData.ulb}</span>
                        </div>
                        <div>
                          <span className="font-bold block text-slate-400 uppercase text-[9px] tracking-widest">Current Status</span>
                          <span className="font-bold text-emerald-600 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" /> Initiated
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <button
                      onClick={handleSwitchToTrackAndSet}
                      className="w-full sm:w-auto bg-[#003366] hover:bg-slate-900 text-white font-bold text-sm tracking-wider uppercase px-8 py-3.5 rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
                    >
                      Track Live Progress <ArrowRight className="w-4 h-4" />
                    </button>
                    <button
                      onClick={resetForm}
                      className="w-full sm:w-auto hover:bg-slate-100 text-slate-600 font-bold text-sm tracking-wider uppercase px-8 py-3.5 rounded-xl transition-all border border-slate-300"
                    >
                      Lodge Another
                    </button>
                  </div>
                </div>
              ) : (
                /* REGISTRY GRIEVANCE FORM */
                <div className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden max-w-4xl mx-auto">
                  <div className="bg-gradient-to-r from-[#003366] to-[#002244] py-5 px-6 sm:px-8 border-b-4 border-[#ff6600] flex justify-between items-center">
                    <div>
                      <h2 className="text-lg sm:text-xl font-bold text-white uppercase tracking-tight">Official Lodge Registry Form</h2>
                      <p className="text-[#a5b4fc] text-xs mt-0.5">Please ensure all required tags indicated with * are filled truthfully</p>
                    </div>
                    <FileText className="w-6 h-6 text-orange-400 shrink-0 hidden sm:block" />
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6 sm:space-y-8">
                    
                    {/* SECTION 1: CITIZEN INFORMATION */}
                    <div>
                      <h3 className="text-xs uppercase font-extrabold text-[#ff6600] tracking-widest flex items-center gap-2 mb-4">
                        <span className="w-1.5 h-3 bg-[#ff6600] rounded-sm" /> Citizen Identity & Address Details
                      </h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
                        <div>
                          <label className="block text-xs font-extrabold text-[#003366] uppercase tracking-wider mb-2 whitespace-nowrap">Citizen Full Name <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                              <User className="w-4 h-4" />
                            </span>
                            <input
                              type="text"
                              required
                              name="fullName"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              placeholder="e.g. Biraj Swargiary"
                              className="w-full pl-9 pr-3 py-3 rounded-lg border-2 border-slate-300 text-slate-800 text-sm hover:border-[#003366]/40 focus:outline-none focus:ring-2 focus:ring-[#003366]/20 focus:border-[#003366] transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold text-[#003366] uppercase tracking-wider mb-2 whitespace-nowrap">Primary Mobile Number <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                              <Phone className="w-4 h-4" />
                            </span>
                            <input
                              type="tel"
                              required
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="e.g. 9876543210"
                              className="w-full pl-9 pr-3 py-3 rounded-lg border-2 border-slate-300 text-slate-800 text-sm hover:border-[#003366]/40 focus:outline-none focus:ring-2 focus:ring-[#003366]/20 focus:border-[#003366] transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold text-[#003366] uppercase tracking-wider mb-2 whitespace-nowrap">Email Address (Optional)</label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                              <Mail className="w-4 h-4" />
                            </span>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="e.g. name@domain.com"
                              className="w-full pl-9 pr-3 py-3 rounded-lg border-2 border-slate-300 text-slate-800 text-sm hover:border-[#003366]/40 focus:outline-none focus:ring-2 focus:ring-[#003366]/20 focus:border-[#003366] transition-all"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 2: JURISDICTION & CLASSIFICATION */}
                    <div className="pt-6 border-t border-slate-100">
                      <h3 className="text-xs uppercase font-extrabold text-[#ff6600] tracking-widest flex items-center gap-2 mb-4">
                        <span className="w-1.5 h-3 bg-[#ff6600] rounded-sm" /> Local Jurisdiction & Problem Classification
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 sm:gap-6">
                        <div className="md:col-span-3">
                          <label className="block text-xs font-extrabold text-[#003366] uppercase tracking-wider mb-2 whitespace-nowrap">Select District <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                              <MapPin className="w-4 h-4" />
                            </span>
                            <select
                              name="district"
                              value={formData.district}
                              onChange={handleInputChange}
                              className="w-full pl-9 pr-3 py-3 rounded-lg border-2 border-slate-300 text-slate-800 text-sm bg-white hover:border-[#003366]/40 focus:outline-none focus:ring-2 focus:ring-[#003366]/20 focus:border-[#003366] transition-all"
                            >
                              <option value="Kokrajhar">Kokrajhar</option>
                              <option value="Chirang">Chirang</option>
                              <option value="Udalguri">Udalguri</option>
                              <option value="Baksa">Baksa</option>
                              <option value="Tamulpur">Tamulpur</option>
                            </select>
                          </div>
                        </div>

                        <div className="md:col-span-4">
                          <label className="block text-xs font-extrabold text-[#003366] uppercase tracking-wider mb-2 whitespace-nowrap">Jurisdiction Local Body <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                              <Building2 className="w-4 h-4" />
                            </span>
                            <select
                              name="ulb"
                              value={formData.ulb}
                              onChange={handleInputChange}
                              className="w-full pl-9 pr-3 py-3 rounded-lg border-2 border-slate-300 text-slate-800 text-sm bg-white hover:border-[#003366]/40 focus:outline-none focus:ring-2 focus:ring-[#003366]/20 focus:border-[#003366] transition-all"
                            >
                              {districtUlbs[formData.district]?.map(u => (
                                <option key={u} value={u}>{u}</option>
                              ))}
                            </select>
                          </div>
                        </div>

                        <div className="md:col-span-5">
                          <label className="block text-xs font-extrabold text-[#003366] uppercase tracking-wider mb-2 whitespace-nowrap">Service Department Category <span className="text-red-500">*</span></label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                              <Tag className="w-4 h-4" />
                            </span>
                            <select
                              name="category"
                              value={formData.category}
                              onChange={handleInputChange}
                              className="w-full pl-9 pr-3 py-3 rounded-lg border-2 border-slate-300 text-slate-800 text-sm bg-white hover:border-[#003366]/40 focus:outline-none focus:ring-2 focus:ring-[#003366]/20 focus:border-[#003366] transition-all"
                            >
                              {categories.map(c => (
                                <option key={c} value={c}>{c}</option>
                              ))}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SECTION 3: GRIEVANCE PARTICULARS */}
                    <div className="pt-6 border-t border-slate-100">
                      <h3 className="text-xs uppercase font-extrabold text-[#ff6600] tracking-widest flex items-center gap-2 mb-4">
                        <span className="w-1.5 h-3 bg-[#ff6600] rounded-sm" /> Grievance Particulars
                      </h3>

                      <div className="space-y-5">
                        <div>
                          <label className="block text-xs font-extrabold text-[#003366] uppercase tracking-wider mb-2 whitespace-nowrap">Subject Header <span className="text-red-500">*</span></label>
                          <input
                            type="text"
                            required
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            placeholder="A concise, summary sentence of the issue"
                            className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 text-slate-800 text-sm hover:border-[#003366]/40 focus:outline-none focus:ring-2 focus:ring-[#003366]/20 focus:border-[#003366] transition-all font-medium"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-extrabold text-[#003366] uppercase tracking-wider mb-2 whitespace-nowrap">Detailed Narrative Statement <span className="text-red-500">*</span></label>
                          <textarea
                            required
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows={5}
                            placeholder="Provide a detailed narration explaining the issue (specific location, ward number, street name, duration of issue or impact)."
                            className="w-full px-4 py-3 rounded-lg border-2 border-slate-300 text-slate-800 text-sm hover:border-[#003366]/40 focus:outline-none focus:ring-2 focus:ring-[#003366]/20 focus:border-[#003366] transition-all font-medium leading-relaxed"
                          />
                        </div>
                        
                        {/* DRAG AND DROP FILE UPLOAD WRAPPER */}
                        <div>
                          <label className="block text-xs font-extrabold text-[#003366] uppercase tracking-wider mb-2">
                            Attach Evidentiary Photographic Image (Optional, Max 5MB)
                          </label>
                          
                          <div
                            onDragEnter={handleDrag}
                            onDragOver={handleDrag}
                            onDragLeave={handleDrag}
                            onDrop={handleDrop}
                            onClick={triggerFileSelect}
                            className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center ${
                              dragActive 
                                ? 'border-[#ff6600] bg-orange-50/50' 
                                : 'border-slate-300 hover:border-[#003366] bg-slate-50 hover:bg-white'
                            }`}
                          >
                            <input
                              type="file"
                              ref={fileInputRef}
                              onChange={handleFileChange}
                              className="hidden"
                              accept="image/*,.pdf"
                            />
                            
                            {attachment ? (
                              <div className="flex items-center gap-3 bg-white p-3 rounded-lg shadow-sm border-2 border-slate-300 relative group max-w-sm w-full font-medium text-left">
                                <FileText className="w-8 h-8 text-[#ff6600] minimize-shrink" />
                                <div className="min-w-0 flex-1">
                                  <p className="text-xs font-bold text-slate-800 truncate">{attachment.name}</p>
                                  <p className="text-[10px] text-slate-400 font-bold">{(attachment.size / (1024 * 1024)).toFixed(2)} MB</p>
                                </div>
                                <button
                                  type="button"
                                  onClick={(e) => { e.stopPropagation(); removeAttachment(); }}
                                  className="p-1 rounded-full bg-slate-100 hover:bg-red-100 text-slate-400 hover:text-red-500 transition-all focus:outline-none"
                                >
                                  <X className="w-4 h-4" />
                                </button>
                              </div>
                            ) : (
                              <>
                                <UploadCloud className="w-10 h-10 text-slate-400 mb-2 group-hover:scale-110 transition-transform" />
                                <p className="text-xs font-extrabold text-[#003366] uppercase tracking-wide">
                                  Drag & Drop Image or Click to Browse
                                </p>
                                <p className="text-[10px] text-slate-400 font-bold mt-1">supports JPG, PNG, maximum 5 MB limit</p>
                              </>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* SUBMIT TRIGGERS BUTTONS */}
                    <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center sm:justify-end gap-4">
                      <button
                        type="button"
                        onClick={resetForm}
                        className="w-full sm:w-auto px-6 py-3 rounded-lg text-xs tracking-wider uppercase font-bold text-slate-500 hover:bg-slate-50 transition-all h-12 flex items-center justify-center border border-transparent hover:border-slate-200"
                      >
                        Reset Form
                      </button>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto bg-gradient-to-r from-orange-500 to-[#f26522] hover:from-orange-600 hover:to-orange-700 text-white font-black text-xs tracking-widest uppercase px-12 py-4 rounded-lg shadow-md hover:shadow-lg transition-all h-12 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed group"
                      >
                        {isSubmitting ? (
                          <div className="flex items-center gap-2">
                            <span className="w-4 h-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
                            Lodging Record...
                          </div>
                        ) : (
                          <div className="flex items-center gap-1.5">
                            Submit Grievance
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        )}
                      </button>
                    </div>

                  </form>
                </div>
              )}
            </motion.div>
          ) : (
            /* TRACK STATUS PANEL */
            <motion.div
              key="track-panel"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              {/* SEARCH TRACKING INTERCEPTOR BAR */}
              <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8 border border-slate-100">
                <h3 className="text-xs uppercase font-extrabold text-slate-400 tracking-widest flex items-center gap-2 mb-4">
                  <span className="w-1.5 h-3 bg-[#003366] rounded-sm" /> Enter Reference Credentials
                </h3>
                
                <form onSubmit={handleTrackSearch} className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1 relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                      <FileText className="w-5 h-5" />
                    </span>
                    <input
                      type="text"
                      required
                      value={trackId}
                      onChange={(e) => setTrackId(e.target.value)}
                      placeholder="e.g. UDD-GR-2026-10254"
                      className="w-full pl-10 pr-4 py-3.5 sm:py-4 rounded-xl border border-slate-200 text-slate-800 font-mono text-sm sm:text-base tracking-tight focus:outline-none focus:ring-2 focus:ring-[#003366] focus:border-transparent transition-all shadow-inner"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="bg-[#003366] hover:bg-slate-900 text-white font-bold text-xs tracking-widest uppercase px-8 py-4 sm:py-0 rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 shrink-0 h-[48px] sm:h-[54px]"
                  >
                    <Search className="w-4 h-4 focus:outline-none" /> Track Case
                  </button>
                </form>
              </div>

              {/* DYNAMIC SEARCH RESULTS OR TIMELINE SPLIT */}
              <AnimatePresence mode="wait">
                {hasSearched && (
                  searchResult ? (
                    <motion.div
                      key="found-result"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden"
                    >
                      {/* HEADER SUMMARY SECTION */}
                      <div className="bg-slate-900 text-white py-5 px-6 sm:px-8 border-b-4 border-[#ff6600] flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[10px] uppercase font-bold text-orange-400 bg-orange-400/10 px-2.5 py-0.5 rounded border border-orange-400/20 tracking-wider">
                              OFFICIAL DISPATCH
                            </span>
                            <span className="text-xs text-slate-400">Date Logged: {searchResult.date}</span>
                          </div>
                          <h3 className="text-base sm:text-lg font-mono font-black text-white mt-1.5 tracking-tight">{searchResult.id}</h3>
                        </div>

                        {/* STATUS BADGES */}
                        <div className="flex items-center">
                          {searchResult.status === 'Resolved' && (
                            <span className="bg-emerald-500/10 text-emerald-400 font-extrabold uppercase text-xs tracking-widest py-1.5 px-4 rounded-full border border-emerald-500/20 flex items-center gap-1.5">
                              <CheckCircle2 className="w-4 h-4" /> Case Resolved
                            </span>
                          )}
                          {searchResult.status === 'In Progress' && (
                            <span className="bg-amber-500/10 text-amber-400 font-extrabold uppercase text-xs tracking-widest py-1.5 px-4 rounded-full border border-amber-500/20 flex items-center gap-1.5">
                              <Clock className="w-4 h-4 animate-spin" /> In Progress
                            </span>
                          )}
                          {searchResult.status === 'Initiated' && (
                            <span className="bg-blue-500/10 text-blue-400 font-extrabold uppercase text-xs tracking-widest py-1.5 px-4 rounded-full border border-blue-500/20 flex items-center gap-1.5 animate-pulse">
                              <Clock className="w-4 h-4" /> Registered
                            </span>
                          )}
                        </div>
                      </div>

                      {/* SUMMARY DETAIL PANEL */}
                      <div className="p-6 sm:p-8 space-y-6">
                        
                        {/* CASE PARSING */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/60 space-y-3">
                            <h4 className="text-xs font-black text-navy uppercase tracking-wider border-b border-slate-200/80 pb-2">Grievance Information</h4>
                            
                            <div className="grid grid-cols-3 gap-2">
                              <span className="text-slate-400 text-xs uppercase font-extrabold tracking-wider">Subject</span>
                              <span className="text-slate-800 font-bold col-span-2">{searchResult.subject}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 pt-2">
                              <span className="text-slate-400 text-xs uppercase font-extrabold tracking-wider">Category</span>
                              <span className="text-slate-800 font-bold col-span-2 text-xs">{searchResult.category}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 pt-2">
                              <span className="text-slate-400 text-xs uppercase font-extrabold tracking-wider">Details</span>
                              <p className="text-slate-600 font-medium col-span-2 text-xs leading-relaxed">{searchResult.description}</p>
                            </div>
                            {searchResult.attachmentName && (
                              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-200">
                                <span className="text-slate-400 text-xs uppercase font-extrabold tracking-wider">Attachment</span>
                                <span className="col-span-2 text-xs font-bold text-slate-800 flex items-center gap-1.5 select-all bg-white py-1 px-2 border border-slate-200 rounded">
                                  <FileText className="w-3.5 h-3.5 text-orange-500" /> {searchResult.attachmentName} ({searchResult.attachmentSize})
                                </span>
                              </div>
                            )}
                          </div>

                          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/60 space-y-3">
                            <h4 className="text-xs font-black text-navy uppercase tracking-wider border-b border-slate-200/80 pb-2">Lodgee & Jurisdiction</h4>
                            
                            <div className="grid grid-cols-3 gap-2">
                              <span className="text-slate-400 text-xs uppercase font-extrabold tracking-wider">Name</span>
                              <span className="text-slate-800 font-bold col-span-2">{searchResult.fullName}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-200/30">
                              <span className="text-slate-400 text-xs uppercase font-extrabold tracking-wider">Phone</span>
                              <span className="text-slate-800 font-bold col-span-2 font-mono">{searchResult.phone}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-200/30">
                              <span className="text-slate-400 text-xs uppercase font-extrabold tracking-wider">Email</span>
                              <span className="text-slate-800 font-medium col-span-2 select-all text-xs">{searchResult.email}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-200/30">
                              <span className="text-slate-400 text-xs uppercase font-extrabold tracking-wider">District</span>
                              <span className="text-slate-800 font-bold col-span-2">{searchResult.district}</span>
                            </div>
                            <div className="grid grid-cols-3 gap-2 pt-1 border-t border-slate-200/30">
                              <span className="text-slate-400 text-xs uppercase font-extrabold tracking-wider">Jurisdiction</span>
                              <span className="text-slate-800 font-extrabold col-span-2 text-xs text-[#ff6600]">{searchResult.ulb}</span>
                            </div>
                          </div>
                        </div>

                        {/* HIGH FIDELITY ACTION TIMELINE STEPPER */}
                        <div className="pt-8 border-t border-slate-100">
                          <h4 className="text-xs font-extrabold text-[#ff6600] tracking-widest uppercase mb-8 flex items-center gap-2">
                            <span className="w-1.5 h-3 bg-[#ff6600] rounded-sm" /> Audit Resolution Trail Timeline
                          </h4>

                          <div className="relative pl-6 sm:pl-8 border-l-2 border-dashed border-slate-200 space-y-10 max-w-2xl mx-auto">
                            {searchResult.timeline.map((log, lIdx) => {
                              const isFirst = lIdx === 0;
                              const isLast = lIdx === searchResult.timeline.length - 1;

                              return (
                                <div key={lIdx} className="relative">
                                  {/* Step Circle Pin */}
                                  <span className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full border-2 bg-white flex items-center justify-center ${
                                    isLast 
                                      ? searchResult.status === 'Resolved' 
                                        ? 'border-emerald-500 scale-125' 
                                        : 'border-amber-500 scale-125 shadow-[0_0_8px_rgba(245,158,11,0.5)]'
                                      : 'border-[#003366]'
                                  }`}>
                                    {isLast ? (
                                      searchResult.status === 'Resolved' ? (
                                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                                      ) : (
                                        <span className="w-1.5 h-1.5 bg-amber-500 rounded-full animate-ping" />
                                      )
                                    ) : (
                                      <span className="w-1.5 h-1.5 bg-[#003366] rounded-full" />
                                    )}
                                  </span>

                                  <div>
                                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3">
                                      <div className={`text-xs uppercase font-extrabold tracking-wide ${
                                        isLast 
                                          ? searchResult.status === 'Resolved' ? 'text-emerald-600' : 'text-amber-600'
                                          : 'text-[#003366]'
                                      }`}>
                                        {log.status}
                                      </div>
                                      <span className="text-[10px] font-mono text-slate-400 font-bold">{log.timestamp}</span>
                                    </div>
                                    <p className="mt-1 text-xs text-slate-600 font-medium leading-relaxed">{log.description}</p>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>

                      </div>
                    </motion.div>
                  ) : (
                    /* GRIEVANCE NOT FOUND EMPTY STATE */
                    <motion.div
                      key="not-found"
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      className="bg-white rounded-2xl border-2 border-red-500/10 p-8 text-center shadow-lg max-w-md mx-auto"
                    >
                      <div className="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 text-red-500">
                        <AlertTriangle className="w-6 h-6" />
                      </div>
                      <h4 className="text-base font-bold text-slate-800 uppercase tracking-tight">Docket Reference Not Found</h4>
                      <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                        The reference key <code className="bg-red-50 text-red-600 font-mono font-bold px-1 py-0.5 rounded text-xs truncate max-w-[200px] inline-block align-middle">{trackId}</code> is not registered on this gateway. Please check for spelling typos and match format exactly.
                      </p>
                    </motion.div>
                  )
                )}
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: Sidebar Stats & Information */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-[110px] self-start w-full">
            
            {/* Interactive Testing Note (Demo Assist Card) */}
            <div className="bg-blue-50 border-l-4 border-blue-500 rounded-2xl p-5 flex gap-3 shadow-sm border border-blue-100">
              <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="text-xs text-blue-800 space-y-2 w-full">
                <span className="font-extrabold text-[#003366] uppercase tracking-wide block">Interactive Testing Note</span>
                <p className="leading-relaxed">
                  You can test the tracking system instantly! Switch to <strong>Track Status</strong> and use one of these preconfigured sample IDs:
                </p>
                <div className="flex flex-col gap-2 mt-2 font-mono text-[11px] w-full">
                  <div className="flex items-center justify-between bg-white px-3 py-1.5 rounded-lg border border-blue-200/60 shadow-xs">
                    <span className="font-bold text-blue-950 select-all">UDD-GR-2026-10254</span>
                    <span className="text-[9px] uppercase font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">Resolved</span>
                  </div>
                  <div className="flex items-center justify-between bg-white px-3 py-1.5 rounded-lg border border-blue-200/60 shadow-xs">
                    <span className="font-bold text-blue-950 select-all">UDD-GR-2026-30248</span>
                    <span className="text-[9px] uppercase font-bold text-amber-600 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">In Progress</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Operation Stats Cards */}
            <div className="space-y-3">
              <span className="text-[10px] font-black uppercase text-slate-400 tracking-widest block pl-1">Key Portal Statistics</span>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                <div className="bg-white p-5 rounded-lg border-2 border-blue-400 shadow-sm flex flex-col justify-between">
                  <span className="text-[10px] md:text-xs font-black uppercase text-slate-400 tracking-wider">Total Submitted</span>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-2xl sm:text-3xl font-black text-[#003366]">2,482</span>
                    <span className="text-xs text-slate-400 font-bold">Complaints</span>
                  </div>
                  <div className="mt-2 text-[10px] text-slate-500 font-semibold flex items-center gap-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Across 4 Districts
                  </div>
                </div>

                <div className="bg-white p-5 rounded-lg border-2 border-emerald-400 shadow-sm flex flex-col justify-between">
                  <span className="text-[10px] md:text-xs font-black uppercase text-slate-400 tracking-wider">Grievances Resolved</span>
                  <div className="flex items-baseline gap-1 mt-2">
                    <span className="text-2xl sm:text-3xl font-black text-emerald-600">2,364</span>
                    <span className="text-xs text-emerald-500 font-bold">Resolved</span>
                  </div>
                  <div className="mt-2 text-[10px] text-slate-500 font-semibold flex items-center gap-1">
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500" /> Active redressal flow
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notice Section */}
            <div className="bg-amber-50/70 border-l-4 border-amber-500 rounded-2xl p-5 shadow-sm border border-amber-200/40">
              <div className="flex items-center gap-2.5 mb-4">
                <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0" />
                <h2 className="text-xs font-extrabold text-[#9a3412] uppercase tracking-wider">Important Notice</h2>
              </div>
              
              <div className="grid grid-cols-1 gap-4 text-slate-700">
                <div className="bg-white/60 p-4 rounded-xl border border-amber-200/45">
                  <h3 className="text-xs font-black text-amber-950 uppercase tracking-wide flex items-center gap-2 mb-2">
                    <Clock className="w-4.5 h-4.5 text-amber-600" /> Response Timeline
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    We aim to acknowledge your grievance within 24 hours and resolve it within 15 working days.
                  </p>
                </div>
                
                <div className="bg-white/60 p-4 rounded-xl border border-amber-200/45">
                  <h3 className="text-xs font-black text-amber-950 uppercase tracking-wide flex items-center gap-2 mb-2">
                    <Search className="w-4.5 h-4.5 text-amber-600" /> Track Your Grievance
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    You will receive a unique tracking ID via SMS and email. Use it to track the status of your grievance.
                  </p>
                </div>
                
                <div className="bg-white/60 p-4 rounded-xl border border-amber-200/45">
                  <h3 className="text-xs font-black text-amber-950 uppercase tracking-wide flex items-center gap-2 mb-2">
                    <ShieldCheck className="w-4.5 h-4.5 text-amber-600" /> Anonymous Grievances
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    While you can file anonymous grievances, providing contact details helps us serve you better.
                  </p>
                </div>
              </div>
            </div>

          </aside>

        </div>

      </main>

      <Footer />
    </div>
  );
}
