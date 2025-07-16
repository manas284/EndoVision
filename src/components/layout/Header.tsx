"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, ChevronDown, Globe } from 'lucide-react';

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

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'EN' ? 'ES' : 'EN');
  };

  const NavContent = () => (
    <>
      {navLinks.map((link) => 
        link.isDropdown ? (
          <DropdownMenu key={link.label}>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center gap-1 text-base hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0" asChild>
                    <Link href={link.href}>
                        {link.label}
                        <ChevronDown className="h-4 w-4" />
                    </Link>
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
          <Button key={link.label} variant="ghost" asChild className="text-base hover:bg-transparent hover:text-primary focus-visible:ring-0 focus-visible:ring-offset-0">
            <Link href={link.href}>{link.label}</Link>
          </Button>
        )
      )}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-2">
          <NavContent />
        </nav>
        
        <div className="flex items-center gap-4">
          <Button variant="ghost" onClick={toggleLanguage} className="gap-2">
            <Globe className="h-5 w-5"/>
            <span>{language}</span>
          </Button>

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
