import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductHero } from '@/components/sections/products/ProductHero';
import { ProductDetails } from '@/components/sections/products/ProductDetails';
import { ProductEvidence } from '@/components/sections/products/ProductEvidence';
import { ProductFAQ } from '@/components/sections/products/ProductFAQ';
import { ProductCTA } from '@/components/sections/products/ProductCTA';

export default function ProductPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
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
