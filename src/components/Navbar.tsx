import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, Facebook, ShoppingCart, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import floralWreath from '@/assets/floral-wreath.png';
import { useCart } from '@/contexts/CartContext';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { products, getProductsByCategory } from '@/data/products';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const categories = [
    { name: 'Party Wear', href: '/shop?category=Party Wear', count: getProductsByCategory('Party Wear').length },
    { name: 'Formal Wear', href: '/shop?category=Formal', count: getProductsByCategory('Formal').length },
    { name: 'Lawn Collection', href: '/shop?category=Lawn', count: getProductsByCategory('Lawn').length },
    { name: 'Winter Collection', href: '/shop?category=Winter', count: getProductsByCategory('Winter').length },
    { name: 'Bridal', href: '/shop?category=Bridal', count: getProductsByCategory('Bridal').length },
  ];

  const featuredProducts = products.filter(p => p.isNew || p.popularity > 95).slice(0, 3);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border shadow-soft transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img src={floralWreath} alt="SIMAMM Logo" className="h-12 w-12 transition-transform group-hover:rotate-12" />
            <div>
              <h1 className="text-xl font-heading font-bold text-elegant-dark">SIMAMM</h1>
              <p className="text-xs text-muted-foreground font-body">Pakistani Clothing</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/" className="relative text-sm font-medium text-elegant-dark hover:text-rose-gold transition-all duration-300 group py-2">
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-gold to-blush-dark group-hover:w-full transition-all duration-300"></span>
            </Link>

            {/* Shop Mega Menu */}
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link to="/shop" className="group">
                    <NavigationMenuTrigger className="text-sm font-medium">
                      Shop
                    </NavigationMenuTrigger>
                  </Link>
                  <NavigationMenuContent className="left-1/2 -translate-x-1/2">
                    <div className="w-[95vw] max-w-[1000px] p-6 bg-gradient-to-br from-blush/40 via-blush-light/50 to-background">
                      <div className="grid grid-cols-4 gap-4">
                        {/* Categories Column */}
                        <div className="space-y-3">
                          <h4 className="font-heading font-bold text-elegant-dark text-sm mb-3 px-3">
                            Collections
                          </h4>
                          {categories.map((category) => (
                            <NavigationMenuLink key={category.name} asChild>
                              <Link
                                to={category.href}
                                className="group flex items-center justify-between rounded-lg p-3 hover:bg-blush/60 transition-all border border-transparent hover:border-blush-dark/30 hover:shadow-sm"
                              >
                                <div className="flex items-center gap-2">
                                  <div className="h-1.5 w-1.5 rounded-full bg-rose-gold group-hover:scale-125 transition-transform" />
                                  <span className="text-sm font-medium text-foreground group-hover:text-elegant-dark">
                                    {category.name}
                                  </span>
                                </div>
                                <Badge className="text-xs h-5 bg-blush-dark/40 text-elegant-dark border-0 group-hover:bg-blush-dark/60">
                                  {category.count}
                                </Badge>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                          <NavigationMenuLink asChild>
                            <Link
                              to="/shop"
                              className="flex items-center justify-center gap-2 rounded-lg p-3 bg-gradient-to-r from-blush-dark to-rose-gold text-white hover:shadow-md transition-all mt-2 font-semibold text-sm"
                            >
                              View All →
                            </Link>
                          </NavigationMenuLink>
                        </div>

                        {/* Designers Column */}
                        <div className="space-y-3">
                          <h4 className="font-heading font-bold text-elegant-dark text-sm mb-3 px-3">
                            Designers
                          </h4>
                          {['Sana Safinaz', 'Maria B', 'Elan', 'Ethnc', 'Lulusar', 'HR'].map((designer) => (
                            <Link
                              key={designer}
                              to={`/shop?designer=${designer}`}
                              className="group flex items-center gap-2 rounded-lg p-3 hover:bg-blush/60 transition-all border border-transparent hover:border-blush-dark/30"
                            >
                              <span className="text-rose-gold group-hover:scale-110 transition-transform text-xs">✦</span>
                              <span className="text-sm font-medium group-hover:text-elegant-dark transition-colors">{designer}</span>
                            </Link>
                          ))}
                        </div>

                        {/* Featured Products - 2 Columns */}
                        <div className="col-span-2 grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <h4 className="font-heading font-bold text-elegant-dark text-sm mb-2 px-2">
                              ✨ New Arrivals
                            </h4>
                            {featuredProducts.slice(0, 2).map((product) => (
                              <NavigationMenuLink key={product.id} asChild>
                                <Link
                                  to={`/product/${product.id}`}
                                  className="group block rounded-lg overflow-hidden hover:shadow-md transition-all bg-white/50 hover:bg-white"
                                >
                                  <div className="aspect-[4/3] overflow-hidden bg-muted">
                                    <img 
                                      src={product.images[0]} 
                                      alt={product.name}
                                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                  </div>
                                  <div className="p-3 space-y-1">
                                    <p className="text-xs font-semibold leading-tight line-clamp-1 group-hover:text-elegant-dark">
                                      {product.name}
                                    </p>
                                    <p className="text-xs text-muted-foreground">{product.designer}</p>
                                    <div className="flex items-center justify-between">
                                      <span className="text-sm font-bold text-rose-gold">${product.price}</span>
                                      {product.isNew && (
                                        <Badge className="text-xs h-4 bg-blush-dark text-white border-0 px-2">
                                          NEW
                                        </Badge>
                                      )}
                                    </div>
                                  </div>
                                </Link>
                              </NavigationMenuLink>
                            ))}
                          </div>
                          <div className="space-y-2">
                            <h4 className="font-heading font-bold text-elegant-dark text-sm mb-2 px-2">
                              🔥 Best Sellers
                            </h4>
                            {products
                              .filter(p => p.popularity >= 90 && !p.isNew)
                              .slice(0, 2)
                              .map((product) => (
                                <NavigationMenuLink key={product.id} asChild>
                                  <Link
                                    to={`/product/${product.id}`}
                                    className="group block rounded-lg overflow-hidden hover:shadow-md transition-all bg-white/50 hover:bg-white"
                                  >
                                    <div className="aspect-[4/3] overflow-hidden bg-muted">
                                      <img 
                                        src={product.images[0]} 
                                        alt={product.name}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                      />
                                    </div>
                                    <div className="p-3 space-y-1">
                                      <p className="text-xs font-semibold leading-tight line-clamp-1 group-hover:text-elegant-dark">
                                        {product.name}
                                      </p>
                                      <p className="text-xs text-muted-foreground">{product.designer}</p>
                                      <div className="flex items-center justify-between">
                                        <span className="text-sm font-bold text-rose-gold">${product.price}</span>
                                        {product.isSale && (
                                          <Badge className="text-xs h-4 bg-rose-gold text-white border-0 px-2">
                                            SALE
                                          </Badge>
                                        )}
                                      </div>
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/about" className="relative text-sm font-medium text-elegant-dark hover:text-rose-gold transition-all duration-300 group py-2">
              <span className="relative z-10">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-gold to-blush-dark group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a href="/#event" className="relative text-sm font-medium text-elegant-dark hover:text-rose-gold transition-all duration-300 group py-2">
              <span className="relative z-10">Event Sale</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-gold to-blush-dark group-hover:w-full transition-all duration-300"></span>
            </a>
            <a href="/#contact" className="relative text-sm font-medium text-elegant-dark hover:text-rose-gold transition-all duration-300 group py-2">
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-gold to-blush-dark group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="tel:630-212-8172">
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </Button>
            <Button variant="luxury" size="sm" asChild>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4" />
                Facebook Live
              </a>
            </Button>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2 hover:scale-110 transition-all duration-300 group"
            >
              <ShoppingCart className="h-6 w-6 text-elegant-dark group-hover:text-rose-gold transition-all duration-300" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-rose-gold text-white text-xs font-bold rounded-full border-2 border-white shadow-lg">
                  {itemCount}
                </span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2"
            >
              <ShoppingCart className="h-6 w-6 text-elegant-dark" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center bg-rose-gold text-white text-xs font-bold rounded-full border-2 border-white shadow-lg">
                  {itemCount}
                </span>
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-foreground hover:text-accent transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-6 animate-fade-in border-t border-border max-h-[70vh] overflow-y-auto">
            <div className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors py-3 px-4 rounded-lg hover:bg-blush/30"
              >
                Home
              </Link>
              
              {/* Mobile Shop Accordion */}
              <details className="group">
                <summary className="text-sm font-medium text-foreground hover:text-accent transition-colors py-3 px-4 rounded-lg hover:bg-blush/30 cursor-pointer flex items-center justify-between">
                  <span>Shop</span>
                  <ChevronDown className="h-4 w-4 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-2 ml-4 space-y-1 animate-fade-in">
                  {/* Categories */}
                  <div className="py-2">
                    <p className="text-xs font-bold text-elegant-dark uppercase tracking-wider px-4 mb-2">
                      Collections
                    </p>
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.href}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center justify-between py-2 px-4 rounded-lg hover:bg-blush/40 transition-colors group/item"
                      >
                        <span className="text-sm text-foreground group-hover/item:text-elegant-dark">
                          {category.name}
                        </span>
                        <Badge className="text-xs bg-blush-dark/40 text-elegant-dark border-0">
                          {category.count}
                        </Badge>
                      </Link>
                    ))}
                  </div>

                  {/* Designers */}
                  <div className="py-2 border-t border-border">
                    <p className="text-xs font-bold text-elegant-dark uppercase tracking-wider px-4 mb-2">
                      Designers
                    </p>
                    {['Sana Safinaz', 'Maria B', 'Elan', 'Ethnc', 'Lulusar', 'HR'].map((designer) => (
                      <Link
                        key={designer}
                        to={`/shop?designer=${designer}`}
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 py-2 px-4 rounded-lg hover:bg-blush/40 transition-colors"
                      >
                        <span className="text-rose-gold text-xs">✦</span>
                        <span className="text-sm text-foreground">{designer}</span>
                      </Link>
                    ))}
                  </div>

                  {/* Featured Products Mobile */}
                  <div className="py-2 border-t border-border">
                    <p className="text-xs font-bold text-elegant-dark uppercase tracking-wider px-4 mb-3">
                      ✨ Featured
                    </p>
                    <div className="space-y-3 px-4">
                      {featuredProducts.slice(0, 2).map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          onClick={() => setIsOpen(false)}
                          className="flex gap-3 p-2 rounded-lg hover:bg-blush/40 transition-all"
                        >
                          <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-muted">
                            <img 
                              src={product.images[0]} 
                              alt={product.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-semibold text-elegant-dark line-clamp-2 mb-1">
                              {product.name}
                            </p>
                            <p className="text-xs text-muted-foreground mb-1">{product.designer}</p>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-bold text-rose-gold">${product.price}</span>
                              {product.isNew && (
                                <Badge className="text-xs h-4 bg-blush-dark text-white border-0 px-2">NEW</Badge>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* View All Button */}
                  <div className="px-4 pt-2">
                    <Link
                      to="/shop"
                      onClick={() => setIsOpen(false)}
                      className="flex items-center justify-center gap-2 w-full py-3 px-4 bg-gradient-to-r from-blush-dark to-rose-gold text-white rounded-lg font-semibold text-sm hover:shadow-md transition-all"
                    >
                      View All Products →
                    </Link>
                  </div>
                </div>
              </details>

              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors py-3 px-4 rounded-lg hover:bg-blush/30"
              >
                About
              </Link>
              <a
                href="/#event"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors py-3 px-4 rounded-lg hover:bg-blush/30"
              >
                Event Sale
              </a>
              <a
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors py-3 px-4 rounded-lg hover:bg-blush/30"
              >
                Contact
              </a>
              
              {/* Mobile CTAs */}
              <div className="pt-4 space-y-2 border-t border-border">
                <Button variant="ghost" size="sm" asChild className="w-full justify-start">
                  <a href="tel:630-212-8172">
                    <Phone className="h-4 w-4" />
                    Call Us
                  </a>
                </Button>
                <Button variant="luxury" size="sm" asChild className="w-full justify-start">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                    Facebook Live
                  </a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
