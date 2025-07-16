import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BlogPostHero } from '@/components/sections/blog/BlogPostHero';
import { BlogPostBody } from '@/components/sections/blog/BlogPostBody';
import { AboutCTA } from '@/components/sections/about/AboutCTA';

// In a real app, you would fetch this data based on the slug
const mockPost = {
    slug: 'advancements-in-uhd-optics',
    category: 'Technology',
    title: 'The Clear Difference: Advancements in UHD Optics for Surgical Precision',
    excerpt: 'Explore how next-generation 4K UHD optics are transforming the operating room, providing surgeons with unparalleled clarity and detail, leading to better patient outcomes.',
    imageUrl: 'https://placehold.co/1920x1080.png',
    imageHint: 'medical optics technology',
    author: {
      name: 'Dr. Alisha Chen',
      title: 'Founder & CEO',
      imageUrl: 'https://placehold.co/100x100.png',
      imageHint: 'professional woman',
    },
    date: '2024-05-15',
    readingTime: 6,
};


export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Here you would use params.slug to fetch the correct post data
  const post = mockPost;

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <BlogPostHero 
            category={post.category}
            title={post.title}
            author={post.author}
            date={post.date}
            readingTime={post.readingTime}
            imageUrl={post.imageUrl}
            imageHint={post.imageHint}
        />
        <BlogPostBody />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
