import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sparkles } from 'lucide-react';
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
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blush/80 via-blush-light/70 to-background/90" />
      </div>
      
      <FloatingPetals />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Main Heading */}
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-elegant-dark mb-4 sparkle-effect">
              <Sparkles className="inline-block h-12 w-12 text-accent animate-float mb-2" />
              {' '}GRAND EVENT SALE{' '}
              <Sparkles className="inline-block h-12 w-12 text-accent animate-float mb-2" />
            </h1>
            <div className="floral-divider">
              <span className="px-4 text-xl font-heading text-accent">✦</span>
            </div>
          </div>

          <p className="text-2xl md:text-3xl font-body text-elegant-dark/80 font-medium">
            Don't Miss It – Best Deals in Town
          </p>

          <p className="text-lg md:text-xl text-elegant-dark/70 font-body max-w-2xl mx-auto">
            Luxury Pakistani Designer Wear in Texas
          </p>

          {/* Countdown Timer */}
          <div className="bg-background/80 backdrop-blur-sm rounded-2xl p-8 shadow-elegant max-w-2xl mx-auto">
            <p className="text-sm uppercase tracking-wider text-accent font-semibold mb-4 font-body">
              Event Starts In
            </p>
            <div className="grid grid-cols-4 gap-4">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="bg-card rounded-lg p-4 shadow-soft">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-accent">
                    {value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-xs uppercase text-muted-foreground mt-1 font-body">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button variant="hero" size="lg" asChild className="group relative overflow-hidden">
              <a href="#products">
                <span className="relative z-10">Shop the Collection</span>
                <span className="absolute inset-0 bg-gradient-to-r from-rose-gold-light to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="hover:bg-accent/10 hover:border-accent transition-all">
              <a href="#event">
                Event Details
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
