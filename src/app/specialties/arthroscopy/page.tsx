import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SpecialtyDetailHero } from '@/components/sections/specialties/SpecialtyDetailHero';
import { SpecialtyOverview } from '@/components/sections/specialties/SpecialtyOverview';
import { SpecialtyFeatures } from '@/components/sections/specialties/SpecialtyFeatures';
import { ProductEvidence } from '@/components/sections/products/ProductEvidence';
import { ProductCTA } from '@/components/sections/products/ProductCTA';
import { ProductFAQ } from '@/components/sections/products/ProductFAQ';
import { Aperture, Shield, Droplets } from 'lucide-react';

const arthroscopyData = {
  title: "Arthroscopy",
  subtitle: "Innovative, minimally invasive solutions for joint procedures, with unmatched clarity and surgeon control.",
  imageUrl: "https://kenmedsurgical.com/cdn/shop/files/7a2b603e-72d0-5ac5-9263-11d482ed072f_533x.jpg?v=1726499072",
  imageHint: "arthroscopic surgery",
  overview: {
    title: "Why BluezoneSurgical for Arthroscopy?",
    description: "Our arthroscopy instruments are engineered to provide superior visualization and maneuverability within the confined space of the joint. We focus on creating durable, ergonomic tools that allow surgeons to perform complex procedures with greater precision and confidence, leading to better patient outcomes and faster recovery times.",
    bullets: [
      "Crystal-clear UHD optics for detailed anatomical viewing.",
      "High-flow sheaths for optimal irrigation and a clear surgical field.",
      "Robust, lightweight instruments designed for surgeon comfort.",
      "Seamless integration with existing operating room video systems."
    ],
    catalogUrl: "#"
  },
  features: [
    { icon: <Aperture className="h-10 w-10 text-primary" />, title: "Precision Optics", description: "Our proprietary lens system minimizes distortion and provides a wide, clear field of view." },
    { icon: <Shield className="h-10 w-10 text-primary" />, title: "Enhanced Durability", description: "Built with sapphire lenses and corrosion-resistant materials to withstand rigorous reprocessing." },
    { icon: <Droplets className="h-10 w-10 text-primary" />, title: "Optimized Irrigation", description: "Sheath and obturator design ensures efficient fluid management, keeping the view clear." }
  ]
};

export default function ArthroscopyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <SpecialtyDetailHero 
            title={arthroscopyData.title}
            subtitle={arthroscopyData.subtitle}
            imageUrl={arthroscopyData.imageUrl}
            imageHint={arthroscopyData.imageHint}
        />
        <SpecialtyOverview 
            title={arthroscopyData.overview.title}
            description={arthroscopyData.overview.description}
            bullets={arthroscopyData.overview.bullets}
            catalogUrl={arthroscopyData.overview.catalogUrl}
        />
        <SpecialtyFeatures 
            features={arthroscopyData.features}
        />
        <ProductEvidence />
        <ProductFAQ />
        <ProductCTA />
      </main>
      <Footer />
    </div>
  );
}
