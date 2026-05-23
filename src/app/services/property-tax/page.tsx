"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building, 
  Droplet, 
  Trash2, 
  Clock, 
  Coins, 
  Globe, 
  FileText, 
  PhoneCall, 
  Mail, 
  Search, 
  CreditCard, 
  ChevronRight, 
  ShieldCheck, 
  AlertCircle,
  Download,
  Printer,
  FileCheck,
  CheckCircle2,
  HelpCircle,
  Building2,
  Calendar,
  ChevronDown,
  ChevronUp,
  X,
  Home,
  Check,
  ClipboardList,
  ArrowLeft
} from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Reusable Custom Checkmark Circle component styled after the Flaticon outline design (tick crosses circle with a precise gap at crossing points)
const CustomCircleCheck = ({ className = "w-6 h-6" }: { className?: string }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <defs>
        <mask id="pro-tick-mask">
          {/* Fully visible layout by default */}
          <rect x="-10" y="-10" width="44" height="44" fill="white" />
          {/* Cutout wider track around the tick path. 
              The thick black line creates a transparency gap on the masked circle under the path of the tick. */}
          <path
            d="M5.5 13 L9.5 17 L20 6.5"
            stroke="black"
            strokeWidth="5.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </mask>
      </defs>
      {/* Circle is drawn with the cutout mask applied */}
      <circle cx="11" cy="13" r="8" mask="url(#pro-tick-mask)" />
      {/* Standard tick drawn beautifully on top, appearing to cross with a professional gap flanking the line */}
      <path d="M5.5 13 L9.5 17 L20 6.5" />
    </svg>
  );
};

// Mock data for holdings query statuses
const MOCK_HOLDINGS_STATUS: Record<string, {
  ownerName: string;
  address: string;
  ulb: string;
  category: string;
  status: 'Tax Paid' | 'Pending Assessment' | 'Under Review' | 'Overdue';
  amountDue: number;
  lastPaymentDate?: string;
  referenceNo: string;
}> = {
  "BTC/PROP/2026-901": {
    ownerName: "Swgwmswr Brahma",
    address: "Ward No. 3, Kokrajhar Town, Near Science Park",
    ulb: "Kokrajhar Municipal Board",
    category: "Residential (Self-occupied)",
    status: "Tax Paid",
    amountDue: 0,
    lastPaymentDate: "2026-05-10",
    referenceNo: "TXN-BTR-8812-901"
  },
  "BTC/PROP/2026-902": {
    ownerName: "Anjali Basumatary",
    address: "Gossaigaon Ward 5, Main Road Crossing",
    ulb: "Gossaigaon Municipal Board",
    category: "Residential (Rented)",
    status: "Overdue",
    amountDue: 14400,
    referenceNo: "TXN-BTR-8812-902"
  },
  "BTC/PROP/2026-903": {
    ownerName: "Bodo Commercial Ventures Ltd",
    address: "Boro Bazar, Commercial Block B",
    ulb: "Kokrajhar Municipal Board",
    category: "Commercial",
    status: "Under Review",
    amountDue: 48000,
    referenceNo: "TXN-BTR-8812-903"
  }
};

export default function PropertyTaxPage() {
  // Modal toggle states
  const [isAvailModalOpen, setIsAvailModalOpen] = useState(false);
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false);
  
  // Submit actions states
  const [availForm, setAvailForm] = useState({
    fullName: '',
    mobile: '',
    email: '',
    ulb: 'Kokrajhar Municipal Board',
    holdingNo: '',
    message: ''
  });
  const [availSuccess, setAvailSuccess] = useState(false);
  const [availRefNo, setAvailRefNo] = useState('');

  const [statusQuery, setStatusQuery] = useState('');
  const [statusResult, setStatusResult] = useState<typeof MOCK_HOLDINGS_STATUS[string] | null>(null);
  const [statusSearched, setStatusSearched] = useState(false);

  // FAQ interactive state
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "What if I don't know my holding number?",
      a: "You can find your holding number on previous tax receipts or contact your ULB office with your property address. You can also use the \"Find Holding Number\" feature on the portal by entering your property address."
    },
    {
      q: "Can I pay property tax for multiple years?",
      a: "Yes, you can pay arrears for previous years along with the current year's tax. The system will automatically calculate any applicable penalties for late payment."
    },
    {
      q: "What payment modes are accepted?",
      a: "We accept Net Banking, Debit/Credit Cards (Visa, Mastercard, RuPay), UPI payments, and major digital wallets. Offline payments can be made at ULB offices through cash or cheque."
    },
    {
      q: "How do I get a rebate on early payment?",
      a: "A 5% rebate is automatically applied if you pay your property tax before 30th September of the financial year. The rebate will be reflected in your tax calculation on the payment portal."
    }
  ];

  const handleAvailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mockRef = `PROP-${Math.floor(1000 + Math.random() * 9000)}-${Math.floor(100000 + Math.random() * 900000)}`;
    setAvailRefNo(mockRef);
    setAvailSuccess(true);
  };

  const handleStatusSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanKey = statusQuery.trim().toUpperCase();
    setStatusSearched(true);
    if (MOCK_HOLDINGS_STATUS[cleanKey]) {
      setStatusResult(MOCK_HOLDINGS_STATUS[cleanKey]);
    } else {
      setStatusResult(null);
    }
  };

  const resetAvailForm = () => {
    setAvailForm({
      fullName: '',
      mobile: '',
      email: '',
      ulb: 'Kokrajhar Municipal Board',
      holdingNo: '',
      message: ''
    });
    setAvailSuccess(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900 selection:bg-emerald-500 selection:text-white">
      {/* Universal header bars */}
      <div className="sticky top-0 z-[110] shadow-sm">
        <UtilityBar />
        <Header />
      </div>

      {/* Breadcrumb Section with clean styling matching screenshot */}
      <div id="orange-breadcrumb-section" className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5">
          <div className="flex items-center gap-2.5 text-sm sm:text-base text-slate-650 font-medium">
            <Link id="breadcrumb-home" href="/" className="text-slate-500 hover:text-blue-600 transition-colors font-semibold">Home</Link>
            <span className="text-slate-300">/</span>
            <Link id="breadcrumb-services" href="/services" className="text-slate-500 hover:text-blue-600 transition-colors font-semibold">Services</Link>
            <span className="text-slate-300">/</span>
            <span id="breadcrumb-current" className="text-slate-800 font-bold">Property Tax Payment</span>
          </div>
        </div>
      </div>

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        {/* Dynamic Double-Grid Structure */}
        <div id="property-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT SECTION (Col Span 8): The structured official document cards */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            
            {/* 1. Service Overview Card */}
            <div id="card-service-overview" className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
              <div className="flex items-start gap-5">
                {/* Larger Blue Icon Box with Home inside */}
                <div className="w-12 h-12 rounded-lg bg-[#2563EB] flex items-center justify-center shrink-0 shadow-sm">
                  <Home className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-gray-900 leading-tight">
                    Property Tax Payment
                  </h1>
                  
                  {/* Metadata line inline block with increased font sizes and icon sizes */}
                  <div className="flex flex-wrap items-center gap-x-6 gap-y-1.5 mt-2.5 text-sm font-semibold text-slate-500">
                    <span className="flex items-center gap-2">
                      <Clock className="w-5 h-5 text-purple-600 animate-pulse shrink-0" />
                      <span>Processing:</span>
                      <span className="font-bold text-slate-700">Instant</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="text-emerald-600 font-extrabold text-lg shrink-0 w-5 h-5 flex items-center justify-center">₹</span>
                      <span>Fee:</span>
                      <span className="font-bold text-slate-700">As per assessment</span>
                    </span>
                    <span className="flex items-center gap-2">
                      <Globe className="w-5 h-5 text-blue-600 shrink-0" />
                      <span>Online & Offline</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Service Overview Sub-section with increased heading & description font sizes */}
              <div className="mt-8 pt-6 border-t border-slate-100">
                <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2.5 mb-4">
                  <FileText className="w-6 h-6 text-blue-600 shrink-0" />
                  <span>Service Overview</span>
                </h3>
                <div className="text-sm sm:text-base text-slate-600 leading-relaxed space-y-4 font-normal">
                  <p>
                    Property tax is a mandatory annual tax levied by Urban Local Bodies (ULBs) on all property owners within municipal boundaries. The tax revenue is utilized for providing civic amenities such as water supply, street lighting, waste management, road maintenance, and other essential urban services.
                  </p>
                  <p>
                    Property owners can now pay their property tax online through our integrated digital payment gateway, making the process convenient, transparent, and hassle-free. The system supports multiple payment modes and provides instant payment receipts.
                  </p>
                </div>
              </div>

              {/* Payment Deadline block with increased text sizes */}
              <div className="mt-8 border-l-4 border-blue-600 bg-blue-50/50 p-6 rounded-lg space-y-1.5">
                <h4 className="text-[#1E40AF] font-bold text-base sm:text-lg">Payment Deadline</h4>
                <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-normal">
                  Property tax must be paid annually by 31st March. Early payment (before 30th September) attracts a 5% rebate. Late payment after 31st March attracts a penalty of 2% per month.
                </p>
              </div>
            </div>

            {/* 2. Application Process Card */}
            <div id="card-application-process" className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3.5 mb-6 pb-3.5 border-b border-slate-100">
                <CustomCircleCheck className="w-7 h-7 text-[#8B5CF6] shrink-0" />
                <span>Application Process</span>
              </h3>

              <div className="relative space-y-8 before:content-[''] before:absolute before:left-4 before:top-4 before:bottom-4 before:w-[2px] before:bg-slate-200">
                {[
                  {
                    num: "1",
                    title: "Visit the Portal",
                    desc: "Access the online property tax payment portal through the UDD BTR website or your respective ULB portal."
                  },
                  {
                    num: "2",
                    title: "Enter Holding Number",
                    desc: "Enter your property holding number to retrieve your property details and tax assessment."
                  },
                  {
                    num: "3",
                    title: "Verify Details",
                    desc: "Review your property information, owner details, and tax calculation. Report any discrepancies to your ULB."
                  },
                  {
                    num: "4",
                    title: "Select Payment Mode",
                    desc: "Choose your preferred payment method: Net Banking, Debit/Credit Card, UPI, or Digital Wallets."
                  }
                ].map((step, idx) => (
                  <div key={idx} className="relative pl-12">
                    <span className="absolute left-4 -translate-x-1/2 top-1 w-8 h-8 rounded-full bg-[#8B5CF6] text-white flex items-center justify-center font-bold text-sm sm:text-base select-none shadow-xs">
                      {step.num}
                    </span>
                    <div className="space-y-1">
                      <h4 className="font-bold text-gray-950 text-base sm:text-lg leading-snug">
                        {step.title}
                      </h4>
                      <p className="text-slate-600 font-normal text-sm sm:text-base leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Required Documents Card */}
            <div id="card-required-documents-main" className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3.5 mb-4 pb-3.5 border-b border-slate-100">
                <FileText className="w-7 h-7 text-blue-600 shrink-0" />
                <span>Required Documents</span>
              </h3>
              <ul className="divide-y divide-slate-100">
                {[
                  "Property Holding Number (issued by ULB)",
                  "Property Assessment Certificate",
                  "Previous year's tax payment receipt (if applicable)",
                  "Owner's identity proof (Aadhaar/Voter ID/PAN)",
                  "Property ownership documents (for first-time payment)"
                ].map((doc, idx) => (
                  <li key={idx} className="py-3.5 flex items-start gap-4 text-sm sm:text-base text-slate-700 font-semibold">
                    <FileText className="w-5.5 h-5.5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{doc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 4. Eligibility Criteria Card */}
            <div id="card-eligibility-criteria-main" className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3.5 mb-5 pb-3.5 border-b border-slate-100">
                <CustomCircleCheck className="w-7 h-7 text-emerald-600 shrink-0" />
                <span>Eligibility Criteria</span>
              </h3>
              <ul className="space-y-4">
                {[
                  "All property owners within ULB jurisdiction",
                  "Residential, commercial, and industrial property owners",
                  "Property must have a valid holding number",
                  "Property assessment must be completed"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-sm sm:text-base text-slate-700 font-semibold">
                    <CustomCircleCheck className="w-5.5 h-5.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 5. Fee Structure Card */}
            <div id="card-fee-structure-main" className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-sm">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 flex items-center gap-3.5 mb-5 pb-3.5 border-b border-slate-100">
                <span className="text-emerald-600 font-black text-2xl shrink-0 w-7 h-7 flex items-center justify-center">₹</span>
                <span>Fee Structure</span>
              </h3>
              <div className="overflow-x-auto border border-slate-100 rounded-lg bg-[#F8FAFC]/55">
                <table className="min-w-full text-left border-collapse text-xs sm:text-sm">
                  <thead>
                    <tr className="bg-slate-50 border-b border-slate-150 font-bold text-slate-900 text-sm sm:text-base">
                      <th className="p-4 sm:p-4.5">Category</th>
                      <th className="p-4 sm:p-4.5">Fee</th>
                      <th className="p-4 sm:p-4.5">Additional Charges</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-150 font-semibold text-slate-705 bg-white text-sm sm:text-base">
                    {[
                      { category: "Residential (Self-occupied)", fee: "12% of ARV", extra: "Water tax, Lighting tax" },
                      { category: "Residential (Rented)", fee: "15% of ARV", extra: "Water tax, Lighting tax" },
                      { category: "Commercial", fee: "20% of ARV", extra: "Water tax, Lighting tax, Conservancy tax" },
                      { category: "Industrial", fee: "25% of ARV", extra: "Water tax, Lighting tax, Conservancy tax" }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="p-4 sm:p-4.5 text-slate-950 font-bold">{row.category}</td>
                        <td className="p-4 sm:p-4.5 text-slate-900 font-bold whitespace-nowrap">{row.fee}</td>
                        <td className="p-4 sm:p-4.5 text-slate-500 font-normal">{row.extra}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* 6. Frequently Asked Questions accordion */}
            <div id="section-frequently-asked-questions" className="bg-white border border-slate-200 rounded-lg p-6 sm:p-8 shadow-md">
              <div className="flex items-center gap-3.5 mb-6">
                <ClipboardList className="w-7 h-7 text-[#F97316] shrink-0" />
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 leading-tight">
                  Frequently Asked Questions
                </h3>
              </div>

              <div id="faq-accordion-group" className="flex flex-col gap-3">
                {faqs.map((faq, idx) => {
                  const isOpen = openFaq === idx;
                  return (
                    <div 
                      key={idx} 
                      className="bg-[#F8FAFC] border border-slate-200 rounded-lg overflow-hidden shadow-xs transition-all"
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? null : idx)}
                        className="w-full text-left p-4.5 sm:p-5 font-bold text-sm sm:text-base text-slate-905 flex justify-between items-center gap-4 hover:bg-slate-50/60 transition-colors cursor-pointer"
                      >
                        <span className="font-bold text-[#0F172A]">{faq.q}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-slate-500 shrink-0" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-slate-500 shrink-0" />
                        )}
                      </button>

                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="p-5 pt-0 border-t border-slate-100 text-sm sm:text-base text-slate-600 leading-relaxed font-normal bg-white">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT SECTION (Col Span 4): Structured Sidebar components */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Action 1: Quick Actions Card */}
            <div id="card-quick-actions" className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm space-y-4">
              <h4 className="font-bold text-gray-900 text-lg sm:text-xl border-b border-slate-100 pb-2.5">
                Quick Actions
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href="https://service.assamurban.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#2563EB] hover:bg-blue-700 text-white font-bold text-sm sm:text-base rounded-lg py-3.5 px-5 w-full flex items-center justify-center gap-2.5 cursor-pointer transition-all shadow-sm"
                >
                  <CreditCard className="w-5 h-5 text-white" />
                  <span>Avail Service</span>
                </a>
                <a
                  href="https://service.assamurban.in/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white hover:bg-slate-50 border border-slate-200 text-slate-800 font-bold text-sm sm:text-base rounded-lg py-3.5 px-5 w-full flex items-center justify-center gap-2.5 cursor-pointer transition-all shadow-xs"
                >
                  <Search className="w-5 h-5 text-slate-500" />
                  <span>Check Status</span>
                </a>
              </div>
            </div>

            {/* Action 2: Contact Support Card */}
            <div id="card-contact-support" className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm space-y-5">
              <h4 className="font-bold text-gray-900 text-lg sm:text-xl border-b border-slate-100 pb-2.5">
                Contact Support
              </h4>
              <div className="space-y-4 text-sm sm:text-base font-semibold font-medium">
                <div className="flex gap-4 items-start">
                  <PhoneCall className="w-6 h-6 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs sm:text-sm text-slate-500 block leading-none mb-1.5 font-bold">Helpline</span>
                    <a href="tel:8812825012" className="text-slate-800 font-extrabold hover:underline">8812825012</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Mail className="w-6 h-6 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs sm:text-sm text-slate-500 block leading-none mb-1.5 font-bold">Email</span>
                    <a href="mailto:propertytax@uddbtr.org" className="text-slate-800 font-extrabold hover:underline">propertytax@uddbtr.org</a>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <Clock className="w-6 h-6 text-[#2563EB] shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs sm:text-sm text-slate-500 block leading-none mb-1.5 font-bold">Office Hours</span>
                    <span className="text-slate-850 font-extrabold">Mon-Fri: 10 AM - 5 PM</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action 3: Related Services Card (Replicating exact layout from Screenshot 1) */}
            <div id="card-related-services" className="bg-white border border-slate-200 rounded-lg p-6 shadow-sm space-y-4">
              <h4 className="font-bold text-gray-900 text-lg sm:text-xl border-b border-slate-100 pb-2.5">
                Related Services
              </h4>
              <div className="flex flex-col gap-3">
                {[
                  { name: "Trade License", href: "/services/trade-license" },
                  { name: "Water Connection", href: "/services/water-supply" },
                  { name: "Building Plan Approval", href: "/services/building-permission" }
                ].map((srv, idx) => (
                  <Link 
                    key={idx} 
                    href={srv.href}
                    className="group bg-[#F8FAFC] hover:bg-slate-100 p-4 rounded-lg transition-all flex items-center gap-3.5 w-full"
                  >
                    <FileText className="w-6 h-6 text-[#2563EB] align-middle shrink-0 animate-pulse" />
                    <span className="text-slate-905 font-bold text-base sm:text-lg group-hover:text-blue-700 transition-colors">
                      {srv.name}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Back to All Services Button at the bottom */}
        <div className="mt-12 flex justify-center border-t border-slate-200 pt-8">
          <Link 
            id="back-to-services-btn"
            href="/services" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-slate-300 rounded-xl text-slate-700 font-extrabold text-sm hover:bg-slate-50 transition-all shadow-sm group"
          >
            <ArrowLeft className="w-4 h-4 text-[#F97316] transition-transform group-hover:-translate-x-1" />
            <span>Back to All Services</span>
          </Link>
        </div>

      </main>

      <Footer />

      {/* --- AVAIL SERVICE DIALOG MODAL --- */}
      <AnimatePresence>
        {isAvailModalOpen && (
          <div className="fixed inset-0 z-[150] overflow-y-auto flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsAvailModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Content main box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-lg shadow-2xl relative z-10 border border-slate-100 overflow-hidden"
            >
              <div className="bg-[#003366] text-white p-6 relative">
                <button
                  type="button"
                  onClick={() => setIsAvailModalOpen(false)}
                  className="absolute right-5 top-5 text-white/70 hover:text-white bg-white/10 p-1.5 rounded-full hover:bg-white/20 transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2.5">
                  <CreditCard className="w-6 h-6 text-emerald-300" />
                  <div>
                    <h3 className="text-lg font-extrabold font-serif">Apply for Property Assessment</h3>
                    <p className="text-xs text-slate-300 font-medium">Urban Local Body Property Registry System</p>
                  </div>
                </div>
              </div>

              {!availSuccess ? (
                <form onSubmit={handleAvailSubmit} className="p-6 space-y-4">
                  <p className="text-xs text-slate-500 font-bold leading-relaxed">
                    Please submit your coordinates/information. A municipal taxation coordinator will register your query and contact you with the official assessment schedule.
                  </p>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="text-[10px] uppercase font-extrabold text-slate-500 block mb-1">Owner Full Name *</label>
                      <input 
                        type="text"
                        required
                        value={availForm.fullName}
                        onChange={(e) => setAvailForm({ ...availForm, fullName: e.target.value })}
                        placeholder="e.g. Swgwmswr Brahma"
                        className="w-full bg-slate-5 font-bold border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#003366]/20"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] uppercase font-extrabold text-slate-500 block mb-1">Registered Mobile *</label>
                        <input 
                          type="tel"
                          required
                          value={availForm.mobile}
                          onChange={(e) => setAvailForm({ ...availForm, mobile: e.target.value })}
                          placeholder="e.g. 8812825012"
                          className="w-full bg-slate-5 font-bold border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#003366]/20"
                        />
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-extrabold text-slate-500 block mb-1">Email Address *</label>
                        <input 
                          type="email"
                          required
                          value={availForm.email}
                          onChange={(e) => setAvailForm({ ...availForm, email: e.target.value })}
                          placeholder="e.g. owner@uddbtr.org"
                          className="w-full bg-slate-5 font-bold border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#003366]/20"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-[10px] uppercase font-extrabold text-slate-500 block mb-1">Select Municipal Unit *</label>
                        <select 
                          value={availForm.ulb}
                          onChange={(e) => setAvailForm({ ...availForm, ulb: e.target.value })}
                          className="w-full bg-slate-5 font-bold border border-slate-300 rounded-xl px-3 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#003366]/20"
                        >
                          <option>Kokrajhar Municipal Board</option>
                          <option>Gossaigaon Municipal Board</option>
                          <option>Bijni Municipal Board</option>
                          <option>Tangla Municipal Board</option>
                          <option>Basugaon Municipal Board</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-[10px] uppercase font-extrabold text-slate-500 block mb-1">Existing Holding (Optional)</label>
                        <input 
                          type="text"
                          value={availForm.holdingNo}
                          onChange={(e) => setAvailForm({ ...availForm, holdingNo: e.target.value })}
                          placeholder="e.g. BTC/PROP/901"
                          className="w-full bg-slate-5 font-bold border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#003366]/20 uppercase"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-[10px] uppercase font-extrabold text-slate-500 block mb-1">Location Address & Landmark Description</label>
                      <textarea
                        rows={2}
                        value={availForm.message}
                        onChange={(e) => setAvailForm({ ...availForm, message: e.target.value })}
                        placeholder="Specify lane, ward, or shop number..."
                        className="w-full bg-slate-5 font-bold border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#003366]/20 resize-none"
                      />
                    </div>
                  </div>

                  <div className="pt-2 flex gap-3">
                    <button
                      type="button"
                      onClick={() => setIsAvailModalOpen(false)}
                      className="flex-1 border-2 border-slate-200 hover:bg-slate-50 text-slate-700 font-extrabold rounded-xl py-3 text-xs uppercase cursor-pointer"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 bg-emerald-600 hover:bg-emerald-750 text-white font-extrabold rounded-xl py-3 text-xs uppercase cursor-pointer flex items-center justify-center gap-1.5 shadow-md"
                    >
                      <FileCheck className="w-4 h-4" />
                      <span>Submit Application</span>
                    </button>
                  </div>
                </form>
              ) : (
                <div className="p-6 text-center space-y-5">
                  <div className="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto shadow-sm">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <div className="space-y-1.5">
                    <h4 className="font-extrabold text-slate-900 text-base">Application Submitted Successfully!</h4>
                    <p className="text-xs text-slate-500 font-bold leading-normal max-w-sm mx-auto">
                      Your files have been filed at the <strong>{availForm.ulb}</strong> digital desk pipeline.
                    </p>
                  </div>

                  <div className="bg-slate-50 border rounded-xl p-4 space-y-2 text-left text-xs font-semibold text-slate-650">
                    <div className="flex justify-between border-b pb-1">
                      <span>Inquiry Reference</span>
                      <span className="font-mono font-black text-slate-900">{availRefNo}</span>
                    </div>
                    <div className="flex justify-between border-b pb-1">
                      <span>Applicant Name</span>
                      <span className="text-slate-800 font-extrabold">{availForm.fullName}</span>
                    </div>
                    <div className="flex justify-between border-b pb-1">
                      <span>Assigned Unit</span>
                      <span className="text-slate-800 font-extrabold">{availForm.ulb}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Liaison SLA Time</span>
                      <span className="text-blue-800 font-black">Within 3 Working Days</span>
                    </div>
                  </div>

                  <div className="flex gap-2.5 pt-2">
                    <button
                      type="button"
                      onClick={() => {
                        alert("Assessment Self-Declaration Registration Kit downloaded successfully! Check your browser files.");
                      }}
                      className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <Download className="w-4 h-4 text-white" />
                      <span>Registration Kit</span>
                    </button>
                    <button
                      type="button"
                      onClick={resetAvailForm}
                      className="flex-1 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-black uppercase tracking-wider py-3 rounded-xl transition-all"
                    >
                      File Another
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* --- CHECK STATUS DIALOG MODAL --- */}
      <AnimatePresence>
        {isStatusModalOpen && (
          <div className="fixed inset-0 z-[150] overflow-y-auto flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsStatusModalOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            />

            {/* Content main box */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-3xl w-full max-w-lg shadow-2xl relative z-10 border border-slate-100 overflow-hidden"
            >
              <div className="bg-[#003366] text-white p-6 relative">
                <button
                  type="button"
                  onClick={() => setIsStatusModalOpen(false)}
                  className="absolute right-5 top-5 text-white/70 hover:text-white bg-white/10 p-1.5 rounded-full hover:bg-white/20 transition-all cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="flex items-center gap-2.5">
                  <Search className="w-6 h-6 text-emerald-300" />
                  <div>
                    <h3 className="text-lg font-extrabold font-serif">Check Holding Status</h3>
                    <p className="text-xs text-slate-300 font-medium">BTR Unified Municipal Status Tracker</p>
                  </div>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <form onSubmit={handleStatusSearch} className="space-y-2 text-xs">
                  <label className="text-[10px] uppercase font-extrabold text-slate-500 block">Property Holding No / Reference ID</label>
                  <div className="flex gap-2.5">
                    <input 
                      type="text"
                      required
                      value={statusQuery}
                      onChange={(e) => setStatusQuery(e.target.value)}
                      placeholder="e.g. BTC/PROP/2026-901"
                      className="flex-1 bg-slate-5 font-bold border border-slate-300 rounded-xl px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#003366]/20 uppercase"
                    />
                    <button
                      type="submit"
                      className="bg-[#003366] hover:bg-[#002244] text-white font-extrabold uppercase px-5 rounded-xl cursor-pointer text-xs"
                    >
                      TRACK
                    </button>
                  </div>
                  <span className="text-[10px] text-slate-400 font-semibold block italic mt-1">
                    Try valid holding status sample codes: BTC/PROP/2026-901 or BTC/PROP/2026-902 or BTC/PROP/2026-903
                  </span>
                </form>

                {statusSearched && (
                  <div className="border-t pt-4">
                    {statusResult ? (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <span className="text-[10px] font-black uppercase bg-emerald-100 text-emerald-800 border border-emerald-300 px-2 py-0.5 rounded">
                            RECORD FOUND
                          </span>
                          <span className="font-mono text-xs font-black text-slate-500">{statusQuery.toUpperCase()}</span>
                        </div>

                        <div className="bg-slate-50 p-4 border rounded-xl space-y-2.5 text-xs font-semibold text-slate-600">
                          <div className="flex justify-between border-b pb-1">
                            <span>Owner Assigned</span>
                            <span className="text-slate-800 font-extrabold">{statusResult.ownerName}</span>
                          </div>
                          <div className="flex justify-between border-b pb-1">
                            <span>Municipal Unit</span>
                            <span className="text-slate-800 font-extrabold">{statusResult.ulb}</span>
                          </div>
                          <div className="flex justify-between border-b pb-1">
                            <span>Structure Group</span>
                            <span className="text-slate-800 font-extrabold">{statusResult.category}</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Status</span>
                            <span className={`font-black ${
                              statusResult.status === 'Tax Paid' ? 'text-emerald-700' :
                              statusResult.status === 'Overdue' ? 'text-rose-600' : 'text-amber-600'
                            }`}>
                              {statusResult.status.toUpperCase()}
                            </span>
                          </div>
                        </div>

                        {statusResult.status === 'Tax Paid' && (
                          <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-300/30 text-emerald-850 text-xs font-bold leading-normal">
                            Receipt finalized on {statusResult.lastPaymentDate}. Certified digital copies have been issued securely.
                          </div>
                        )}

                        {statusResult.status === 'Overdue' && (
                          <div className="p-3 bg-rose-50 rounded-xl border border-rose-300/30 text-rose-850 text-xs font-bold leading-normal">
                            Dues total: <strong>Rs. {statusResult.amountDue.toLocaleString('en-IN')}.00</strong> pending clearance. Please contact helpdesk or visit municipal counter early to avoid interest spikes.
                          </div>
                        )}

                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              alert(`Certified Municipal Records and Status PDF compiled successfully!\nReference: ${statusResult.referenceNo}`);
                            }}
                            className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-black uppercase tracking-wider py-3 rounded-xl transition-all flex items-center justify-center gap-1.5 shadow-sm"
                          >
                            <Download className="w-4 h-4 text-white" />
                            <span>Download Receipt</span>
                          </button>
                          <button
                            type="button"
                            onClick={() => {
                              window.print();
                            }}
                            className="flex-1 bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-black uppercase tracking-wider py-3 rounded-xl transition-all flex items-center justify-center gap-1.5"
                          >
                            <Printer className="w-4 h-4 text-slate-500" />
                            <span>Print Record</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4.5 bg-rose-50 border border-rose-200 text-rose-800 text-center rounded-2xl text-xs font-extrabold flex flex-col items-center gap-2">
                        <AlertCircle className="w-6 h-6 text-rose-600 animate-pulse" />
                        <div>
                          <p>Record not found for &quot;{statusQuery}&quot;</p>
                          <p className="text-[11px] text-rose-500 font-semibold mt-0.5">Please check accuracy or avail holding self-assessments.</p>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

