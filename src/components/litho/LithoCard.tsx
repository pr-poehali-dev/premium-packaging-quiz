import Icon from "@/components/ui/icon";
import { lithoProducts, specRows } from "./LithoData";

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

export default LithoCard;
