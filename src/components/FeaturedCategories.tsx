import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import partyBg from '@/assets/categories/party-bg.jpg';
import formalBg from '@/assets/categories/formal-bg.jpg';
import lawnBg from '@/assets/categories/lawn-bg.jpg';
import winterBg from '@/assets/categories/winter-bg.jpg';
import bridalBg from '@/assets/categories/bridal-bg.jpg';

const categories = [
  {
    id: 1,
    name: 'Party Wear',
    description: 'Glamorous outfits for special occasions',
    image: partyBg,
    href: '/shop?category=Party Wear',
  },
  {
    id: 2,
    name: 'Formal Wear',
    description: 'Elegant suits and formal attire',
    image: formalBg,
    href: '/shop?category=Formal',
  },
  {
    id: 3,
    name: 'Lawn / Casual',
    description: 'Comfortable everyday wear',
    image: lawnBg,
    href: '/shop?category=Lawn',
  },
  {
    id: 4,
    name: 'Winter Collection',
    description: 'Luxurious velvet and pashmina',
    image: winterBg,
    href: '/shop?category=Winter',
  },
  {
    id: 5,
    name: 'Bridal',
    description: 'Exquisite bridal couture',
    image: bridalBg,
    href: '/shop?category=Bridal',
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Link key={category.id} to={category.href}>
              <Card className="group overflow-hidden border-2 border-transparent hover:border-accent transition-all duration-500 hover:shadow-glow hover:-translate-y-3 cursor-pointer">
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={category.image} 
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-elegant-dark/40 group-hover:bg-elegant-dark/20 transition-all duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-elegant-dark/90 via-elegant-dark/40 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-heading font-bold text-white mb-2">
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
