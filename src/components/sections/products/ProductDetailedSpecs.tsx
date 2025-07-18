
'use client';

import type { DetailedCategory } from "@/lib/products";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";


interface ProductDetailedSpecsProps {
  detailedDescription?: DetailedCategory[];
}

export function ProductDetailedSpecs({ detailedDescription }: ProductDetailedSpecsProps) {

  if (!detailedDescription) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <p>No detailed specifications available for this product.</p>
      </div>
    );
  }

  return (
    <div className="space-y-12 py-8">
      {detailedDescription.map((category, catIndex) => (
        <Card key={catIndex} className="p-6 md:p-8 shadow-lg border-primary/20">
          <CardHeader className="p-0 mb-4">
            <CardTitle className="font-headline text-3xl text-primary flex items-center gap-4">
              <span className="text-4xl">{category.icon}</span>
              {category.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <p className="text-muted-foreground mb-8">{category.mainDescription}</p>

            <div className="grid md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
              {category.subItems.map((item, itemIndex) => (
                <div key={itemIndex} className="p-4 rounded-lg bg-secondary/50">
                  <h4 className="font-headline text-lg font-semibold flex items-center gap-2">
                    <span className="text-xl">{item.icon}</span> {item.title}
                  </h4>
                  <dl className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <div>
                      <dt className="font-semibold text-foreground">Description:</dt>
                      <dd>{item.description}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">Function:</dt>
                      <dd>{item.function}</dd>
                    </div>
                    <div>
                      <dt className="font-semibold text-foreground">Application:</dt>
                      <dd>{item.application}</dd>
                    </div>
                     <div>
                      <dt className="font-semibold text-foreground">Advantage:</dt>
                      <dd>{item.advantage}</dd>
                    </div>
                  </dl>
                </div>
              ))}
            </div>

            <div>
              <h4 className="font-headline text-xl font-semibold mb-4 text-primary">✅ Key Features Across All Types:</h4>
              <ul className="space-y-2">
                {category.keyFeatures.map((feature, featureIndex) => (
                   <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
