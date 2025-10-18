import { Heart, Award, Users, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import floralWreath from '@/assets/floral-wreath.png';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Fashion',
      description: 'Each piece is carefully curated to reflect timeless elegance and contemporary style.',
    },
    {
      icon: Award,
      title: 'Premium Quality',
      description: 'We partner with the finest Pakistani designers to bring you authentic luxury wear.',
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Serving the Pakistani community in Texas with personalized shopping experiences.',
    },
    {
      icon: Star,
      title: 'Trusted Excellence',
      description: 'Years of experience in bringing the best of Pakistani fashion to your doorstep.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background via-blush-light/20 to-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in">
            <img 
              src={floralWreath} 
              alt="Floral Wreath" 
              className="h-20 w-20 mx-auto mb-6 animate-float"
            />
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-elegant-dark mb-4">
              About SIMAMM
            </h2>
            <div className="floral-divider">
              <span className="px-4 text-2xl text-accent">✦</span>
            </div>
          </div>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-elegant-dark/80 font-body">
                <span className="text-2xl font-heading text-accent">SIMAMM Pakistani Clothing</span> by Sobia Anis Allahrakha brings the finest in designer wear — from luxurious velvet formals to lightweight lawn wear.
              </p>
              <p className="text-lg leading-relaxed text-elegant-dark/80 font-body">
                Each piece is handpicked to reflect grace, tradition, and elegance. We understand the importance of cultural connection and fashion excellence, which is why we partner with renowned Pakistani designers to bring you authentic, high-quality garments.
              </p>
              <p className="text-lg leading-relaxed text-elegant-dark/80 font-body">
                Located in the heart of Murphy, Texas, SIMAMM has become a trusted destination for Pakistani fashion enthusiasts seeking premium designer wear at unbeatable prices.
              </p>
            </div>

            {/* Decorative Card */}
            <Card className="shadow-elegant">
              <CardContent className="p-8 bg-gradient-to-br from-card to-blush-light/30">
                <div className="space-y-4">
                  <h3 className="text-2xl font-heading font-bold text-accent mb-6">
                    Why Choose SIMAMM?
                  </h3>
                  <ul className="space-y-3">
                    {[
                      'Authentic Pakistani designer brands',
                      'Premium quality fabrics and craftsmanship',
                      'Competitive pricing with seasonal sales',
                      'Personalized shopping experience',
                      'Wide range from casual to formal wear',
                      'Regular inventory updates with latest trends',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <span className="text-accent text-xl mt-0.5">✦</span>
                        <span className="text-elegant-dark/80 font-body">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="shadow-soft hover:shadow-elegant transition-all duration-300 hover:-translate-y-2">
                <CardContent className="p-6 text-center space-y-3">
                  <div className="inline-block p-4 bg-blush-light rounded-full">
                    <value.icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="font-heading font-bold text-elegant-dark">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-body">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
