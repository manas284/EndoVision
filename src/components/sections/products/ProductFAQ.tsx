import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is the warranty on the UHD Endoscope 4K?",
    answer: "The UHD Endoscope 4K comes with a comprehensive two-year manufacturer's warranty covering defects in materials and workmanship under normal use.",
  },
  {
    question: "Is this endoscope compatible with our existing camera system?",
    answer: "Yes, the device uses a standard C-mount optical interface, making it compatible with most major brands of camera control units (CCUs) and light sources. Please contact us to confirm compatibility with your specific system.",
  },
  {
    question: "What are the approved sterilization methods?",
    answer: "The UHD Endoscope 4K is fully autoclavable. It has been validated for steam sterilization cycles. It is also compatible with STERRAD and V-PRO low-temperature sterilization systems.",
  },
  {
    question: "Can we schedule a demo of the product?",
    answer: "Absolutely. We offer in-person and virtual demonstrations. Please use the 'Request a Demo' button or contact our sales team to schedule a session with a product specialist.",
  },
];

export function ProductFAQ() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
                Find answers to common questions about our UHD Endoscope 4K.
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
