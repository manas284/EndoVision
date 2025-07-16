import { BadgeCheck, Globe, ShieldCheck, FileText } from 'lucide-react';

const certifications = [
  { icon: <BadgeCheck className="h-10 w-10 text-primary" />, name: "FDA Cleared" },
  { icon: <ShieldCheck className="h-10 w-10 text-primary" />, name: "CE Marked" },
  { icon: <FileText className="h-10 w-10 text-primary" />, name: "ISO 13485" },
  { icon: <Globe className="h-10 w-10 text-primary" />, name: "EU MDR Compliant" },
];

export function Certifications() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold">Quality & Compliance</h2>
        <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
          We adhere to the highest international standards to ensure the safety and reliability of our products.
        </p>
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {certifications.map((cert) => (
            <div key={cert.name} className="flex flex-col items-center gap-4">
              <div className="bg-secondary p-4 rounded-full">
                {cert.icon}
              </div>
              <h3 className="font-semibold text-lg">{cert.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
