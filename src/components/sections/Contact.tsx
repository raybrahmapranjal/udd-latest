import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 md:px-16 lg:px-32 bg-navy text-white relative overflow-hidden">
      <div className="flex flex-col items-center mb-20 text-center">
        <div className="w-24 h-24 rounded-full flex items-center justify-center relative mb-8 group">
          <div className="absolute inset-0 bg-saffron/40 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <div className="w-20 h-20 bg-gradient-to-br from-saffron to-orange-600 rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(247,148,31,0.5)]">
            <Mail className="w-10 h-10 text-white" />
          </div>
          <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(247,148,31,0.4)] animate-pulse -z-10"></div>
        </div>
        <div className="inline-block border-b-4 border-saffron pb-2 mb-4">
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tight">Contact Us</h2>
        </div>
        <p className="text-white/60 max-w-2xl mx-auto font-medium text-lg leading-relaxed">Have questions or need assistance? Reach out to our dedicated support team.</p>
      </div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
        <div className="lg:w-1/2">
           <span className="text-saffron font-bold text-xs uppercase tracking-[5px] block mb-4">Get In Touch</span>
           <h2 className="text-3xl md:text-5xl font-sans font-black mb-8 leading-tight flex items-center gap-4">
              <Mail className="w-10 h-10 text-saffron" />
              We&apos;re Here to Assist You
           </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                 <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-saffron shrink-0">
                    <FaMapMarkerAlt />
                 </div>
                 <div>
                    <h4 className="font-bold mb-1">Our Location</h4>
                    <p className="text-white/60 text-sm font-medium">UDD Office, Kokrajhar, BTC, Assam — 783370</p>
                 </div>
              </div>
              <div className="flex items-start gap-6">
                 <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-saffron shrink-0">
                    <FaPhoneAlt />
                 </div>
                 <div>
                    <h4 className="font-bold mb-1">Call Us</h4>
                    <p className="text-white/60 text-sm font-medium">+91-XXXXX-XXXXX</p>
                 </div>
              </div>
              <div className="flex items-start gap-6">
                 <div className="w-12 h-12 rounded-lg bg-white/10 flex items-center justify-center text-saffron shrink-0">
                    <FaEnvelope />
                 </div>
                 <div>
                    <h4 className="font-bold mb-1">Email Support</h4>
                    <p className="text-white/60 text-sm font-medium">uddbtr@gmail.com</p>
                 </div>
              </div>
           </div>
        </div>
        
        <div className="lg:w-1/2 w-full bg-white p-8 md:p-12 rounded-md text-gray-900 shadow-2xl relative z-10">
           <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Full Name" className="w-full bg-lightgray px-6 py-4 rounded-lg border-none outline-none focus:ring-2 focus:ring-saffron text-sm font-medium" />
                <input type="email" placeholder="Email Address" className="w-full bg-lightgray px-6 py-4 rounded-lg border-none outline-none focus:ring-2 focus:ring-saffron text-sm font-medium" />
              </div>
              <input type="text" placeholder="Subject" className="w-full bg-lightgray px-6 py-4 rounded-lg border-none outline-none focus:ring-2 focus:ring-saffron text-sm font-medium" />
              <textarea placeholder="Your Message" rows={4} className="w-full bg-lightgray px-6 py-4 rounded-lg border-none outline-none focus:ring-2 focus:ring-saffron text-sm font-medium resize-none"></textarea>
              <button className="w-full bg-saffron hover:bg-orange-600 text-white font-bold py-4 rounded-lg shadow-xl transition-all hover:scale-[1.02] active:scale-95">
                 Send Message Now
              </button>
           </form>
        </div>
      </div>
    </section>
  );
}
