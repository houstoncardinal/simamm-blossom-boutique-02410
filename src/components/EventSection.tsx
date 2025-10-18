import { MapPin, Calendar, Clock, Phone, Facebook, QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import qrCodeImage from '@/assets/qr-code.png';

const EventSection = () => {
  return (
    <section id="event" className="py-20 bg-gradient-to-b from-background to-blush-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-elegant-dark mb-4">
            🎉 This Weekend Only! 🎉
          </h2>
          <div className="floral-divider">
            <span className="px-4 text-2xl text-accent">✦</span>
          </div>
          <p className="text-xl text-muted-foreground mt-4 font-body">
            Join us for an exclusive shopping experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Event Details Card */}
          <Card className="shadow-elegant hover-lift">
            <CardContent className="p-8 space-y-6">
              <h3 className="text-2xl font-heading font-bold text-accent mb-6">
                Event Information
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <Calendar className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-elegant-dark font-body">Saturday & Sunday</p>
                    <p className="text-muted-foreground font-body">October 18th & 19th, 2025</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-elegant-dark font-body">1 PM to 7 PM</p>
                    <p className="text-muted-foreground font-body">Both days</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPin className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-elegant-dark font-body">Allahrakha Residences</p>
                    <p className="text-muted-foreground font-body">412 Ponderosa Trail</p>
                    <p className="text-muted-foreground font-body">Murphy, TX 75094</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="h-6 w-6 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <a href="tel:630-212-8172" className="font-semibold text-accent hover:text-accent/80 transition-colors font-body">
                      (630)-212-8172
                    </a>
                    <p className="text-muted-foreground font-body">Sobia Allahrakha</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 space-y-3">
                <Button variant="luxury" className="w-full" asChild>
                  <a href="https://www.google.com/maps/place/412+Ponderosa+Trail,+Murphy,+TX+75094" target="_blank" rel="noopener noreferrer">
                    <MapPin className="h-4 w-4" />
                    Get Directions
                  </a>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-4 w-4" />
                    Join Facebook Live
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* QR Code & Map Card */}
          <Card className="shadow-elegant">
            <CardContent className="p-8 space-y-6">
              <div className="text-center">
                <QrCode className="h-8 w-8 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-heading font-bold text-elegant-dark mb-2">
                  Scan for Facebook Live
                </h3>
                <div className="bg-card p-6 rounded-lg inline-block shadow-soft">
                  <img 
                    src={qrCodeImage} 
                    alt="QR Code for Facebook Live" 
                    className="w-48 h-48 object-contain mx-auto"
                  />
                </div>
                <p className="text-sm text-muted-foreground mt-4 font-body">
                  Scan to join our live shopping event
                </p>
              </div>

              {/* Embedded Map */}
              <div className="rounded-lg overflow-hidden shadow-soft h-64">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.7753!2d-96.5983!3d33.0428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19b4b5b5b5b5%3A0x1234567890abcdef!2s412%20Ponderosa%20Trail%2C%20Murphy%2C%20TX%2075094!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Event Location Map"
                />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EventSection;
