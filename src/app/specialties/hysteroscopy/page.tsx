import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SpecialtyDetailHero } from '@/components/sections/specialties/SpecialtyDetailHero';
import { SpecialtyOverview } from '@/components/sections/specialties/SpecialtyOverview';
import { SpecialtyFeatures } from '@/components/sections/specialties/SpecialtyFeatures';
import { ProductEvidence } from '@/components/sections/products/ProductEvidence';
import { ProductCTA } from '@/components/sections/products/ProductCTA';
import { HysteroscopyFAQ } from '@/components/sections/specialties/HysteroscopyFAQ';
import { Camera, TestTubeDiagonal, Hand } from 'lucide-react';

const hysteroscopyData = {
  title: "Hysteroscopy",
  subtitle: "High-definition solutions for gynecological examinations and surgeries, designed for patient comfort and diagnostic accuracy.",
  imageUrl: "https://placehold.co/1920x1080.png",
  imageHint: "medical equipment",
  overview: {
    title: "Advancing Gynecological Care",
    description: "Our hysteroscopy line offers exceptional image quality and a slim-profile design to minimize patient discomfort. From diagnostic 'see-and-treat' procedures to complex operative hysteroscopy, EndoVision provides reliable, high-performance instruments that empower gynecologists to deliver the best possible care.",
    bullets: [
      "Superior HD imaging for confident diagnosis.",
      "Slim, atraumatic design for enhanced patient tolerance.",
      "Durable construction for a long instrument life.",
      "Wide range of operative instruments for versatile use."
    ],
    catalogUrl: "#"
  },
  features: [
    { icon: <Camera className="h-10 w-10 text-primary" />, title: "Exceptional Clarity", description: "High-resolution optics provide sharp, detailed images of the uterine cavity." },
    { icon: <TestTubeDiagonal className="h-10 w-10 text-primary" />, title: "Atraumatic Design", description: "Slim sheaths and a smooth-tip obturator prioritize patient comfort and ease of insertion." },
    { icon: <Hand className="h-10 w-10 text-primary" />, title: "Ergonomic Control", description: "Lightweight and balanced for comfortable handling during procedures." }
  ]
};

export default function HysteroscopyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <SpecialtyDetailHero 
            title={hysteroscopyData.title}
            subtitle={hysteroscopyData.subtitle}
            imageUrl={hysteroscopyData.imageUrl}
            imageHint={hysteroscopyData.imageHint}
        />
        <SpecialtyOverview 
            title={hysteroscopyData.overview.title}
            description={hysteroscopyData.overview.description}
            bullets={hysteroscopyData.overview.bullets}
            catalogUrl={hysteroscopyData.overview.catalogUrl}
        />
        <SpecialtyFeatures 
            features={hysteroscopyData.features}
        />
        <ProductEvidence />
        <HysteroscopyFAQ />
        <ProductCTA />
      </main>
      <Footer />
    </div>
  );
}
