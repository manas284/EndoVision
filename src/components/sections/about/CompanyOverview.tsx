import Image from "next/image";

export function CompanyOverview() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <Image
              src="https://placehold.co/800x600.png"
              alt="Close-up of a high-tech endoscopic device"
              data-ai-hint="endoscopic device"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-4">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              Pioneering Surgical Visualization
            </h2>
            <p className="text-lg text-muted-foreground">
              At BluezoneSurgical, our focus is delivering ultra-high-definition surgical instruments tailored to the specific demands of arthroscopy, hysteroscopy, and urology.
            </p>
            <p className="text-muted-foreground">
              We were founded on the principle that better visualization leads to better patient outcomes. By integrating state-of-the-art optics with surgeon-centric ergonomic design, we empower medical professionals to perform with greater confidence and precision. Our commitment to innovation drives us to continuously push the boundaries of what's possible in minimally invasive surgery.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
