import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock } from "lucide-react";

const positions = [
  {
    title: "Senior Optical Engineer",
    location: "Boston, MA",
    type: "Full-time",
    description: "Design and develop next-generation lens systems for our UHD endoscopes. Requires a Master's degree in Optical Engineering and 5+ years of experience.",
  },
  {
    title: "Regulatory Affairs Specialist",
    location: "Remote",
    type: "Full-time",
    description: "Manage regulatory submissions (FDA 510(k), CE Mark) and ensure compliance with international standards. Experience with ISO 13485 is essential.",
  },
  {
    title: "Firmware Engineer - Medical Devices",
    location: "Boston, MA",
    type: "Full-time",
    description: "Develop and maintain the firmware for our Plasma EDGE™ energy system. Proficiency in C/C++ and experience with real-time operating systems required.",
  },
    {
    title: "Clinical Education Specialist",
    location: "Field-based (West Coast)",
    type: "Full-time",
    description: "Provide training and support to surgeons and hospital staff on the proper use of BluezoneSurgical products. RN or surgical tech background preferred.",
    },
];

export function OpenPositions() {
  return (
    <section id="positions" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Current Openings</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Find your next career opportunity at BluezoneSurgical and help us shape the future of surgery.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
          {positions.map((position) => (
            <Card key={position.title} className="flex flex-col">
              <CardHeader>
                <CardTitle className="font-headline text-2xl">{position.title}</CardTitle>
                <CardDescription className="flex gap-4 pt-2">
                    <span className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" /> {position.location}
                    </span>
                    <span className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4" /> {position.type}
                    </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{position.description}</p>
              </CardContent>
              <CardFooter>
                <Button className="w-full md:w-auto">Apply Now</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
