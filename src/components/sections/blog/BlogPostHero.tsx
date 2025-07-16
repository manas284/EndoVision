import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BookOpen } from 'lucide-react';

interface Author {
    name: string;
    title: string;
    imageUrl: string;
    imageHint: string;
}

interface BlogPostHeroProps {
    category: string;
    title: string;
    author: Author;
    date: string;
    readingTime: number;
    imageUrl: string;
    imageHint: string;
}

export function BlogPostHero({ category, title, author, date, readingTime, imageUrl, imageHint }: BlogPostHeroProps) {
  return (
    <section className="relative w-full py-16 md:py-24 text-white">
      <Image
        src={imageUrl}
        alt={title}
        data-ai-hint={imageHint}
        layout="fill"
        objectFit="cover"
        className="z-0"
        priority
      />
      <div className="absolute inset-0 bg-primary/80 z-10" />
      <div className="relative z-20 container text-center">
        <Badge variant="secondary" className="mb-4 bg-accent text-accent-foreground">{category}</Badge>
        <h1 className="font-headline text-3xl md:text-5xl font-bold max-w-4xl mx-auto">
          {title}
        </h1>
        <div className="flex justify-center items-center gap-6 mt-8">
            <div className="flex items-center gap-3">
                <Avatar>
                    <AvatarImage src={author.imageUrl} alt={author.name} data-ai-hint={author.imageHint}/>
                    <AvatarFallback>{author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                    <p className="font-semibold">{author.name}</p>
                    <p className="text-sm text-primary-foreground/80">{author.title}</p>
                </div>
            </div>
            <div className="text-left">
                 <p className="text-sm text-primary-foreground/80">Published on {new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                 <div className="flex items-center gap-2 text-sm text-primary-foreground/80">
                    <BookOpen className="h-4 w-4" />
                    <span>{readingTime} min read</span>
                 </div>
            </div>
        </div>
      </div>
    </section>
  );
}
