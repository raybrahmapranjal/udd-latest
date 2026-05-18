"use client";
import { MapPin } from 'lucide-react';

export default function OfficeLocation() {
  return (
    <section className="py-20 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-slate-800">Our Office Location</h2>
        <div className="w-full h-96 rounded-2xl bg-slate-200 border-2 border-slate-300 shadow-xl flex items-center justify-center relative overflow-hidden">
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
