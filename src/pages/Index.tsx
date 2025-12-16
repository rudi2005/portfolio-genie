import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesSection } from '@/components/ServicesSection';
import { CategoriesSection } from '@/components/CategoriesSection';
import { PortfolioSection } from '@/components/PortfolioSection';
import { PricingSection } from '@/components/PricingSection';
import { WhyChooseSection } from '@/components/WhyChooseSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <ServicesSection />
      <CategoriesSection />
      <PortfolioSection />
      <PricingSection />
      <WhyChooseSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
