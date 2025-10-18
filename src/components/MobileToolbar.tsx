import { Home, ShoppingBag, Sparkles, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';

const MobileToolbar = () => {
  const location = useLocation();
  const { itemCount, setIsCartOpen } = useCart();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/shop', icon: Sparkles, label: 'Shop' },
    { 
      path: '/cart', 
      icon: ShoppingBag, 
      label: 'Bag',
      badge: itemCount > 0 ? itemCount : null,
      onClick: () => setIsCartOpen(true)
    },
    { path: '/about', icon: User, label: 'About' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Native iOS-style toolbar */}
      <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/50 shadow-[0_-2px_10px_rgba(0,0,0,0.08)]">
        <nav className="flex items-center justify-around px-2 py-2 safe-area-inset-bottom">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            const buttonContent = (
              <div className="flex flex-col items-center justify-center gap-1 py-1 px-4 min-w-[70px]">
                {/* Icon container */}
                <div className="relative">
                  <Icon 
                    className={`h-6 w-6 transition-all duration-200 ${
                      active 
                        ? 'text-rose-gold scale-105' 
                        : 'text-gray-600'
                    }`} 
                    strokeWidth={active ? 2.5 : 2}
                  />
                  
                  {/* Cart badge */}
                  {item.badge && (
                    <div className="absolute -top-1.5 -right-1.5 min-w-[18px] h-[18px] px-1 flex items-center justify-center bg-rose-gold rounded-full shadow-md">
                      <span className="text-[10px] font-bold text-white leading-none">{item.badge}</span>
                    </div>
                  )}
                </div>
                
                {/* Label */}
                <span className={`text-[10px] font-semibold transition-colors duration-200 ${
                  active 
                    ? 'text-rose-gold' 
                    : 'text-gray-600'
                }`}>
                  {item.label}
                </span>
              </div>
            );

            if (item.onClick) {
              return (
                <button
                  key={item.path}
                  onClick={item.onClick}
                  className="relative active:scale-95 transition-transform duration-100 touch-manipulation"
                >
                  {buttonContent}
                </button>
              );
            }

            return (
              <Link
                key={item.path}
                to={item.path}
                className="relative active:scale-95 transition-transform duration-100 touch-manipulation"
              >
                {buttonContent}
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

export default MobileToolbar;
