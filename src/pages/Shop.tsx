import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { products } from '@/data/products';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { ShoppingBag, Heart, SlidersHorizontal } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import lawnPink from '@/assets/products/lawn-pink.jpg';
import formalRed from '@/assets/products/formal-red.jpg';
import partyGold from '@/assets/products/party-gold.jpg';
import winterVelvet from '@/assets/products/winter-velvet.jpg';
import bridalRed from '@/assets/products/bridal-red.jpg';
import lawnMint from '@/assets/products/lawn-mint.jpg';
import formalWhite from '@/assets/products/formal-white.jpg';
import partyPink from '@/assets/products/party-pink.jpg';
import lawnBlue from '@/assets/products/lawn-blue.jpg';
import winterEmerald from '@/assets/products/winter-emerald.jpg';

const productImages: Record<number, string> = {
  1: lawnPink,
  2: formalRed,
  3: lawnMint,
  4: winterVelvet,
  5: formalWhite,
  6: winterEmerald,
  7: partyGold,
  8: partyPink,
  9: partyGold,
  10: winterVelvet,
  11: winterEmerald,
  12: lawnBlue,
  13: lawnMint,
  14: bridalRed,
  15: lawnPink,
  16: formalWhite,
  17: partyGold,
  18: winterEmerald,
  19: lawnBlue,
  20: partyPink,
};

const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDesigners, setSelectedDesigners] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
  const [showSale, setShowSale] = useState(false);

  const categories = ['Lawn', 'Formal', 'Party Wear', 'Winter', 'Bridal', 'Accessories'];
  const designers = ['Lulusar', 'Ethnc', 'HR', 'Sana Safinaz', 'Elan', 'Maria B'];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(product.category);
    const designerMatch = selectedDesigners.length === 0 || selectedDesigners.includes(product.designer);
    const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
    const saleMatch = !showSale || product.isSale;
    return categoryMatch && designerMatch && priceMatch && saleMatch;
  });

  const toggleCategory = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category) ? prev.filter(c => c !== category) : [...prev, category]
    );
  };

  const toggleDesigner = (designer: string) => {
    setSelectedDesigners(prev =>
      prev.includes(designer) ? prev.filter(d => d !== designer) : [...prev, designer]
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedDesigners([]);
    setPriceRange([0, 500]);
    setShowSale(false);
  };

  const FilterContent = () => (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <h3 className="font-heading text-lg font-bold text-elegant-dark">Filters</h3>
        <Button variant="ghost" size="sm" onClick={clearFilters}>
          Clear All
        </Button>
      </div>

      {/* Category Filter */}
      <div className="space-y-4">
        <h4 className="font-semibold text-elegant-dark uppercase tracking-wider text-sm">Category</h4>
        {categories.map(category => (
          <div key={category} className="flex items-center space-x-3">
            <Checkbox
              id={`category-${category}`}
              checked={selectedCategories.includes(category)}
              onCheckedChange={() => toggleCategory(category)}
            />
            <label
              htmlFor={`category-${category}`}
              className="text-sm cursor-pointer hover:text-accent transition-colors"
            >
              {category}
            </label>
          </div>
        ))}
      </div>

      {/* Designer Filter */}
      <div className="space-y-4">
        <h4 className="font-semibold text-elegant-dark uppercase tracking-wider text-sm">Designer</h4>
        {designers.map(designer => (
          <div key={designer} className="flex items-center space-x-3">
            <Checkbox
              id={`designer-${designer}`}
              checked={selectedDesigners.includes(designer)}
              onCheckedChange={() => toggleDesigner(designer)}
            />
            <label
              htmlFor={`designer-${designer}`}
              className="text-sm cursor-pointer hover:text-accent transition-colors"
            >
              {designer}
            </label>
          </div>
        ))}
      </div>

      {/* Price Range */}
      <div className="space-y-4">
        <h4 className="font-semibold text-elegant-dark uppercase tracking-wider text-sm">Price Range</h4>
        <div className="pt-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={500}
            step={10}
            className="mb-4"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      {/* Sale Filter */}
      <div className="space-y-4">
        <div className="flex items-center space-x-3">
          <Checkbox
            id="sale-only"
            checked={showSale}
            onCheckedChange={(checked) => setShowSale(checked as boolean)}
          />
          <label htmlFor="sale-only" className="text-sm cursor-pointer hover:text-accent transition-colors">
            Sale Items Only
          </label>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Header */}
      <section className="relative py-16 bg-gradient-to-br from-blush-light to-accent/20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-elegant-dark mb-4 animate-fade-in">
            Luxury Collection
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up">
            Discover exquisite Pakistani designer wear. Timeless elegance meets modern style.
          </p>
        </div>
      </section>

      {/* Shop Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex gap-8">
            {/* Desktop Sidebar */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-24 bg-card rounded-2xl p-6 shadow-soft">
                <FilterContent />
              </div>
            </aside>

            {/* Main Content */}
            <div className="flex-1">
              {/* Mobile Filter Button */}
              <div className="lg:hidden mb-6 flex justify-between items-center">
                <p className="text-muted-foreground">{filteredProducts.length} Products</p>
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm">
                      <SlidersHorizontal className="h-4 w-4 mr-2" />
                      Filters
                    </Button>
                  </SheetTrigger>
                  <SheetContent side="left" className="w-80">
                    <SheetHeader>
                      <SheetTitle>Filters</SheetTitle>
                    </SheetHeader>
                    <div className="mt-6">
                      <FilterContent />
                    </div>
                  </SheetContent>
                </Sheet>
              </div>

              {/* Products Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredProducts.map(product => (
                  <Link
                    key={product.id}
                    to={`/product/${product.id}`}
                    className="group"
                  >
                    <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
                      {/* Image */}
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <img 
                          src={productImages[product.id] || lawnPink} 
                          alt={product.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />

                        {/* Badges */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2">
                          {product.isSale && (
                            <Badge className="bg-accent text-accent-foreground shadow-glow">
                              {product.discount}% OFF
                            </Badge>
                          )}
                          {product.isNew && (
                            <Badge className="bg-rose-gold text-white">NEW</Badge>
                          )}
                        </div>

                        {/* Wishlist */}
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                          }}
                          className="absolute top-4 left-4 p-2 bg-white/80 backdrop-blur-sm rounded-full hover:bg-white transition-colors"
                        >
                          <Heart className="h-4 w-4 text-accent" />
                        </button>
                      </div>

                      {/* Info */}
                      <div className="p-6 space-y-3">
                        <Badge variant="outline" className="text-xs">
                          {product.designer}
                        </Badge>
                        <h3 className="font-heading text-lg font-bold text-elegant-dark group-hover:text-accent transition-colors line-clamp-2">
                          {product.name}
                        </h3>
                        <p className="text-sm text-muted-foreground">{product.category}</p>

                        {/* Price */}
                        <div className="flex items-baseline gap-2">
                          <span className="text-2xl font-heading font-bold text-accent">
                            ${product.price}
                          </span>
                          {product.originalPrice > product.price && (
                            <span className="text-sm text-muted-foreground line-through">
                              ${product.originalPrice}
                            </span>
                          )}
                        </div>

                        {/* Colors */}
                        <div className="flex gap-2">
                          {product.colors.slice(0, 4).map((color, idx) => (
                            <div
                              key={idx}
                              className="w-6 h-6 rounded-full border-2 border-border"
                              style={{ backgroundColor: color }}
                            />
                          ))}
                          {product.colors.length > 4 && (
                            <div className="w-6 h-6 rounded-full border-2 border-border bg-muted flex items-center justify-center text-xs text-muted-foreground">
                              +{product.colors.length - 4}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>

              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <ShoppingBag className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-heading font-bold text-elegant-dark mb-2">
                    No Products Found
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Try adjusting your filters to see more results.
                  </p>
                  <Button onClick={clearFilters} variant="hero">
                    Clear Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Shop;
