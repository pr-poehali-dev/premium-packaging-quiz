import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";
import { lithoProducts, galleryItems } from "./litho/LithoData";
import LithoCard from "./litho/LithoCard";
import GalleryItem from "./litho/GalleryItem";

const LithographySection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const offset = -rect.top * 0.15;
      setScrollY(offset);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

        <div ref={sectionRef} className="relative">
          <div className="relative text-center mb-14">
            <div
              className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
              style={{ transform: `translateY(${scrollY}px)` }}
            >
              <span
                className="font-display text-[clamp(3rem,10vw,8rem)] leading-none opacity-[0.03] text-[var(--gold)] whitespace-nowrap"
                aria-hidden
              >
                GALLERY
              </span>
            </div>

            <div className="relative z-10">
              <div className="inline-flex items-center gap-3 mb-5">
                <div className="w-8 h-px bg-gradient-to-r from-transparent to-[var(--gold)]" />
                <Icon name="Palette" size={16} className="text-[var(--gold)]" />
                <div className="w-8 h-px bg-gradient-to-l from-transparent to-[var(--gold)]" />
              </div>

              <div className="relative inline-block">
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-gold-gradient leading-tight">
                  Живая галерея
                </h3>
                <div
                  className="absolute -bottom-2 left-0 right-0 h-px"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)" }}
                />
              </div>

              <p className="mt-6 text-base md:text-lg font-display text-[var(--mist)] opacity-80 tracking-wide italic">
                «Литография — это история, отпечатанная в деталях»
              </p>
              <p className="mt-3 text-sm text-muted-foreground max-w-md mx-auto">
                Нажмите на любой экспонат, чтобы рассмотреть его ближе
              </p>
            </div>
          </div>

          <div
            className="relative rounded-2xl p-8 md:p-12 overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0a0a0a 0%, #0f0f0f 50%, #080808 100%)",
              boxShadow: "inset 0 2px 0 rgba(201,168,76,0.08), inset 0 -2px 0 rgba(0,0,0,0.5)",
            }}
          >
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage: `repeating-linear-gradient(0deg, rgba(201,168,76,0.5) 0px, rgba(201,168,76,0.5) 1px, transparent 1px, transparent 40px), repeating-linear-gradient(90deg, rgba(201,168,76,0.5) 0px, rgba(201,168,76,0.5) 1px, transparent 1px, transparent 40px)`,
              }}
            />

            <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl" style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), rgba(232,201,122,0.6), rgba(201,168,76,0.3), transparent)" }} />

            <div
              className="absolute top-4 right-6 text-[8px] uppercase tracking-[0.3em] opacity-20"
              style={{ color: "var(--gold)", writingMode: "vertical-rl" }}
            >
              Exhibition · 2025
            </div>

            <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 auto-rows-auto">
              {galleryItems.map((item, i) => (
                <GalleryItem key={item.id} item={item} index={i} />
              ))}
            </div>

            <div className="relative z-10 mt-10 flex items-center justify-center gap-2 opacity-40">
              <div className="w-12 h-px bg-[var(--gold)]" />
              <span className="text-[9px] uppercase tracking-[0.3em] text-[var(--gold)]">Canmaker Gallery</span>
              <div className="w-12 h-px bg-[var(--gold)]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LithographySection;
