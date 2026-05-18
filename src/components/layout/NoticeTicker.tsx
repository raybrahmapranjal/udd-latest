export default function NoticeTicker() {
  const notices = [
    "Tender Notice for Road Construction Works in Kokrajhar Municipal Board Area",
    "Applications invited for Trade License Renewal 2024-25",
    "Public Notice: Master Plan for Gossaigaon Town — Objections & Suggestions invited",
    "PMAY-U Beneficiary Led Construction (BLC) applications open until May 30th",
    "Swachh Survekshan 2024: BTR cities aim for top rankings in sanitation",
  ];

  return (
    <div className="bg-saffron text-white py-3 px-6 overflow-hidden relative z-50 shadow-lg border-b border-white/10 uppercase font-black">
      <div className="max-w-7xl mx-auto flex items-center gap-6">
        <div className="flex items-center gap-2 whitespace-nowrap bg-white/20 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] tracking-widest border border-white/20 shadow-inner">
           <span className="relative flex h-2 w-2">
             <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
             <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
           </span>
           Flash News
        </div>
        <div className="flex-1 overflow-hidden h-6 flex items-center">
          <div className="animate-marquee whitespace-nowrap inline-block font-bold text-[11px] md:text-[12px] tracking-widest">
            {notices.map((notice, idx) => (
              <span key={idx} className="mx-8 uppercase">
                 • {notice}
              </span>
            ))}
            {/* Seamless loop repeat */}
            {notices.map((notice, idx) => (
              <span key={`dup-${idx}`} className="mx-8 uppercase">
                 • {notice}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
