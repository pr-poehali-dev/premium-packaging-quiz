import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DesignSupportSection from "@/components/DesignSupportSection";
import CatalogSection from "@/components/CatalogSection";
import LithographySection from "@/components/LithographySection";
import LidsSection from "@/components/LidsSection";
import GeographySection from "@/components/GeographySection";
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
      <GeographySection />
      <DesignSupportSection />
      <ContactSection />
      <Footer />
      <OrderCalculator />
    </div>
  );
};

export default Index;