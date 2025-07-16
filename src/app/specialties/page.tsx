import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SpecialtiesHero } from '@/components/sections/specialties/SpecialtiesHero';
import { SpecialtiesGrid } from '@/components/sections/specialties/SpecialtiesGrid';
import { AboutCTA } from '@/components/sections/about/AboutCTA';


export default function SpecialtiesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <SpecialtiesHero />
        <SpecialtiesGrid />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
