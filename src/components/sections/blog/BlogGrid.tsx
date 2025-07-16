import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const blogPosts = [
  {
    slug: 'advancements-in-uhd-optics',
    category: 'Technology',
    title: 'The Clear Difference: Advancements in UHD Optics for Surgical Precision',
    excerpt: 'Explore how next-generation 4K UHD optics are transforming the operating room, providing surgeons with unparalleled clarity.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'medical optics lens',
    author: {
      name: 'Dr. Alisha Chen',
      imageUrl: 'https://placehold.co/100x100.png',
      imageHint: 'professional woman',
    },
    date: '2024-05-15',
  },
  {
    slug: 'plasma-edge-urology',
    category: 'Clinical Application',
    title: 'Plasma EDGE™ in Urology: A New Standard for Tissue Resection',
    excerpt: 'A deep dive into the clinical benefits of using plasma energy for urological procedures, focusing on safety and efficiency.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'urology surgery',
    author: {
      name: 'Mark O\'Brian',
      imageUrl: 'https://placehold.co/100x100.png',
      imageHint: 'professional man',
    },
    date: '2024-04-22',
  },
  {
    slug: 'ergonomics-in-hysteroscopy',
    category: 'Product Design',
    title: 'Designing for Surgeons: The Ergonomics of Modern Hysteroscopes',
    excerpt: 'How surgeon-centric design is reducing fatigue and improving maneuverability during complex gynecological surgeries.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'medical device design',
    author: {
      name: 'Sophia Rodriguez',
      imageUrl: 'https://placehold.co/100x100.png',
      imageHint: 'professional woman smiling',
    },
    date: '2024-03-30',
  },
  {
    slug: 'navigating-eu-mdr-compliance',
    category: 'Regulatory',
    title: 'Navigating the New Landscape of EU MDR Compliance for Medical Devices',
    excerpt: 'An overview of the challenges and strategies for meeting the European Union\'s stringent new medical device regulations.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'compliance document',
    author: {
      name: 'Mark O\'Brian',
      imageUrl: 'https://placehold.co/100x100.png',
      imageHint: 'professional man',
    },
    date: '2024-02-18',
  },
   {
    slug: 'future-of-arthroscopy',
    category: 'Technology',
    title: 'The Future of Arthroscopy: Integrating AI and Robotics',
    excerpt: 'A look ahead at how artificial intelligence and robotic assistance are poised to enhance arthroscopic surgical procedures.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'robotics surgery future',
    author: {
      name: 'Dr. Alisha Chen',
      imageUrl: 'https://placehold.co/100x100.png',
      imageHint: 'professional woman',
    },
    date: '2024-01-25',
  },
   {
    slug: 'sterilization-best-practices',
    category: 'Clinical Support',
    title: 'Sterilization Best Practices for High-Value Endoscopic Equipment',
    excerpt: 'Ensuring the longevity and safety of your surgical instruments with proper cleaning, sterilization, and handling techniques.',
    imageUrl: 'https://placehold.co/600x400.png',
    imageHint: 'sterilization equipment',
    author: {
      name: 'Sophia Rodriguez',
      imageUrl: 'https://placehold.co/100x100.png',
      imageHint: 'professional woman smiling',
    },
    date: '2023-12-12',
  },
];

export function BlogGrid() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <Card key={post.slug} className="overflow-hidden flex flex-col group">
              <Link href={`/blog/${post.slug}`} className="block">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  data-ai-hint={post.imageHint}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </Link>
              <CardContent className="p-6 flex-grow flex flex-col">
                <div className="flex-grow">
                  <Badge variant="secondary" className="mb-2">{post.category}</Badge>
                  <Link href={`/blog/${post.slug}`}>
                    <h3 className="font-headline text-xl font-bold mb-2 line-clamp-2 hover:text-primary transition-colors">{post.title}</h3>
                  </Link>
                  <p className="text-muted-foreground text-sm line-clamp-3">{post.excerpt}</p>
                </div>
                <div className="flex items-center gap-4 mt-6 pt-4 border-t">
                  <Avatar>
                    <AvatarImage src={post.author.imageUrl} alt={post.author.name} data-ai-hint={post.author.imageHint} />
                    <AvatarFallback>{post.author.name.charAt(0)}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{post.author.name}</p>
                    <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
            <Button size="lg" variant="outline">Load More</Button>
        </div>
      </div>
    </section>
  );
}
