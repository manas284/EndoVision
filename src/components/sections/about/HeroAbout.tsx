import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function HeroAbout() {
  return (
    <section className="relative w-full h-[50vh] min-h-[350px] max-h-[500px] flex items-center justify-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Team of surgeons in a modern operating room"
        data-ai-hint="medical surgery"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-primary/70 z-10" />
      <div className="relative z-20 text-center container px-4">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
          About Us
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-base md:text-xl text-primary-foreground/90">
          We are redefining precision in minimally invasive surgery through innovation in optics, instrumentation, and design.
        </p>
        <div className="mt-8">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/products">
              Our Products
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
