import Link from 'next/link';
import { Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Logo = () => (
    <Link href="/" className="flex items-center gap-2">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8">
        <circle cx="16" cy="16" r="16" fill="#4A90E2"/>
        <path d="M16.2031 4.25L7.45312 27.75L16.2031 22.25L24.9531 27.75L16.2031 4.25Z" fill="#3B73B5"/>
      </svg>
      <span className="font-headline text-xl font-bold text-primary-foreground leading-tight">Bluezone<br/>Surgical</span>
    </Link>
);


export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-primary-foreground/80">
              Redefining precision in minimally invasive surgery with cutting-edge UHD endoscopes and advanced energy systems.
            </p>
          </div>
          <div>
            <h3 className="font-headline font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/about" className="hover:text-accent">About</Link></li>
              <li><Link href="/products" className="hover:text-accent">Products</Link></li>
              <li><Link href="/#contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline font-semibold">Connect</h3>
            <div className="flex gap-4 mt-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Linkedin className="h-6 w-6 text-primary-foreground/80 hover:text-accent"/>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                  <Youtube className="h-6 w-6 text-primary-foreground/80 hover:text-accent"/>
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} BluezoneSurgical. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
