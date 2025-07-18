'use client';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const policies = [
  {
    title: "Warranty Policy",
    content: "BluezoneSurgical provides a comprehensive one-year warranty on all new endoscopes and surgical instruments, covering defects in materials and workmanship under normal use and service. This warranty is effective from the date of shipment. Should a product fail to function due to such defects within this period, BluezoneSurgical will, at its discretion, repair or replace the product free of charge. This warranty does not cover damage resulting from improper handling, unauthorized repairs, accidents, or use outside of the intended surgical applications. Consumable parts and accessories are excluded from this warranty. To initiate a warranty claim, please contact our customer service team with the product's serial number and a detailed description of the issue.",
  },
  {
    title: "Shipping & Returns Policy",
    content: "All orders are shipped FOB from our primary distribution center. Standard shipping is provided via trusted carriers, with expedited options available at an additional cost. For returns, products must be in their original, unopened packaging and returned within 30 days of receipt for a full refund or credit, less a 15% restocking fee. A Return Merchandise Authorization (RMA) number must be obtained from customer service prior to sending back any items. Products that have been used, sterilized, or are not in a resalable condition cannot be returned. Custom orders are final and non-returnable. BluezoneSurgical is not responsible for items lost or damaged during return shipment.",
  },
  {
    title: "Compliance Policy",
    content: "BluezoneSurgical is committed to the highest standards of quality and regulatory compliance. Our products are designed, manufactured, and distributed in accordance with the regulations set forth by the U.S. Food and Drug Administration (FDA) and are CE marked, indicating conformity with health, safety, and environmental protection standards for products sold within the European Economic Area (EEA). Our quality management system is certified under ISO 13485:2016, demonstrating our ability to provide medical devices and related services that consistently meet customer and applicable regulatory requirements. We conduct regular audits and risk assessments to ensure ongoing compliance and continuous improvement of our processes and products.",
  }
];

export function PolicyAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full space-y-4">
      {policies.map((policy) => (
        <AccordionItem value={policy.title} key={policy.title} className="bg-card rounded-lg shadow-sm border">
          <AccordionTrigger className="p-6 text-left font-headline hover:no-underline">
            {policy.title}
          </AccordionTrigger>
          <AccordionContent className="p-6 pt-0">
            <p className="text-base text-muted-foreground">{policy.content}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
