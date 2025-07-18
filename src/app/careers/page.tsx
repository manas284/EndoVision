import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroCareers } from '@/components/sections/careers/HeroCareers';
import { OurValues } from '@/components/sections/careers/OurValues';
import { OpenPositions } from '@/components/sections/careers/OpenPositions';
import { CareersCTA } from '@/components/sections/careers/CareersCTA';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Careers at BluezoneSurgical | Join Our Team',
  description: 'Explore career opportunities at BluezoneSurgical. Join a team of innovators dedicated to pioneering the future of medical technology and improving patient outcomes.',
};

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <HeroCareers />
        <OurValues />
        <OpenPositions />
        <CareersCTA />
      </main>
      <Footer />
    </div>
  );
}
