import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Facebook, Smartphone, ShoppingBag, Sparkles, Play } from 'lucide-react';

const FacebookLiveSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blush-light/30 via-background to-blush/20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(216,164,143,0.15),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(248,216,212,0.15),transparent)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <Badge className="mb-4 bg-[#1877F2] text-white border-0 text-sm py-2 px-4">
              <Play className="h-4 w-4 mr-2" />
              LIVE SHOPPING EXPERIENCE
            </Badge>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-elegant-dark mb-4">
              Shop Live on
              <span className="block text-[#1877F2] mt-2">Facebook</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-body">
              Join our exclusive Facebook Live shopping sessions. See products up close, ask questions in real-time, and shop directly from the comfort of your home.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - QR Code & CTA */}
            <div className="space-y-8">
              {/* QR Code Card */}
              <div className="bg-white rounded-3xl p-8 shadow-2xl border-2 border-rose-gold/30 hover:border-rose-gold/50 transition-all duration-300 hover:-translate-y-1">
                <div className="text-center space-y-6">
                  <div className="inline-flex items-center gap-2 bg-[#1877F2]/10 rounded-full px-4 py-2">
                    <Smartphone className="h-4 w-4 text-[#1877F2]" />
                    <span className="text-sm font-bold text-[#1877F2]">SCAN TO JOIN</span>
                  </div>

                  {/* QR Code */}
                  <div className="bg-white p-6 rounded-2xl shadow-inner border-4 border-rose-gold/20 inline-block">
                    <img 
                      src="/qr.png" 
                      alt="Facebook Live QR Code"
                      className="w-64 h-64 object-contain"
                    />
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-bold text-elegant-dark">
                      Scan with your phone camera
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Opens directly in Facebook app
                    </p>
                  </div>
                </div>
              </div>

              {/* Manual Button */}
              <Button
                variant="hero"
                size="lg"
                asChild
                className="w-full py-7 text-lg"
              >
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3"
                >
                  <Facebook className="h-6 w-6" />
                  Visit Facebook Page
                </a>
              </Button>
            </div>

            {/* Right Column - Benefits */}
            <div className="space-y-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-elegant border border-rose-gold/20 hover:border-rose-gold/40 transition-all hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-[#1877F2]/20 to-[#1877F2]/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Play className="h-7 w-7 text-[#1877F2]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-elegant-dark mb-2">
                      Live Product Reveals
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Watch as we showcase new arrivals, demonstrate fabric quality, and show detailed views of each piece in real-time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-elegant border border-rose-gold/20 hover:border-rose-gold/40 transition-all hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-rose-gold/20 to-rose-gold/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Sparkles className="h-7 w-7 text-rose-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-elegant-dark mb-2">
                      Exclusive Live Deals
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Get special discounts and offers available only during live sessions. First to shop gets the best deals!
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-elegant border border-rose-gold/20 hover:border-rose-gold/40 transition-all hover:-translate-y-1 group">
                <div className="flex items-start gap-4">
                  <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-rose-gold/20 to-rose-gold/40 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <ShoppingBag className="h-7 w-7 text-rose-gold" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-elegant-dark mb-2">
                      Shop & Ask Questions
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Comment to reserve items, ask about sizes and colors, and get instant answers from Sobia herself.
                    </p>
                  </div>
                </div>
              </div>

              {/* Live Schedule Badge */}
              <div className="bg-gradient-to-r from-rose-gold/10 to-blush-dark/10 rounded-2xl p-6 border-2 border-rose-gold/30">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-2 w-2 rounded-full bg-red-500 animate-pulse" />
                  <p className="text-sm font-bold text-elegant-dark uppercase tracking-wide">
                    Live Schedule
                  </p>
                </div>
                <p className="text-lg font-heading font-bold text-rose-gold mb-1">
                  Every Saturday & Sunday
                </p>
                <p className="text-sm text-muted-foreground">
                  1:00 PM - 7:00 PM Central Time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacebookLiveSection;
