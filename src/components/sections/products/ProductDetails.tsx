import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductFeatures } from "./ProductFeatures";
import { ProductSpecs } from "./ProductSpecs";
import { ProductDocs } from "./ProductDocs";
import { BadgeCheck, Eye } from "lucide-react";

export function ProductDetails() {
  return (
    <section id="product-details" className="py-16 md:py-24 bg-background">
      <div className="container">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="features">Features</TabsTrigger>
            <TabsTrigger value="specs">Specifications</TabsTrigger>
            <TabsTrigger value="docs">Documents</TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-4">
                    <h2 className="font-headline text-3xl font-bold">Uncompromising Clarity in Surgery</h2>
                    <p className="text-muted-foreground">
                        The EndoVision UHD Endoscope 4K provides surgeons with a crystal-clear, true-to-life view of the surgical field. Its advanced optical system, combined with state-of-the-art sensor technology, minimizes distortion and provides superior color accuracy. This allows for more confident identification of anatomical structures and pathologies, leading to enhanced surgical precision and potentially better patient outcomes.
                    </p>
                    <p className="text-muted-foreground">
                        Engineered for durability and ease of use, the device features a fully-sealed, autoclavable body and an ergonomic handle that reduces fatigue during long procedures. It is compatible with standard light sources and video processors, ensuring seamless integration into your existing operating room setup.
                    </p>
                    <div className="flex items-center gap-4 pt-4">
                        <BadgeCheck className="h-8 w-8 text-primary"/>
                        <p className="font-semibold">CE Mark Certified for EU Safety Compliance</p>
                    </div>
                </div>
                <div>
                    {/* Placeholder for a diagram or close-up image */}
                     <div className="p-8 bg-secondary rounded-lg flex items-center justify-center">
                        <Eye className="h-48 w-48 text-primary/20"/>
                     </div>
                </div>
            </div>
          </TabsContent>

          <TabsContent value="features">
            <ProductFeatures />
          </TabsContent>

          <TabsContent value="specs">
            <ProductSpecs />
          </TabsContent>
          
          <TabsContent value="docs">
            <ProductDocs />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
