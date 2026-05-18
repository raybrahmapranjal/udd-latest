"use client";
import { Phone, Mail, ArrowRight } from 'lucide-react';

export default function NeedAssistance() {
  return (
    <section className="py-24 px-6 bg-gradient-to-tr from-indigo-950 via-blue-800 to-indigo-900 text-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Need Assistance?</h2>                
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
