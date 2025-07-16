import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Aperture, Zap, TestTubeDiagonal } from 'lucide-react';

const technologies = [
  {
    icon: <Aperture className="h-10 w-10 text-primary" />,
    title: "UHD Optics",
    description: "Our proprietary lens technology provides unparalleled clarity, color accuracy, and depth perception for critical procedures.",
  },
  {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Plasma EDGE™",
    description: "An advanced energy platform that enables precise tissue management with minimal thermal spread, ensuring patient safety.",
  },
  {
    icon: <TestTubeDiagonal className="h-10 w-10 text-primary" />,
    title: "Minimal Invasiveness",
    description: "We design smaller, more efficient instruments that reduce patient trauma and accelerate recovery times.",
  },
];

export function Technology() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Technology & Innovation</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Our technology is built on a foundation of precision engineering and clinical insight.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {technologies.map((tech) => (
            <Card key={tech.title} className="text-center p-6 bg-card hover:shadow-xl transition-shadow">
              <CardHeader className="flex flex-col items-center">
                <div className="p-4 bg-secondary rounded-full w-fit mb-4">
                  {tech.icon}
                </div>
                <CardTitle className="font-headline">{tech.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{tech.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
