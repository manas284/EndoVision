
'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Camera, View, Scan } from 'lucide-react';
import { cn } from '@/lib/utils';

const galleryImages = [
  { src: "https://placehold.co/1200x800.png", alt: "UHD Endoscope 4K primary view", hint: "endoscopic device" },
  { src: "https://placehold.co/800x600.png", alt: "UHD Endoscope 4K in use", hint: "endoscope surgery" },
  { src: "https://placehold.co/800x600.png", alt: "UHD Endoscope 4K close-up", hint: "endoscope closeup" },
  { src: "https://placehold.co/800x600.png", alt: "UHD Endoscope 4K with accessories", hint: "medical equipment" },
];

const keyFeatures = [
  { icon: <Camera className="h-6 w-6 text-primary" />, text: "Native 4K UHD Sensor" },
  { icon: <View className="h-6 w-6 text-primary" />, text: "Wide Color Gamut" },
  { icon: <Scan className="h-6 w-6 text-primary" />, text: "Edge-to-Edge Clarity" },
];

export function ProductHero() {
  const [activeImage, setActiveImage] = useState(galleryImages[0]);

  return (
    <section id="product-hero" className="py-12 md:py-16 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Image Gallery */}
          <div className="flex flex-col gap-4 sticky top-24">
            <div className="rounded-lg overflow-hidden border shadow-lg bg-background">
              <Image
                src={activeImage.src}
                alt={activeImage.alt}
                data-ai-hint={activeImage.hint}
                width={1200}
                height={800}
                className="w-full h-full object-cover transition-opacity duration-300"
                priority
              />
            </div>
            <div className="grid grid-cols-4 gap-2">
              {galleryImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(image)}
                  className={cn(
                    "rounded-md overflow-hidden border-2 transition-all",
                    activeImage.src === image.src ? "border-primary shadow-md" : "border-transparent hover:border-primary/50"
                  )}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    data-ai-hint={image.hint}
                    width={200}
                    height={150}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="space-y-6">
            <div className="flex gap-2">
                <Badge variant="outline">FDA Cleared</Badge>
                <Badge variant="outline">CE Marked</Badge>
            </div>
            <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
              UHD Endoscope 4K
            </h1>
            <p className="text-lg text-muted-foreground">
              Experience unparalleled clarity and precision with our flagship 4K UHD Endoscope, designed for the most demanding minimally invasive procedures.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t">
              {keyFeatures.map(feature => (
                <div key={feature.text} className="flex items-center gap-3">
                  {feature.icon}
                  <span className="text-sm font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto">
                <Link href="/#contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link href="#product-docs">Download Brochure</Link>
              </Button>
            </div>

            <div className="pt-6 border-t">
                <h3 className="font-headline text-lg font-semibold">Availability & Compliance</h3>
                <ul className="mt-4 space-y-2 text-muted-foreground text-sm">
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600"/><span>In Stock - Ships within 24 hours</span></li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600"/><span>ISO 13485 Compliant</span></li>
                    <li className="flex items-center gap-2"><CheckCircle className="h-5 w-5 text-green-600"/><span>2-Year Full Warranty</span></li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
