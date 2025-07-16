import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes EndoVision hysteroscopes suitable for 'see-and-treat' procedures?",
    answer: "Our hysteroscopes feature a slim, atraumatic design for patient comfort, combined with superior HD imaging. This allows for clear diagnosis and immediate treatment within the same procedure, improving efficiency and patient experience.",
  },
  {
    question: "Are your hysteroscopy instruments compatible with standard fluid management systems?",
    answer: "Yes, our hysteroscopy sheaths are designed for compatibility with common fluid management systems to ensure optimal uterine distention and a clear view during procedures.",
  },
  {
    question: "What is the typical lifespan of an EndoVision hysteroscope?",
    answer: "Our hysteroscopes are built with durable, high-quality materials, including sapphire lenses, to withstand the rigors of frequent reprocessing. With proper care and handling according to the user manual, they are designed for a long service life.",
  },
  {
    question: "Do you offer smaller diameter scopes for diagnostic purposes?",
    answer: "Absolutely. Our portfolio includes a range of slim and mini hysteroscopes designed specifically for diagnostic procedures and to maximize patient comfort without compromising on image quality.",
  },
];

export function HysteroscopyFAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                Find answers to common questions about our Hysteroscopy solutions.
            </p>
        </div>
        <div className="max-w-3xl mx-auto mt-12">
            <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="bg-card rounded-lg shadow-sm border">
                <AccordionTrigger className="p-6 text-left font-headline hover:no-underline">
                    {faq.question}
                </AccordionTrigger>
                <AccordionContent className="p-6 pt-0">
                    <p className="text-base text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
                </AccordionItem>
            ))}
            </Accordion>
        </div>
      </div>
    </section>
  );
}
