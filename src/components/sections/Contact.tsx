import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-32 bg-navy text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
           <span className="text-saffron font-bold text-xs uppercase tracking-[5px] block mb-4">Get In Touch</span>
           <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight flex items-center gap-4">
              <Mail className="w-10 h-10 text-saffron" />
              We&apos;re Here to Assist You
           </h2>
           <div className="space-y-8">
              <div className="flex items-start gap-6">
                 <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-saffron shrink-0">
                    <FaMapMarkerAlt />
                 </div>
                 <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p className="text-white/60 text-sm font-medium">UDD Office, Kokrajhar, BTR, Assam — 783370</p>
                 </div>
              </div>
              <div className="flex items-start gap-6">
                 <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-saffron shrink-0">
                    <FaPhoneAlt />
                 </div>
                 <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-white/60 text-sm font-medium">+91-XXXXX-XXXXX</p>
                 </div>
              </div>
              <div className="flex items-start gap-6">
                 <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-saffron shrink-0">
                    <FaEnvelope />
                 </div>
                 <div>
                    <h4 className="font-bold mb-1">Email Support</h4>
                    <p className="text-white/60 text-sm font-medium">uddbtr@gmail.com</p>
                 </div>
              </div>
           </div>
        </div>
        
        <div className="lg:w-1/2 w-full bg-white p-8 md:p-12 rounded-[40px] text-gray-900 shadow-2xl relative z-10">
           <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full bg-lightgray px-6 py-4 rounded-2xl border-none outline-none focus:ring-2 focus:ring-saffron text-sm font-medium" />
                <input type="email" placeholder="Email Address" className="w-full bg-lightgray px-6 py-4 rounded-2xl border-none outline-none focus:ring-2 focus:ring-saffron text-sm font-medium" />
              </div>
              <input type="text" placeholder="Subject" className="w-full bg-lightgray px-6 py-4 rounded-2xl border-none outline-none focus:ring-2 focus:ring-saffron text-sm font-medium" />
              <textarea placeholder="Your Message" rows={4} className="w-full bg-lightgray px-6 py-4 rounded-2xl border-none outline-none focus:ring-2 focus:ring-saffron text-sm font-medium resize-none"></textarea>
              <button className="w-full bg-saffron hover:bg-orange-600 text-white font-bold py-4 rounded-2xl shadow-xl transition-all hover:scale-[1.02] active:scale-95">
                 Send Message Now
              </button>
           </form>
        </div>
      </div>
    </section>
  );
}
