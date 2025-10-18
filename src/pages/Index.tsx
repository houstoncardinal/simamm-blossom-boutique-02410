import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedCategories from '@/components/FeaturedCategories';
import EventSection from '@/components/EventSection';
import ProductShowcase from '@/components/ProductShowcase';
import SpecialOffers from '@/components/SpecialOffers';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FacebookLiveSection from '@/components/FacebookLiveSection';
import MobileToolbar from '@/components/MobileToolbar';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturedCategories />
        <ProductShowcase />
        <FacebookLiveSection />
        <EventSection />
        <SpecialOffers />
        <About />
        <Contact />
      </main>
      <Footer />
      <MobileToolbar />
    </div>
  );
};

export default Index;
