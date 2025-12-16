import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroVisual from '@/assets/hero-visual.png';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center gradient-hero overflow-hidden pt-24 pb-16"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/8 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.1s' }}
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                AI-Powered Product Videos
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-foreground leading-tight mb-6 opacity-0 animate-slide-up"
              style={{ animationDelay: '0.2s' }}
            >
              Realistic AI Product Videos
              <br />
              <span className="text-accent">That Convert</span> on Amazon & Flipkart
            </h1>

            {/* Subtext */}
            <p
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              Image to video • UGC reels • Ads-ready content for any product.
              Perfect for e-commerce sellers, brands & creators.
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              <Button variant="accent" size="lg" className="group" asChild>
                <a href="#portfolio">
                  View Work
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">Get Quotation</a>
              </Button>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-border/50 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.8s' }}
            >
              <div className="text-center lg:text-left">
                <p className="font-display font-bold text-2xl md:text-3xl text-foreground">500+</p>
                <p className="text-xs text-muted-foreground mt-1">Videos Created</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-display font-bold text-2xl md:text-3xl text-foreground">150+</p>
                <p className="text-xs text-muted-foreground mt-1">Happy Clients</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="font-display font-bold text-2xl md:text-3xl text-foreground">24h</p>
                <p className="text-xs text-muted-foreground mt-1">Avg Delivery</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div
            className="relative opacity-0 animate-fade-in-right hidden lg:block"
            style={{ animationDelay: '0.4s' }}
          >
            <div className="relative">
              <img
                src={heroVisual}
                alt="AI Product Video Creation - E-commerce videos for Amazon, Flipkart"
                className="w-full h-auto rounded-2xl"
              />
              {/* Floating accent elements */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/10 rounded-2xl blur-xl animate-float" />
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/5 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
