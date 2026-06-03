import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DesignSupportSection from "@/components/DesignSupportSection";
import CatalogSection from "@/components/CatalogSection";
import LithographySection from "@/components/LithographySection";
import LidsSection from "@/components/LidsSection";
import B2BSection from "@/components/B2BSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import OrderCalculator from "@/components/OrderCalculator";

const Index = () => {
  return (
    <div className="min-h-screen bg-[var(--obsidian)]">
      <Navbar />
      <HeroSection />
      <CatalogSection />
      <LithographySection />
      <LidsSection />
      <DesignSupportSection />
      <B2BSection />
      <ContactSection />
      <Footer />
      <OrderCalculator />
    </div>
  );
};

export default Index;