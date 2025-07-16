import { Button } from "@/components/ui/button";
import Link from "next/link";

export function AboutCTA() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          Ready to See the Difference?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
          Explore our product catalog to see how our technology can elevate your practice, or get in touch with our team for a consultation.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/products">Explore Products</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/#contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
