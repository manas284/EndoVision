import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Camera, View, Scan, Droplets } from 'lucide-react';

const features = [
  {
    icon: <Camera className="h-10 w-10 text-primary" />,
    title: "Native 4K UHD Sensor",
    description: "Delivers four times the resolution of HD for breathtaking image quality and detail.",
  },
  {
    icon: <View className="h-10 w-10 text-primary" />,
    title: "Wide Color Gamut",
    description: "Reproduces a broader range of colors for more vibrant and accurate tissue representation.",
  },
  {
    icon: <Scan className="h-10 w-10 text-primary" />,
    title: "Edge-to-Edge Clarity",
    description: "Advanced lens design ensures a sharp, distortion-free image across the entire field of view.",
  },
  {
    icon: <Droplets className="h-10 w-10 text-primary" />,
    title: "Autoclavable Design",
    description: "Fully sealed and validated for steam sterilization, ensuring top-tier infection control.",
  },
];

export function ProductFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
      {features.map((feature) => (
        <Card key={feature.title} className="text-center group hover:shadow-lg transition-shadow duration-300">
          <CardHeader>
            <div className="mx-auto bg-secondary p-4 rounded-full w-fit group-hover:scale-110 transition-transform duration-300">
              {feature.icon}
            </div>
            <CardTitle className="font-headline pt-4 text-xl">{feature.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">{feature.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
