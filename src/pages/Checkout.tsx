import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Sparkles, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useCart } from '@/contexts/CartContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Checkout = () => {
  const navigate = useNavigate();
  const { items, total, clearCart } = useCart();
  const [step, setStep] = useState<'checkout' | 'confirmation'>('checkout');
  const [discountCode, setDiscountCode] = useState('');
  const [showDiscountInput, setShowDiscountInput] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    deliveryInstructions: '',
    giftNote: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setStep('confirmation');
    triggerConfetti();
    setTimeout(() => {
      clearCart();
    }, 3000);
  };

  const freeGiftThreshold = 50;
  const showFreeGift = total >= freeGiftThreshold;

  if (items.length === 0 && step === 'checkout') {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center space-y-6 animate-fade-in">
            <ShoppingBag className="h-24 w-24 text-accent/30 mx-auto" />
            <h1 className="text-4xl font-heading font-bold text-elegant-dark">
              Your cart is empty
            </h1>
            <p className="text-muted-foreground">
              Add some beautiful items to your cart before checking out
            </p>
            <Button variant="luxury" onClick={() => navigate('/')}>
              Continue Shopping
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (step === 'confirmation') {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-2xl mx-auto text-center space-y-8 animate-scale-in">
            <div className="relative">
              <CheckCircle2 className="h-32 w-32 text-accent mx-auto animate-bounce-slow" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-40 w-40 rounded-full bg-accent/10 blur-2xl animate-pulse" />
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-5xl font-heading font-bold text-elegant-dark">
                Order Confirmed!
              </h1>
              <div className="floral-divider">
                <span className="px-4 text-2xl text-accent">✦</span>
              </div>
              <p className="text-xl text-muted-foreground">
                Thank you for shopping with SIMAMM Boutique 💖
              </p>
              <p className="text-muted-foreground max-w-md mx-auto">
                Your order has been received. We'll contact you soon to confirm your delivery details.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-gradient-to-br from-blush-light to-background border border-accent/20 shadow-elegant">
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Order Total</span>
                  <span className="text-3xl font-heading font-bold text-accent">
                    ${total.toFixed(2)}
                  </span>
                </div>
                {showFreeGift && (
                  <div className="flex items-center gap-2 text-accent">
                    <Sparkles className="h-5 w-5" />
                    <span className="font-semibold">Free gift included!</span>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-4">
              <Button
                variant="hero"
                size="lg"
                onClick={() => navigate('/')}
                className="shadow-glow hover:shadow-elegant"
              >
                Continue Shopping
              </Button>
              
              <div className="flex gap-4 justify-center">
                <Button variant="outline" size="sm">
                  Share on Facebook
                </Button>
                <Button variant="outline" size="sm">
                  Share on WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        {/* Progress Steps */}
        <div className="max-w-6xl mx-auto mb-12 animate-fade-in">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                <span className="text-accent font-bold">1</span>
              </div>
              <span className="font-semibold text-elegant-dark">Cart</span>
            </div>
            <div className="h-[2px] w-16 bg-accent"></div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-accent text-accent-foreground flex items-center justify-center shadow-glow">
                <span className="font-bold">2</span>
              </div>
              <span className="font-semibold text-accent">Checkout</span>
            </div>
            <div className="h-[2px] w-16 bg-border"></div>
            <div className="flex items-center gap-2">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center">
                <span className="text-muted-foreground font-bold">3</span>
              </div>
              <span className="text-muted-foreground">Confirmation</span>
            </div>
          </div>
        </div>

        <form onSubmit={handlePlaceOrder}>
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Left: Customer Details Form */}
            <div className="space-y-6 animate-fade-in">
              <div className="flex items-center gap-2 mb-6">
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => navigate('/')}
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Shop
                </Button>
              </div>

              <div className="bg-card p-8 rounded-2xl shadow-soft border border-border space-y-6">
                <h2 className="text-2xl font-heading font-bold text-elegant-dark">
                  Shipping Information
                </h2>

                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-elegant-dark font-semibold">
                      Full Name *
                    </Label>
                    <Input
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="focus:ring-2 focus:ring-accent transition-all"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-elegant-dark font-semibold">
                        Email *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="focus:ring-2 focus:ring-accent transition-all"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-elegant-dark font-semibold">
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="focus:ring-2 focus:ring-accent transition-all"
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address" className="text-elegant-dark font-semibold">
                      Address *
                    </Label>
                    <Input
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="focus:ring-2 focus:ring-accent transition-all"
                      placeholder="Street address"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="city" className="text-elegant-dark font-semibold">
                        City *
                      </Label>
                      <Input
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        required
                        className="focus:ring-2 focus:ring-accent transition-all"
                        placeholder="City"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="postalCode" className="text-elegant-dark font-semibold">
                        Postal Code *
                      </Label>
                      <Input
                        id="postalCode"
                        name="postalCode"
                        value={formData.postalCode}
                        onChange={handleInputChange}
                        required
                        className="focus:ring-2 focus:ring-accent transition-all"
                        placeholder="12345"
                      />
                    </div>
                  </div>

                  <div className="floral-divider">
                    <span className="px-4 text-accent">✦</span>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="deliveryInstructions" className="text-elegant-dark font-semibold">
                      Delivery Instructions (Optional)
                    </Label>
                    <Textarea
                      id="deliveryInstructions"
                      name="deliveryInstructions"
                      value={formData.deliveryInstructions}
                      onChange={handleInputChange}
                      className="focus:ring-2 focus:ring-accent transition-all"
                      placeholder="Any special delivery instructions..."
                      rows={3}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="giftNote" className="text-elegant-dark font-semibold">
                      Gift Note (Optional)
                    </Label>
                    <Textarea
                      id="giftNote"
                      name="giftNote"
                      value={formData.giftNote}
                      onChange={handleInputChange}
                      className="focus:ring-2 focus:ring-accent transition-all"
                      placeholder="Add a personal message..."
                      rows={3}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Order Summary */}
            <div className="space-y-6 animate-fade-in">
              <div className="bg-card p-8 rounded-2xl shadow-soft border border-border sticky top-24">
                <h2 className="text-2xl font-heading font-bold text-elegant-dark mb-6">
                  Order Summary
                </h2>

                {/* Cart Items */}
                <div className="space-y-4 mb-6 max-h-[300px] overflow-y-auto">
                  {items.map((item) => {
                    const itemKey = `${item.id}-${item.color}-${item.size}`;
                    return (
                      <div key={itemKey} className="flex gap-4">
                        <div
                          className="w-20 h-20 rounded-lg flex-shrink-0 bg-gradient-to-br from-blush-light to-accent/30 flex items-center justify-center"
                        >
                          <ShoppingBag className="h-6 w-6 text-accent/50" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-elegant-dark text-sm">
                            {item.name}
                          </h3>
                          <p className="text-xs text-muted-foreground">
                            {item.designer}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            <div
                              className="w-3 h-3 rounded-full border"
                              style={{ backgroundColor: item.color }}
                            />
                            <span className="text-xs text-muted-foreground">
                              Size: {item.size}
                            </span>
                            <span className="text-xs text-muted-foreground">
                              Qty: {item.quantity}
                            </span>
                          </div>
                          <p className="text-sm font-bold text-accent mt-1">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Discount Code */}
                <div className="mb-6">
                  {!showDiscountInput ? (
                    <button
                      type="button"
                      onClick={() => setShowDiscountInput(true)}
                      className="text-accent hover:underline text-sm font-semibold"
                    >
                      + Add discount code
                    </button>
                  ) : (
                    <div className="flex gap-2 animate-fade-in">
                      <Input
                        value={discountCode}
                        onChange={(e) => setDiscountCode(e.target.value)}
                        placeholder="Enter code"
                        className="flex-1"
                      />
                      <Button type="button" variant="outline" size="sm">
                        Apply
                      </Button>
                    </div>
                  )}
                </div>

                {/* Free Gift Notice */}
                {showFreeGift && (
                  <div className="mb-6 p-4 rounded-lg bg-gradient-to-r from-accent/10 to-blush-light border border-accent/20 animate-fade-in">
                    <div className="flex items-center gap-2">
                      <Sparkles className="h-5 w-5 text-accent" />
                      <p className="text-sm font-semibold text-elegant-dark">
                        🎁 Free gift included with your order!
                      </p>
                    </div>
                  </div>
                )}

                <div className="floral-divider">
                  <span className="px-4 text-accent">✦</span>
                </div>

                {/* Total */}
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-muted-foreground">
                    <span>Subtotal</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-muted-foreground">
                    <span>Shipping</span>
                    <span className="text-accent">FREE</span>
                  </div>
                  <div className="h-[1px] bg-border"></div>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-heading font-semibold text-elegant-dark">
                      Total
                    </span>
                    <span className="text-3xl font-heading font-bold text-accent">
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Place Order Button */}
                <Button
                  type="submit"
                  variant="hero"
                  className="w-full text-lg py-6 shadow-glow hover:shadow-elegant animate-pulse-slow"
                >
                  <CheckCircle2 className="h-5 w-5" />
                  Place Order
                </Button>

                <p className="text-xs text-muted-foreground text-center mt-4">
                  By placing your order, you agree to our terms and conditions
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
};

// Confetti animation helper
const triggerConfetti = () => {
  const colors = ['#FFB6C1', '#DDA0DD', '#87CEEB', '#F5DEB3', '#98FB98'];
  const confettiCount = 60;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-particle';
    confetti.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      width: 12px;
      height: 12px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
      pointer-events: none;
      z-index: 9999;
      animation: confetti-burst ${1.5 + Math.random()}s ease-out forwards;
      transform: translate(-50%, -50%) translate(${Math.random() * 200 - 100}px, ${Math.random() * 200 - 100}px) rotate(${Math.random() * 360}deg);
      opacity: ${0.7 + Math.random() * 0.3};
    `;
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 2000);
  }
};

export default Checkout;
