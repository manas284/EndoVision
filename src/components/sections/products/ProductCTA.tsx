import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ProductCTA() {
  return (
    <section className="py-16 md:py-24 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          Ready to Enhance Your Surgical Precision?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-primary-foreground/80">
          Our team is ready to answer your questions, provide a quote, or schedule a live demonstration.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
            <Link href="/#contact">Request a Specialist</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
            <Link href="/#catalogs">View Catalogs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
