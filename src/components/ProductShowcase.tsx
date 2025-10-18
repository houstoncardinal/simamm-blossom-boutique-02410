import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, Filter, ArrowUpDown } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = ['All', 'Party Wear', 'Formal Wear', 'Lawn Wear', 'Winter Collection'];
const designers = ['All', 'HR', 'Lulusar', 'Ethnc', 'Sana Safinaz', 'Velvet', 'Pashmina'];

// Sample product data with color variants
const products = [
  { 
    id: 1, 
    name: 'Elegant Party Dress', 
    category: 'Party Wear', 
    designer: 'HR', 
    price: 150, 
    originalPrice: 600, 
    discount: 75,
    colors: ['#FFB6C1', '#DDA0DD', '#87CEEB'],
    popularity: 95
  },
  { 
    id: 2, 
    name: 'Luxury Formal Suit', 
    category: 'Formal Wear', 
    designer: 'Sana Safinaz', 
    price: 200, 
    originalPrice: 800, 
    discount: 75,
    colors: ['#F5DEB3', '#D2B48C', '#CD853F'],
    popularity: 98
  },
  { 
    id: 3, 
    name: 'Summer Lawn Collection', 
    category: 'Lawn Wear', 
    designer: 'Lulusar', 
    price: 45, 
    originalPrice: 180, 
    discount: 75,
    colors: ['#98FB98', '#FFE4E1', '#F0E68C'],
    popularity: 85
  },
  { 
    id: 4, 
    name: 'Winter Velvet Shawl', 
    category: 'Winter Collection', 
    designer: 'Velvet', 
    price: 80, 
    originalPrice: 320, 
    discount: 75,
    colors: ['#8B008B', '#4B0082', '#483D8B'],
    popularity: 90
  },
  { 
    id: 5, 
    name: 'Formal Evening Gown', 
    category: 'Formal Wear', 
    designer: 'Ethnc', 
    price: 175, 
    originalPrice: 700, 
    discount: 75,
    colors: ['#C71585', '#DA70D6', '#BA55D3'],
    popularity: 92
  },
  { 
    id: 6, 
    name: 'Pashmina Winter Set', 
    category: 'Winter Collection', 
    designer: 'Pashmina', 
    price: 120, 
    originalPrice: 480, 
    discount: 75,
    colors: ['#8B4513', '#A0522D', '#D2691E'],
    popularity: 88
  },
];

const ProductShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedDesigner, setSelectedDesigner] = useState('All');
  const [sortBy, setSortBy] = useState('popularity');
  const [selectedColors, setSelectedColors] = useState<Record<number, string>>({});

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'All' || product.category === selectedCategory;
    const designerMatch = selectedDesigner === 'All' || product.designer === selectedDesigner;
    return categoryMatch && designerMatch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'discount':
        return b.discount - a.discount;
      case 'popularity':
      default:
        return b.popularity - a.popularity;
    }
  });

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-elegant-dark mb-4">
            Shop Our Collection
          </h2>
          <div className="floral-divider">
            <span className="px-4 text-2xl text-accent">✦</span>
          </div>
          <p className="text-lg text-muted-foreground mt-4 font-body max-w-2xl mx-auto">
            Handpicked designer wear featuring the finest Pakistani fashion brands
          </p>
        </div>

        {/* Filters and Sorting */}
        <div className="mb-12 space-y-6">
          {/* Sort Dropdown */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ArrowUpDown className="h-4 w-4 text-accent" />
              <h3 className="text-sm font-semibold text-elegant-dark font-body uppercase tracking-wider">
                Sort By
              </h3>
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="popularity">Most Popular</SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="discount">Highest Discount</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {/* Category Filter */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Filter className="h-4 w-4 text-accent" />
              <h3 className="text-sm font-semibold text-elegant-dark font-body uppercase tracking-wider">
                Categories
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={`cursor-pointer transition-all hover-lift ${
                    selectedCategory === category 
                      ? 'bg-accent text-accent-foreground' 
                      : 'hover:bg-accent/10'
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          {/* Designer Filter */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Filter className="h-4 w-4 text-accent" />
              <h3 className="text-sm font-semibold text-elegant-dark font-body uppercase tracking-wider">
                Designer Brands
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {designers.map((designer) => (
                <Badge
                  key={designer}
                  variant={selectedDesigner === designer ? 'default' : 'outline'}
                  className={`cursor-pointer transition-all hover-lift ${
                    selectedDesigner === designer 
                      ? 'bg-accent text-accent-foreground' 
                      : 'hover:bg-accent/10'
                  }`}
                  onClick={() => setSelectedDesigner(designer)}
                >
                  {designer}
                </Badge>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
              <div className="relative aspect-[3/4] bg-gradient-to-br from-blush-light to-secondary overflow-hidden">
                {/* Discount Badge */}
                <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground shadow-glow sparkle-effect">
                  {product.discount}% OFF
                </Badge>
                
                {/* Placeholder for product image */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blush/50 to-accent/30 group-hover:scale-110 transition-transform duration-500">
                  <ShoppingBag className="h-20 w-20 text-accent/30" />
                </div>
              </div>
              
              <CardContent className="p-6 space-y-3">
                <div>
                  <Badge variant="outline" className="mb-2 text-xs">
                    {product.designer}
                  </Badge>
                  <h3 className="font-heading font-semibold text-lg text-elegant-dark mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    {product.category}
                  </p>
                </div>
                
                {/* Color Swatches */}
                <div className="flex items-center gap-2">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColors({ ...selectedColors, [product.id]: color })}
                      className={`h-6 w-6 rounded-full border-2 transition-all hover:scale-110 ${
                        (selectedColors[product.id] || product.colors[0]) === color
                          ? 'border-accent shadow-lg'
                          : 'border-border'
                      }`}
                      style={{ backgroundColor: color }}
                      aria-label={`Select color ${color}`}
                    />
                  ))}
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="text-2xl font-bold text-accent font-heading">
                    ${product.price}
                  </span>
                  <span className="text-sm text-muted-foreground line-through font-body">
                    ${product.originalPrice}
                  </span>
                </div>
                
                <Button variant="luxury" className="w-full group-hover:shadow-glow transition-all hover:scale-105">
                  <ShoppingBag className="h-4 w-4" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-muted-foreground font-body">
              No products found with selected filters.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductShowcase;
