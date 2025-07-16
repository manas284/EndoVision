import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Handshake, Lightbulb, Target } from 'lucide-react';

const values = [
  {
    icon: <Lightbulb className="h-10 w-10 text-primary" />,
    title: "Innovation",
    description: "We are driven by a relentless pursuit of new ideas and technologies that push the boundaries of what's possible in surgery.",
  },
  {
    icon: <Target className="h-10 w-10 text-primary" />,
    title: "Precision",
    description: "Our commitment to quality ensures every product we create meets the highest standards of accuracy and reliability.",
  },
  {
    icon: <Handshake className="h-10 w-10 text-primary" />,
    title: "Collaboration",
    description: "We believe that the best solutions are born from teamwork, both within our company and with the surgeons we serve.",
  },
    {
    icon: <Zap className="h-10 w-10 text-primary" />,
    title: "Impact",
    description: "We are dedicated to making a tangible difference in the lives of patients by empowering surgeons with superior tools.",
    },
];

export function OurValues() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">What We Stand For</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Our core values guide every decision we make and every product we create.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {values.map((value) => (
            <Card key={value.title} className="text-center p-6 bg-card hover:shadow-xl transition-shadow">
                 <div className="flex justify-center mb-4">
                    {value.icon}
                </div>
              <CardTitle className="font-headline text-xl">{value.title}</CardTitle>
              <CardContent className="pt-4">
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
