import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ChevronRight, Heart, ShoppingBag, Share2, Truck, Shield, RefreshCw } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { getProductById, products } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';
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

const ProductDetail = () => {
  const { id } = useParams();
  const product = getProductById(Number(id));
  const { addItem, setIsCartOpen } = useCart();

  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedImage, setSelectedImage] = useState(0);

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-4xl font-heading font-bold text-elegant-dark mb-4">Product Not Found</h1>
          <p className="text-muted-foreground mb-8">The product you're looking for doesn't exist.</p>
          <Link to="/shop">
            <Button variant="hero">Back to Shop</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      toast.error('Please select color and size');
      return;
    }

    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      originalPrice: product.originalPrice,
      designer: product.designer,
      category: product.category,
      color: selectedColor,
      size: selectedSize,
    });
  };

  const handleBuyNow = () => {
    handleAddToCart();
    setTimeout(() => setIsCartOpen(true), 300);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Breadcrumb */}
      <section className="bg-secondary/50 py-4">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-accent transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to="/shop" className="hover:text-accent transition-colors">Shop</Link>
            <ChevronRight className="h-4 w-4" />
            <Link to={`/shop?category=${product.category}`} className="hover:text-accent transition-colors">
              {product.category}
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-elegant-dark font-medium">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-elegant">
                <img 
                  src={productImages[product.id] || lawnPink} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Badges */}
                {(product.isSale || product.isNew) && (
                  <div className="absolute top-6 right-6 flex flex-col gap-2">
                    {product.isSale && (
                      <Badge className="bg-accent text-accent-foreground shadow-glow text-lg py-2 px-4">
                        {product.discount}% OFF
                      </Badge>
                    )}
                    {product.isNew && (
                      <Badge className="bg-rose-gold text-white text-lg py-2 px-4">NEW</Badge>
                    )}
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              <div className="grid grid-cols-4 gap-4">
                {[1, 2, 3].map((idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-xl overflow-hidden transition-all ${
                      selectedImage === idx
                        ? 'ring-4 ring-accent shadow-glow'
                        : 'opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img 
                      src={productImages[product.id] || lawnPink} 
                      alt={`${product.name} view ${idx}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-8">
              {/* Header */}
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <Badge variant="outline" className="text-sm">
                    {product.designer}
                  </Badge>
                  <div className="flex gap-2">
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Heart className="h-5 w-5" />
                    </Button>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <Share2 className="h-5 w-5" />
                    </Button>
                  </div>
                </div>

                <h1 className="text-4xl md:text-5xl font-heading font-bold text-elegant-dark">
                  {product.name}
                </h1>

                <div className="flex items-center gap-3">
                  <Badge className="bg-rose-gold/20 text-rose-gold border-rose-gold">
                    {product.category}
                  </Badge>
                  <Badge className="bg-blush-light text-elegant-dark border-accent">
                    {product.collection}
                  </Badge>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl font-heading font-bold text-accent">
                    ${product.price}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-2xl text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>

              <Separator />

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {product.tags.map((tag, idx) => (
                  <Badge key={idx} variant="secondary" className="text-sm py-1 px-3">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Color Selection */}
              <div className="space-y-4">
                <label className="text-sm font-semibold text-elegant-dark uppercase tracking-wider">
                  Select Color {selectedColor && `(${selectedColor})`}
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(color)}
                      className={`h-12 w-12 rounded-full border-2 transition-all hover:scale-110 ${
                        selectedColor === color
                          ? 'border-accent shadow-glow ring-4 ring-accent/20'
                          : 'border-border hover:border-accent/50'
                      }`}
                      style={{ backgroundColor: color }}
                      aria-label={`Select color ${color}`}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="space-y-4">
                <label className="text-sm font-semibold text-elegant-dark uppercase tracking-wider">
                  Select Size
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-8 py-4 rounded-xl border-2 font-semibold transition-all hover:scale-105 ${
                        selectedSize === size
                          ? 'border-accent bg-accent text-accent-foreground shadow-glow'
                          : 'border-border hover:border-accent/50'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full text-lg py-6"
                  onClick={handleBuyNow}
                >
                  <ShoppingBag className="h-5 w-5" />
                  Buy Now
                </Button>
                <Button
                  variant="luxury"
                  size="lg"
                  className="w-full text-lg py-6"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
              </div>

              {/* Features */}
              <div className="grid grid-cols-3 gap-4 pt-4">
                <div className="text-center space-y-2">
                  <Truck className="h-8 w-8 text-accent mx-auto" />
                  <p className="text-xs text-muted-foreground">Free Shipping</p>
                </div>
                <div className="text-center space-y-2">
                  <Shield className="h-8 w-8 text-accent mx-auto" />
                  <p className="text-xs text-muted-foreground">Authentic Products</p>
                </div>
                <div className="text-center space-y-2">
                  <RefreshCw className="h-8 w-8 text-accent mx-auto" />
                  <p className="text-xs text-muted-foreground">Easy Returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Information */}
          <div className="mt-16">
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="w-full justify-start border-b rounded-none h-auto p-0 bg-transparent">
                <TabsTrigger
                  value="description"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent"
                >
                  Description
                </TabsTrigger>
                <TabsTrigger
                  value="specifications"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent"
                >
                  Specifications
                </TabsTrigger>
                <TabsTrigger
                  value="care"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent"
                >
                  Care Instructions
                </TabsTrigger>
                <TabsTrigger
                  value="designer"
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:bg-transparent"
                >
                  Designer Info
                </TabsTrigger>
              </TabsList>

              <TabsContent value="description" className="py-8">
                <div className="prose max-w-none">
                  <h3 className="font-heading text-2xl font-bold text-elegant-dark mb-4">
                    Product Description
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    {product.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Handcrafted Pakistani designer wear featuring intricate embroidery and premium fabrics. 
                    Each piece is carefully selected to bring you authentic luxury fashion. Perfect for special 
                    occasions and celebrations, this collection represents the finest in South Asian couture.
                  </p>
                  {product.specialNotes && (
                    <div className="mt-6 p-6 bg-blush-light rounded-xl border border-accent/20">
                      <h4 className="font-semibold text-elegant-dark mb-2">Special Notes:</h4>
                      <p className="text-muted-foreground">{product.specialNotes}</p>
                    </div>
                  )}
                </div>
              </TabsContent>

              <TabsContent value="specifications" className="py-8">
                <div className="bg-card rounded-2xl overflow-hidden shadow-soft">
                  <div className="grid md:grid-cols-2 gap-px bg-border">
                    {product.specifications.map((spec, idx) => (
                      <div key={idx} className="bg-background p-6">
                        <dt className="font-semibold text-elegant-dark mb-2">{spec.label}</dt>
                        <dd className="text-muted-foreground">{spec.value}</dd>
                      </div>
                    ))}
                    <div className="bg-background p-6">
                      <dt className="font-semibold text-elegant-dark mb-2">Fabric</dt>
                      <dd className="text-muted-foreground">{product.fabric}</dd>
                    </div>
                    <div className="bg-background p-6">
                      <dt className="font-semibold text-elegant-dark mb-2">Designer</dt>
                      <dd className="text-muted-foreground">{product.designer}</dd>
                    </div>
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="care" className="py-8">
                <div className="prose max-w-none">
                  <h3 className="font-heading text-2xl font-bold text-elegant-dark mb-6">
                    Care Instructions
                  </h3>
                  <ul className="space-y-4 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">✦</span>
                      <span>Dry clean recommended for best results and longevity</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">✦</span>
                      <span>If hand washing, use cold water with mild detergent</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">✦</span>
                      <span>Do not bleach or use harsh chemicals</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">✦</span>
                      <span>Iron on low heat with a pressing cloth</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">✦</span>
                      <span>Store in a cool, dry place away from direct sunlight</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-accent mt-1">✦</span>
                      <span>Hang embroidered pieces to prevent creasing</span>
                    </li>
                  </ul>
                </div>
              </TabsContent>

              <TabsContent value="designer" className="py-8">
                <div className="prose max-w-none">
                  <h3 className="font-heading text-2xl font-bold text-elegant-dark mb-4">
                    About {product.designer}
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {product.designer} is renowned for creating exceptional Pakistani designer wear that 
                    blends traditional craftsmanship with contemporary aesthetics. Each collection showcases 
                    meticulous attention to detail, premium fabrics, and timeless elegance.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-4">
                    With years of expertise in the fashion industry, {product.designer} has become a trusted 
                    name for luxury South Asian couture, celebrated for innovative designs and impeccable quality.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <h2 className="text-3xl font-heading font-bold text-elegant-dark mb-8 text-center">
                You May Also Like
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(relatedProduct => (
                  <Link
                    key={relatedProduct.id}
                    to={`/product/${relatedProduct.id}`}
                    className="group"
                  >
                    <div className="bg-card rounded-2xl overflow-hidden shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <img 
                          src={productImages[relatedProduct.id] || lawnPink} 
                          alt={relatedProduct.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 space-y-2">
                        <Badge variant="outline" className="text-xs">
                          {relatedProduct.designer}
                        </Badge>
                        <h3 className="font-heading text-sm font-bold text-elegant-dark line-clamp-2 group-hover:text-accent transition-colors">
                          {relatedProduct.name}
                        </h3>
                        <p className="text-xl font-heading font-bold text-accent">
                          ${relatedProduct.price}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default ProductDetail;
