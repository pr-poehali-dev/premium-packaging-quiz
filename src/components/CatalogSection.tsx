import Icon from "@/components/ui/icon";

const products = [
  {
    name: "Sleek 250мл",
    volume: "250 мл",
    popular: false,
    height: "133.2 мм",
    diameter: "53 мм",
    wall: "0.10 мм",
    material: "Пищевой алюминий",
    coating: "BPA-NI внутреннее покрытие",
    bestFor: "Энергетики, тоники, функциональные напитки",
    colors: "4 базовых + полная кастомизация",
    icon: "Zap",
  },
  {
    name: "Sleek 330мл",
    volume: "330 мл",
    popular: false,
    height: "115.2 мм",
    diameter: "66.3 мм",
    wall: "0.10 мм",
    material: "Пищевой алюминий",
    coating: "BPA-NI внутреннее покрытие",
    bestFor: "Пиво, сидр, газированные напитки",
    colors: "4 базовых + полная кастомизация",
    icon: "Star",
  },
  {
    name: "Крупный 450мл",
    volume: "450 мл",
    popular: true,
    height: "149.9 мм",
    diameter: "66.3 мм",
    wall: "0.10 мм",
    material: "Пищевой алюминий",
    coating: "BPA-NI внутреннее покрытие",
    bestFor: "Пиво, коктейли, лимонады",
    colors: "4 базовых + полная кастомизация",
    icon: "Maximize",
  },
];

const badges = [
  { label: "BPA-NI покрытие", icon: "ShieldCheck" },
  { label: "Пищевой алюминий", icon: "Atom" },
  { label: "Совместимо со стандартными линиями розлива", icon: "Settings" },
  { label: "ISO 9001:2015", icon: "Award" },
];

const specRows = [
  { key: "height", label: "Высота" },
  { key: "diameter", label: "Диаметр" },
  { key: "wall", label: "Стенка" },
  { key: "material", label: "Материал" },
  { key: "coating", label: "Покрытие" },
  { key: "bestFor", label: "Применение" },
  { key: "colors", label: "Цвета" },
] as const;

const CatalogSection = () => {
  return (
    <section id="catalog" className="relative py-24 bg-[var(--graphite)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-xs text-[var(--gold)] mb-4 block">
            КАТАЛОГ ПРОДУКЦИИ
          </span>
          <div className="gold-line w-16 mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold-gradient leading-tight mb-6">
            ЛИНЕЙКА ПРОДУКЦИИ
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Полный спектр решений для вашего бренда
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {products.map((product) => (
            <div
              key={product.name}
              className="can-card bg-[var(--obsidian)] border border-[rgba(201,168,76,0.15)] rounded-lg overflow-hidden flex flex-col"
            >
              <div className="relative h-56 flex items-center justify-center bg-gradient-to-b from-[rgba(201,168,76,0.06)] to-transparent">
                {product.popular && (
                  <div className="absolute top-4 right-4 z-10 btn-gold px-3 py-1 rounded text-[10px]">
                    ХИТПРОДАЖ
                  </div>
                )}
                <div className="relative flex flex-col items-center justify-center">
                  <div className="w-16 h-28 md:w-20 md:h-36 rounded-md border-2 border-[var(--gold)] bg-gradient-to-b from-[rgba(201,168,76,0.12)] to-[rgba(201,168,76,0.03)] flex items-center justify-center relative">
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-10 md:w-12 h-2 rounded-t-sm bg-[var(--gold-dim)]" />
                    <Icon
                      name={product.icon}
                      size={24}
                      className="text-[var(--gold)] opacity-40"
                    />
                  </div>
                  <span className="font-display text-3xl md:text-4xl text-gold-gradient mt-4">
                    {product.volume}
                  </span>
                </div>
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
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.04)]"
            >
              <Icon
                name={badge.icon}
                size={14}
                className="text-[var(--gold)] flex-shrink-0"
              />
              <span className="uppercase tracking-wider text-[10px] md:text-xs text-[var(--mist)] whitespace-nowrap">
                {badge.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;