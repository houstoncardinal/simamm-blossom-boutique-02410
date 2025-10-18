import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles, Calendar, MapPin, Gift } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroBackground from '@/assets/hero-floral-bg.jpg';

const FloatingPetals = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute text-2xl animate-float opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `-10%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${10 + Math.random() * 10}s`,
          }}
        >
          🌸
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const eventDate = new Date('2025-10-18T13:00:00').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blush/90 via-background/85 to-rose-gold/20" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(216,164,143,0.1),transparent)]" />
      </div>
      
      <FloatingPetals />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Column - Main Content */}
          <div className="space-y-8 animate-fade-in text-center lg:text-left">
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-accent/10 to-rose-gold/10 border border-accent/20 rounded-full px-6 py-3 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-semibold text-accent tracking-wide">LUXURY PAKISTANI DESIGNER WEAR</span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-elegant-dark leading-tight">
                Grand Event
                <span className="block bg-gradient-to-r from-accent via-rose-gold to-accent bg-clip-text text-transparent">
                  Sale 2025
                </span>
              </h1>
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent" />
                <Sparkles className="h-6 w-6 text-accent animate-pulse" />
                <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent" />
              </div>
            </div>

            <p className="text-xl md:text-2xl font-body text-elegant-dark/80 max-w-xl mx-auto lg:mx-0">
              Experience luxury at unbeatable prices. Exclusive collections, limited time only.
            </p>

            {/* Event Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 shadow-soft border border-accent/10 hover:border-accent/30 transition-all hover:shadow-elegant group">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent/20 to-rose-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Calendar className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground font-semibold uppercase">Event Date</p>
                    <p className="text-sm font-bold text-foreground">Oct 18-19, 2025</p>
                  </div>
                </div>
              </div>
              <div className="bg-card/80 backdrop-blur-sm rounded-xl p-4 shadow-soft border border-accent/10 hover:border-accent/30 transition-all hover:shadow-elegant group">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-to-br from-accent/20 to-rose-gold/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <MapPin className="h-5 w-5 text-accent" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground font-semibold uppercase">Location</p>
                    <p className="text-sm font-bold text-foreground">Murphy, Texas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Gift Promo */}
            <div className="bg-gradient-to-r from-accent/10 via-rose-gold/10 to-accent/10 border border-accent/20 rounded-2xl p-4 backdrop-blur-sm">
              <div className="flex items-center justify-center lg:justify-start gap-3">
                <Gift className="h-6 w-6 text-accent animate-bounce" />
                <p className="text-sm font-semibold text-foreground">
                  Free gift with every <span className="text-accent">$50</span> purchase
                </p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <Button variant="hero" size="lg" asChild className="group relative overflow-hidden w-full sm:w-auto">
                <Link to="/shop">
                  <span className="relative z-10 flex items-center gap-2">
                    Shop Collection
                    <Sparkles className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-rose-gold to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="hover:bg-accent/10 hover:border-accent transition-all group w-full sm:w-auto border-accent/30">
                <a href="#event" className="flex items-center gap-2">
                  Event Details
                  <Calendar className="h-4 w-4 group-hover:scale-110 transition-transform" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right Column - Countdown Timer */}
          <div className="space-y-6 animate-fade-in lg:scale-110">
            <div className="bg-card/90 backdrop-blur-md rounded-3xl p-8 lg:p-10 shadow-elegant border border-accent/20">
              <div className="text-center space-y-6">
                <div className="inline-flex items-center justify-center gap-2 mb-4">
                  <div className="h-px w-8 bg-gradient-to-r from-transparent to-accent" />
                  <Sparkles className="h-5 w-5 text-accent animate-pulse" />
                  <p className="text-sm uppercase tracking-widest text-accent font-bold font-body">
                    Event Starts In
                  </p>
                  <Sparkles className="h-5 w-5 text-accent animate-pulse" />
                  <div className="h-px w-8 bg-gradient-to-l from-transparent to-accent" />
                </div>
                
                <div className="grid grid-cols-4 gap-4">
                  {Object.entries(timeLeft).map(([unit, value]) => (
                    <div key={unit} className="group">
                      <div className="bg-gradient-to-br from-background to-blush/20 rounded-2xl p-6 shadow-soft border border-accent/10 hover:border-accent/30 transition-all hover:shadow-elegant hover:-translate-y-1">
                        <div className="text-4xl lg:text-5xl font-heading font-bold bg-gradient-to-br from-accent to-rose-gold bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                          {value.toString().padStart(2, '0')}
                        </div>
                        <div className="text-xs uppercase text-muted-foreground mt-2 font-semibold tracking-wider font-body">
                          {unit}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4">
                  <p className="text-sm text-muted-foreground font-body">
                    Don't miss the biggest sale of the year!
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="grid grid-cols-2 gap-4">
              <Link to="/shop?category=Bridal" className="group bg-card/80 backdrop-blur-sm rounded-xl p-4 shadow-soft border border-accent/10 hover:border-accent/30 transition-all hover:shadow-elegant">
                <p className="text-xs text-muted-foreground font-semibold uppercase mb-1">Trending</p>
                <p className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">Bridal Collection</p>
              </Link>
              <Link to="/shop?sale=true" className="group bg-gradient-to-br from-accent/10 to-rose-gold/10 backdrop-blur-sm rounded-xl p-4 shadow-soft border border-accent/20 hover:border-accent/40 transition-all hover:shadow-elegant">
                <p className="text-xs text-accent font-semibold uppercase mb-1">Hot Deals</p>
                <p className="text-sm font-bold text-foreground group-hover:text-accent transition-colors">Sale Items</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
