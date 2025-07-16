import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FileText, LifeBuoy, ShieldCheck } from 'lucide-react';

const documents = [
  {
    icon: <FileText className="h-8 w-8 text-primary" />,
    title: "Product Brochure",
    description: "Detailed overview, features, and ordering information.",
    fileUrl: "#",
  },
  {
    icon: <LifeBuoy className="h-8 w-8 text-primary" />,
    title: "User Manual",
    description: "Instructions for use, cleaning, and sterilization.",
    fileUrl: "#",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-primary" />,
    title: "Compliance Certificate",
    description: "Declaration of conformity for regulatory standards.",
    fileUrl: "#",
  },
];

export function ProductDocs() {
  return (
    <section id="product-docs" className="py-8">
        <div className="text-center mb-12">
            <h3 className="font-headline text-2xl font-bold">Supporting Documentation</h3>
            <p className="mt-2 max-w-xl mx-auto text-muted-foreground">
                Access all necessary documents for the UHD Endoscope 4K.
            </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {documents.map((doc) => (
            <Card key={doc.title} className="flex flex-col">
              <CardHeader className="flex-row items-center gap-4">
                {doc.icon}
                <CardTitle className="font-headline">{doc.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <p className="text-muted-foreground">{doc.description}</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="secondary" className="w-full">
                  <a href={doc.fileUrl} download>
                    Download PDF
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
    </section>
  );
}
