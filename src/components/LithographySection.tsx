import { lithoProducts } from "./litho/LithoData";
import LithoCard from "./litho/LithoCard";

const LithographySection = () => {

  return (
    <section id="lithography" className="relative py-24 bg-[var(--steel)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-xs text-[var(--gold)] mb-4 block">
            ПЕЧАТЬ НА БАНКАХ
          </span>
          <div className="gold-line w-16 mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold-gradient leading-tight mb-6">
            ЛИТОГРАФИЯ
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Ваш бренд, воплощённый в металле — до 8 цветов прямой печати на алюминиевой банке
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-24">
          {lithoProducts.map((product) => (
            <LithoCard key={`${product.name}-${product.volume}`} product={product} />
          ))}
        </div>


      </div>
    </section>
  );
};

export default LithographySection;