import { useState } from "react";
import Icon from "@/components/ui/icon";

const SLEEK_CAN_IMAGE =
  "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/files/dd99d2fb-dd3f-444f-bc5d-65f2c2dd0aa0.jpg";

const STD_CAN_IMAGE =
  "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/files/a30f3244-ad17-456b-823a-9c3e2a295158.jpg";

const BLACK_CAN_SLEEK =
  "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/files/06b6fbc0-a0c0-4094-88d7-25e76f3169de.jpg";

const RED_CAN_SLEEK =
  "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/files/e5534434-81d0-41a5-bc71-4d886ed9be2a.jpg";

const WHITE_CAN_SLEEK =
  "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/files/e0b3da1b-d25f-4383-8e78-08c5b2fa53bd.jpg";

const BLACK_CAN_STD =
  "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/files/195b9341-a218-4ccd-946e-76e2c569fbab.jpg";

const RED_CAN_STD =
  "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/files/d8612926-9568-4d31-9d97-6081cdab7d35.jpg";

const WHITE_CAN_STD =
  "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/files/71202305-3033-4afd-bd96-112772514629.jpg";

interface ColorVariant {
  name: string;
  color: string;
  image: string;
}

const colorVariantsSleek: ColorVariant[] = [
  { name: "Серебристый", color: "#C0C0C0", image: SLEEK_CAN_IMAGE },
  { name: "Чёрный", color: "#1a1a1a", image: BLACK_CAN_SLEEK },
  { name: "Красный", color: "#cc2222", image: RED_CAN_SLEEK },
  { name: "Белый", color: "#f0f0f0", image: WHITE_CAN_SLEEK },
];

const colorVariantsStd: ColorVariant[] = [
  { name: "Серебристый", color: "#C0C0C0", image: STD_CAN_IMAGE },
  { name: "Чёрный", color: "#1a1a1a", image: BLACK_CAN_STD },
  { name: "Красный", color: "#cc2222", image: RED_CAN_STD },
  { name: "Белый", color: "#f0f0f0", image: WHITE_CAN_STD },
];

const products = [
  {
    name: "Обезличенная банка sleek 250мл",
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
    colorVariants: colorVariantsSleek,
  },
  {
    name: "Обезличенная банка sleek 330мл",
    volume: "330 мл",
    popular: false,
    height: "115.2 мм",
    diameter: "66.3 мм",
    wall: "0.170 мм",
    material: "Алюминиевый сплав",
    coating: "Внутренний лак на водной основе",
    bestFor: "Пиво, сидр, газированные напитки",
    colors: "4 базовых + полная кастомизация",
    icon: "Star",
    colorVariants: colorVariantsSleek,
  },
  {
    name: "Обезличенная банка 450мл",
    volume: "449 мл",
    popular: true,
    height: "168.0 мм",
    diameter: "63.5 мм",
    wall: "0.170 мм",
    material: "Алюминиевый сплав",
    coating: "Внутренний лак на водной основе",
    bestFor: "Пиво, коктейли, лимонады",
    colors: "4 базовых + полная кастомизация",
    icon: "Maximize",
    colorVariants: colorVariantsStd,
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

interface ProductCardProps {
  product: (typeof products)[number];
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [activeColor, setActiveColor] = useState(0);
  const currentImage = product.colorVariants[activeColor].image;

  return (
    <div className="can-card bg-[var(--obsidian)] border border-[rgba(201,168,76,0.15)] rounded-lg overflow-hidden flex flex-col">
      <div className="relative h-56 flex items-center justify-center">
        <img
            src={currentImage}
            alt={`${product.name} — ${product.colorVariants[activeColor].name}`}
            className="h-40 md:h-48 w-auto object-contain transition-all duration-500 hover:scale-105"
            loading="lazy"
          />
      </div>

      <div className="flex items-center justify-center gap-3 pb-3">
        <span className="font-display text-2xl md:text-3xl text-gold-gradient">
          {product.volume}
        </span>
        <div className="w-px h-5 bg-[rgba(201,168,76,0.3)]" />
        <div className="flex items-center gap-2">
          {product.colorVariants.map((variant, idx) => (
            <button
              key={variant.name}
              onClick={() => setActiveColor(idx)}
              title={variant.name}
              className={`w-6 h-6 rounded-full border-2 transition-all duration-300 ${
                activeColor === idx
                  ? "border-[var(--gold)] scale-110"
                  : "border-[rgba(201,168,76,0.3)] hover:border-[var(--gold)] opacity-60 hover:opacity-100"
              }`}
              style={{ backgroundColor: variant.color }}
            />
          ))}
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
  );
};

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
            <ProductCard key={product.name} product={product} />
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