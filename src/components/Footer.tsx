import { Phone, Facebook, MapPin, Instagram, MessageCircle } from 'lucide-react';
import floralWreath from '@/assets/floral-wreath.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Shop', href: '#products' },
    { name: 'Event Details', href: '#event' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-blush-light/30 to-background border-t border-border pt-16 pb-6">
      {/* Floral Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10">
          <img src={floralWreath} alt="" className="h-24 w-24" />
        </div>
        <div className="absolute bottom-10 right-10">
          <img src={floralWreath} alt="" className="h-24 w-24" />
        </div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={floralWreath} alt="SIMAMM" className="h-12 w-12" />
              <div>
                <h3 className="font-heading font-bold text-2xl text-elegant-dark">
                  SIMAMM
                </h3>
                <p className="text-xs text-muted-foreground font-body">
                  Pakistani Clothing by Sobia Anis Allahrakha
                </p>
              </div>
            </div>
            <p className="text-muted-foreground font-body text-sm mb-4">
              Luxury Pakistani Designer Wear in Texas. Handpicked collections from the finest designers, bringing elegance and tradition to your wardrobe.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://wa.me/16302128172" 
                target="_blank" 
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-accent/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all hover:scale-110"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-elegant-dark mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 font-body text-sm">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-muted-foreground hover:text-accent transition-colors elegant-link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading font-semibold text-elegant-dark mb-4">
              Visit Us
            </h4>
            <ul className="space-y-3 font-body text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                <a href="tel:630-212-8172" className="hover:text-accent transition-colors">
                  (630) 212-8172
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                <address className="not-italic">
                  412 Ponderosa Trail<br />
                  Murphy, TX 75094
                </address>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-6">
          <div className="floral-divider mb-6">
            <span className="px-4 text-xl text-accent">✦</span>
          </div>
          <p className="text-sm text-muted-foreground font-body text-center">
            © {currentYear} SIMAMM Boutique. All rights reserved. | Powered by SIMAMM Boutique, Murphy TX
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
