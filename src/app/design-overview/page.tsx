
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProjectSummary } from '@/components/sections/design/ProjectSummary';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Design Overview | BluezoneSurgical',
  description: 'A detailed breakdown of the project architecture, tech stack, and design principles for the BluezoneSurgical application.',
};

export default function DesignOverviewPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Design Overview' },
          ]}
        />
        <ProjectSummary />
      </main>
      <Footer />
    </div>
  );
}
