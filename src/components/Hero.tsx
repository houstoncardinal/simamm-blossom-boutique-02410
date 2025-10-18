import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Sparkles, ShoppingBag, Heart, Star, TrendingUp, Award, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';
import { getFeaturedProducts } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
import heroBackground from '@/assets/hero-floral-bg.jpg';
const FloatingPetals = () => {
  return <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(15)].map((_, i) => <div key={i} className="absolute text-2xl animate-float opacity-40" style={{
      left: `${Math.random() * 100}%`,
      top: `-10%`,
      animationDelay: `${Math.random() * 5}s`,
      animationDuration: `${10 + Math.random() * 10}s`
    }}>
          🌸
        </div>)}
    </div>;
};
const Hero = () => {
  const featuredProducts = getFeaturedProducts().slice(0, 2);
  return <section id="home" className="relative min-h-screen flex items-center justify-center py-20">
      {/* Background with enhanced pink/white overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{
      backgroundImage: `url(${heroBackground})`
    }}>
        <div className="absolute inset-0 bg-gradient-to-br from-white/95 via-blush/60 to-white/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(248,216,212,0.4),transparent)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-blush-light/30 to-transparent" />
      </div>
      
      <FloatingPetals />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Store Branding & CTA */}
          <div className="space-y-8 animate-fade-in">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-white/95 backdrop-blur-md border-2 border-rose-gold rounded-full px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
              <Award className="h-3 w-3 sm:h-4 sm:w-4 text-rose-gold flex-shrink-0" />
              <span className="text-[10px] sm:text-sm font-bold text-elegant-dark tracking-wide whitespace-nowrap">AWARD-WINNING DESIGNER COLLECTIONS</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight text-elegant-dark">
                  <span className="drop-shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
                    SIMAMM
                  </span>
                  <span className="ml-3 md:ml-4 drop-shadow-[0_4px_16px_rgba(0,0,0,0.15)]">
                    Boutique
                  </span>
                </h1>
                <p className="text-lg md:text-xl font-body text-elegant-dark/60 font-medium">
                  Where Heritage Meets Haute Couture
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="h-px flex-1 bg-gradient-to-r from-rose-gold/50 to-transparent" />
                <Sparkles className="h-6 w-6 text-rose-gold" />
                <div className="h-px flex-1 bg-gradient-to-l from-rose-gold/50 to-transparent" />
              </div>
            </div>

            <p className="text-xl md:text-2xl font-body text-elegant-dark leading-relaxed max-w-xl">
              Premium Pakistani fashion curated by <span className="font-bold text-rose-gold">Sobia Anis Allahrakha</span>. Featuring exclusive designer collections from Sana Safinaz, Maria B, Elan, and more. Authentic lawn, formal, and bridal pieces delivered to your door in Texas.
            </p>

            {/* Store Features */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-elegant border border-rose-gold/20 hover:border-rose-gold/40 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-gold/20 to-rose-gold/40 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Star className="h-6 w-6 text-rose-gold" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-bold text-elegant-dark">30+</p>
                    <p className="text-xs text-muted-foreground font-semibold">Designer Pieces</p>
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-rose-gold/10 to-blush-dark/20 backdrop-blur-sm rounded-2xl p-5 shadow-elegant border border-rose-gold/30 hover:border-rose-gold/50 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-gold/30 to-rose-gold/50 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <TrendingUp className="h-6 w-6 text-elegant-dark" />
                  </div>
                  <div>
                    <p className="text-2xl font-heading font-bold text-elegant-dark">25%</p>
                    <p className="text-xs text-elegant-dark/70 font-semibold">Avg. Savings</p>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button variant="hero" size="lg" asChild className="group relative overflow-hidden shadow-xl hover:shadow-2xl">
                <Link to="/shop">
                  <span className="relative z-10 flex items-center gap-2 text-base">
                    Explore Collection
                    <Sparkles className="h-5 w-5 group-hover:rotate-12 transition-transform" />
                  </span>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="bg-white/80 hover:bg-white border-2 border-elegant-dark hover:border-rose-gold transition-all shadow-lg text-elegant-dark font-semibold">
                <a href="#event">
                  View Event Sale
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Featured Products */}
          <div className="space-y-6 animate-fade-in">
            {/* Featured Products Header */}
            <div className="flex items-center justify-between">
              <h2 className="font-heading font-bold text-elegant-dark md:text-sm text-sm">
                Featured Products
              </h2>
              <Link to="/shop" className="text-sm font-semibold text-rose-gold hover:text-rose-gold/80 transition-colors flex items-center gap-1 group">
                View More
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {featuredProducts.map(product => <Link key={product.id} to={`/product/${product.id}`} className="group">
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl overflow-hidden shadow-elegant border border-rose-gold/20 hover:border-rose-gold/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
                  {/* Product Image */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img src={product.images[0]} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    
                    {/* Badges */}
                    <div className="absolute top-3 right-3 flex flex-col gap-1">
                      {product.isNew && <Badge className="bg-gradient-to-r from-rose-gold to-blush-dark text-white text-xs py-1 px-2 shadow-lg border-0">
                          NEW
                        </Badge>}
                      {product.isSale && <Badge className="bg-elegant-dark text-white text-xs py-1 px-2 shadow-lg">
                          {product.discount}%
                        </Badge>}
                    </div>

                    {/* Wishlist */}
                    <button onClick={e => {
                    e.preventDefault();
                    e.stopPropagation();
                  }} className="absolute top-3 left-3 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-lg hover:scale-110">
                      <Heart className="h-3 w-3 text-rose-gold" />
                    </button>

                    {/* Quick View Overlay */}
                    <div className="absolute inset-0 bg-elegant-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <ShoppingBag className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4 space-y-2">
                    <Badge className="bg-blush-dark/20 text-rose-gold border-rose-gold/30 text-[10px] px-2 py-0.5">
                      {product.designer}
                    </Badge>
                    
                    <h3 className="text-sm font-heading font-bold text-elegant-dark line-clamp-2 group-hover:text-rose-gold transition-colors leading-tight">
                      {product.name}
                    </h3>

                    {/* 5-Star Rating */}
                    <div className="flex items-center gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-2.5 w-2.5 fill-rose-gold text-rose-gold" />)}
                    </div>

                    {/* Price */}
                    <div className="flex items-baseline gap-2">
                      <span className="text-lg font-heading font-bold text-black">
                        ${product.price}
                      </span>
                      {product.originalPrice > product.price && <span className="text-xs text-black/50 line-through">
                          ${product.originalPrice}
                        </span>}
                    </div>
                  </div>
                </div>
              </Link>)}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Indicators Marquee - Positioned at bottom */}
      <div className="absolute bottom-0 left-0 right-0 w-screen z-20" style={{
      marginLeft: 'calc(-50vw + 50%)'
    }}>
        <div className="relative overflow-hidden backdrop-blur-2xl bg-gradient-to-br from-blush/40 via-rose-gold/20 to-white/40 py-3 border-y border-rose-gold/40">
            {/* Marquee content */}
            <div className="flex animate-marquee whitespace-nowrap">
              {[...Array(3)].map((_, i) => <div key={i} className="flex items-center text-sm font-semibold text-elegant-dark">
                  <span className="mx-8 flex items-center gap-2">
                    <Shield className="h-4 w-4 text-rose-gold" />
                    100% Authentic Designer Pieces
                  </span>
                  <span className="mx-8 flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-rose-gold" />
                    Premium Quality Fabrics
                  </span>
                  <span className="mx-8 flex items-center gap-2">
                    <Star className="h-4 w-4 text-rose-gold" />
                    Curated by Top Designers
                  </span>
                  <span className="mx-8 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-rose-gold" />
                    Fast Shipping to Texas
                  </span>
                  <span className="mx-8 flex items-center gap-2">
                    <Award className="h-4 w-4 text-rose-gold" />
                    Award-Winning Collections
                  </span>
                  <span className="mx-8 flex items-center gap-2">
                    <Heart className="h-4 w-4 text-rose-gold" />
                    Handpicked with Love
                  </span>
                </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;