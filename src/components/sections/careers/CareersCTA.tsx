import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CareersCTA() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container text-center bg-secondary p-12 rounded-lg">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">
          Don't See a Fit?
        </h2>
        <p className="mt-4 max-w-xl mx-auto text-muted-foreground">
          We are always looking for talented and passionate individuals. If you believe you have what it takes to be a part of our team, send us your resume.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/#contact">Contact HR</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
