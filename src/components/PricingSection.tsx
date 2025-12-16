import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const pricingPlans = [
  {
    name: 'Starter',
    description: 'Perfect for testing the waters',
    price: '₹149',
    period: 'per video',
    features: [
      '20–25 sec product video',
      'Review / Unboxing style',
      'Amazon & Flipkart ready',
      '48h delivery',
      '1 revision included',
    ],
    popular: false,
    cta: 'Get Started',
  },
  {
    name: 'Pro',
    description: 'Most popular for sellers',
    price: '₹249',
    period: 'per video',
    features: [
      '30–50 sec UGC reel',
      'Instagram & YouTube ready',
      'Trending music & effects',
      '24h priority delivery',
      '2 revisions included',
      'Multi-platform formats',
    ],
    popular: true,
    cta: 'Choose Pro',
  },
  {
    name: 'Premium',
    description: 'For serious advertisers',
    price: '₹399',
    period: 'per video',
    features: [
      '30+ sec ad-ready video',
      'Google, FB, IG ads optimized',
      'Custom hooks & CTAs',
      'Same-day rush delivery',
      'Unlimited revisions',
      'A/B test variations',
    ],
    popular: false,
    cta: 'Go Premium',
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Simple Pricing
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Transparent Pricing, No Surprises
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose the plan that fits your needs. All prices are per video, bulk discounts available.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card
              key={plan.name}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${
                plan.popular
                  ? 'border-accent shadow-accent-glow scale-105 md:scale-110 z-10'
                  : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 bg-accent py-2 text-center">
                  <span className="text-xs font-semibold text-accent-foreground uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className={`text-center ${plan.popular ? 'pt-12' : 'pt-8'}`}>
                <CardTitle className="font-display text-xl mb-2">{plan.name}</CardTitle>
                <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display font-bold text-4xl text-foreground">{plan.price}</span>
                  <span className="text-sm text-muted-foreground">/{plan.period}</span>
                </div>
              </CardHeader>
              
              <CardContent className="pt-6">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button
                  variant={plan.popular ? 'accent' : 'outline'}
                  className="w-full"
                  asChild
                >
                  <a href="#contact">{plan.cta}</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bulk Discount Notice */}
        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground">
            Need bulk videos?{' '}
            <a href="#contact" className="text-accent font-medium hover:underline">
              Contact us for custom pricing
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
