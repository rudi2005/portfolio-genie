import { Play } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-secondary border-t border-border">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <Play className="w-4 h-4 text-accent-foreground fill-current" />
            </div>
            <span className="font-display font-bold text-lg text-foreground">
              AI<span className="text-accent">Video</span>
            </span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#services" className="text-sm text-muted-foreground hover:text-accent transition-colors red-underline">
              Services
            </a>
            <a href="#portfolio" className="text-sm text-muted-foreground hover:text-accent transition-colors red-underline">
              Portfolio
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-accent transition-colors red-underline">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} AIVideo. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
