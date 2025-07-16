import Image from 'next/image';

export function HeroCareers() {
  return (
    <section className="relative w-full h-[60vh] min-h-[400px] max-h-[600px] flex items-center justify-center text-white">
      <Image
        src="https://placehold.co/1920x1080.png"
        alt="Diverse team collaborating in a modern office"
        data-ai-hint="diverse team office"
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-primary/70 z-10" />
      <div className="relative z-20 text-center container px-4 animate-fade-in-up">
        <h1 className="font-headline text-4xl md:text-6xl font-bold tracking-tight">
          Join Our Team
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-lg md:text-xl text-primary-foreground/90">
          Be a part of a team that’s pioneering the future of medical technology and improving patient outcomes worldwide.
        </p>
      </div>
    </section>
  );
}
