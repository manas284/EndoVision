import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Bone, HeartPulse, Droplets } from 'lucide-react';

const specialties = [
  {
    icon: <Bone className="h-10 w-10 text-primary" />,
    title: "Arthroscopy",
    description: "Precision tools and advanced visualization for joint surgery.",
    href: "/specialties/arthroscopy",
  },
  {
    icon: <HeartPulse className="h-10 w-10 text-primary" />,
    title: "Hysteroscopy",
    description: "High-definition solutions for gynecological examinations and surgeries.",
    href: "/specialties/hysteroscopy",
  },
  {
    icon: <Droplets className="h-10 w-10 text-primary" />,
    title: "Urology",
    description: "Precision instruments for comprehensive urological care.",
    href: "/specialties/urology",
  },
];

export function SpecialtiesGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty) => (
            <Card key={specialty.title} className="text-center group hover:shadow-xl transition-shadow duration-300 flex flex-col">
              <Link href={specialty.href} className="flex flex-col flex-grow">
                <CardHeader>
                  <div className="mx-auto bg-secondary p-4 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
                    {specialty.icon}
                  </div>
                  <CardTitle className="font-headline pt-4">{specialty.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground">{specialty.description}</p>
                </CardContent>
                <div className="p-6 pt-0">
                  <Button variant="link" className="text-primary group-hover:underline">
                    Learn More &rarr;
                  </Button>
                </div>
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
