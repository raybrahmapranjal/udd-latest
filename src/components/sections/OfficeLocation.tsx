"use client";
import { MapPin } from 'lucide-react';

export default function OfficeLocation() {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="w-24 h-24 rounded-full flex items-center justify-center relative mb-8 group">
            <div className="absolute inset-0 bg-orange-600/20 blur-2xl rounded-full opacity-40 group-hover:opacity-60 transition-opacity hidden md:block"></div>
            <div className="w-20 h-20 bg-gradient-to-br from-orange-600 to-red-600 rounded-full flex items-center justify-center border border-white/20 shadow-lg relative z-10 transition-transform group-hover:scale-110 shadow-[0_4px_12px_rgba(0,0,0,0.3)] md:shadow-[0_0_40px_rgba(234,88,12,0.5)]">
              <MapPin className="w-10 h-10 text-white" />
            </div>
            <div className="absolute inset-0 rounded-full shadow md:shadow-[0_0_50px_rgba(234,88,12,0.4)] animate-pulse -z-10"></div>
          </div>
          <div className="inline-block border-b-4 border-orange-500 pb-2 mb-4">
            <h2 className="text-4xl md:text-5xl font-bold text-navy uppercase tracking-tight">Our Reach</h2>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">Headquartered in Kokrajhar, we manage urban development across the entire BTC region.</p>
        </div>

        <div className="w-full h-[450px] rounded-lg bg-slate-200 border border-emerald-500/30 shadow-xl relative overflow-hidden">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3573.1250764309643!2d90.2783701!3d26.41944000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37588a9e2fb3f68f%3A0x270c51c94ec0f719!2sOffice%20of%20the%20CHD%2C%20Urban%20Development%20Office%20BTC!5e0!3m2!1sen!2sin!4v1779260508619!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 w-full h-full"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
