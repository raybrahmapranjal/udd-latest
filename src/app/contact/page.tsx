"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  Send,
  Briefcase,
  Award,
  ChevronRight,
  Clock,
  Sparkles,
  Home
} from 'lucide-react';
import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

export default function ContactPage() {
  const [isSending, setIsSending] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Official contact information cards
  const contactInfo = [
    {
      icon: MapPin,
      title: "Office Address",
      content: "Bodofa Nwgwr, Bodoland Territorial Council Secretariat, Kokrajhar, Assam",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Phone,
      title: "Phone Number",
      content: "8812825012",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Mail,
      title: "Email Address",
      content: "contact@uddbtr.org",
      color: "from-orange-500 to-orange-600"
    }
  ];

  // Official regional/department leadership contacts
  const departmentContacts = [
    {
      name: "Sri Lankeswar Owarie",
      designation: "CHD, Urban Development Department BTC, Kokrajhar"
    },
    {
      name: "Sri Biren Swargiary",
      designation: "Deputy Director, Town and Country Planning, Kokrajhar"
    },
    {
      name: "Sri Neepjyoti Das",
      designation: "Assistant Director, Town and Country Planning, Chirang"
    },
    {
      name: "Smt Trishna Gogoi",
      designation: "Assistant Director, Town and Country Planning, Baksa"
    },
    {
      name: "Sri Santanu Das",
      designation: "Assistant Director, Town and Country Planning, Udalguri"
    }
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);
    setSubmissionStatus('idle');
    setErrorMessage('');

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errData = await response.json();
        throw new Error(errData.error || 'Failed to send message');
      }

      setSubmissionStatus('success');
      e.currentTarget.reset();
    } catch (err: any) {
      setSubmissionStatus('error');
      setErrorMessage(err?.message || 'Failed to send message');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <div id="contact-root-container" className="min-h-screen bg-slate-50 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Header elements */}
      <div className="sticky top-0 z-[110] shadow-xs">
        <UtilityBar />
        <Header />
      </div>

      {/* Hero Header Section */}
      <section id="contact-hero-section" className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 text-white py-20 overflow-hidden text-center">
        {/* Dynamic decorative backdrop radial grid */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-400/20 via-transparent to-transparent z-0" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* USER SPECIFIED REQUIREMENT: Keep same breadcrumb style strictly as grievance page */}
          <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-400 font-bold mb-6 select-none bg-white/5 backdrop-blur-md px-4 py-2.5 rounded-xl border border-white/5 inline-flex">
            <Link href="/" className="hover:text-emerald-400 transition-colors uppercase tracking-wider">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500 shrink-0" />
            <span className="text-emerald-400 font-black uppercase tracking-wider">Contact Us</span>
          </div>

          <div className="text-center">
            {/* Top Mail bubble */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-gradient-to-br from-blue-400 to-indigo-600 shadow-2xl ring-4 ring-white/20 backdrop-blur-xs mb-6"
            >
              <Mail className="w-12 h-12 text-white" />
            </motion.div>
            
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-sm"
            >
              Contact Us
            </motion.h1>
            
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-lg md:text-xl text-blue-100 max-w-3xl mx-auto drop-shadow-xs font-normal"
            >
              Get in touch with us for any queries or assistance
            </motion.p>
          </div>
        </div>
      </section>

      {/* Main Grid Content Area */}
      <section id="contact-content-section" className="py-16 bg-gradient-to-br from-slate-50 to-slate-100 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Top 3 Info Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactInfo.map((info, idx) => {
              const InfoIcon = info.icon;
              return (
                <motion.div
                  key={info.title}
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx, duration: 0.5 }}
                  className="bg-gradient-to-br from-white to-blue-50/50 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-l-4 border-blue-500 overflow-hidden"
                >
                  <div className="p-8 text-center flex flex-col items-center">
                    {/* Glowing gradient circle wrapper for icons */}
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${info.color} flex items-center justify-center mb-5 shadow-lg shadow-blue-500/10`}>
                      <InfoIcon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-3">{info.title}</h3>
                    <p className="text-slate-705 text-sm sm:text-base font-semibold leading-relaxed">
                      {info.content}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Form Message and Department Contacts block layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Box: Send us a Message Card and Form */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-white to-green-50/20 rounded-2xl shadow-lg border-l-4 border-green-500 overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center gap-4 mb-6">
                  {/* Green glow container for mail/send */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center shadow-lg shadow-green-500/10 shrink-0">
                    <Send className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                    Send us a Message
                  </h2>
                </div>

                {/* Submission Success Box */}
                {submissionStatus === 'success' && (
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mb-6 p-4 bg-gradient-to-r from-green-50 to-green-100 text-green-800 rounded-xl border-l-4 border-green-500 flex items-center gap-3 shadow-sm border border-green-200/50"
                  >
                    <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center shrink-0 shadow-xs">
                      <Send className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Your message has been sent successfully!</p>
                      <p className="text-xs text-green-700 font-medium">We appreciate your feedback and will get back to you shortly.</p>
                    </div>
                  </motion.div>
                )}

                {/* Submission Failure Box */}
                {submissionStatus === 'error' && (
                  <motion.div 
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="mb-6 p-4 bg-gradient-to-r from-red-50 to-red-100 text-red-800 rounded-xl border-l-4 border-red-500 flex items-center gap-3 shadow-sm border border-red-200/50"
                  >
                    <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center shrink-0 shadow-xs">
                      <Mail className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <p className="text-sm font-bold">Failed to send message</p>
                      <p className="text-xs text-red-700 font-semibold">{errorMessage || "An unexpected error occurred. Please try again."}</p>
                    </div>
                  </motion.div>
                )}

                {/* Standard input form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Full Name input */}
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-bold text-slate-700 block">Full Name *</label>
                      <input 
                        id="name" 
                        name="name" 
                        type="text" 
                        placeholder="Enter your full name" 
                        required 
                        className="w-full h-11 px-4 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm font-semibold bg-white text-slate-850"
                      />
                    </div>

                    {/* Email address input */}
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-bold text-slate-700 block">Email *</label>
                      <input 
                        id="email" 
                        name="email" 
                        type="email" 
                        placeholder="your.email@example.com" 
                        required 
                        className="w-full h-11 px-4 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm font-semibold bg-white text-slate-850"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* Phone Number */}
                    <div className="space-y-2">
                      <label htmlFor="phone" className="text-sm font-bold text-slate-700 block">Phone Number</label>
                      <input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        placeholder="Enter your phone number" 
                        className="w-full h-11 px-4 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm font-semibold bg-white text-slate-850"
                      />
                    </div>

                    {/* Subject input */}
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-bold text-slate-700 block">Subject *</label>
                      <input 
                        id="subject" 
                        name="subject" 
                        type="text" 
                        placeholder="Brief subject" 
                        required 
                        className="w-full h-11 px-4 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm font-semibold bg-white text-slate-850"
                      />
                    </div>
                  </div>

                  {/* Message field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-bold text-slate-700 block">Message *</label>
                    <textarea 
                      id="message" 
                      name="message" 
                      placeholder="Write your message here..." 
                      rows={5} 
                      required 
                      className="w-full p-4 rounded-xl border border-slate-200 focus:outline-hidden focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all text-sm font-semibold bg-white text-slate-850 resize-y min-h-[120px]"
                    />
                  </div>

                  {/* Submit CTA button */}
                  <button
                    type="submit"
                    disabled={isSending}
                    className="w-full h-12 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-extrabold rounded-xl shadow-lg hover:shadow-2xl hover:scale-[1.01] active:scale-[0.99] transition-all disabled:opacity-50 disabled:pointer-events-none flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSending ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Right Side: Department leadership lists & Office Hours */}
            <div className="space-y-8">
              
              {/* Box A: Department Contacts Card */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-white to-purple-50/20 rounded-2xl shadow-lg border-l-4 border-purple-500 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/10 shrink-0">
                      <Briefcase className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                      Department Contacts
                    </h2>
                  </div>

                  {/* Leadership Contacts loop */}
                  <div className="space-y-4">
                    {departmentContacts.map((contact, idx) => (
                      <div 
                        key={idx}
                        className="p-4 bg-white/80 rounded-xl hover:shadow-md transition-all duration-305 border-l-4 border-purple-500 flex items-start gap-4 hover:-translate-y-0.5"
                      >
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center shrink-0 shadow-md">
                          <Building2 className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <h3 className="font-extrabold text-[#3c1e5a] text-sm sm:text-base">{contact.name}</h3>
                          <p className="text-slate-600 text-xs sm:text-sm font-semibold mt-0.5">
                            {contact.designation}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Box B: Office Hours Card */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-white to-blue-50/20 rounded-2xl shadow-lg border-l-4 border-blue-500 overflow-hidden"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg shadow-blue-500/10 shrink-0">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <h2 className="text-2xl font-extrabold text-slate-950 tracking-tight">
                      Office Hours
                    </h2>
                  </div>

                  {/* Scheduled Times details */}
                  <div className="space-y-3.5">
                    <div className="p-3.5 bg-slate-50/70 border border-slate-100 rounded-xl flex justify-between items-center text-sm font-semibold">
                      <span className="text-slate-900 font-bold">Monday - Friday:</span>
                      <span className="text-slate-700">10:00 AM - 5:00 PM</span>
                    </div>
                    <div className="p-3.5 bg-slate-50/70 border border-slate-100 rounded-xl flex justify-between items-center text-sm font-semibold">
                      <span className="text-slate-900 font-bold">Saturday:</span>
                      <span className="text-slate-700">10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="p-3.5 bg-rose-50/40 border border-rose-100/40 rounded-xl flex justify-between items-center text-sm font-semibold">
                      <span className="text-rose-955 font-bold">Sunday:</span>
                      <span className="text-rose-700 font-extrabold">Closed</span>
                    </div>

                    <div className="mt-4 p-4 bg-gradient-to-r from-amber-50 to-amber-100/70 border-l-4 border-amber-500 rounded-xl">
                      <p className="text-xs sm:text-sm text-amber-900 font-bold flex items-center gap-1.5">
                        <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                        *Excluding public holidays
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>

        </div>
      </section>

      {/* Footer element */}
      <Footer />
    </div>
  );
}
