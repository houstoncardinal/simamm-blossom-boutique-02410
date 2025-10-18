import { useState } from 'react';
import { X, ShoppingBag, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';

interface Product {
  id: number;
  name: string;
  category: string;
  designer: string;
  price: number;
  originalPrice: number;
  discount: number;
  colors: string[];
  popularity: number;
}

interface ProductQuickViewProps {
  product: Product | null;
  onClose: () => void;
}

const sizes = ['S', 'M', 'L', 'XL', 'XXL'];

const ProductQuickView = ({ product, onClose }: ProductQuickViewProps) => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const { addItem, setIsCartOpen } = useCart();

  if (!product) return null;

  const handleAddToCart = () => {
    if (!selectedColor || !selectedSize) {
      alert('Please select color and size');
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
    onClose();
    setTimeout(() => setIsCartOpen(true), 300);
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md z-50 animate-fade-in"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 animate-scale-in">
        <div className="bg-background rounded-2xl shadow-elegant max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          <div className="grid md:grid-cols-2 gap-8 p-8">
            {/* Left: Image Gallery */}
            <div className="space-y-4">
              <div className="relative aspect-[3/4] bg-gradient-to-br from-blush-light to-accent/30 rounded-xl overflow-hidden group">
                <Badge className="absolute top-4 right-4 z-10 bg-accent text-accent-foreground shadow-glow sparkle-effect">
                  {product.discount}% OFF
                </Badge>
                <div className="absolute inset-0 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <ShoppingBag className="h-32 w-32 text-accent/40" />
                </div>
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="space-y-6">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 hover:bg-accent/10 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-accent" />
              </button>

              {/* Product Info */}
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">
                  {product.designer}
                </Badge>
                <h2 className="text-3xl font-heading font-bold text-elegant-dark">
                  {product.name}
                </h2>
                <p className="text-muted-foreground">{product.category}</p>
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-3">
                <span className="text-4xl font-heading font-bold text-accent">
                  ${product.price}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  ${product.originalPrice}
                </span>
              </div>

              {/* Floral Divider */}
              <div className="floral-divider">
                <span className="px-4 text-accent">✦</span>
              </div>

              {/* Color Selection */}
              <div className="space-y-3">
                <label className="text-sm font-semibold text-elegant-dark uppercase tracking-wider">
                  Select Color
                </label>
                <div className="flex gap-3">
                  {product.colors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColor(color)}
                      className={`h-10 w-10 rounded-full border-2 transition-all hover:scale-110 ${
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
              <div className="space-y-3">
                <label className="text-sm font-semibold text-elegant-dark uppercase tracking-wider">
                  Select Size
                </label>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-6 py-3 rounded-lg border-2 font-semibold transition-all hover:scale-105 ${
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
              <div className="space-y-3 pt-4">
                <Button
                  variant="hero"
                  className="w-full text-lg py-6 shadow-glow hover:shadow-elegant"
                  onClick={handleBuyNow}
                >
                  <ShoppingBag className="h-5 w-5" />
                  Buy Now
                </Button>
                <Button
                  variant="luxury"
                  className="w-full text-lg py-6"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                <Button
                  variant="ghost"
                  className="w-full"
                >
                  <Heart className="h-5 w-5" />
                  Add to Wishlist
                </Button>
              </div>

              {/* Product Description */}
              <div className="pt-4 space-y-2 border-t border-border">
                <h3 className="font-semibold text-elegant-dark">Product Details</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Handcrafted Pakistani designer wear featuring intricate embroidery and premium fabrics. 
                  Perfect for special occasions and celebrations. Each piece is carefully selected to bring 
                  you authentic luxury fashion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductQuickView;
