import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

const quickSpecs = [
  "Model: EV-4K-2100",
  "4K UHD Resolution",
  "Ergonomic Handle Design",
  "High-Flow Sheath",
  "Ideal for Arthroscopy"
];

export function ProductHero() {
  return (
    <section id="product-hero" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
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
            <div className="flex gap-4 pt-4">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/#contact">Request a Quote</Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="#product-docs">Download Brochure</Link>
              </Button>
            </div>
          </div>
          <div className="space-y-6">
            <div className="rounded-lg overflow-hidden shadow-lg border">
                <Image
                src="https://placehold.co/800x600.png"
                alt="UHD Endoscope 4K device"
                data-ai-hint="endoscopic device"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                />
            </div>
            <Card>
                <CardHeader>
                    <CardTitle className="font-headline text-xl">At a Glance</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                        {quickSpecs.map(spec => (
                            <li key={spec} className="flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-primary"/>
                                <span>{spec}</span>
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
