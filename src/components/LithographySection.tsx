import { useState, useRef, useEffect } from "react";
import Icon from "@/components/ui/icon";

const lithoProducts = [
  {
    name: "Литография sleek",
    volume: "250 мл",
    height: "133.2 мм",
    diameter: "53 мм",
    wall: "0.10 мм",
    material: "Пищевой алюминий",
    coating: "BPA-NI внутреннее покрытие",
    bestFor: "Энергетики, тоники, функциональные напитки",
    colors: "До 8 цветов печати",
    icon: "Zap",
    popular: false,
  },
  {
    name: "Литография sleek",
    volume: "330 мл",
    height: "115.2 мм",
    diameter: "66.3 мм",
    wall: "0.170 мм",
    material: "Алюминиевый сплав",
    coating: "Внутренний лак на водной основе",
    bestFor: "Пиво, сидр, газированные напитки",
    colors: "До 8 цветов печати",
    icon: "Star",
    popular: true,
  },
  {
    name: "Литография",
    volume: "449 мл",
    height: "168.0 мм",
    diameter: "63.5 мм",
    wall: "0.170 мм",
    material: "Алюминиевый сплав",
    coating: "Внутренний лак на водной основе",
    bestFor: "Пиво, коктейли, лимонады",
    colors: "До 8 цветов печати",
    icon: "Maximize",
    popular: false,
  },
];

const specRows = [
  { key: "height", label: "Высота" },
  { key: "diameter", label: "Диаметр" },
  { key: "wall", label: "Стенка" },
  { key: "material", label: "Материал" },
  { key: "coating", label: "Покрытие" },
  { key: "bestFor", label: "Применение" },
  { key: "colors", label: "Цвета печати" },
] as const;

const galleryItems = [
  {
    id: 1,
    title: "Крафтовое пиво",
    subtitle: "Серия ограниченного выпуска",
    accent: "#c9a84c",
    rotate: -3,
    size: "large",
    image: "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/bucket/e9cea27a-ce04-4b49-a24c-12f3239d2c3d.png",
  },
  {
    id: 2,
    title: "Энергетик Pro",
    subtitle: "Городская коллекция",
    accent: "#e8c97a",
    rotate: 1.5,
    size: "small",
  },
  {
    id: 3,
    title: "Лимонад Premium",
    subtitle: "Летняя серия",
    accent: "#c9a84c",
    rotate: -1,
    size: "small",
  },
  {
    id: 4,
    title: "Коктейль Edition",
    subtitle: "Авторский дизайн",
    accent: "#8a6e2f",
    rotate: 2.5,
    size: "large",
  },
  {
    id: 5,
    title: "Сидр Artisan",
    subtitle: "Фермерская коллекция",
    accent: "#e8c97a",
    rotate: -2,
    size: "small",
  },
  {
    id: 6,
    title: "Тоник Royal",
    subtitle: "Классическая серия",
    accent: "#c9a84c",
    rotate: 1,
    size: "small",
  },
];

interface LithoCardProps {
  product: (typeof lithoProducts)[number];
}

const LithoCard = ({ product }: LithoCardProps) => {
  return (
    <div className="can-card bg-[var(--obsidian)] border border-[rgba(201,168,76,0.15)] rounded-lg overflow-hidden flex flex-col relative">
      {product.popular && (
        <div className="absolute top-3 right-3 z-10 bg-[var(--gold)] text-[var(--obsidian)] text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full">
          Популярный
        </div>
      )}

      <div className="relative h-56 flex items-center justify-center bg-gradient-to-b from-[rgba(201,168,76,0.05)] to-transparent">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="w-20 h-36 rounded-lg border border-[rgba(201,168,76,0.3)] bg-gradient-to-b from-[rgba(201,168,76,0.08)] to-[rgba(201,168,76,0.02)] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex flex-col">
              <div className="flex-1 bg-gradient-to-r from-[rgba(201,168,76,0.15)] via-[rgba(232,201,122,0.3)] to-[rgba(201,168,76,0.15)]" />
            </div>
            <Icon name={product.icon} size={24} className="text-[var(--gold)] relative z-10 opacity-70" />
          </div>
          <span className="text-[9px] uppercase tracking-[0.25em] text-[rgba(201,168,76,0.5)]">Дизайн на заказ</span>
        </div>
      </div>

      <div className="flex items-center justify-center gap-3 pb-3">
        <span className="font-display text-2xl md:text-3xl text-gold-gradient">
          {product.volume}
        </span>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-2xl text-gold-gradient mb-5">
          {product.name}
        </h3>

        <div className="space-y-3 flex-1">
          {specRows.map((spec) => (
            <div
              key={spec.key}
              className="flex items-start justify-between gap-3"
            >
              <span className="uppercase tracking-wider text-[10px] text-[var(--gold)] flex-shrink-0 pt-0.5">
                {spec.label}
              </span>
              <span className="text-xs text-[var(--mist)] text-right leading-snug">
                {product[spec.key]}
              </span>
            </div>
          ))}
        </div>

        <div className="gold-line w-full mt-6 mb-6" />

        <a
          href="#contacts"
          onClick={(e) => {
            e.preventDefault();
            const target = document.querySelector("#contacts");
            if (target) {
              target.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="btn-outline-gold px-8 py-4 rounded text-center block w-full"
        >
          Запросить образец
        </a>
      </div>
    </div>
  );
};

interface GalleryItemProps {
  item: (typeof galleryItems)[number];
  index: number;
}

const GalleryItem = ({ item, index }: GalleryItemProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || isZoomed) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const isLarge = item.size === "large";

  return (
    <>
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-w-lg w-full mx-4 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-[var(--mist)] opacity-60 hover:opacity-100 transition-opacity"
              onClick={() => setIsZoomed(false)}
            >
              <Icon name="X" size={24} />
            </button>
            <div
              className="rounded-xl overflow-hidden border border-[rgba(201,168,76,0.4)]"
              style={{
                boxShadow: `0 40px 80px rgba(0,0,0,0.8), 0 0 60px ${item.accent}22`,
              }}
            >
              <div
                className="relative flex flex-col items-center justify-center"
                style={{ minHeight: 380, background: `linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)` }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `radial-gradient(ellipse at center, ${item.accent} 0%, transparent 70%)`,
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-6 p-10">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full max-w-sm rounded-xl object-cover"
                      style={{ maxHeight: 280 }}
                    />
                  ) : (
                    <div
                      className="w-28 h-52 rounded-xl border flex items-center justify-center relative overflow-hidden"
                      style={{ borderColor: `${item.accent}50`, background: `linear-gradient(160deg, ${item.accent}12 0%, transparent 100%)` }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{ background: `linear-gradient(90deg, transparent 30%, ${item.accent}20 50%, transparent 70%)` }}
                      />
                      <Icon name="Sparkles" size={32} className="text-[var(--gold)] opacity-60" />
                    </div>
                  )}
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: item.accent }}>
                      Литография · Авторский дизайн
                    </p>
                    <h3 className="font-display text-3xl text-[var(--mist)] mb-1">{item.title}</h3>
                    <p className="text-sm text-[rgba(232,224,208,0.5)]">{item.subtitle}</p>
                  </div>
                  {!item.image && (
                    <p className="text-xs text-center text-[rgba(232,224,208,0.4)] max-w-xs leading-relaxed">
                      Здесь будет ваш готовый дизайн банки. Мы воплотим любую идею — от минимализма до сложных иллюстраций.
                    </p>
                  )}
                </div>
              </div>
              <div className="p-5 bg-[var(--graphite)] border-t border-[rgba(201,168,76,0.15)] flex items-center justify-between">
                <span className="text-xs text-[rgba(232,224,208,0.5)] uppercase tracking-wider">{item.subtitle}</span>
                <a
                  href="#contacts"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsZoomed(false);
                    setTimeout(() => {
                      document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                  className="text-xs uppercase tracking-widest text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors flex items-center gap-1.5"
                >
                  Заказать такой дизайн <Icon name="ArrowRight" size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        ref={cardRef}
        className={`relative cursor-zoom-in group ${isLarge ? "row-span-2" : ""}`}
        style={{ perspective: 800 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsZoomed(true)}
      >
        <div
          className="relative rounded-lg overflow-hidden border border-[rgba(201,168,76,0.2)] transition-all duration-300 ease-out group-hover:border-[rgba(201,168,76,0.5)]"
          style={{
            transform: `rotateZ(${item.rotate}deg) rotateX(${mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`,
            boxShadow: `
              0 20px 60px rgba(0,0,0,0.6),
              0 8px 24px rgba(0,0,0,0.4),
              inset 0 1px 0 rgba(201,168,76,0.1),
              0 0 0 1px rgba(0,0,0,0.3)
            `,
            transformStyle: "preserve-3d",
            transition: "transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
            background: "#0a0a0a",
            minHeight: isLarge ? 340 : 200,
          }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(ellipse at center, ${item.accent}10 0%, transparent 70%)`,
            }}
          />

          <div
            className="absolute top-0 left-0 right-0 h-px opacity-60"
            style={{ background: `linear-gradient(90deg, transparent, ${item.accent}60, transparent)` }}
          />

          <div className="absolute top-3 left-3">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: item.accent, boxShadow: `0 0 6px ${item.accent}80` }}
            />
          </div>
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-1 bg-[rgba(0,0,0,0.6)] rounded-full px-2 py-1">
              <Icon name="ZoomIn" size={10} className="text-[var(--gold)]" />
              <span className="text-[9px] text-[var(--gold)] uppercase tracking-wider">Смотреть</span>
            </div>
          </div>

          <div className={`relative flex flex-col items-center justify-center gap-4 ${isLarge ? "py-8 px-4" : "py-10 px-4"}`}>
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-lg object-cover"
                style={{ maxHeight: isLarge ? 220 : 120 }}
              />
            ) : (
              <div
                className="rounded-lg border flex items-center justify-center relative overflow-hidden"
                style={{
                  width: isLarge ? 72 : 52,
                  height: isLarge ? 132 : 96,
                  borderColor: `${item.accent}40`,
                  background: `linear-gradient(160deg, ${item.accent}10 0%, transparent 100%)`,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(90deg, transparent 20%, ${item.accent}15 50%, transparent 80%)` }}
                />
                <Icon name="Sparkles" size={isLarge ? 20 : 14} style={{ color: item.accent, opacity: 0.7 }} />
              </div>
            )}
            <div className="text-center">
              <p
                className="uppercase tracking-[0.2em] mb-1"
                style={{ fontSize: 9, color: `${item.accent}` }}
              >
                {item.subtitle}
              </p>
              <p className={`font-display text-[var(--mist)] leading-tight ${isLarge ? "text-xl" : "text-sm"}`}>
                {item.title}
              </p>
            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-px opacity-30"
            style={{ background: `linear-gradient(90deg, transparent, ${item.accent}40, transparent)` }}
          />
        </div>

        <div
          className="absolute -bottom-3 left-4 right-4 h-6 rounded-b-lg opacity-40 blur-md transition-opacity duration-300 group-hover:opacity-60"
          style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)` }}
        />
      </div>
    </>
  );
};

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