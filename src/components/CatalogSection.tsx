import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHONE = "+7 (996) 629-85-57";
const PHONE_HREF = "tel:+79966298557";

const PhoneModal = ({ onClose }: { onClose: () => void }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
    onClick={onClose}
  >
    <div
      className="bg-[var(--obsidian)] border border-[rgba(201,168,76,0.3)] rounded-xl p-8 mx-4 max-w-sm w-full text-center shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="w-14 h-14 rounded-full bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center mx-auto mb-5">
        <Icon name="Phone" size={26} className="text-[var(--gold)]" />
      </div>
      <p className="text-[var(--mist)] text-sm mb-3 uppercase tracking-widest">Позвонить нам</p>
      <a
        href={PHONE_HREF}
        className="text-gold-gradient font-display text-2xl font-bold tracking-wide hover:opacity-80 transition-opacity block mb-6"
      >
        {PHONE}
      </a>
      <a href={PHONE_HREF} className="btn-gold px-8 py-3 rounded block w-full mb-3">
        Позвонить
      </a>
      <button
        onClick={onClose}
        className="text-muted-foreground text-sm hover:text-[var(--mist)] transition-colors"
      >
        Закрыть
      </button>
    </div>
  </div>
);

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

interface PriceRow {
  label: string;
  noVat: string;
  withVat: string;
}

interface FactoryPricing {
  factory: string;
  city: string;
  rows: PriceRow[];
  extras: { label: string; value: string }[];
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
    name: "Обезличенная банка sleek",
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
    pricing: [
      {
        factory: "АРНЕСТ",
        city: "Наро-Фоминск, Всеволожск",
        rows: [
          { label: "от 100 000 шт, обезличенная/литография", noVat: "15,40 ₽", withVat: "18,79 ₽" },
          { label: "от 330 000 шт, обезличенная/литография", noVat: "13,41 ₽", withVat: "16,36 ₽" },
          { label: "от 330 000 шт, доплата за матовый цвет", noVat: "0,37 ₽", withVat: "0,45 ₽" },
        ],
        extras: [
          { label: "Заведение дизайна", value: "35 583 ₽ с НДС" },
          { label: "Наценка за невозврат тары", value: "1,43 ₽ с НДС" },
        ],
      },
    ] as FactoryPricing[],
  },
  {
    name: "Обезличенная банка sleek",
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
    pricing: [
      {
        factory: "АРНЕСТ",
        city: "Всеволожск",
        rows: [
          { label: "от 100 000 шт, обезличенная/литография", noVat: "12,90 ₽", withVat: "15,74 ₽" },
          { label: "от 330 000 шт, обезличенная/литография", noVat: "12,04 ₽", withVat: "14,69 ₽" },
          { label: "от 330 000 шт, доплата за матовый цвет", noVat: "0,37 ₽", withVat: "0,45 ₽" },
        ],
        extras: [
          { label: "Заведение дизайна", value: "35 583 ₽ с НДС" },
          { label: "Наценка за невозврат тары", value: "1,43 ₽ с НДС" },
        ],
      },
      {
        factory: "КЭН-ПАК",
        city: "Новочеркасск, Волоколамск",
        rows: [
          { label: "от 100 000 шт, обезличенная", noVat: "11,23 ₽", withVat: "13,70 ₽" },
          { label: "от 300 000 шт, обезличенная/литография", noVat: "10,93 ₽", withVat: "13,33 ₽" },
          { label: "от 300 000 шт, литография матовая", noVat: "11,13 ₽", withVat: "13,58 ₽" },
        ],
        extras: [
          { label: "Заведение дизайна (до 8 цветов)", value: "95 000 ₽ с НДС" },
          { label: "Наценка за невозврат тары", value: "1,27 ₽ с НДС" },
        ],
      },
    ] as FactoryPricing[],
  },
  {
    name: "Обезличенная банка",
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
    pricing: [
      {
        factory: "АРНЕСТ",
        city: "Наро-Фоминск, Всеволожск",
        rows: [
          { label: "от 100 000 шт, обезличенная/литография", noVat: "15,40 ₽", withVat: "18,79 ₽" },
          { label: "от 330 000 шт, обезличенная/литография", noVat: "13,41 ₽", withVat: "16,36 ₽" },
          { label: "от 330 000 шт, доплата за матовый цвет", noVat: "0,37 ₽", withVat: "0,45 ₽" },
        ],
        extras: [
          { label: "Заведение дизайна", value: "35 583 ₽ с НДС" },
          { label: "Наценка за невозврат тары", value: "1,43 ₽ с НДС" },
        ],
      },
      {
        factory: "КЭН-ПАК",
        city: "Волоколамск, Новочеркасск",
        rows: [
          { label: "от 100 000 шт, обезличенная", noVat: "12,06 ₽", withVat: "14,71 ₽" },
          { label: "от 300 000 шт, обезличенная/литография", noVat: "11,74 ₽", withVat: "14,32 ₽" },
          { label: "от 300 000 шт, литография матовая", noVat: "11,94 ₽", withVat: "14,57 ₽" },
        ],
        extras: [
          { label: "Заведение дизайна (до 8 цветов)", value: "95 000 ₽ с НДС" },
          { label: "Наценка за невозврат тары", value: "1,27 ₽ с НДС" },
        ],
      },
    ] as FactoryPricing[],
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

const PricingBlock = ({ pricing }: { pricing: FactoryPricing[] }) => {
  const [activeFactory, setActiveFactory] = useState(0);
  const current = pricing[activeFactory];

  return (
    <div
      className="rounded-lg overflow-hidden mt-6"
      style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.03)" }}
    >
      {pricing.length > 1 && (
        <div className="flex border-b border-[rgba(201,168,76,0.15)]">
          {pricing.map((p, i) => (
            <button
              key={p.factory}
              onClick={() => setActiveFactory(i)}
              className={`flex-1 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
                activeFactory === i
                  ? "bg-[rgba(201,168,76,0.12)] text-[var(--gold)]"
                  : "text-muted-foreground hover:text-[var(--mist)]"
              }`}
            >
              {p.factory}
            </button>
          ))}
        </div>
      )}

      <div className="p-4">
        <div className="flex items-center gap-1.5 mb-3">
          <Icon name="MapPin" size={11} className="text-[var(--gold)] flex-shrink-0" />
          <span className="text-[10px] text-muted-foreground">{current.city}</span>
        </div>

        <div className="space-y-0 mb-3">
          <div className="grid grid-cols-[1fr_auto_auto] gap-x-3 pb-1.5 mb-1 border-b border-[rgba(201,168,76,0.1)]">
            <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Условие</span>
            <span className="text-[9px] uppercase tracking-wider text-muted-foreground text-right">Без НДС</span>
            <span className="text-[9px] uppercase tracking-wider text-[var(--gold)] text-right">С НДС 22%</span>
          </div>
          {current.rows.map((row, i) => (
            <div key={i} className="grid grid-cols-[1fr_auto_auto] gap-x-3 py-1.5 border-b border-[rgba(255,255,255,0.04)]">
              <span className="text-[10px] text-[var(--mist)] leading-snug">{row.label}</span>
              <span className="text-[10px] text-muted-foreground text-right whitespace-nowrap">{row.noVat}</span>
              <span className="text-[10px] text-white font-semibold text-right whitespace-nowrap">{row.withVat}</span>
            </div>
          ))}
        </div>

        <div className="space-y-1 pt-1">
          {current.extras.map((e, i) => (
            <div key={i} className="flex items-start justify-between gap-2">
              <span className="text-[9px] text-muted-foreground leading-snug">{e.label}</span>
              <span className="text-[9px] text-[var(--gold)] text-right whitespace-nowrap font-medium">{e.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [activeColor, setActiveColor] = useState(0);
  const [showPhone, setShowPhone] = useState(false);
  const [showPrices, setShowPrices] = useState(false);
  const currentImage = product.colorVariants[activeColor].image;

  return (
    <div className="can-card bg-[var(--obsidian)] border border-[rgba(201,168,76,0.15)] rounded-lg overflow-hidden flex flex-col">
      {showPhone && <PhoneModal onClose={() => setShowPhone(false)} />}
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

        <button
          onClick={() => setShowPrices(!showPrices)}
          className={`mt-5 flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-300 ${!showPrices ? "btn-bmw-pulse" : ""}`}
          style={{
            background: showPrices
              ? "rgba(180, 220, 255, 0.08)"
              : "rgba(180, 220, 255, 0.04)",
            border: "1px solid rgba(160, 210, 255, 0.7)",
            boxShadow: showPrices
              ? "0 0 18px rgba(160, 210, 255, 0.35), inset 0 0 12px rgba(160, 210, 255, 0.06)"
              : undefined,
          }}
        >
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#c8e8ff" }}>
            Цены · июнь 2026
          </span>
          <Icon name={showPrices ? "ChevronUp" : "ChevronDown"} size={14} style={{ color: "#c8e8ff" }} />
        </button>

        {showPrices && <PricingBlock pricing={product.pricing} />}

        <div className="gold-line w-full mt-6 mb-6" />

        <button
          onClick={() => setShowPhone(true)}
          className="btn-outline-gold px-8 py-4 rounded text-center block w-full"
        >
          Запросить образец
        </button>
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
            ОБЕЗЛИЧЕННАЯ БАНКА
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Продажа от 100 000 банок
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
          {products.map((product) => (
            <ProductCard key={`${product.name}-${product.volume}`} product={product} />
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