
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, Globe, Moon, Sun, Laptop } from 'lucide-react';
import { useTheme } from 'next-themes';
import { cn } from '@/lib/utils';

const Logo = () => (
    <Link href="/" className="flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-primary">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a10 10 0 0 0-3.91 19.82" />
        <path d="M12 22a10 10 0 0 0 3.91-19.82" />
        <ellipse cx="12" cy="12" rx="2.5" ry="5" />
      </svg>
      <span className="font-headline text-2xl font-bold text-primary">EndoVision</span>
    </Link>
);

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme('light')}>
          <Sun className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('dark')}>
          <Moon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme('system')}>
          <Laptop className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/products', label: 'Products' },
  { 
    href: '/specialties',
    label: 'Specialties', 
    isDropdown: true,
    items: [
      { href: '/specialties/arthroscopy', label: 'Arthroscopy' },
      { href: '/specialties/hysteroscopy', label: 'Hysteroscopy' },
      { href: '/specialties/urology', label: 'Urology' },
    ]
  },
  { href: '/careers', label: 'Careers' },
  { href: '/#contact', label: 'Contact' },
];

export function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [language, setLanguage] = useState<'EN' | 'ES'>('EN');
  const pathname = usePathname();

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'ES' : 'EN');
  };

  const NavLink = ({ href, label, isActive }: { href: string; label: string; isActive: boolean }) => (
    <Button
      variant={isActive ? "default" : "outline"}
      size="sm"
      asChild
      className={cn(
        "rounded-full font-semibold",
        isActive ? "bg-primary text-primary-foreground" : "border-primary/50 text-primary hover:bg-primary/10 hover:text-primary-foreground",
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );

  const NavContent = () => (
    <>
      {navLinks.map((link) => {
        const isActive = link.isDropdown 
          ? pathname.startsWith(link.href)
          : pathname === link.href;

        return link.isDropdown ? (
          <DropdownMenu key={link.label}>
            <DropdownMenuTrigger asChild>
              <Button
                variant={isActive ? "default" : "outline"}
                size="sm"
                className={cn(
                  "rounded-full font-semibold flex items-center gap-1",
                   isActive ? "bg-primary text-primary-foreground" : "border-primary/50 text-primary hover:bg-primary/10 hover:text-primary-foreground",
                )}
              >
                {link.label}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {link.items?.map(item => (
                <DropdownMenuItem key={item.label} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <NavLink key={link.label} href={link.href} label={link.label} isActive={isActive} />
        )}
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-2">
          <NavContent />
        </nav>
        
        <div className="flex items-center gap-1">
          <Button variant="ghost" onClick={toggleLanguage} className="gap-2 font-semibold">
            <Globe className="h-5 w-5"/>
            <span>{language}</span>
          </Button>

          <ThemeToggle />

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex flex-col items-start gap-4 p-4">
                  <Logo />
                  <nav className="flex flex-col gap-4 mt-8 w-full">
                    <NavContent />
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
