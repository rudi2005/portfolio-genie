import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="relative h-[50px] bg-black border-b border-accent/10 flex items-center">
      <div className="container flex items-center justify-between">
        {/* Logo - Text Only with Wave Animation */}
        <a href="#home" className="flex items-center">
          <span className="font-display font-medium text-wave text-[1.5rem] md:text-[2.5rem]">
            PixMotion
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[0.8rem] font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="accent" size="sm" className="text-xs px-3 py-1 h-7" asChild>
            <a href="#contact">Get a Demo</a>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-black/90 border-b border-accent/10 animate-fade-in">
          <nav className="container py-3 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[0.8rem] font-medium text-foreground/80 hover:text-foreground transition-colors py-1.5"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="accent" size="sm" className="w-full mt-2 text-xs h-7" asChild>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get a Demo
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
