import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SpecialtyDetailHero } from '@/components/sections/specialties/SpecialtyDetailHero';
import { SpecialtyOverview } from '@/components/sections/specialties/SpecialtyOverview';
import { SpecialtyFeatures } from '@/components/sections/specialties/SpecialtyFeatures';
import { ProductEvidence } from '@/components/sections/products/ProductEvidence';
import { ProductCTA } from '@/components/sections/products/ProductCTA';
import { ProductFAQ } from '@/components/sections/products/ProductFAQ';
import { Droplets, Zap, Microscope } from 'lucide-react';

const urologyData = {
  title: "Urology",
  subtitle: "Precision instruments for comprehensive urological care, from diagnostics to advanced surgical interventions.",
  imageUrl: "https://storage.googleapis.com/project-1107279361797.appspot.com/3931bb48-d345-42a1-8230-2495d0383792.png",
  imageHint: "urology instruments",
  overview: {
    title: "Precision in Urological Procedures",
    description: "BluezoneSurgical's urology portfolio is built to meet the rigorous demands of procedures like cystoscopy, ureteroscopy, and resections. We combine excellent optics with durable, semi-rigid designs and efficient working channels to provide urologists with the tools they need for accurate diagnosis and effective treatment.",
    bullets: [
      "High-contrast imaging for clear visualization of the urinary tract.",
      "Durable, semi-rigid construction for reliable navigation.",
      "Large working channels compatible with a wide range of instruments.",
      "Plasma EDGE™ compatible for advanced resection and ablation."
    ],
    catalogUrl: "#"
  },
  features: [
    { icon: <Microscope className="h-10 w-10 text-primary" />, title: "Detailed Visualization", description: "Our scopes deliver sharp, high-contrast images critical for identifying subtle pathologies." },
    { icon: <Zap className="h-10 w-10 text-primary" />, title: "Plasma-Ready", description: "Fully compatible with the Plasma EDGE™ system for efficient and safe tissue resection." },
    { icon: <Droplets className="h-10 w-10 text-primary" />, title: "Robust & Reliable", description: "Engineered for the demands of daily urological practice with a focus on longevity." }
  ]
};

export default function UrologyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <SpecialtyDetailHero 
            title={urologyData.title}
            subtitle={urologyData.subtitle}
            imageUrl={urologyData.imageUrl}
            imageHint={urologyData.imageHint}
        />
        <SpecialtyOverview 
            title={urologyData.overview.title}
            description={urologyData.overview.description}
            bullets={urologyData.overview.bullets}
            catalogUrl={urologyData.overview.catalogUrl}
        />
        <SpecialtyFeatures 
            features={urologyData.features}
        />
        <ProductEvidence />
        <ProductFAQ />
        <ProductCTA />
      </main>
      <Footer />
    </div>
  );
}
