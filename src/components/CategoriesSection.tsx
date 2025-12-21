import { useState } from 'react';

const categories = [
  { name: 'Handicraft', image: 'https://images.unsplash.com/photo-1606722590583-6951b5ea92ad?w=400&h=500&fit=crop' },
  { name: 'Home Decor', image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?w=400&h=500&fit=crop' },
  { name: 'Fashion', image: 'https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=500&fit=crop' },
  { name: 'Electronics', image: 'https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=500&fit=crop' },
  { name: 'Jewelry', image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=500&fit=crop' },
  { name: 'Pottery', image: 'https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=400&h=500&fit=crop' },
  { name: 'Lifestyle', image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop' },
];

export function CategoriesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-24 gradient-hero">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-3">
            Categories We Cover
          </p>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-4">
            Videos for Every Product Category
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From traditional handicrafts to modern electronics, we create stunning videos for all types of products.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {categories.map((category, index) => (
            <div
              key={category.name}
              className="group relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Image */}
              <img
                src={category.image}
                alt={category.name}
                className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 ${
                  hoveredIndex === index ? 'scale-110' : 'scale-100'
                }`}
              />
              
              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/20 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-80'
                }`}
              />
              
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-5">
                <h3
                  className={`font-display font-bold text-foreground text-lg transition-transform duration-300 ${
                    hoveredIndex === index ? 'translate-y-0' : 'translate-y-2'
                  }`}
                >
                  {category.name}
                </h3>
                <p
                  className={`text-sm text-accent mt-1 transition-all duration-300 ${
                    hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                  }`}
                >
                  View samples →
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
