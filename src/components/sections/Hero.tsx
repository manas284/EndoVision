import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[500px] max-h-[700px] flex items-center justify-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Surgical suite"
        data-ai-hint="surgical suite"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-primary/70 z-10" />
      <div className="relative z-20 text-center container px-4 animate-fade-in-up">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
          Who We Are
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          We design cutting-edge UHD endoscopes and the advanced Plasma EDGE™ system to redefine precision in minimally invasive surgery.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="#about">
              See More
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
