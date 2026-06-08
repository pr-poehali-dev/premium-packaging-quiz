import { useState } from "react";
import Icon from "@/components/ui/icon";

const PHONE_HREF = "tel:+79966298557";
const PHONE = "+7 (996) 629-85-57";

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
      <a href={PHONE_HREF} className="text-gold-gradient font-display text-2xl font-bold tracking-wide hover:opacity-80 transition-opacity block mb-6">
        {PHONE}
      </a>
      <a href={PHONE_HREF} className="btn-gold px-8 py-3 rounded block w-full mb-3">Позвонить</a>
      <button onClick={onClose} className="text-muted-foreground text-sm hover:text-[var(--mist)] transition-colors">Закрыть</button>
    </div>
  </div>
);

interface LidProduct {
  name: string;
  color: string;
  image: string;
  diameter: string;
  material: string;
  coating: string;
  popular?: boolean;
  pricing: {
    factory: string;
    city: string;
    rows: { label: string; noVat: string; withVat: string }[];
    extras: { label: string; value: string }[];
  }[];
}

const lidProducts: LidProduct[] = [
  {
    name: "Крышка чёрная",
    color: "Чёрная/чёрная",
    image: "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/files/0273ed12-3006-490f-9972-97f4bcb95025.jpg",
    diameter: "SOT 200",
    material: "Алюминиевый сплав",
    coating: "Матовое чёрное покрытие",
    pricing: [
      {
        factory: "АРНЕСТ",
        city: "Наро-Фоминск, Всеволожск",
        rows: [{ label: "от 330 000 шт (паллет)", noVat: "2,39 ₽", withVat: "2,92 ₽" }],
        extras: [
          { label: "Невозврат: Поддон", value: "4 050 ₽" },
          { label: "Невозврат: Рама", value: "1 830 ₽" },
          { label: "Невозврат: Картон", value: "102 ₽" },
        ],
      },
      {
        factory: "КЭН-ПАК",
        city: "Волоколамск, Новочеркасск",
        rows: [{ label: "от 192 780 шт (паллет)", noVat: "2,36 ₽", withVat: "2,88 ₽" }],
        extras: [
          { label: "Невозврат: Поддон", value: "2 700 ₽" },
          { label: "Невозврат: Рама", value: "1 220 ₽" },
          { label: "Невозврат: Картон", value: "185 ₽" },
        ],
      },
    ],
  },
  {
    name: "Крышка серебристая",
    color: "Серебро/серебро",
    image: "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/files/58696e6f-f083-4145-9c65-1b535dab1841.jpg",
    diameter: "SOT 200",
    material: "Алюминиевый сплав",
    coating: "Натуральный металлик",
    popular: true,
    pricing: [
      {
        factory: "АРНЕСТ",
        city: "Наро-Фоминск, Всеволожск",
        rows: [{ label: "от 330 000 шт (паллет)", noVat: "1,86 ₽", withVat: "2,27 ₽" }],
        extras: [
          { label: "Невозврат: Поддон", value: "4 050 ₽" },
          { label: "Невозврат: Рама", value: "1 830 ₽" },
          { label: "Невозврат: Картон", value: "102 ₽" },
        ],
      },
      {
        factory: "КЭН-ПАК",
        city: "Волоколамск, Новочеркасск",
        rows: [{ label: "от 332 800 шт (паллет)", noVat: "2,06 ₽", withVat: "2,51 ₽" }],
        extras: [
          { label: "Невозврат: Поддон", value: "2 700 ₽" },
          { label: "Невозврат: Рама", value: "1 220 ₽" },
          { label: "Невозврат: Картон", value: "185 ₽" },
        ],
      },
    ],
  },
  {
    name: "Крышка золотая",
    color: "Золото/золото",
    image: "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/files/7f3dbff4-517b-48e6-9425-b1c231bd1ea7.jpg",
    diameter: "SOT 200",
    material: "Алюминиевый сплав",
    coating: "Золотое анодирование",
    pricing: [
      {
        factory: "АРНЕСТ",
        city: "Наро-Фоминск, Всеволожск",
        rows: [{ label: "от 330 000 шт (паллет)", noVat: "2,27 ₽", withVat: "2,77 ₽" }],
        extras: [
          { label: "Невозврат: Поддон", value: "4 050 ₽" },
          { label: "Невозврат: Рама", value: "1 830 ₽" },
          { label: "Невозврат: Картон", value: "102 ₽" },
        ],
      },
      {
        factory: "КЭН-ПАК",
        city: "Волоколамск, Новочеркасск",
        rows: [{ label: "от 192 780 шт (паллет)", noVat: "по запросу", withVat: "по запросу" }],
        extras: [
          { label: "Невозврат: Поддон", value: "2 700 ₽" },
          { label: "Невозврат: Рама", value: "1 220 ₽" },
          { label: "Невозврат: Картон", value: "185 ₽" },
        ],
      },
    ],
  },
];

const specRows = [
  { key: "color", label: "Цвет" },
  { key: "diameter", label: "Стандарт" },
  { key: "material", label: "Материал" },
  { key: "coating", label: "Покрытие" },
] as const;

const PricingBlock = ({ pricing }: { pricing: LidProduct["pricing"] }) => {
  const [activeFactory, setActiveFactory] = useState(0);
  const current = pricing[activeFactory];
  return (
    <div className="rounded-lg overflow-hidden mt-6" style={{ border: "1px solid rgba(201,168,76,0.2)", background: "rgba(201,168,76,0.03)" }}>
      <div className="flex border-b border-[rgba(201,168,76,0.15)]">
        {pricing.map((p, i) => (
          <button
            key={p.factory}
            onClick={() => setActiveFactory(i)}
            className={`flex-1 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors ${
              activeFactory === i ? "bg-[rgba(201,168,76,0.12)] text-[var(--gold)]" : "text-muted-foreground hover:text-[var(--mist)]"
            }`}
          >
            {p.factory}
          </button>
        ))}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-1.5 mb-3">
          <Icon name="MapPin" size={11} className="text-[var(--gold)] flex-shrink-0" />
          <span className="text-[10px] text-muted-foreground">{current.city}</span>
        </div>
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
        <div className="space-y-1 pt-2">
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

const LidCard = ({ product }: { product: LidProduct }) => {
  const [showPhone, setShowPhone] = useState(false);
  const [showPrices, setShowPrices] = useState(false);

  return (
    <div className="can-card bg-[var(--obsidian)] border border-[rgba(201,168,76,0.15)] rounded-lg overflow-hidden flex flex-col relative">
      {showPhone && <PhoneModal onClose={() => setShowPhone(false)} />}
      {product.popular && (
        <div className="absolute top-3 right-3 z-10 bg-[var(--gold)] text-[var(--obsidian)] text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full">
          Популярная
        </div>
      )}

      <div className="relative h-64 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[rgba(20,18,14,0.6)] to-[rgba(201,168,76,0.03)]">
        <img src={product.image} alt={product.name} className="h-full w-full object-cover object-center" />
      </div>

      <div className="flex items-center justify-center gap-3 pb-3 pt-4">
        <span className="font-display text-2xl md:text-3xl text-gold-gradient">{product.color}</span>
      </div>

      <div className="p-6 flex-1 flex flex-col">
        <h3 className="font-display text-2xl text-gold-gradient mb-5">{product.name}</h3>

        <div className="space-y-3 flex-1">
          {specRows.map((spec) => (
            <div key={spec.key} className="flex items-start justify-between gap-3">
              <span className="uppercase tracking-wider text-[10px] text-[var(--gold)] flex-shrink-0 pt-0.5">{spec.label}</span>
              <span className="text-xs text-[var(--mist)] text-right leading-snug">{product[spec.key]}</span>
            </div>
          ))}
        </div>

        <button
          onClick={() => setShowPrices(!showPrices)}
          className={`mt-5 flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-300 ${!showPrices ? "btn-bmw-pulse" : ""}`}
          style={{
            background: showPrices ? "rgba(180,220,255,0.08)" : "rgba(180,220,255,0.04)",
            border: "1px solid rgba(160,210,255,0.7)",
            boxShadow: showPrices ? "0 0 18px rgba(160,210,255,0.35), inset 0 0 12px rgba(160,210,255,0.06)" : undefined,
          }}
        >
          <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#c8e8ff" }}>Цены · июнь 2026</span>
          <Icon name={showPrices ? "ChevronUp" : "ChevronDown"} size={14} style={{ color: "#c8e8ff" }} />
        </button>

        {showPrices && <PricingBlock pricing={product.pricing} />}

        <div className="gold-line w-full mt-6 mb-6" />

        <button onClick={() => setShowPhone(true)} className="btn-outline-gold px-8 py-4 rounded text-center block w-full">
          Запросить образец
        </button>
      </div>
    </div>
  );
};

const LidsSection = () => {
  return (
    <section id="lids" className="relative py-24 bg-[var(--obsidian)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-xs text-[var(--gold)] mb-4 block">АКСЕССУАРЫ</span>
          <div className="gold-line w-16 mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-5xl text-gold-gradient leading-tight mb-4">КРЫШКИ</h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">Заказываются отдельно — от 192 780 шт (паллет)</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {lidProducts.map((product) => (
            <LidCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LidsSection;
