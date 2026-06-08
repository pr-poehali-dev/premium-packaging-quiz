import { useState } from "react";
import Icon from "@/components/ui/icon";
import { lithoProducts, specRows, FactoryPricing } from "./LithoData";

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

interface LithoCardProps {
  product: (typeof lithoProducts)[number];
}

const LithoCard = ({ product }: LithoCardProps) => {
  const [showPhone, setShowPhone] = useState(false);
  const [showPrices, setShowPrices] = useState(false);

  return (
    <div className="can-card bg-[var(--obsidian)] border border-[rgba(201,168,76,0.15)] rounded-lg overflow-hidden flex flex-col relative">
      {showPhone && <PhoneModal onClose={() => setShowPhone(false)} />}
      {product.popular && (
        <div className="absolute top-3 right-3 z-10 bg-[var(--gold)] text-[var(--obsidian)] text-[9px] uppercase tracking-widest font-bold px-2.5 py-1 rounded-full">
          Популярный
        </div>
      )}

      <div className="relative h-64 flex items-center justify-center overflow-hidden bg-gradient-to-b from-[rgba(20,18,14,0.6)] to-[rgba(201,168,76,0.03)]">
        <img
          src="https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/files/cda4feae-0e04-4ff6-b951-483155ccd42d.jpg"
          alt="Банка с вашим брендом"
          className="h-full w-full object-cover object-center"
        />
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

        <button
          onClick={() => setShowPrices(!showPrices)}
          className={`mt-5 flex items-center justify-between w-full px-4 py-3 rounded-lg transition-all duration-300 ${!showPrices ? "btn-bmw-pulse" : ""}`}
          style={{
            background: showPrices ? "rgba(180, 220, 255, 0.08)" : "rgba(180, 220, 255, 0.04)",
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

export default LithoCard;