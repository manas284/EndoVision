
'use client';

import { useState } from 'react';
import type { DetailedCategory } from '@/lib/products.tsx';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ProductCategoryDetailDialog } from './ProductCategoryDetailDialog';

interface ProductCategoryGridProps {
  categories?: DetailedCategory[];
}

export function ProductCategoryGrid({ categories }: ProductCategoryGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<DetailedCategory | null>(null);

  if (!categories || categories.length === 0) {
    return (
      <div className="text-center py-8 text-muted-foreground">
        <p>No detailed specifications available for this product.</p>
      </div>
    );
  }

  const openDialog = (category: DetailedCategory) => {
    setSelectedCategory(category);
  };

  const closeDialog = () => {
    setSelectedCategory(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
        {categories.map((category) => (
          <Card key={category.id} className="flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl font-headline">
                <span className="text-3xl">{category.icon}</span>
                {category.title}
              </CardTitle>
              <CardDescription className="pt-2 line-clamp-3">
                {category.mainDescription}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-grow" />
            <CardFooter>
              <Button onClick={() => openDialog(category)} className="w-full">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
      <ProductCategoryDetailDialog
        category={selectedCategory}
        isOpen={!!selectedCategory}
        onClose={closeDialog}
      />
    </>
  );
}
