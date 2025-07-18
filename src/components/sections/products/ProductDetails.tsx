
'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductDocs } from "./ProductDocs";
import { ProductFAQ } from "./ProductFAQ";
import Image from "next/image";
import type { Product } from "@/lib/products";
import { ProductCategoryGrid } from "./ProductCategoryGrid";

interface ProductDetailsProps {
    product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {

  const renderStandardOverview = () => (
     <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold text-primary">{product.overview.title}</h2>
            <p className="text-muted-foreground text-lg">
                {product.overview.description}
            </p>
        </div>
        <div className="rounded-lg overflow-hidden border shadow-lg">
                <Image
                src={product.overview.image}
                alt={product.overview.title}
                data-ai-hint={product.overview.imageHint}
                width={800}
                height={600}
                className="w-full h-full object-cover"
                />
        </div>
    </div>
  );


  return (
    <section id="product-details" className="py-16 md:py-24 bg-background">
      <div className="container">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto md:h-10">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="docs">Documents</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="mt-8">
            {renderStandardOverview()}
          </TabsContent>

          <TabsContent value="specs" className="mt-8">
            <ProductCategoryGrid categories={product.detailedDescription} />
          </TabsContent>
          
          <TabsContent value="docs" className="mt-8">
            <ProductDocs />
          </TabsContent>

          <TabsContent value="faq" className="mt-8">
            <ProductFAQ faqs={product.faqs} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
