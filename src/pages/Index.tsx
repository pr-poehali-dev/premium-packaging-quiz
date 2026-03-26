import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandSection from "@/components/BrandSection";
import DesignSupportSection from "@/components/DesignSupportSection";
import CatalogSection from "@/components/CatalogSection";
import LithographySection from "@/components/LithographySection";
import B2BSection from "@/components/B2BSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[var(--obsidian)]">
      <Navbar />
      <HeroSection />
      <BrandSection />
      <DesignSupportSection />
      <CatalogSection />
      <LithographySection />
      <B2BSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;