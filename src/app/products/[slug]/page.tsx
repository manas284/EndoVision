import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ProductHero } from '@/components/sections/products/ProductHero';
import { ProductDetails } from '@/components/sections/products/ProductDetails';
import { ProductEvidence } from '@/components/sections/products/ProductEvidence';
import { ProductCTA } from '@/components/sections/products/ProductCTA';
import type { Metadata } from 'next';
import { Breadcrumb } from '@/components/layout/Breadcrumb';
import { products, Product } from '@/lib/products.tsx';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} | EndoVision Products`,
    description: product.usp,
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: product.name },
          ]}
        />
        <ProductHero product={product} />
        <ProductDetails product={product} />
        <ProductEvidence />
        <ProductCTA />
      </main>
      <Footer />
    </div>
  );
}
