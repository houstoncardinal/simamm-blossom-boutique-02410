import { X, Plus, Minus, ShoppingBag, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useNavigate } from 'react-router-dom';

const CartDrawer = () => {
  const { items, removeItem, updateQuantity, total, isCartOpen, setIsCartOpen, itemCount } = useCart();
  const navigate = useNavigate();

  const handleCheckout = () => {
    setIsCartOpen(false);
    navigate('/checkout');
  };

  if (!isCartOpen) return null;

  const freeGiftThreshold = 50;
  const showFreeGift = total >= freeGiftThreshold;

  return (
    <>
      {/* Backdrop with floral overlay */}
      <div 
        className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 animate-fade-in"
        style={{
          backgroundImage: 'url(/assets/floral-pattern.png)',
          backgroundSize: '200px',
          opacity: 0.95,
        }}
        onClick={() => setIsCartOpen(false)}
      />

      {/* Cart Drawer */}
      <div className="fixed right-0 top-0 h-full w-full sm:w-[450px] bg-background shadow-elegant z-50 animate-slide-in-right">
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="p-6 border-b border-border bg-gradient-to-r from-blush-light to-background">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-heading font-bold text-elegant-dark">
                  Your SIMAMM Bag
                </h2>
                <p className="text-sm text-muted-foreground mt-1">
                  {itemCount} {itemCount === 1 ? 'item' : 'items'}
                </p>
              </div>
              <button
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-accent/10 rounded-full transition-colors"
              >
                <X className="h-6 w-6 text-accent" />
              </button>
            </div>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full space-y-4 animate-fade-in">
                <ShoppingBag className="h-24 w-24 text-accent/30" />
                <div className="text-center">
                  <h3 className="text-xl font-heading font-semibold text-elegant-dark mb-2">
                    Your SIMAMM Bag is Empty 💔
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Start exploring our beautiful collection
                  </p>
                  <Button 
                    variant="luxury" 
                    onClick={() => setIsCartOpen(false)}
                    className="hover-lift"
                  >
                    Shop Now
                  </Button>
                </div>
              </div>
            ) : (
              <>
                {items.map((item) => {
                  const itemKey = `${item.id}-${item.color}-${item.size}`;
                  return (
                    <div
                      key={itemKey}
                      className="flex gap-4 p-4 rounded-lg border border-border bg-card shadow-soft hover:shadow-elegant transition-all animate-fade-in"
                    >
                      {/* Product Image Placeholder */}
                      <div 
                        className="w-24 h-24 rounded-lg flex-shrink-0 bg-gradient-to-br from-blush-light to-accent/30 flex items-center justify-center"
                      >
                        <ShoppingBag className="h-8 w-8 text-accent/50" />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 space-y-2">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-heading font-semibold text-elegant-dark">
                              {item.name}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              {item.designer}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id, item.color, item.size)}
                            className="p-1 hover:bg-destructive/10 rounded transition-colors"
                          >
                            <X className="h-4 w-4 text-destructive" />
                          </button>
                        </div>

                        <div className="flex items-center gap-3 text-xs">
                          <div className="flex items-center gap-1">
                            <span className="text-muted-foreground">Color:</span>
                            <div 
                              className="w-4 h-4 rounded-full border-2 border-border"
                              style={{ backgroundColor: item.color }}
                            />
                          </div>
                          <div>
                            <span className="text-muted-foreground">Size:</span>
                            <span className="ml-1 font-semibold">{item.size}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          {/* Quantity Controls */}
                          <div className="flex items-center gap-2 border border-border rounded-lg p-1">
                            <button
                              onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity - 1)}
                              className="p-1 hover:bg-accent/10 rounded transition-colors"
                            >
                              <Minus className="h-3 w-3 text-accent" />
                            </button>
                            <span className="w-8 text-center font-semibold text-sm">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.color, item.size, item.quantity + 1)}
                              className="p-1 hover:bg-accent/10 rounded transition-colors"
                            >
                              <Plus className="h-3 w-3 text-accent" />
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-right">
                            <p className="text-lg font-heading font-bold text-accent">
                              ${item.price * item.quantity}
                            </p>
                            <p className="text-xs text-muted-foreground line-through">
                              ${item.originalPrice * item.quantity}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* Free Gift Reminder */}
                <div className="p-4 rounded-lg bg-gradient-to-r from-accent/10 to-blush-light border border-accent/20 animate-fade-in">
                  <div className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-accent" />
                    <p className="text-sm font-semibold text-elegant-dark">
                      {showFreeGift 
                        ? '🎁 Free gift included with your order!'
                        : `🎁 Add $${(freeGiftThreshold - total).toFixed(2)} more for a free gift!`}
                    </p>
                  </div>
                </div>

                {/* Floral Divider */}
                <div className="floral-divider">
                  <span className="px-4 text-accent">✦</span>
                </div>
              </>
            )}
          </div>

          {/* Footer with Subtotal and Actions */}
          {items.length > 0 && (
            <div className="p-6 border-t border-border bg-gradient-to-r from-background to-blush-light space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-lg font-heading font-semibold text-elegant-dark">
                  Subtotal
                </span>
                <span className="text-2xl font-heading font-bold text-accent">
                  ${total.toFixed(2)}
                </span>
              </div>

              <Button
                variant="hero"
                className="w-full text-lg py-6 shadow-glow hover:shadow-elegant animate-pulse-slow"
                onClick={handleCheckout}
              >
                Proceed to Checkout
              </Button>

              <Button
                variant="ghost"
                className="w-full"
                onClick={() => setIsCartOpen(false)}
              >
                Continue Shopping
              </Button>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
