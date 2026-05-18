import { FaFacebook, FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

export default function UtilityBar() {
  return (
    <div className="bg-navy text-white py-1 px-6 text-[10px] sm:text-xs">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div>
          <span className="hidden sm:inline">Government of Bodoland Territorial Region, Assam</span>
          <span className="sm:hidden">Govt. of BTR, Assam</span>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex gap-3 border-r border-white/20 pr-4 mr-1">
            <a href="#" className="hover:text-saffron transition-colors"><FaFacebook /></a>
            <a href="#" className="hover:text-saffron transition-colors"><FaTwitter /></a>
            <a href="#" className="hover:text-saffron transition-colors"><FaYoutube /></a>
            <a href="#" className="hover:text-saffron transition-colors"><FaInstagram /></a>
          </div>
          <div className="hidden md:flex gap-3">
             <a href="#" className="hover:text-saffron">Screen Reader</a>
             <a href="#" className="hover:text-saffron">Sitemap</a>
          </div>
        </div>
      </div>
    </div>
  );
}
