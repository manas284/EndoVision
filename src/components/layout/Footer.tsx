import Link from 'next/link';
import { Linkedin, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Logo = () => (
  <Link href="/" className="flex items-center gap-2">
     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary-foreground">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="2" />
        <line x1="12" y1="8" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="16" />
        <line x1="8" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="16" y2="12" />
      </svg>
    <span className="font-headline text-2xl font-bold text-primary-foreground">EndoVision</span>
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
              <li><Link href="#about" className="hover:text-accent">About</Link></li>
              <li><Link href="#specialties" className="hover:text-accent">Specialties</Link></li>
              <li><Link href="#catalogs" className="hover:text-accent">Catalogs</Link></li>
              <li><Link href="#contact" className="hover:text-accent">Contact</Link></li>
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
          <p>&copy; {new Date().getFullYear()} EndoVision. All Rights Reserved.</p>
          <p className="mt-2">
            <Link href="#" className="hover:text-accent">Terms of Service</Link> | <Link href="#" className="hover:text-accent">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
