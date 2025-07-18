import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductSpecs } from "./ProductSpecs";
import { ProductDocs } from "./ProductDocs";
import { ProductFAQ } from "./ProductFAQ";
import Image from "next/image";
import type { Product } from "@/lib/products.tsx";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

interface ProductDetailsProps {
    product: Product;
}

export function ProductDetails({ product }: ProductDetailsProps) {
  const renderDetailedDescription = () => (
    <div className="space-y-12">
      {product.detailedDescription?.map((category, catIndex) => (
        <Card key={catIndex} className="p-6 md:p-8 shadow-lg border-primary/20">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="font-headline text-3xl text-primary flex items-center gap-4">
              <span className="text-4xl">{category.icon}</span>
              {category.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground mb-8">{category.mainDescription}</p>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
              {category.subItems.map((item, itemIndex) => (
                <div key={itemIndex} className="p-4 rounded-lg bg-secondary/50">
                  <h4 className="font-headline text-lg font-semibold flex items-center gap-2">
                    <span className="text-xl">{item.icon}</span> {item.title}
                  </h4>
                  <dl className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <div>
                      <dt className="font-semibold text-foreground">Description:</dt>
                      <dd>{item.description}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">Function:</dt>
                      <dd>{item.function}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">Application:</dt>
                      <dd>{item.application}</dd>
                    </div>
                     <div>
                      <dt className="font-semibold text-foreground">Advantage:</dt>
                      <dd>{item.advantage}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-headline text-xl font-semibold mb-4 text-primary">✅ Key Features Across All Types:</h4>
              <ul className="space-y-2">
                {category.keyFeatures.map((feature, featureIndex) => (
                   <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );


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
            {product.detailedDescription ? renderDetailedDescription() : renderStandardOverview()}
          </TabsContent>

          <TabsContent value="specs">
            <ProductSpecs specs={product.specs} />
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
