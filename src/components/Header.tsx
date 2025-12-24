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
      <div className="container flex items-center justify-between relative">
        {/* Mobile Menu Toggle - Left on mobile */}
        <button 
          className="md:hidden p-2 text-foreground z-10" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Logo - Centered on mobile, left on desktop */}
        <a 
          href="#home" 
          className="absolute left-1/2 -translate-x-1/2 md:relative md:left-0 md:translate-x-0 flex items-center gap-1 group"
        >
          <LogoSparkles />
          <span className="font-logo text-pro text-[1.3rem] md:text-[1.5rem] lg:text-[1.7rem] tracking-wide uppercase relative z-10">
            Pix Motion
          </span>
        </a>

        {/* Spacer for mobile layout balance */}
        <div className="md:hidden w-10" />

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

        {/* Spacer for mobile to balance layout - hidden on mobile now */}
        <div className="hidden" />
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