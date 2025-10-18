import { Gift, Tag, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SpecialOffers = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blush-light via-background to-blush-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Main Offer Card */}
          <Card className="shadow-elegant overflow-hidden border-2 border-accent/20 hover-lift">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-blush to-accent/20 p-8 text-center relative overflow-hidden animate-pulse-slow">
                {/* Decorative Elements */}
                <Sparkles className="absolute top-4 left-4 h-8 w-8 text-accent animate-float opacity-50" />
                <Sparkles className="absolute bottom-4 right-4 h-8 w-8 text-accent animate-float opacity-50" />
                
                <div className="relative z-10">
                  <Gift className="h-16 w-16 text-accent mx-auto mb-4 sparkle-effect" />
                  <h2 className="text-3xl md:text-5xl font-heading font-bold text-elegant-dark mb-4 sparkle-effect animate-bounce-slow">
                    🎁 FREE GIFT WITH EVERY $50 PURCHASE 🎁
                  </h2>
                  <p className="text-lg md:text-xl text-elegant-dark/80 font-body max-w-2xl mx-auto">
                    Shop now and receive a complimentary gift with your purchase!
                  </p>
                </div>
              </div>
              
              {/* Additional Offers */}
              <div className="p-8 bg-card">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center space-y-2">
                    <div className="inline-block p-4 bg-blush-light rounded-full mb-2">
                      <Tag className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-elegant-dark">
                      Up to 75% Off
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      Clearance items with massive savings
                    </p>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <div className="inline-block p-4 bg-blush-light rounded-full mb-2">
                      <Sparkles className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-elegant-dark">
                      Designer Brands
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      HR, Lulusar, Ethnc, Sana Safinaz & more
                    </p>
                  </div>
                  
                  <div className="text-center space-y-2">
                    <div className="inline-block p-4 bg-blush-light rounded-full mb-2">
                      <Gift className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-heading font-bold text-elegant-dark">
                      Winter Collection
                    </h3>
                    <p className="text-sm text-muted-foreground font-body">
                      Velvet & Pashmina on sale
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
