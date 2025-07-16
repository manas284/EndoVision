import { Waves, Camera, Hand } from 'lucide-react';

const features = [
  {
    icon: <Waves className="h-10 w-10 text-primary" />,
    title: "High-Flow Sheathing",
    description: "Enhanced irrigation and suction management for clean visualization.",
  },
  {
    icon: <Camera className="h-10 w-10 text-primary" />,
    title: "UHD Optics",
    description: "Crystal-clear imaging for precise diagnostics and surgical outcomes.",
  },
  {
    icon: <Hand className="h-10 w-10 text-primary" />,
    title: "Ergonomic Design",
    description: "Instruments crafted for surgeon comfort and precision handling.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Why Choose Us</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Our technology is engineered for excellence, reliability, and ease of use in the operating room.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {features.map((feature) => (
            <div key={feature.title} className="text-center p-6">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-headline text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
