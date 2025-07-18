
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
     <div className="grid md:grid-cols-2 gap-12 items-center">
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
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="docs">Documents</TabsTrigger>
            <TabsTrigger value="faq">FAQ</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            {renderStandardOverview()}
          </TabsContent>

          <TabsContent value="specs">
            <ProductCategoryGrid categories={product.detailedDescription} />
          </TabsContent>
          
          <TabsContent value="docs">
            <ProductDocs />
          </TabsContent>

          <TabsContent value="faq">
            <ProductFAQ faqs={product.faqs} />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
