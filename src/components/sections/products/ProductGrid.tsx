import Link from 'next/link';
import Image from 'next/image';
import { products } from '@/lib/products';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export function ProductGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
            Our Products
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Innovative solutions engineered for surgical precision and reliability.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Card key={product.slug} className="flex flex-col group overflow-hidden">
                <Link href={`/products/${product.slug}`} className="flex flex-col h-full">
                    <CardHeader className="p-0">
                        <div className="relative aspect-video">
                            <Image
                                src={product.heroImage}
                                alt={product.name}
                                data-ai-hint="medical device"
                                fill
                                className="object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                    </CardHeader>
                    <CardContent className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-secondary p-3 rounded-full">
                                {product.categoryIcon}
                            </div>
                            <div>
                                <CardTitle className="font-headline text-xl leading-tight">{product.name}</CardTitle>
                                <p className="text-sm text-muted-foreground">{product.status}</p>
                            </div>
                        </div>
                        <p className="text-muted-foreground flex-grow mb-4">{product.usp}</p>
                        <Button variant="outline" className="w-full mt-auto">
                            View Details
                        </Button>
                    </CardContent>
                </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
