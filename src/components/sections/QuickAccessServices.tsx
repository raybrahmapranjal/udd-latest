import { BriefcaseBusiness, FileText, Award, Droplets, Building } from 'lucide-react';

const services = [
  { 
    name: 'PROPERTY TAX', 
    icon: FileText,
    bgGradient: 'bg-gradient-to-br from-blue-50/70 to-blue-100/30',
    borderColor: 'border-blue-400',
    iconGradient: 'from-blue-500 to-indigo-600 shadow-blue-500/20'
  },
  { 
    name: 'TRADE LICENCE', 
    icon: Award,
    bgGradient: 'bg-gradient-to-br from-emerald-50/70 to-emerald-100/30',
    borderColor: 'border-emerald-400',
    iconGradient: 'from-emerald-500 to-teal-600 shadow-emerald-500/20'
  },
  { 
    name: 'WATER CONNECTION', 
    icon: Droplets,
    bgGradient: 'bg-gradient-to-br from-sky-50/70 to-sky-100/30',
    borderColor: 'border-sky-400',
    iconGradient: 'from-sky-400 to-blue-500 shadow-sky-500/20'
  },
  { 
    name: 'BUILDING PERMISSION', 
    icon: Building,
    bgGradient: 'bg-gradient-to-br from-purple-50/70 to-purple-100/30',
    borderColor: 'border-purple-400',
    iconGradient: 'from-purple-500 to-indigo-600 shadow-purple-500/20'
  },
];

export default function QuickAccessServices() {
  return (
    <section className="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div className="flex flex-col items-center mb-12 md:mb-16 text-center">
        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full flex items-center justify-center relative mb-6 md:mb-8 group">
          <div className="absolute inset-0 bg-emerald-600/40 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-emerald-600 to-green-700 rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(5,150,105,0.5)]">
            <BriefcaseBusiness className="w-8 h-8 md:w-10 md:h-10 text-white" />
          </div>
          <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(5,150,105,0.4)] animate-pulse -z-10"></div>
        </div>
        <div className="inline-block border-b-4 border-emerald-500 pb-2 mb-4">
          <h2 className="text-3xl md:text-5xl font-bold text-navy uppercase tracking-tight">UDD BTC Quick Access Services</h2>
        </div>
        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-sm md:text-lg leading-relaxed px-4">Fast-track access to essential municipal and urban development services.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {services.map((service, idx) => (
          <a 
            key={idx} 
            href="/services"
            className={`group border-2 ${service.borderColor} ${service.bgGradient} rounded-2xl p-6 sm:p-10 shadow-md hover:shadow-xl flex flex-col items-center justify-center gap-4 sm:gap-6 transition-all duration-300 transform hover:-translate-y-1.5 cursor-pointer relative overflow-hidden`}
          >
            <div className={`bg-gradient-to-tr ${service.iconGradient} p-3 sm:p-4 rounded-xl text-white shadow-md group-hover:scale-110 transition-transform duration-300`}>
               <service.icon className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <h3 className="font-extrabold text-[#003366] text-center tracking-tight text-xs sm:text-base leading-tight uppercase">{service.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
}
