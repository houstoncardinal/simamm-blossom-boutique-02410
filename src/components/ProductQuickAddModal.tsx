import { useState } from 'react';
import { X, ShoppingBag, Check } from 'lucide-react';
import { Product } from '@/data/products';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/contexts/CartContext';
import { toast } from 'sonner';

interface ProductQuickAddModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

const ProductQuickAddModal = ({ product, isOpen, onClose }: ProductQuickAddModalProps) => {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const { addItem } = useCart();

  if (!isOpen) return null;

  const handleAddToCart = () => {
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
    
    toast.success('Added to cart!', {
      description: `${product.name} - ${selectedSize}`,
      icon: <Check className="h-4 w-4" />,
    });
    
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-elegant-dark/60 backdrop-blur-sm z-50 animate-fade-in"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
        <div 
          className="bg-white rounded-2xl shadow-2xl max-w-lg w-full pointer-events-auto animate-slide-in-right overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="relative">
            <img 
              src={product.images[0]} 
              alt={product.name}
              className="w-full h-64 object-cover"
            />
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 bg-white/90 backdrop-blur-sm rounded-full hover:bg-white transition-all shadow-lg"
            >
              <X className="h-5 w-5 text-elegant-dark" />
            </button>
            {product.isSale && (
              <Badge className="absolute top-4 left-4 bg-rose-gold text-white">
                {product.discount}% OFF
              </Badge>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            {/* Product Info */}
            <div>
              <Badge className="mb-2 bg-rose-gold/10 text-rose-gold border-rose-gold/30">
                {product.designer}
              </Badge>
              <h3 className="text-2xl font-heading font-bold text-elegant-dark mb-2">
                {product.name}
              </h3>
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-heading font-bold text-elegant-dark">
                  ${product.price}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-lg text-muted-foreground line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>
            </div>

            {/* Color Selection */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-elegant-dark uppercase tracking-wider">
                Color
              </label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColor(color)}
                    className={`h-10 w-10 rounded-full border-2 transition-all hover:scale-110 ${
                      selectedColor === color
                        ? 'border-rose-gold ring-4 ring-rose-gold/20 scale-110'
                        : 'border-border hover:border-rose-gold/50'
                    }`}
                    style={{ backgroundColor: color }}
                  />
                ))}
              </div>
            </div>

            {/* Size Selection */}
            <div className="space-y-2">
              <label className="text-sm font-semibold text-elegant-dark uppercase tracking-wider">
                Size
              </label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-6 py-2 rounded-lg border-2 font-semibold transition-all hover:scale-105 ${
                      selectedSize === size
                        ? 'border-rose-gold bg-rose-gold text-white'
                        : 'border-border hover:border-rose-gold/50 text-elegant-dark'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Add to Cart Button */}
            <Button
              variant="hero"
              size="lg"
              className="w-full text-lg py-6"
              onClick={handleAddToCart}
            >
              <ShoppingBag className="h-5 w-5 mr-2" />
              Add to Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductQuickAddModal;
