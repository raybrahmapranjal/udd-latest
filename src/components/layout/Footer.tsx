import { FaFacebook, FaTwitter, FaYoutube, FaInstagram, FaChevronRight } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-indigo-950 to-blue-900 text-white pt-24 pb-12 px-6 md:px-16 lg:px-32 relative overflow-hidden">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-16 relative z-10">
         {/* Centralized Header */}
         <div className="flex flex-col items-center gap-4 mb-8">
            <div className="w-20 h-20 rounded-full bg-white/10 flex items-center justify-center p-4">
               <img src="https://bodoland.gov.in/bodoland/bodoland/assets/images/btc-logo.png" alt="BTC" className="h-12 w-auto grayscale invert" />
            </div>
            <div>
               <h4 className="font-bold text-3xl leading-tight">Urban Development Department, BTR</h4>
               <p className="text-sm text-white/50 uppercase tracking-widest mt-1">Bodoland Territorial Region</p>
            </div>
         </div>
         
          <div className="flex gap-6 mb-12">
            {[ 
              { icon: FaFacebook, bg: 'bg-gradient-to-br from-[#1877F2] to-[#0A4EA3]', shadow: 'shadow-[0_0_15px_rgba(24,119,242,0.5)]' },
              { icon: FaTwitter, bg: 'bg-gradient-to-br from-[#1DA1F2] to-[#0D8BD9]', shadow: 'shadow-[0_0_15px_rgba(29,161,242,0.5)]' },
              { icon: FaYoutube, bg: 'bg-gradient-to-br from-[#FF0000] to-[#CC0000]', shadow: 'shadow-[0_0_15px_rgba(255,0,0,0.5)]' },
              { icon: FaInstagram, bg: 'bg-gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#F56040]', shadow: 'shadow-[0_0_15px_rgba(253,29,29,0.5)]' }
            ].map((social, i) => (
              <a key={i} href="#" className={`w-14 h-14 border-2 border-white/20 rounded-full flex items-center justify-center ${social.bg} ${social.shadow} hover:scale-110 transition-transform`}>
                <social.icon className="text-2xl text-white" />
              </a>
            ))}
          </div>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20 relative z-10 border-t border-white/10 pt-16">
        {/* Navigation */}
        <div className="text-center md:text-left">
           <h4 className="text-xl font-bold text-white mb-8">Navigation</h4>
           <ul className="space-y-4">
              {['Home', 'About Department', 'Urban Local Bodies', 'Available Services', 'News & Events'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/50 hover:text-white flex items-center justify-center md:justify-start gap-2 group transition-all">
                    <FaChevronRight className="text-[8px] text-orange-500 group-hover:translate-x-1 transition-transform" /> {link}
                  </a>
                </li>
              ))}
           </ul>
        </div>

        {/* ULBs */}
        <div className="text-center md:text-left">
           <h4 className="text-xl font-bold text-white mb-8">ULBs</h4>
           <ul className="space-y-4">
              {['Kokrajhar', 'Chirang', 'Baksa', 'Udalguri', 'Others'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/50 hover:text-white flex items-center justify-center md:justify-start gap-2 group transition-all">
                    <FaChevronRight className="text-[8px] text-orange-500 group-hover:translate-x-1 transition-transform" /> {link}
                  </a>
                </li>
              ))}
           </ul>
        </div>

        {/* Important Links */}
        <div className="text-center md:text-left">
           <h4 className="text-xl font-bold text-white mb-8">Important Links</h4>
           <ul className="space-y-4">
              {['BTC Website', 'Government Orders', 'Public Notices', 'Gallery', 'Contact Us'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/50 hover:text-white flex items-center justify-center md:justify-start gap-2 group transition-all">
                    <FaChevronRight className="text-[8px] text-orange-500 group-hover:translate-x-1 transition-transform" /> {link}
                  </a>
                </li>
              ))}
           </ul>
        </div>

        {/* Quick Resources */}
        <div className="text-center md:text-left">
           <h4 className="text-xl font-bold text-white mb-8">Quick Resources</h4>
           <ul className="space-y-4">
              {['RTI Act', 'Citizen Charter', 'Tenders & Jobs', 'Download Forms', 'Privacy Policy'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-white/50 hover:text-white flex items-center justify-center md:justify-start gap-2 group transition-all">
                     <FaChevronRight className="text-[8px] text-orange-500 group-hover:translate-x-1 transition-transform" /> {link}
                  </a>
                </li>
              ))}
           </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-12 flex flex-col md:flex-row justify-center items-center gap-6 relative z-10">
         <p className="text-[10px] text-white/40 font-bold uppercase tracking-widest text-center">
           © {currentYear} Urban Development Department, BTR | All Rights Reserved
         </p>
      </div>
    </footer>
  );
}
