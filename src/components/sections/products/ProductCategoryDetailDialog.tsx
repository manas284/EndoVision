
'use client';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { Check, ChevronUp, ChevronDown } from 'lucide-react';
import type { DetailedCategory } from '@/lib/products.tsx';
import * as React from 'react';

interface ProductCategoryDetailDialogProps {
  category: DetailedCategory | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductCategoryDetailDialog({ category, isOpen, onClose }: ProductCategoryDetailDialogProps) {
  const viewportRef = React.useRef<HTMLDivElement>(null);

  if (!category) {
    return null;
  }

  const scroll = (direction: 'up' | 'down') => {
    if (viewportRef.current) {
      viewportRef.current.scrollBy({
        top: direction === 'up' ? -200 : 200,
        behavior: 'smooth',
      });
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
        <div className="flex-grow relative overflow-hidden">
          <ScrollArea className="h-full pr-6 -mr-6" viewportRef={viewportRef}>
              <div className="space-y-6 py-4">
              {category.subItems.map((item, itemIndex) => (
                  <div key={itemIndex} className="p-4 rounded-lg bg-secondary/50 border">
                  <h4 className="font-headline text-xl font-semibold flex items-center gap-3">
                      <span className="text-2xl">{item.icon}</span> {item.title}
                  </h4>
                  <dl className="mt-3 space-y-2 text-sm text-muted-foreground">
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
                  </div>
              ))}

              {category.keyFeatures && category.keyFeatures.length > 0 && (
                  <div className="mt-6">
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
           <div className="absolute bottom-4 right-8 flex flex-col gap-2 z-10">
            <Button size="icon" variant="outline" onClick={() => scroll('up')} aria-label="Scroll up">
              <ChevronUp className="h-6 w-6" />
            </Button>
            <Button size="icon" variant="outline" onClick={() => scroll('down')} aria-label="Scroll down">
              <ChevronDown className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
