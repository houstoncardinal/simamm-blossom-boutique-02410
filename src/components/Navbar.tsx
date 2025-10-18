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
                  <NavigationMenuTrigger className="text-sm font-medium">
                    Shop
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid gap-3 p-6 w-[600px] lg:w-[800px] lg:grid-cols-[1fr_250px]">
                      <div className="grid gap-3 lg:grid-cols-2">
                        <div className="space-y-3">
                          <h4 className="font-heading font-bold text-elegant-dark mb-3">Shop by Category</h4>
                          {categories.map((category) => (
                            <NavigationMenuLink key={category.name} asChild>
                              <Link
                                to={category.href}
                                className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="text-sm font-medium leading-none">{category.name}</div>
                                  <Badge variant="secondary" className="text-xs">{category.count}</Badge>
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          ))}
                        </div>
                      </div>
                      
                      {/* Featured Products */}
                      <div className="space-y-3">
                        <h4 className="font-heading font-bold text-elegant-dark mb-3">Featured</h4>
                        {featuredProducts.map((product) => (
                          <NavigationMenuLink key={product.id} asChild>
                            <Link
                              to={`/product/${product.id}`}
                              className="block select-none space-y-1 rounded-lg p-3 leading-none no-underline outline-none transition-colors hover:bg-accent/10 hover:text-accent focus:bg-accent/10 focus:text-accent"
                            >
                              <div className="text-sm font-medium leading-none line-clamp-1">{product.name}</div>
                              <p className="text-xs text-muted-foreground line-clamp-1">{product.designer}</p>
                              <div className="flex items-center gap-2 mt-2">
                                <span className="text-sm font-bold text-accent">${product.price}</span>
                                {product.isNew && <Badge className="text-xs bg-rose-gold text-white">NEW</Badge>}
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
