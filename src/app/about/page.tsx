import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroAbout } from '@/components/sections/about/HeroAbout';
import { CompanyOverview } from '@/components/sections/about/CompanyOverview';
import { Technology } from '@/components/sections/about/Technology';
import { Timeline } from '@/components/sections/about/Timeline';
import { MissionVision } from '@/components/sections/about/MissionVision';
import { Certifications } from '@/components/sections/about/Certifications';
import { Team } from '@/components/sections/about/Team';
import { AboutCTA } from '@/components/sections/about/AboutCTA';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroAbout />
        <CompanyOverview />
        <Technology />
        <Timeline />
        <MissionVision />
        <Certifications />
        <Team />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
