import Image from 'next/image';

export default function Header() {
  return (
    <div className="bg-white py-6 px-6 border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-6">
          <div className="relative h-20 w-auto">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Emblem_of_India.svg/800px-Emblem_of_India.svg.png" 
              alt="India Emblem" 
              className="h-full w-auto"
            />
          </div>
          <div className="text-center lg:text-left">
            <h1 className="text-xl md:text-3xl font-black uppercase text-navy tracking-tight leading-tight">
              Urban Development Department
            </h1>
            <h2 className="text-base md:text-xl font-bold text-saffron uppercase">
              Bodoland Territorial Region
            </h2>
            <p className="text-[9px] md:text-xs font-bold text-gray-400 uppercase tracking-[0.2em] mt-1 shrink-0">
              Government of Bodoland Territorial Region, Kokrajhar
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-8 min-w-0">
          <div className="hidden sm:flex flex-col items-end text-right border-r border-gray-200 pr-6 shrink-0">
             <p className="text-[10px] font-black text-gray-400 uppercase mb-1">State Portal</p>
             <a href="https://bodoland.gov.in" target="_blank" className="font-bold text-navy hover:text-saffron transition-colors">bodoland.gov.in</a>
          </div>
          <div className="h-12 md:h-16 w-auto flex-shrink-0">
            <img 
              src="https://bodoland.gov.in/assets/images/btc-logo.png" 
              alt="BTC Logo" 
              className="h-full w-auto"
            />
          </div>
          <div className="hidden sm:block h-10 md:h-14 w-auto flex-shrink-0">
             <img 
               src="https://www.g20.org/content/dam/gtwenty/header-footer/g20-logo.png" 
               alt="G20" 
               className="h-full w-auto grayscale opacity-50"
             />
          </div>
        </div>
      </div>
    </div>
  );
}
