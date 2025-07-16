import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

interface FAQ {
    question: string;
    answer: string;
}

interface ProductFAQProps {
    faqs?: FAQ[];
}

export function ProductFAQ({ faqs }: ProductFAQProps) {
  if (!faqs || faqs.length === 0) {
    return null;
  }
  
  return (
    <div className="max-w-4xl mx-auto py-8">
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
  );
}
