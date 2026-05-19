"use client";
import { Phone, Mail, ArrowRight } from 'lucide-react';

export default function NeedAssistance() {
  return (
    <section className="py-24 px-6 bg-gradient-to-tr from-indigo-950 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center relative mb-8 group">
            <div className="absolute inset-0 bg-white/30 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(249,115,22,0.5)]">
              <Phone className="w-10 h-10 text-white" />
            </div>
            <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(255,255,255,0.2)] animate-pulse -z-10"></div>
          </div>
          <div className="inline-block border-b-4 border-orange-500 pb-2 mb-4">
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Need Assistance?</h2>
          </div>
          <p className="text-white/60 max-w-2xl mx-auto font-medium text-lg leading-relaxed">Our citizen support cell is available 24/7 to help you with your queries and concerns.</p>
        </div>

        <div className="text-center">                
          <div className="flex flex-col md:flex-row justify-center gap-6">
              <div className="flex items-center gap-4 text-xl bg-black/20 p-4 px-6 rounded-full border border-white/10">
                  <div className="bg-orange-600 p-3 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.6)]"><Phone className="w-6 h-6 text-white" /></div>
                  <span className="font-semibold text-2xl">8812825012</span>
              </div>
              <div className="flex items-center gap-4 text-xl bg-black/20 p-4 px-6 rounded-full border border-white/10">
                  <div className="bg-orange-600 p-3 rounded-full shadow-[0_0_20px_rgba(234,88,12,0.6)]"><Mail className="w-6 h-6 text-white" /></div>
                  <span className="font-semibold text-2xl">contact@uddbtr.org</span>
              </div>
          </div>
          
          <div className="flex justify-center mt-8">
              <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all flex items-center gap-2 shadow-lg shadow-orange-900/50">
                  Contact Us <ArrowRight className="w-5 h-5" />
              </button>
          </div>
        </div>
      </div>
    </section>
  );
}
