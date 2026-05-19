"use client";
import { MapPin } from 'lucide-react';

export default function OfficeLocation() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center relative mb-8 group">
            <div className="absolute inset-0 bg-orange-600/40 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(234,88,12,0.5)]">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(234,88,12,0.4)] animate-pulse -z-10"></div>
          </div>
          <div className="inline-block border-b-4 border-orange-500 pb-2 mb-4">
            <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tight">Our Reach</h2>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">Headquartered in Kokrajhar, we manage urban development across the entire BTR region.</p>
        </div>

        <div className="w-full h-96 rounded-lg bg-slate-200 border-2 border-slate-300 shadow-xl flex items-center justify-center relative overflow-hidden">
             <div className="absolute inset-0 bg-[url('https://maps.googleapis.com/maps/api/staticmap?center=Kokrajhar,BTR&zoom=12&size=600x400&key=YOUR_API_KEY')] bg-cover opacity-80"></div>
             <div className="relative z-10 text-slate-700 text-xl font-bold flex items-center gap-2">
                <MapPin className="w-8 h-8 text-orange-600" />
                Office Location Map
             </div>
        </div>
      </div>
    </section>
  );
}
