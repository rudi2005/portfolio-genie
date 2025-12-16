import { Zap, Clock, IndianRupee, Target, Package, Sparkles } from 'lucide-react';

const reasons = [
  {
    icon: Sparkles,
    title: 'AI-Powered Visuals',
    description: 'Hyper-realistic product videos created using cutting-edge AI technology.',
  },
  {
    icon: Clock,
    title: 'Fast Delivery',
    description: 'Get your videos within 24-48 hours. Rush delivery available.',
  },
  {
    icon: IndianRupee,
    title: 'Affordable Pricing',
    description: 'Premium quality videos starting at just ₹149. No hidden costs.',
  },
  {
    icon: Target,
    title: 'Perfect for Ads',
    description: 'Optimized for Amazon, Flipkart listings and paid ad campaigns.',
  },
  {
    icon: Package,
    title: 'No Shipping Required',
    description: 'Just send product images. We handle everything digitally.',
  },
  {
    icon: Zap,
    title: 'Multi-Platform Ready',
    description: 'Videos formatted for reels, stories, listings and ads.',
  },
];

export function WhyChooseSection() {
  return (
    <section className="py-24 gradient-hero">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Why Us
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Why Choose AI Video?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We combine cutting-edge AI with creative expertise to deliver videos that actually sell.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={reason.title}
              className="group p-6 rounded-xl bg-card shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <reason.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display font-bold text-lg text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
