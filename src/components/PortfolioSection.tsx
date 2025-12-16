import { Play } from 'lucide-react';

const portfolioItems = [
  {
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=400&fit=crop',
    title: 'Smart Watch Promo',
    category: 'Electronics',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1560343090-f0409e92791a?w=300&h=400&fit=crop',
    title: 'Sneaker Unboxing',
    category: 'Fashion',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=400&fit=crop',
    title: 'Furniture Showcase',
    category: 'Home Decor',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=300&h=400&fit=crop',
    title: 'Gold Jewelry Ad',
    category: 'Jewelry',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=400&fit=crop',
    title: 'Headphone Review',
    category: 'Electronics',
  },
  {
    thumbnail: 'https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=300&h=400&fit=crop',
    title: 'Skincare Routine',
    category: 'Lifestyle',
  },
];

export function PortfolioSection() {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Our Work
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Portfolio Showcase
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            See how we transform product images into engaging video content that drives sales.
          </p>
        </div>

        {/* Portfolio Grid - Reels Style */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {portfolioItems.map((item, index) => (
            <div
              key={item.title}
              className="group relative aspect-[9/16] rounded-xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Thumbnail */}
              <img
                src={item.thumbnail}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-accent/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100 shadow-accent-glow">
                  <Play className="w-5 h-5 text-accent-foreground fill-current ml-0.5" />
                </div>
              </div>
              
              {/* Info */}
              <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-xs text-accent font-medium">{item.category}</p>
                <p className="text-sm font-medium text-primary-foreground truncate">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
