import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

interface SpecialtyOverviewProps {
    title: string;
    description: string;
    bullets: string[];
    catalogUrl: string;
}

export function SpecialtyOverview({ title, description, bullets, catalogUrl }: SpecialtyOverviewProps) {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">
              {title}
            </h2>
            <p className="text-lg text-muted-foreground">
              {description}
            </p>
            <Button asChild size="lg">
              <a href={catalogUrl} download>Download Catalog</a>
            </Button>
          </div>
          <div className="space-y-4">
            <ul className="space-y-4">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
