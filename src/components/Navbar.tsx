import { useState, useEffect } from 'react';
import { Menu, X, Phone, Facebook, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import floralWreath from '@/assets/floral-wreath.png';
import { useCart } from '@/contexts/CartContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { itemCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Shop', href: '#products' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`sticky top-0 z-50 border-b border-border shadow-soft transition-all duration-500 ${
      scrolled ? 'bg-blush/95 backdrop-blur-md' : 'bg-background/95 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center space-x-3 group">
            <img src={floralWreath} alt="SIMAMM Logo" className="h-12 w-12 transition-transform group-hover:rotate-12" />
            <div>
              <h1 className="text-xl font-heading font-bold text-elegant-dark">SIMAMM</h1>
              <p className="text-xs text-muted-foreground font-body">Pakistani Clothing</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors elegant-link"
              >
                {link.name}
              </a>
            ))}
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
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground hover:text-accent transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-foreground hover:text-accent transition-colors py-2"
                >
                  {link.name}
                </a>
              ))}
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
