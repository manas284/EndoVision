
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import type { DetailedCategory } from '@/lib/products.tsx';
import * as React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';


interface ProductCategoryDetailDialogProps {
  category: DetailedCategory | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductCategoryDetailDialog({ category, isOpen, onClose }: ProductCategoryDetailDialogProps) {
  const scrollViewportRef = React.useRef<HTMLDivElement>(null);

  if (!category) {
    return null;
  }

  const handleScroll = (direction: 'up' | 'down') => {
    if (scrollViewportRef.current) {
      const { scrollTop } = scrollViewportRef.current;
      const scrollAmount = 200;
      const newScrollTop = direction === 'up' ? scrollTop - scrollAmount : scrollTop + scrollAmount;
      scrollViewportRef.current.scrollTo({ top: newScrollTop, behavior: 'smooth' });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-3xl font-headline flex items-center gap-4">
            <span className="text-4xl">{category.icon}</span>
            {category.title}
          </DialogTitle>
          <DialogDescription className="pt-2 text-base">
            {category.mainDescription}
          </DialogDescription>
        </DialogHeader>
        <div className="flex-grow relative min-h-0">
          <div className="absolute top-0 right-4 z-10 flex flex-col gap-2">
              <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => handleScroll('up')}>
                  <ChevronUp className="h-5 w-5" />
                  <span className="sr-only">Scroll Up</span>
              </Button>
              <Button size="icon" variant="outline" className="h-8 w-8" onClick={() => handleScroll('down')}>
                  <ChevronDown className="h-5 w-5" />
                  <span className="sr-only">Scroll Down</span>
              </Button>
          </div>
          <ScrollArea className="h-full pr-6" viewportRef={scrollViewportRef}>
              <div className="space-y-6 py-4">
                <Accordion type="single" collapsible className="w-full">
                  {category.subItems.map((item, itemIndex) => (
                    <AccordionItem value={`item-${itemIndex}`} key={itemIndex} className="bg-secondary/50 border rounded-lg mb-2 px-4">
                      <AccordionTrigger className="text-left hover:no-underline">
                         <h4 className="font-headline text-xl font-semibold flex items-center gap-3">
                            <span className="text-2xl">{item.icon}</span> {item.title}
                        </h4>
                      </AccordionTrigger>
                      <AccordionContent>
                        <dl className="mt-3 space-y-2 text-sm text-muted-foreground pl-10">
                            {item.description && (
                                <div>
                                <dt className="font-semibold text-foreground">Description:</dt>
                                <dd>{item.description}</dd>
                                </div>
                            )}
                            {item.function && (
                                <div>
                                <dt className="font-semibold text-foreground">Function:</dt>
                                <dd>{item.function}</dd>
                                </div>
                            )}
                            {item.application && (
                                <div>
                                <dt className="font-semibold text-foreground">Application:</dt>
                                <dd>{item.application}</dd>
                                </div>
                            )}
                             {item.advantage && (
                                <div>
                                <dt className="font-semibold text-foreground">Advantage:</dt>
                                <dd>{item.advantage}</dd>
                                </div>
                            )}
                        </dl>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

              {category.keyFeatures && category.keyFeatures.length > 0 && (
                  <div className="mt-6 p-4 rounded-lg bg-secondary/50 border">
                  <h4 className="font-headline text-xl font-semibold mb-4 text-primary">Key Features Across All Types</h4>
                  <ul className="space-y-2">
                      {category.keyFeatures.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                          <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                      </li>
                      ))}
                  </ul>
                  </div>
              )}
              </div>
          </ScrollArea>
        </div>
      </DialogContent>
    </Dialog>
  );
}
