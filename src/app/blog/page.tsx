import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { BlogHero } from '@/components/sections/blog/BlogHero';
import { BlogGrid } from '@/components/sections/blog/BlogGrid';
import { AboutCTA } from '@/components/sections/about/AboutCTA';

export default function BlogPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <BlogHero />
        <BlogGrid />
        <AboutCTA />
      </main>
      <Footer />
    </div>
  );
}
