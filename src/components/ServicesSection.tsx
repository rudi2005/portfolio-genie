import { ShoppingCart, Video, Megaphone, Check } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const services = [
  {
    icon: ShoppingCart,
    title: 'E-commerce Product Videos',
    subtitle: 'Amazon, Flipkart, Myntra & Others',
    items: [
      { name: '20–25 sec Review / Unboxing', price: '₹149' },
      { name: '50 sec & above', price: '₹199' },
    ],
    popular: false,
  },
  {
    icon: Video,
    title: 'UGC Style Short Videos',
    subtitle: 'Instagram Reels & Shorts',
    items: [
      { name: '20–30 sec Reel', price: '₹249' },
      { name: '50 sec & above', price: '₹299' },
    ],
    popular: true,
  },
  {
    icon: Megaphone,
    title: 'Paid Ads Video Creation',
    subtitle: 'Google | Facebook | Instagram Ads',
    items: [
      { name: '20–30 sec Ad Video', price: '₹299–₹399' },
    ],
    popular: false,
  },
];

const includes = [
  'Any category | Any product',
  'Realistic UGC / demo-style presentation',
  'Optimized for e-commerce & ads',
  'Reusable across multiple platforms',
];

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Our Services
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            📄 Quotation – Product Video Services
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Applicable for Any Category | Any Product
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`relative overflow-hidden transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1 ${
                service.popular ? 'border-accent shadow-accent-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 text-xs font-semibold text-accent-foreground bg-accent rounded-full">
                    Popular
                  </span>
                </div>
              )}
              <CardHeader className="pb-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="font-display text-xl">{service.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{service.subtitle}</p>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {service.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between py-3 border-b border-border last:border-0"
                    >
                      <span className="text-sm text-foreground">{item.name}</span>
                      <span className="font-display font-bold text-accent">{item.price}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* What's Included */}
        <div className="max-w-2xl mx-auto">
          <h3 className="font-display font-bold text-xl text-center text-foreground mb-8">
            What's Included
          </h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {includes.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 p-4 rounded-lg bg-secondary/50"
              >
                <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-accent" />
                </div>
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
