
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
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white">
        <circle cx="16" cy="16" r="16" fill="currentColor"/>
        <path d="M16.2031 4.25L7.45312 27.75L16.2031 22.25L24.9531 27.75L16.2031 4.25Z" fill="#3B73B5"/>
      </svg>
      <span className="font-headline text-xl font-bold text-white leading-tight">Bluezone<br/>Surgical</span>
    </Link>
);

const ThemeToggle = () => {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="text-white hover:bg-gray-700 hover:text-white">
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
      variant="ghost"
      size="sm"
      asChild
      className={cn(
        "rounded-full font-semibold text-white",
        isActive ? "bg-gray-700" : "hover:bg-gray-700",
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );

  const NavContent = () => (
    <>
      {navLinks.map((link) => {
        const isActive = pathname === link.href;

        return <NavLink key={link.label} href={link.href} label={link.label} isActive={isActive} />
      })}
    </>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-black shadow-md">
      <div className="container flex h-20 items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-2">
          <NavContent />
        </nav>
        
        <div className="flex items-center gap-1">
          <Button variant="ghost" onClick={toggleLanguage} className="gap-2 font-semibold text-white hover:bg-gray-700 hover:text-white">
            <Globe className="h-5 w-5"/>
            <span>{language}</span>
          </Button>

          <ThemeToggle />

          <div className="md:hidden">
            <Sheet open={isMobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="text-white border-white hover:bg-gray-700 hover:text-white">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-black text-white">
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
