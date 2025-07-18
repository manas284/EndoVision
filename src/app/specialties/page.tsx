import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SpecialtiesHero } from '@/components/sections/specialties/SpecialtiesHero';
import { SpecialtiesGrid } from '@/components/sections/specialties/SpecialtiesGrid';
import { AboutCTA } from '@/components/sections/about/AboutCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Surgical Specialties | Arthroscopy, Hysteroscopy, Urology - BluezoneSurgical',
  description: 'BluezoneSurgical provides specialized endoscopic technology for arthroscopy, hysteroscopy, and urology. Discover our solutions for superior surgical outcomes.',
};


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
