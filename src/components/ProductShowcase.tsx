import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { ShoppingBag } from 'lucide-react';
import { products } from '@/data/products';
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

const ProductShowcase = () => {
  const featuredProducts = products.slice(0, 6);

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
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {featuredProducts.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <Card className="group overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden">
                  {/* Discount Badge */}
                  {product.isSale && (
                    <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground shadow-glow">
                      {product.discount}% OFF
                    </Badge>
                  )}
                  {product.isNew && (
                    <Badge className="absolute top-4 left-4 z-10 bg-rose-gold text-white">
                      NEW
                    </Badge>
                  )}
                  
                  {/* Product Image */}
                  <img 
                    src={productImages[product.id] || lawnPink} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                
                <CardContent className="p-6 space-y-3">
                  <div>
                    <Badge variant="outline" className="mb-2 text-xs">
                      {product.designer}
                    </Badge>
                    <h3 className="font-heading font-semibold text-lg text-elegant-dark mb-1 line-clamp-2 group-hover:text-accent transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      {product.category}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold text-accent font-heading">
                      ${product.price}
                    </span>
                    {product.originalPrice > product.price && (
                      <span className="text-sm text-muted-foreground line-through font-body">
                        ${product.originalPrice}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Link to="/shop">
            <button className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-accent-foreground rounded-xl font-semibold shadow-elegant hover:shadow-glow transition-all duration-300 hover:scale-105">
              <ShoppingBag className="h-5 w-5" />
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
