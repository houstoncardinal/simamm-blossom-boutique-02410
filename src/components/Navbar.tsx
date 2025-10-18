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
    <nav className={`sticky top-0 z-50 border-b border-border shadow-soft transition-all duration-500 ${
      scrolled ? 'bg-blush/95 backdrop-blur-md' : 'bg-background/95 backdrop-blur-md'
    }`}>
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
            <Link to="/" className="text-sm font-medium text-foreground hover:text-accent transition-colors elegant-link">
              Home
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
                  <NavigationMenuContent>
                    <div className="grid gap-6 p-8 w-[700px] lg:w-[900px] lg:grid-cols-[1fr_1fr_300px] bg-gradient-to-br from-background via-blush/5 to-rose-gold/5">
                      {/* Categories Section */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                          <h4 className="font-heading font-bold text-elegant-dark text-base">Shop by Category</h4>
                          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
                        </div>
                        <div className="space-y-2">
                          {categories.slice(0, 5).map((category) => (
                            <NavigationMenuLink key={category.name} asChild>
                              <Link
                                to={category.href}
                                className="group block select-none rounded-xl p-4 leading-none no-underline outline-none transition-all hover:bg-gradient-to-r hover:from-accent/10 hover:to-rose-gold/10 hover:shadow-soft border border-transparent hover:border-accent/20"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center gap-3">
                                    <div className="h-2 w-2 rounded-full bg-accent group-hover:animate-pulse" />
                                    <div className="text-sm font-semibold leading-none text-foreground group-hover:text-accent transition-colors">
                                      {category.name}
                                    </div>
                                  </div>
                                  <Badge variant="secondary" className="text-xs bg-rose-gold/20 text-accent border-0">
                                    {category.count}
                                  </Badge>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                          <NavigationMenuLink asChild>
                            <Link
                              to="/shop"
                              className="block select-none rounded-xl p-4 leading-none no-underline outline-none transition-all bg-gradient-to-r from-accent to-rose-gold text-white hover:shadow-elegant mt-4"
                            >
                              <div className="text-sm font-bold text-center">View All Collections →</div>
                            </Link>
                          </NavigationMenuLink>
                        </div>
                      </div>
                      
                      {/* Designers Section */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />
                          <h4 className="font-heading font-bold text-elegant-dark text-base">Top Designers</h4>
                          <div className="h-px flex-1 bg-gradient-to-r from-transparent via-rose-gold/30 to-transparent" />
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                          {['Sana Safinaz', 'Maria B', 'Elan', 'Ethnc', 'Lulusar', 'HR'].map((designer) => (
                            <Link
                              key={designer}
                              to={`/shop?designer=${designer}`}
                              className="group flex items-center gap-2 rounded-lg p-3 text-xs font-medium transition-all hover:bg-rose-gold/10 hover:shadow-soft border border-transparent hover:border-rose-gold/20"
                            >
                              <span className="text-accent group-hover:scale-110 transition-transform">✦</span>
                              <span className="group-hover:text-accent transition-colors">{designer}</span>
                            </Link>
                          ))}
                        </div>
                      </div>

                      {/* Featured Products */}
                      <div className="space-y-4 border-l border-accent/10 pl-6">
                        <div className="flex items-center gap-2 mb-4">
                          <h4 className="font-heading font-bold text-elegant-dark text-sm">✨ Featured</h4>
                        </div>
                        {featuredProducts.map((product) => (
                          <NavigationMenuLink key={product.id} asChild>
                            <Link
                              to={`/product/${product.id}`}
                              className="group block select-none space-y-2 rounded-xl p-3 leading-none no-underline outline-none transition-all hover:bg-gradient-to-br hover:from-blush/20 hover:to-rose-gold/10 hover:shadow-soft"
                            >
                              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                                <img 
                                  src={product.images[0]} 
                                  alt={product.name}
                                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                              </div>
                              <div className="text-xs font-semibold leading-tight line-clamp-2 group-hover:text-accent transition-colors">
                                {product.name}
                              </div>
                              <p className="text-xs text-muted-foreground line-clamp-1">{product.designer}</p>
                              <div className="flex items-center gap-2">
                                <span className="text-sm font-bold text-accent">${product.price}</span>
                                {product.isNew && (
                                  <Badge className="text-xs h-5 bg-gradient-to-r from-accent to-rose-gold text-white border-0">
                                    NEW
                                  </Badge>
                                )}
                              </div>
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/about" className="text-sm font-medium text-foreground hover:text-accent transition-colors elegant-link">
              About
            </Link>
            <a href="/#event" className="text-sm font-medium text-foreground hover:text-accent transition-colors elegant-link">
              Event Sale
            </a>
            <a href="/#contact" className="text-sm font-medium text-foreground hover:text-accent transition-colors elegant-link">
              Contact
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
              className="relative p-2 hover:scale-110 transition-transform group"
            >
              <ShoppingCart className="h-5 w-5 text-accent group-hover:rotate-12 transition-transform" />
              {itemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-accent text-accent-foreground text-xs animate-bounce">
                  {itemCount}
                </Badge>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-4 md:hidden">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative p-2"
            >
              <ShoppingCart className="h-5 w-5 text-accent" />
              {itemCount > 0 && (
                <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center bg-accent text-accent-foreground text-xs">
                  {itemCount}
                </Badge>
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
          <div className="lg:hidden py-4 animate-fade-in border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
              >
                Home
              </Link>
              <Link
                to="/shop"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
              >
                Shop
              </Link>
              <Link
                to="/about"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
              >
                About
              </Link>
              <a
                href="/#event"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
              >
                Event Sale
              </a>
              <a
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
              >
                Contact
              </a>
              <Button variant="ghost" size="sm" asChild className="justify-start">
                <a href="tel:630-212-8172">
                  <Phone className="h-4 w-4" />
                  Call Us
                </a>
              </Button>
              <Button variant="luxury" size="sm" asChild className="justify-start">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                  <Facebook className="h-4 w-4" />
                  Facebook Live
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
