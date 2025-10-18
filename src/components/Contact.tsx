import { MapPin, Phone, Clock, Mail, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: '(630)-212-8172',
      link: 'tel:630-212-8172',
    },
    {
      icon: MapPin,
      title: 'Address',
      content: '412 Ponderosa Trail, Murphy, TX 75094',
      link: 'https://www.google.com/maps/place/412+Ponderosa+Trail,+Murphy,+TX+75094',
    },
    {
      icon: Clock,
      title: 'Event Hours',
      content: 'Sat & Sun, Oct 18-19, 1-7 PM',
    },
    {
      icon: Mail,
      title: 'Contact',
      content: 'Sobia Allahrakha',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-blush-light/30">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-elegant-dark mb-4">
              Visit Us
            </h2>
            <div className="floral-divider">
              <span className="px-4 text-2xl text-accent">✦</span>
            </div>
            <p className="text-lg text-muted-foreground mt-4 font-body">
              We'd love to see you at our upcoming event
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="inline-block p-4 bg-blush-light rounded-full">
                    <info.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-elegant-dark text-sm">
                    {info.title}
                  </h3>
                  {info.link ? (
                    <a 
                      href={info.link}
                      target={info.link.startsWith('http') ? '_blank' : undefined}
                      rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-accent hover:text-accent/80 transition-colors font-body block elegant-link"
                    >
                      {info.content}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground font-body">
                      {info.content}
                    </p>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Map & CTA */}
          <Card className="shadow-elegant overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Map */}
              <div className="h-80 md:h-auto">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3342.7753!2d-96.5983!3d33.0428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c19b4b5b5b5b5%3A0x1234567890abcdef!2s412%20Ponderosa%20Trail%2C%20Murphy%2C%20TX%2075094!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Store Location"
                  className="min-h-80"
                />
              </div>

              {/* CTA Section */}
              <CardContent className="p-8 bg-gradient-to-br from-card to-blush-light/20 flex flex-col justify-center">
                <h3 className="text-2xl font-heading font-bold text-elegant-dark mb-4">
                  Don't Miss Out!
                </h3>
                <p className="text-muted-foreground mb-6 font-body">
                  Join us this weekend for exclusive deals, designer collections, and a complimentary gift with every $50 purchase. Connect with us on Facebook Live to shop from anywhere!
                </p>
                
                <div className="space-y-3">
                  <Button variant="hero" className="w-full" asChild>
                    <a href="tel:630-212-8172">
                      <Phone className="h-4 w-4" />
                      Call Now
                    </a>
                  </Button>
                  
                  <Button variant="luxury" className="w-full" asChild>
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                      <Facebook className="h-4 w-4" />
                      Join Facebook Live
                    </a>
                  </Button>
                  
                  <Button variant="outline" className="w-full" asChild>
                    <a href="https://www.google.com/maps/place/412+Ponderosa+Trail,+Murphy,+TX+75094" target="_blank" rel="noopener noreferrer">
                      <MapPin className="h-4 w-4" />
                      Get Directions
                    </a>
                  </Button>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
