import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BrandSection from "@/components/BrandSection";
import CatalogSection from "@/components/CatalogSection";
import B2BSection from "@/components/B2BSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[var(--obsidian)]">
      <Navbar />
      <HeroSection />
      <BrandSection />
      <CatalogSection />
      <B2BSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
