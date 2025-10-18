import { Gift, Tag, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SpecialOffers = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-blush-light via-background to-blush-light">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Compact Main Offer Card */}
          <Card className="shadow-elegant overflow-hidden border-2 border-accent/20">
            <CardContent className="p-0">
              <div className="bg-gradient-to-r from-blush to-accent/20 p-6 text-center relative">
                <div className="relative z-10">
                  <Gift className="h-12 w-12 text-accent mx-auto mb-3 sparkle-effect" />
                  <h2 className="text-2xl md:text-3xl font-heading font-bold text-elegant-dark mb-2">
                    🎁 FREE GIFT WITH EVERY $50 PURCHASE 🎁
                  </h2>
                  <p className="text-sm md:text-base text-elegant-dark/80 font-body">
                    Shop now and receive a complimentary gift!
                  </p>
                </div>
              </div>
              
              {/* Compact Additional Offers */}
              <div className="p-6 bg-card">
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  <div className="space-y-1">
                    <Tag className="h-6 w-6 text-accent mx-auto" />
                    <h3 className="font-heading font-bold text-elegant-dark text-sm">
                      Up to 75% Off
                    </h3>
                    <p className="text-xs text-muted-foreground font-body">
                      Clearance items
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <Sparkles className="h-6 w-6 text-accent mx-auto" />
                    <h3 className="font-heading font-bold text-elegant-dark text-sm">
                      Designer Brands
                    </h3>
                    <p className="text-xs text-muted-foreground font-body">
                      HR, Lulusar, Ethnc & more
                    </p>
                  </div>
                  
                  <div className="space-y-1">
                    <Gift className="h-6 w-6 text-accent mx-auto" />
                    <h3 className="font-heading font-bold text-elegant-dark text-sm">
                      Winter Collection
                    </h3>
                    <p className="text-xs text-muted-foreground font-body">
                      Velvet & Pashmina
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
