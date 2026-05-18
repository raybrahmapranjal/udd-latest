import { BriefcaseBusiness, FileText, Award, Droplets, Building } from 'lucide-react';

const services = [
  { name: 'PROPERTY TAX', icon: FileText },
  { name: 'TRADE LICENCE', icon: Award },
  { name: 'WATER CONNECTION', icon: Droplets },
  { name: 'BUILDING PERMISSION', icon: Building },
];

export default function QuickAccessServices() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <div className="inline-flex items-center justify-center p-3 rounded-full bg-emerald-100 text-emerald-600 mb-4">
             <BriefcaseBusiness className="w-8 h-8"/>
        </div>
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Access Services</h2>
        <p className="text-gray-600">Access essential UDD services with ease and efficiency</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
        {services.map((service, idx) => (
          <div key={idx} className="border-2 border-orange-500 rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center gap-6 hover:shadow-xl transition-all">
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
