import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MobileToolbar from '@/components/MobileToolbar';
import { Sparkles, Heart, Award, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-br from-blush-light via-background to-accent/20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 text-6xl animate-pulse-slow">🌸</div>
          <div className="absolute top-40 right-20 text-5xl animate-bounce-slow">🌺</div>
          <div className="absolute bottom-20 left-1/4 text-7xl animate-pulse-slow">🌷</div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-heading font-bold text-elegant-dark mb-6 animate-fade-in">
              Our Story
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed animate-fade-in-up">
              Tradition Meets Modern Elegance
            </p>
            <div className="mt-8 flex justify-center">
              <div className="h-1 w-32 bg-gradient-to-r from-transparent via-accent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <div className="space-y-6">
                <h2 className="text-4xl font-heading font-bold text-elegant-dark">
                  Welcome to SIMAMM Boutique
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Founded by Sobia Anis Allahrakha, SIMAMM Boutique is more than a fashion destination—it's 
                  a celebration of Pakistani heritage, craftsmanship, and timeless elegance.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Located in the heart of Texas, we bring the finest Pakistani designer wear to those who 
                  appreciate quality, authenticity, and sophistication.
                </p>
              </div>
              <div className="aspect-square bg-gradient-to-br from-blush-light to-accent/30 rounded-3xl shadow-elegant flex items-center justify-center">
                <Sparkles className="h-32 w-32 text-accent/40" />
              </div>
            </div>

            <div className="prose max-w-none text-center mb-20">
              <blockquote className="text-2xl md:text-3xl font-heading italic text-elegant-dark border-l-4 border-accent pl-6 py-4">
                "Every thread tells a story of grace, culture, and craftsmanship."
              </blockquote>
              <p className="text-muted-foreground mt-4">— Sobia Anis Allahrakha, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-br from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-elegant-dark text-center mb-16">
            What We Stand For
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center space-y-4 p-8 bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blush to-accent/50">
                <Sparkles className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-elegant-dark">Quality</h3>
              <p className="text-muted-foreground">
                Premium fabrics and meticulous craftsmanship in every piece
              </p>
            </div>

            <div className="text-center space-y-4 p-8 bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-rose-gold to-rose-gold-light">
                <Heart className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-elegant-dark">Authenticity</h3>
              <p className="text-muted-foreground">
                Genuine Pakistani designs from renowned designers
              </p>
            </div>

            <div className="text-center space-y-4 p-8 bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent to-rose-gold">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-elegant-dark">Excellence</h3>
              <p className="text-muted-foreground">
                Curated collections that embody elegance and style
              </p>
            </div>

            <div className="text-center space-y-4 p-8 bg-card rounded-2xl shadow-soft hover:shadow-elegant transition-all duration-300 hover:scale-105">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blush to-rose-gold">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-heading font-bold text-elegant-dark">Community</h3>
              <p className="text-muted-foreground">
                Building connections through fashion and culture
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-elegant-dark text-center mb-16">
            Our Journey
          </h2>
          <div className="max-w-3xl mx-auto space-y-12">
            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-accent mt-2"></div>
                <div className="w-px h-full bg-accent/30 ml-2"></div>
              </div>
              <div className="pb-12">
                <h3 className="text-2xl font-heading font-bold text-elegant-dark mb-2">The Beginning</h3>
                <p className="text-muted-foreground">
                  SIMAMM Boutique was founded with a vision to bring authentic Pakistani designer wear to 
                  the Texas community, celebrating our rich cultural heritage.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-accent mt-2"></div>
                <div className="w-px h-full bg-accent/30 ml-2"></div>
              </div>
              <div className="pb-12">
                <h3 className="text-2xl font-heading font-bold text-elegant-dark mb-2">Growth & Expansion</h3>
                <p className="text-muted-foreground">
                  As word spread about our quality and service, we expanded our collection to include pieces 
                  from Pakistan's most celebrated designers.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-accent mt-2"></div>
                <div className="w-px h-full bg-accent/30 ml-2"></div>
              </div>
              <div className="pb-12">
                <h3 className="text-2xl font-heading font-bold text-elegant-dark mb-2">Community Events</h3>
                <p className="text-muted-foreground">
                  We began hosting exclusive trunk shows and sale events, creating memorable shopping experiences 
                  and bringing our community together.
                </p>
              </div>
            </div>

            <div className="flex gap-8">
              <div className="flex-shrink-0">
                <div className="w-4 h-4 rounded-full bg-accent mt-2"></div>
              </div>
              <div>
                <h3 className="text-2xl font-heading font-bold text-elegant-dark mb-2">Today & Beyond</h3>
                <p className="text-muted-foreground">
                  We continue to evolve, offering the latest collections while staying true to our commitment 
                  to quality, authenticity, and exceptional customer service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-20 bg-gradient-to-br from-blush-light via-background to-accent/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="aspect-square bg-gradient-to-br from-accent to-rose-gold rounded-3xl shadow-elegant flex items-center justify-center">
                <Heart className="h-32 w-32 text-white/80" />
              </div>
              <div className="space-y-6">
                <h2 className="text-4xl font-heading font-bold text-elegant-dark">
                  Sobia Anis Allahrakha
                </h2>
                <p className="text-lg text-accent font-semibold">Founder & Creative Director</p>
                <p className="text-muted-foreground leading-relaxed">
                  With a deep passion for Pakistani fashion and culture, Sobia founded SIMAMM Boutique to 
                  share the beauty of South Asian couture with the Texas community.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Her eye for quality, commitment to authenticity, and dedication to customer satisfaction 
                  have made SIMAMM a trusted destination for luxury Pakistani designer wear.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <MobileToolbar />
    </div>
  );
};

export default About;
