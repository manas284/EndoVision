import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { ProductGrid } from '@/components/sections/products/ProductGrid';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products | EndoVision',
  description: 'Explore EndoVision\'s range of cutting-edge surgical devices, including UHD endoscopes and advanced energy systems for minimally invasive procedures.',
};

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products' },
          ]}
        />
        <ProductGrid />
      </main>
      <Footer />
    </div>
  );
}
