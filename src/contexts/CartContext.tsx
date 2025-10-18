import { createContext, useContext, useState, ReactNode } from 'react';
import { toast } from 'sonner';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  designer: string;
  category: string;
  color: string;
  size: string;
  quantity: number;
  image?: string;
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: number, color: string, size: string) => void;
  updateQuantity: (id: number, color: string, size: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
  itemCount: number;
  isCartOpen: boolean;
  setIsCartOpen: (open: boolean) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    setItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(
        i => i.id === item.id && i.color === item.color && i.size === item.size
      );

      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].quantity += 1;
        return newItems;
      }

      return [...prevItems, { ...item, quantity: 1 }];
    });

    // Show toast with confetti
    toast.success('✅ Added to your SIMAMM Bag', {
      description: item.name,
      duration: 2000,
    });

    // Trigger confetti animation
    triggerConfetti();
  };

  const removeItem = (id: number, color: string, size: string) => {
    setItems(prevItems => 
      prevItems.filter(item => !(item.id === id && item.color === color && item.size === size))
    );
  };

  const updateQuantity = (id: number, color: string, size: string, quantity: number) => {
    if (quantity < 1) {
      removeItem(id, color, size);
      return;
    }

    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id && item.color === color && item.size === size
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        total,
        itemCount,
        isCartOpen,
        setIsCartOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};

// Confetti animation helper
const triggerConfetti = () => {
  const colors = ['#FFB6C1', '#DDA0DD', '#87CEEB', '#F5DEB3', '#98FB98'];
  const confettiCount = 20;

  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti-particle';
    confetti.style.cssText = `
      position: fixed;
      top: 20%;
      right: 5%;
      width: 10px;
      height: 10px;
      background: ${colors[Math.floor(Math.random() * colors.length)]};
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      animation: confetti-fall ${1 + Math.random()}s ease-out forwards;
      transform: translateX(${Math.random() * 100 - 50}px);
    `;
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 1500);
  }
};
