import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileToolbar from '@/components/MobileToolbar';
import { products, Product } from '@/data/products';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Slider } from '@/components/ui/slider';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, Heart, SlidersHorizontal, Star, Eye, Clock, TrendingUp } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import ProductQuickAddModal from '@/components/ProductQuickAddModal';


const Shop = () => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedDesigners, setSelectedDesigners] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 500]);
  const [showSale, setShowSale] = useState(false);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [quickAddProduct, setQuickAddProduct] = useState<Product | null>(null);

  // Urgency indicators
  const getStockLevel = (id: number) => Math.floor(Math.random() * 10) + 1;
  const getViewerCount = (id: number) => Math.floor(Math.random() * 25) + 5;

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
              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
                {filteredProducts.map(product => {
                  const stockLevel = getStockLevel(product.id);
                  const viewerCount = getViewerCount(product.id);
                  const isLowStock = stockLevel <= 3;

                  return (
                    <Link
                      key={product.id}
                      to={`/product/${product.id}`}
                      onMouseEnter={() => setHoveredProduct(product.id)}
                      onMouseLeave={() => setHoveredProduct(null)}
                    >
                      <Card className="group overflow-hidden shadow-soft hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 cursor-pointer border-2 border-transparent hover:border-rose-gold/30">
                        <div className="relative aspect-[3/4] overflow-hidden bg-gradient-to-br from-blush-light/20 to-rose-gold/10">
                          {/* Urgency Badges */}
                          <div className="absolute top-4 right-4 z-10 flex flex-col gap-2">
                            {product.isSale && (
                              <Badge className="bg-gradient-to-r from-rose-gold to-blush-dark text-white shadow-xl backdrop-blur-sm border-0 animate-pulse">
                                {product.discount}% OFF
                              </Badge>
                            )}
                            {product.isNew && (
                              <Badge className="bg-elegant-dark text-white shadow-xl">
                                NEW
                              </Badge>
                            )}
                            {isLowStock && (
                              <Badge className="bg-red-500 text-white shadow-xl flex items-center gap-1 animate-bounce">
                                <TrendingUp className="h-3 w-3" />
                                Only {stockLevel} left!
                              </Badge>
                            )}
                          </div>

                          {/* Viewer Count */}
                          <div className="absolute top-4 left-4 z-10">
                            <Badge className="bg-white/95 backdrop-blur-sm text-elegant-dark border border-rose-gold/30 shadow-lg flex items-center gap-1">
                              <Eye className="h-3 w-3 text-rose-gold" />
                              {viewerCount} viewing
                            </Badge>
                          </div>
                          
                          {/* Product Image */}
                          <img 
                            src={product.images[0]} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          
                          {/* Quick Actions Overlay */}
                          <div className={`absolute inset-0 bg-gradient-to-t from-elegant-dark/90 via-elegant-dark/40 to-transparent transition-opacity duration-300 ${
                            hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                          }`}>
                            <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                              <button 
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  setQuickAddProduct(product);
                                }}
                                className="flex-1 bg-white text-elegant-dark py-3 rounded-xl font-bold hover:bg-rose-gold hover:text-white transition-all shadow-xl flex items-center justify-center gap-2"
                              >
                                <ShoppingBag className="h-4 w-4" />
                                Quick Add
                              </button>
                              <button 
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                }}
                                className="p-3 bg-white/90 rounded-xl hover:bg-white hover:scale-110 transition-all shadow-xl"
                              >
                                <Heart className="h-5 w-5 text-rose-gold" />
                              </button>
                            </div>
                          </div>
                        </div>
                        
                        <CardContent className="p-6 space-y-4 bg-gradient-to-br from-white to-blush-light/10">
                          {/* Brand Badge */}
                          <div className="flex items-center justify-between">
                            <Badge className="bg-rose-gold/10 text-rose-gold border-rose-gold/30 font-semibold">
                              {product.designer}
                            </Badge>
                            {/* 5-Star Rating */}
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-3.5 w-3.5 fill-rose-gold text-rose-gold" />
                              ))}
                            </div>
                          </div>

                          {/* Product Name */}
                          <h3 className="font-heading font-bold text-xl text-elegant-dark line-clamp-2 group-hover:text-rose-gold transition-colors leading-tight">
                            {product.name}
                          </h3>

                          {/* Description Excerpt */}
                          <p className="text-sm text-muted-foreground font-body line-clamp-2 leading-relaxed">
                            {product.description}
                          </p>

                          {/* Category & Collection */}
                          <div className="flex items-center gap-2 text-xs text-elegant-dark/60">
                            <span className="font-semibold">{product.category}</span>
                            <span>•</span>
                            <span>{product.collection}</span>
                          </div>

                          {/* Color Swatches */}
                          <div className="flex items-center gap-2">
                            <span className="text-xs text-elegant-dark font-semibold uppercase tracking-wider">Colors:</span>
                            <div className="flex gap-1.5">
                              {product.colors.slice(0, 4).map((color, idx) => (
                                <div
                                  key={idx}
                                  className="h-6 w-6 rounded-full border-2 border-white shadow-md ring-1 ring-border hover:scale-125 transition-transform cursor-pointer"
                                  style={{ backgroundColor: color }}
                                  title={color}
                                />
                              ))}
                              {product.colors.length > 4 && (
                                <div className="h-6 w-6 rounded-full border-2 border-border bg-blush-light flex items-center justify-center text-[10px] font-bold text-elegant-dark">
                                  +{product.colors.length - 4}
                                </div>
                              )}
                            </div>
                          </div>
                          
                          {/* Price with urgency timer - BLACK TEXT */}
                          <div className="flex items-center justify-between pt-2 border-t border-border">
                            <div className="flex items-baseline gap-2">
                              <span className="text-3xl font-bold text-elegant-dark font-heading">
                                ${product.price}
                              </span>
                              {product.originalPrice > product.price && (
                                <span className="text-lg text-muted-foreground line-through font-body">
                                  ${product.originalPrice}
                                </span>
                              )}
                            </div>
                            {product.isSale && (
                              <div className="flex items-center gap-1 text-xs text-red-600 font-semibold bg-red-50 px-2 py-1 rounded-lg">
                                <Clock className="h-3 w-3" />
                                2h left
                              </div>
                            )}
                          </div>

                          {/* Savings Badge */}
                          {product.originalPrice > product.price && (
                            <div className="bg-gradient-to-r from-rose-gold/10 to-blush-dark/10 border border-rose-gold/30 rounded-lg p-2 text-center">
                              <p className="text-xs font-bold text-rose-gold">
                                Save ${(product.originalPrice - product.price).toFixed(0)} • {product.discount}% Off
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </Link>
                  );
                })}
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
      <MobileToolbar />

      {/* Quick Add Modal */}
      {quickAddProduct && (
        <ProductQuickAddModal
          product={quickAddProduct}
          isOpen={!!quickAddProduct}
          onClose={() => setQuickAddProduct(null)}
        />
      )}
    </div>
  );
};

export default Shop;
