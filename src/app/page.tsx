import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Specialties } from '@/components/sections/Specialties';
import { Features } from '@/components/sections/Features';
import { Contact } from '@/components/sections/Contact';
import { Catalogs } from '@/components/sections/Catalogs';
import { Policies } from '@/components/sections/Policies';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EndoVision - Cutting-Edge Endoscopic Solutions',
  description: 'EndoVision designs and manufactures advanced UHD endoscopes and the Plasma EDGE™ system for minimally invasive surgery in arthroscopy, hysteroscopy, and urology.',
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <Specialties />
        <Catalogs />
        <Policies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
