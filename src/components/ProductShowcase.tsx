import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag, Heart, Star, Eye, Clock, TrendingUp } from 'lucide-react';
import { getFeaturedProducts, Product } from '@/data/products';
import ProductQuickAddModal from '@/components/ProductQuickAddModal';

const ProductShowcase = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 6);
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);
  const [quickAddProduct, setQuickAddProduct] = useState<Product | null>(null);

  // Simulate random stock and viewer counts
  const getStockLevel = (id: number) => Math.floor(Math.random() * 10) + 1;
  const getViewerCount = (id: number) => Math.floor(Math.random() * 25) + 5;

  return (
    <section id="products" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-elegant-dark mb-4">
            Shop Our Collection
          </h2>
          <div className="floral-divider">
            <span className="px-4 text-2xl text-accent">✦</span>
          </div>
          <p className="text-muted-foreground mt-4">Handpicked luxury designer pieces</p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredProducts.map((product) => {
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
                    
                    {/* Price with urgency timer */}
                    <div className="flex items-center justify-between pt-2 border-t border-border">
                      <div className="flex items-baseline gap-2">
                        <span className="text-3xl font-bold text-black font-heading">
                          ${product.price}
                        </span>
                        {product.originalPrice > product.price && (
                          <span className="text-lg text-black/50 line-through font-body">
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

        {/* View All Button */}
        <div className="text-center">
          <Link to="/shop">
            <button className="inline-flex items-center gap-2 px-10 py-5 bg-gradient-to-r from-rose-gold to-blush-dark text-white rounded-xl font-bold shadow-2xl hover:shadow-glow transition-all duration-300 hover:scale-105 text-lg">
              <ShoppingBag className="h-6 w-6" />
              View All Products
            </button>
          </Link>
        </div>
      </div>

      {/* Quick Add Modal */}
      {quickAddProduct && (
        <ProductQuickAddModal
          product={quickAddProduct}
          isOpen={!!quickAddProduct}
          onClose={() => setQuickAddProduct(null)}
        />
      )}
    </section>
  );
};

export default ProductShowcase;
