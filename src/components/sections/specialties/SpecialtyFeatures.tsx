import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
}

interface SpecialtyFeaturesProps {
    features: Feature[];
}

export function SpecialtyFeatures({ features }: SpecialtyFeaturesProps) {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Key Features & Benefits</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Engineered for clinical excellence and superior performance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature) => (
            <Card key={feature.title} className="text-center p-6 bg-card hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-col items-center">
                <div className="p-4 bg-secondary rounded-full w-fit mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="font-headline">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
