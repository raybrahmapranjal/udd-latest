import UtilityBar from '@/components/layout/UtilityBar';
import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import LeaderStrip from '@/components/sections/LeaderStrip';
import StatsStrip from '@/components/sections/StatsStrip';
import Services from '@/components/sections/Services';
import UrbanLocalBodies from '@/components/sections/UrbanLocalBodies';
import IntegratedDashboardSection from '@/components/sections/IntegratedDashboardSection';
import QuickAccessServices from '@/components/sections/QuickAccessServices';
import NeedAssistance from '@/components/sections/NeedAssistance';
import OfficeLocation from '@/components/sections/OfficeLocation';
import SocialMedia from '@/components/sections/SocialMedia';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div id="home" className="min-h-screen">
      <div className="sticky top-0 z-[110]">
        <UtilityBar />
        <Header />
      </div>
      
      {/* Sections */}
      <Hero />
      <LeaderStrip />
      <StatsStrip />
      
      <div className="bg-white">
        <Services />
        <UrbanLocalBodies />
        <IntegratedDashboardSection />
        <QuickAccessServices />
        <SocialMedia />
        <NeedAssistance />
        <OfficeLocation />
      </div>
      
      <Footer />
    </div>
  );
}
