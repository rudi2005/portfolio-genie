import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LogoSparkles } from '@/components/LogoSparkles';

const navItems = [{
  label: 'Home',
  href: '#home'
}, {
  label: 'Services',
  href: '#services'
}, {
  label: 'Portfolio',
  href: '#portfolio'
}, {
  label: 'Pricing',
  href: '#pricing'
}, {
  label: 'Contact',
  href: '#contact'
}];
export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return <header className="fixed top-0 left-0 right-0 z-50 h-[60px] bg-background shadow-header flex items-center">
      <div className="container flex items-center justify-between">
        {/* Mobile Menu Toggle - Left on mobile */}
        <button 
          className="md:hidden p-2 text-foreground" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo - Centered with Breathe Animation & Sparkles */}
        <a href="#home" className="relative flex items-center absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 px-4 py-2">
          <LogoSparkles />
          <span className="font-logo text-breathe text-[1.4rem] md:text-[1.6rem] tracking-wider uppercase bg-gradient-to-r from-accent via-primary to-accent bg-clip-text text-transparent bg-[length:200%_auto] relative z-10">
            Pix Motion
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(item => <a key={item.label} href={item.href} className="text-[0.9rem] font-medium text-foreground/80 hover:text-foreground transition-colors">
              {item.label}
            </a>)}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <Button variant="accent" size="sm" asChild>
            <a href="#contact">Get a Demo</a>
          </Button>
        </div>

        {/* Spacer for mobile to balance layout */}
        <div className="md:hidden w-10" />
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <div className="md:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-md border-b border-border animate-fade-in">
          <nav className="container py-4 flex flex-col gap-4">
            {navItems.map(item => <a key={item.label} href={item.href} className="text-[0.9rem] font-medium text-foreground/80 hover:text-foreground transition-colors py-2" onClick={() => setIsMobileMenuOpen(false)}>
                {item.label}
              </a>)}
            <Button variant="accent" size="sm" className="w-full mt-2" asChild>
              <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Get a Demo
              </a>
            </Button>
          </nav>
        </div>}
    </header>;
}