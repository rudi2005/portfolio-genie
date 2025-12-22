import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative bg-background overflow-hidden pt-8 pb-16"
    >
      <div className="container relative z-10">
        {/* Video Hero Section */}
        <div className="text-center mb-8">
          <h2 
            className="font-display font-bold text-foreground mb-4 opacity-0 animate-fade-in text-[1.5rem] md:text-[2rem]"
            style={{ animationDelay: '0.1s' }}
          >
            Watch How PixMotion Transforms Your Products
          </h2>
          <p 
            className="text-muted-foreground text-sm md:text-base max-w-2xl mx-auto mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s' }}
          >
            AI-Powered Image-to-Video for E-com Pros – Low Cost, High Impact.
          </p>
        </div>

        {/* Full-width Video Embed */}
        <div 
          className="w-full aspect-video rounded-xl overflow-hidden mb-8 opacity-0 animate-fade-in"
          style={{ animationDelay: '0.3s' }}
        >
          <iframe
            src="https://player.vimeo.com/video/1148553866?autoplay=0&title=0&byline=0&portrait=0"
            className="w-full h-full"
            frameBorder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
            title="PixMotion Product Demo"
          />
        </div>

        {/* Red Divider Line */}
        <div className="w-full h-px bg-accent/30 mb-12" />

        {/* Original Hero Content Below */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card shadow-card mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.4s' }}
            >
              <Sparkles className="w-4 h-4 text-accent" />
              <span className="text-sm font-medium text-muted-foreground">
                AI-Powered Product Videos
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-display font-bold text-heading text-foreground leading-tight mb-6 opacity-0 animate-slide-up"
              style={{ animationDelay: '0.5s' }}
            >
              <span className="text-wave inline-block">PixMotion</span>
              <br />
              <span className="text-accent">AI-Powered</span> Video Creation
            </h1>

            {/* Subtext */}
            <p
              className="text-body text-foreground max-w-xl mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.6s' }}
            >
              AI-Powered Image-to-Video Magic for E-com Pros
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: '0.7s' }}
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

          {/* Right Visual - Hidden on mobile */}
          <div
            className="relative opacity-0 animate-fade-in-right hidden lg:block"
            style={{ animationDelay: '0.6s' }}
          >
            <div className="relative">
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
