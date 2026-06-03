import { useState } from "react";
import Icon from "@/components/ui/icon";
import { lithoProducts, specRows } from "./LithoData";

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

interface LithoCardProps {
  product: (typeof lithoProducts)[number];
}

const LithoCard = ({ product }: LithoCardProps) => {
  const [showPhone, setShowPhone] = useState(false);

  return (
    <div className="can-card bg-[var(--obsidian)] border border-[rgba(201,168,76,0.15)] rounded-lg overflow-hidden flex flex-col relative">
      {showPhone && <PhoneModal onClose={() => setShowPhone(false)} />}
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