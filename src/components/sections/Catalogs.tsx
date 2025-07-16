import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileDown, HardDriveDownload } from 'lucide-react';

const catalogs = [
  {
    icon: <HardDriveDownload className="h-8 w-8 text-primary" />,
    title: "Endoscope Catalog 2024",
    description: "Full range of our UHD endoscopes.",
    fileUrl: "#",
  },
  {
    icon: <HardDriveDownload className="h-8 w-8 text-primary" />,
    title: "Plasma EDGE™ System",
    description: "Details on our advanced energy system.",
    fileUrl: "#",
  },
  {
    icon: <HardDriveDownload className="h-8 w-8 text-primary" />,
    title: "Instrument Sets",
    description: "Specialized toolsets for various procedures.",
    fileUrl: "#",
  },
];

export function Catalogs() {
  return (
    <section id="catalogs" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center">
          <h2 className="font-headline text-3xl md:text-4xl font-bold">Our Catalogs</h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Download our latest catalogs for detailed product specifications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {catalogs.map((catalog) => (
            <Card key={catalog.title} className="flex flex-col">
              <CardHeader className="flex-row items-center gap-4">
                {catalog.icon}
                <CardTitle className="font-headline">{catalog.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{catalog.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full bg-primary hover:bg-primary/90">
                  <a href={catalog.fileUrl} download>
                    <FileDown className="mr-2 h-4 w-4" />
                    Download PDF
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
