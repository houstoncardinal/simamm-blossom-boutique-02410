import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const categories = [
  {
    id: 1,
    name: 'Party Wear',
    description: 'Glamorous outfits for special occasions',
    image: 'linear-gradient(135deg, hsl(350 70% 75%) 0%, hsl(340 60% 60%) 100%)',
  },
  {
    id: 2,
    name: 'Formal Wear',
    description: 'Elegant suits and formal attire',
    image: 'linear-gradient(135deg, hsl(20 45% 70%) 0%, hsl(30 50% 55%) 100%)',
  },
  {
    id: 3,
    name: 'Lawn / Casual',
    description: 'Comfortable everyday wear',
    image: 'linear-gradient(135deg, hsl(8 70% 85%) 0%, hsl(8 60% 75%) 100%)',
  },
  {
    id: 4,
    name: 'Winter Collection',
    description: 'Luxurious velvet and pashmina',
    image: 'linear-gradient(135deg, hsl(280 40% 60%) 0%, hsl(260 50% 45%) 100%)',
  },
];

const FeaturedCategories = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-blush-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-elegant-dark mb-4">
            Shop by Category
          </h2>
          <div className="floral-divider">
            <span className="px-4 text-2xl text-accent">✦</span>
          </div>
          <p className="text-lg text-muted-foreground mt-4 font-body max-w-2xl mx-auto">
            Explore our curated collections of designer Pakistani fashion
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <Card
              key={category.id}
              className="group overflow-hidden border-2 border-transparent hover:border-accent transition-all duration-500 hover:shadow-glow hover:-translate-y-3 cursor-pointer"
            >
              <div
                className="h-64 relative overflow-hidden"
                style={{ background: category.image }}
              >
                <div className="absolute inset-0 bg-elegant-dark/20 group-hover:bg-elegant-dark/10 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-elegant-dark/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl font-heading font-bold text-white mb-2">
                    {category.name}
                  </h3>
                  <p className="text-white/90 text-sm font-body mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {category.description}
                  </p>
                  <Button
                    variant="hero"
                    size="sm"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
