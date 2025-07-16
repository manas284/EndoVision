import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductSpecs } from "./ProductSpecs";
import { ProductDocs } from "./ProductDocs";
import { BadgeCheck, Eye, Microscope } from "lucide-react";
import { ProductEvidence } from "./ProductEvidence";
import { ProductFAQ } from "./ProductFAQ";
import Image from "next/image";

export function ProductDetails() {
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
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-4">
                    <h2 className="font-headline text-3xl font-bold text-primary">Uncompromising Clarity in Surgery</h2>
                    <p className="text-muted-foreground text-lg">
                        The EndoVision UHD Endoscope 4K provides surgeons with a crystal-clear, true-to-life view of the surgical field.
                    </p>
                     <p className="text-muted-foreground">
                        Its advanced optical system, combined with state-of-the-art sensor technology, minimizes distortion and provides superior color accuracy. This allows for more confident identification of anatomical structures and pathologies, leading to enhanced surgical precision and potentially better patient outcomes.
                    </p>
                    <p className="text-muted-foreground">
                        Engineered for durability and ease of use, the device features a fully-sealed, autoclavable body and an ergonomic handle that reduces fatigue during long procedures. It is compatible with standard light sources and video processors, ensuring seamless integration into your existing operating room setup.
                    </p>
                </div>
                <div className="rounded-lg overflow-hidden border shadow-lg">
                     <Image
                        src="https://placehold.co/800x600.png"
                        alt="Detailed diagram of the endoscope optics"
                        data-ai-hint="endoscope diagram"
                        width={800}
                        height={600}
                        className="w-full h-full object-cover"
                     />
                </div>
            </div>
          </TabsContent>

          <TabsContent value="specs">
            <ProductSpecs />
          </TabsContent>
          
          <TabsContent value="docs">
            <ProductDocs />
          </TabsContent>

          <TabsContent value="faq">
            <ProductFAQ />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
