import Image from 'next/image';

interface SpecialtyDetailHeroProps {
    title: string;
    subtitle: string;
    imageUrl: string;
    imageHint: string;
}

export function SpecialtyDetailHero({ title, subtitle, imageUrl, imageHint }: SpecialtyDetailHeroProps) {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] flex items-center justify-center text-white">
      <Image
        src={imageUrl}
        alt={title}
        data-ai-hint={imageHint}
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-primary/70 z-10" />
      <div className="relative z-20 text-center container px-4">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          {subtitle}
        </p>
      </div>
    </section>
  );
}
