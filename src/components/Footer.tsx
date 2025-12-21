export function Footer() {
  return (
    <footer className="py-8 bg-background border-t border-border/30">
      <div className="container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center">
            <span className="font-display font-bold text-wave text-xl">
              PixMotion
            </span>
          </a>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a href="#services" className="text-sm text-foreground/70 hover:text-accent transition-colors red-underline">
              Services
            </a>
            <a href="#portfolio" className="text-sm text-foreground/70 hover:text-accent transition-colors red-underline">
              Portfolio
            </a>
            <a href="#contact" className="text-sm text-foreground/70 hover:text-accent transition-colors red-underline">
              Contact
            </a>
          </nav>

          {/* Copyright */}
          <p className="text-sm font-light text-foreground/60">
            © 2025 PixMotion
          </p>
        </div>
      </div>
    </footer>
  );
}
