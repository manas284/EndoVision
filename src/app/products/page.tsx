import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductHero } from '@/components/sections/products/ProductHero';
import { ProductDetails } from '@/components/sections/products/ProductDetails';
import { ProductEvidence } from '@/components/sections/products/ProductEvidence';
import { ProductFAQ } from '@/components/sections/products/ProductFAQ';
import { ProductCTA } from '@/components/sections/products/ProductCTA';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';

export const metadata: Metadata = {
  title: 'UHD Endoscope 4K | Products - EndoVision',
  description: 'Explore the features, specifications, and clinical evidence for the EndoVision UHD Endoscope 4K. Experience unparalleled clarity for demanding surgical procedures.',
};

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'UHD Endoscope 4K' },
          ]}
        />
        <ProductHero />
        <ProductDetails />
        <ProductEvidence />
        <ProductFAQ />
        <ProductCTA />
      </main>
      <Footer />
    </div>
  );
}
