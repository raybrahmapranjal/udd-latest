import { BriefcaseBusiness, FileText, Award, Droplets, Building } from 'lucide-react';

const services = [
  { name: 'PROPERTY TAX', icon: FileText },
  { name: 'TRADE LICENCE', icon: Award },
  { name: 'WATER CONNECTION', icon: Droplets },
  { name: 'BUILDING PERMISSION', icon: Building },
];

export default function QuickAccessServices() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="flex flex-col items-center mb-16 text-center">
        <div className="w-24 h-24 rounded-full flex items-center justify-center relative mb-8 group">
          <div className="absolute inset-0 bg-emerald-600/40 blur-3xl rounded-full opacity-50 group-hover:opacity-70 transition-opacity"></div>
          <div className="w-20 h-20 bg-gradient-to-br from-emerald-600 to-green-700 rounded-full flex items-center justify-center border border-white/20 shadow-xl relative z-10 transition-transform group-hover:scale-110 shadow-[0_0_40px_rgba(5,150,105,0.5)]">
            <BriefcaseBusiness className="w-10 h-10 text-white" />
          </div>
          <div className="absolute inset-0 rounded-full shadow-[0_0_50px_rgba(5,150,105,0.4)] animate-pulse -z-10"></div>
        </div>
        <div className="inline-block border-b-4 border-emerald-500 pb-2 mb-4">
          <h2 className="text-4xl md:text-5xl font-black text-navy uppercase tracking-tight">Quick Access Services</h2>
        </div>
        <p className="text-gray-500 max-w-2xl mx-auto font-medium text-lg leading-relaxed">Fast-track access to essential municipal and urban development services.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="border-2 border-orange-500 rounded-md p-8 shadow-lg flex flex-col items-center justify-center gap-6 hover:shadow-xl transition-all">
            <div className="bg-gradient-to-tr from-orange-500 to-orange-700 p-4 rounded-full text-white">
               <service.icon className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-gray-900 text-center tracking-tight">{service.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
