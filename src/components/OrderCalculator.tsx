import { useState } from "react";
import Icon from "@/components/ui/icon";

const CAN_IMAGE = "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/files/9c4f7391-d4f5-4b20-bab3-a999303ae0db.jpg";

type CanType = "blank" | "litho";
type CanVolume = "250" | "330" | "449";
type Factory = "arnest" | "kenpak";
type LidColor = "none" | "silver" | "black" | "gold";

interface Price {
  noVat: number;
  withVat: number;
}

const PRICES: Record<CanType, Record<CanVolume, Record<Factory, { from100k: Price; from300k: Price; matte: Price }>>> = {
  blank: {
    "250": {
      arnest: { from100k: { noVat: 15.40, withVat: 18.79 }, from300k: { noVat: 13.41, withVat: 16.36 }, matte: { noVat: 0, withVat: 0 } },
      kenpak: { from100k: { noVat: 15.40, withVat: 18.79 }, from300k: { noVat: 13.41, withVat: 16.36 }, matte: { noVat: 0, withVat: 0 } },
    },
    "330": {
      arnest: { from100k: { noVat: 12.90, withVat: 15.74 }, from300k: { noVat: 12.04, withVat: 14.69 }, matte: { noVat: 0, withVat: 0 } },
      kenpak: { from100k: { noVat: 11.23, withVat: 13.70 }, from300k: { noVat: 10.93, withVat: 13.33 }, matte: { noVat: 0, withVat: 0 } },
    },
    "449": {
      arnest: { from100k: { noVat: 15.40, withVat: 18.79 }, from300k: { noVat: 13.41, withVat: 16.36 }, matte: { noVat: 0, withVat: 0 } },
      kenpak: { from100k: { noVat: 12.06, withVat: 14.71 }, from300k: { noVat: 11.74, withVat: 14.32 }, matte: { noVat: 0, withVat: 0 } },
    },
  },
  litho: {
    "250": {
      arnest: { from100k: { noVat: 15.40, withVat: 18.79 }, from300k: { noVat: 13.41, withVat: 16.36 }, matte: { noVat: 0.37, withVat: 0.45 } },
      kenpak: { from100k: { noVat: 15.40, withVat: 18.79 }, from300k: { noVat: 13.41, withVat: 16.36 }, matte: { noVat: 0.37, withVat: 0.45 } },
    },
    "330": {
      arnest: { from100k: { noVat: 12.90, withVat: 15.74 }, from300k: { noVat: 12.04, withVat: 14.69 }, matte: { noVat: 0.37, withVat: 0.45 } },
      kenpak: { from100k: { noVat: 11.13, withVat: 13.58 }, from300k: { noVat: 11.13, withVat: 13.58 }, matte: { noVat: 0, withVat: 0 } },
    },
    "449": {
      arnest: { from100k: { noVat: 15.40, withVat: 18.79 }, from300k: { noVat: 13.41, withVat: 16.36 }, matte: { noVat: 0.37, withVat: 0.45 } },
      kenpak: { from100k: { noVat: 11.94, withVat: 14.57 }, from300k: { noVat: 11.94, withVat: 14.57 }, matte: { noVat: 0, withVat: 0 } },
    },
  },
};

const LID_PRICES: Record<Factory, Record<LidColor, Price>> = {
  arnest: {
    none: { noVat: 0, withVat: 0 },
    silver: { noVat: 1.86, withVat: 2.27 },
    black: { noVat: 2.39, withVat: 2.92 },
    gold: { noVat: 2.27, withVat: 2.77 },
  },
  kenpak: {
    none: { noVat: 0, withVat: 0 },
    silver: { noVat: 2.06, withVat: 2.51 },
    black: { noVat: 2.36, withVat: 2.88 },
    gold: { noVat: 0, withVat: 0 },
  },
};

// АРНЕСТ: цена за 1 цвет с НДС = 35 583 / 8 ≈ 4 448 ₽
// КЭН-ПАК: фиксированная ставка 95 000 ₽ до 8 цветов
const DESIGN_PER_COLOR_ARNEST_VAT = 4448;
const DESIGN_KENPAK_VAT = 95000.18;

const CITIES: Record<Factory, string[]> = {
  arnest: ["Наро-Фоминск", "Всеволожск"],
  kenpak: ["Волоколамск", "Новочеркасск"],
};

const FACTORY_NAMES: Record<Factory, string> = {
  arnest: "АРНЕСТ",
  kenpak: "КЭН-ПАК",
};

interface CalcResult {
  canPrice: number;
  lidPrice: number;
  designSetup: number;
  total: number;
  pricePerCan: number;
  factory: Factory;
  city: string;
  colorCount: number;
}

const Checkbox = ({ checked, onClick, label }: { checked: boolean; onClick: () => void; label: string }) => (
  <label className="flex items-center gap-3 cursor-pointer">
    <div
      onClick={onClick}
      className="w-5 h-5 rounded flex items-center justify-center flex-shrink-0 transition-all"
      style={{
        border: `1px solid ${checked ? "rgba(201,168,76,0.6)" : "rgba(201,168,76,0.2)"}`,
        background: checked ? "rgba(201,168,76,0.2)" : "transparent",
      }}
    >
      {checked && <Icon name="Check" size={12} className="text-[var(--gold)]" />}
    </div>
    <span className="text-xs text-[var(--mist)]">{label}</span>
  </label>
);

const OrderCalculator = () => {
  const [open, setOpen] = useState(false);
  const [canType, setCanType] = useState<CanType>("blank");
  const [volume, setVolume] = useState<CanVolume>("330");
  const [quantity, setQuantity] = useState<string>("100000");
  const [factory, setFactory] = useState<Factory>("arnest");
  const [city, setCity] = useState<string>("Наро-Фоминск");
  const [matte, setMatte] = useState(false);
  const [lid, setLid] = useState<LidColor>("none");
  const [withDesign, setWithDesign] = useState(false);
  const [colorCount, setColorCount] = useState(4);
  const [result, setResult] = useState<CalcResult | null>(null);

  const isLitho = canType === "litho";

  const handleFactoryChange = (f: Factory) => {
    setFactory(f);
    setCity(CITIES[f][0]);
    if (f === "kenpak" && lid === "gold") setLid("none");
    if (f === "kenpak") setMatte(false);
  };

  const handleTypeChange = (t: CanType) => {
    setCanType(t);
    if (t === "blank") {
      setMatte(false);
      setWithDesign(false);
    }
  };

  const designCost = () => {
    if (!withDesign || !isLitho) return 0;
    if (factory === "arnest") return DESIGN_PER_COLOR_ARNEST_VAT * colorCount;
    return DESIGN_KENPAK_VAT;
  };

  const calculate = () => {
    const qty = parseInt(quantity.replace(/\D/g, "")) || 0;
    if (qty < 100000) return;

    const priceSet = PRICES[canType][volume][factory];
    const basePrice = qty >= 300000 ? priceSet.from300k.withVat : priceSet.from100k.withVat;
    const matteAdd = isLitho && matte ? priceSet.matte.withVat : 0;
    const canTotal = (basePrice + matteAdd) * qty;
    const lidTotal = lid !== "none" ? LID_PRICES[factory][lid].withVat * qty : 0;
    const designTotal = designCost();
    const total = canTotal + lidTotal + designTotal;

    setResult({
      canPrice: canTotal,
      lidPrice: lidTotal,
      designSetup: designTotal,
      total,
      pricePerCan: total / qty,
      factory,
      city,
      colorCount,
    });
  };

  const fmt = (n: number) =>
    n.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ₽";

  const btnActive = "bg-[rgba(201,168,76,0.15)] text-[var(--gold)] border border-[rgba(201,168,76,0.4)]";
  const btnIdle = "border border-[rgba(201,168,76,0.1)] text-muted-foreground hover:border-[rgba(201,168,76,0.3)]";

  return (
    <>
      {/* Floating can button */}
      <div className="fixed bottom-8 right-8 z-40">
        <button
          onClick={() => setOpen(true)}
          className="relative focus:outline-none"
          aria-label="Расчёт стоимости заказа"
        >
          <div
            className="btn-bmw-pulse rounded-2xl overflow-hidden w-24 h-36 relative"
            style={{ border: "1px solid rgba(160,210,255,0.7)" }}
          >
            <img src={CAN_IMAGE} alt="Расчёт стоимости" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/40 flex items-end justify-center pb-2">
              <span
                className="text-[8px] font-bold uppercase tracking-wider text-center leading-tight px-1"
                style={{ color: "#c8e8ff", textShadow: "0 0 8px rgba(160,210,255,0.8)" }}
              >
                РАСЧЁТ СТОИМОСТИ ЗАКАЗА
              </span>
            </div>
          </div>
        </button>
      </div>

      {/* Drawer */}
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => { setOpen(false); setResult(null); }}
          />
          <div
            className="relative w-full max-w-lg h-full overflow-y-auto flex flex-col"
            style={{
              background: "var(--obsidian)",
              borderLeft: "1px solid rgba(160,210,255,0.3)",
              boxShadow: "-8px 0 40px rgba(160,210,255,0.08)",
            }}
          >
            {/* Header */}
            <div
              className="sticky top-0 z-10 flex items-center justify-between px-6 py-5"
              style={{ background: "var(--obsidian)", borderBottom: "1px solid rgba(160,210,255,0.15)" }}
            >
              <div>
                <h2 className="font-display text-xl text-gold-gradient">Расчёт стоимости</h2>
                <p className="text-[10px] text-muted-foreground mt-0.5 uppercase tracking-wider">Предварительный · с НДС 22%</p>
              </div>
              <button
                onClick={() => { setOpen(false); setResult(null); }}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-[rgba(201,168,76,0.2)] text-muted-foreground hover:text-[var(--mist)] transition-colors"
              >
                <Icon name="X" size={16} />
              </button>
            </div>

            <div className="p-6 space-y-6 flex-1">
              {/* Тип банки */}
              <div>
                <label className="text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-2">Тип банки</label>
                <div className="grid grid-cols-2 gap-2">
                  {([["blank", "Обезличенная"], ["litho", "Литография"]] as [CanType, string][]).map(([v, label]) => (
                    <button key={v} onClick={() => handleTypeChange(v)}
                      className={`py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${canType === v ? btnActive : btnIdle}`}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Объём */}
              <div>
                <label className="text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-2">Объём банки</label>
                <div className="grid grid-cols-3 gap-2">
                  {([["250", "250 мл"], ["330", "330 мл"], ["449", "449 мл"]] as [CanVolume, string][]).map(([v, label]) => (
                    <button key={v} onClick={() => setVolume(v)}
                      className={`py-2.5 rounded-lg text-xs font-semibold transition-all ${volume === v ? btnActive : btnIdle}`}>
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Количество */}
              <div>
                <label className="text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-2">Количество банок</label>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value.replace(/\D/g, ""))}
                  placeholder="от 100 000 шт"
                  className="w-full px-4 py-3 rounded-lg text-sm text-[var(--mist)] placeholder:text-muted-foreground focus:outline-none"
                  style={{ background: "var(--steel)", border: "1px solid rgba(201,168,76,0.2)" }}
                />
                {quantity !== "" && parseInt(quantity) < 100000 && (
                  <p className="text-[10px] text-red-400 mt-1">Минимальный заказ — 100 000 шт</p>
                )}
              </div>

              {/* Завод */}
              <div>
                <label className="text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-2">Завод-производитель</label>
                <div className="grid grid-cols-2 gap-2">
                  {(["arnest", "kenpak"] as Factory[]).map((f) => (
                    <button key={f} onClick={() => handleFactoryChange(f)}
                      className={`py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all ${factory === f ? btnActive : btnIdle}`}>
                      {FACTORY_NAMES[f]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Город */}
              <div>
                <label className="text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-2">Город вывоза</label>
                <div className="grid grid-cols-2 gap-2">
                  {CITIES[factory].map((c) => (
                    <button key={c} onClick={() => setCity(c)}
                      className={`py-2.5 rounded-lg text-xs font-semibold transition-all ${city === c
                        ? "bg-[rgba(160,210,255,0.1)] border text-[#c8e8ff]"
                        : btnIdle}`}
                      style={city === c ? { borderColor: "rgba(160,210,255,0.5)" } : {}}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              {/* Дополнительно — только для литографии */}
              {isLitho && (
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-2">Дополнительно</label>
                  <div className="space-y-3">
                    {/* Матовое покрытие — только АРНЕСТ */}
                    {factory === "arnest" && (
                      <Checkbox
                        checked={matte}
                        onClick={() => setMatte(!matte)}
                        label="Матовый цвет (+0,45 ₽/шт с НДС)"
                      />
                    )}

                    {/* Заведение дизайна */}
                    <Checkbox
                      checked={withDesign}
                      onClick={() => setWithDesign(!withDesign)}
                      label={factory === "arnest"
                        ? `Заведение дизайна (${colorCount} цв. × 4 448 ₽ = ${(colorCount * DESIGN_PER_COLOR_ARNEST_VAT).toLocaleString("ru-RU")} ₽ с НДС)`
                        : "Заведение дизайна (до 8 цветов — 95 000 ₽ с НДС)"}
                    />

                    {/* Выбор цветов — только АРНЕСТ */}
                    {factory === "arnest" && withDesign && (
                      <div className="pl-8">
                        <label className="text-[9px] uppercase tracking-wider text-muted-foreground block mb-2">
                          Количество цветов
                        </label>
                        <div className="flex gap-1.5 flex-wrap">
                          {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                            <button
                              key={n}
                              onClick={() => setColorCount(n)}
                              className={`w-8 h-8 rounded text-xs font-semibold transition-all ${colorCount === n ? btnActive : btnIdle}`}
                            >
                              {n}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Крышки */}
              <div>
                <label className="text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-2">Крышки (опционально)</label>
                <div className="grid grid-cols-2 gap-2">
                  {([
                    ["none", "Без крышек"],
                    ["silver", "Серебро"],
                    ["black", "Чёрная"],
                    ["gold", factory === "kenpak" ? "Золото (запрос)" : "Золото"],
                  ] as [LidColor, string][]).map(([v, label]) => (
                    <button
                      key={v}
                      onClick={() => setLid(v)}
                      disabled={v === "gold" && factory === "kenpak"}
                      className={`py-2.5 rounded-lg text-xs font-semibold transition-all disabled:opacity-30 disabled:cursor-not-allowed ${lid === v ? btnActive : btnIdle}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Кнопка */}
              <button
                onClick={calculate}
                disabled={!quantity || parseInt(quantity) < 100000}
                className="btn-bmw-pulse w-full py-4 rounded-lg text-sm font-bold uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed"
                style={{
                  border: "1px solid rgba(160,210,255,0.7)",
                  background: "rgba(160,210,255,0.06)",
                  color: "#c8e8ff",
                }}
              >
                Рассчитать стоимость
              </button>

              {/* Результат */}
              {result && (
                <div
                  className="rounded-xl p-5 space-y-3"
                  style={{
                    background: "rgba(160,210,255,0.04)",
                    border: "1px solid rgba(160,210,255,0.3)",
                    boxShadow: "0 0 20px rgba(160,210,255,0.08)",
                  }}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Calculator" size={14} style={{ color: "#c8e8ff" }} />
                    <span className="text-[10px] uppercase tracking-wider" style={{ color: "#c8e8ff" }}>
                      {FACTORY_NAMES[result.factory]} · {result.city}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-[11px] text-muted-foreground">Банки</span>
                      <span className="text-[11px] text-[var(--mist)]">{fmt(result.canPrice)}</span>
                    </div>
                    {result.lidPrice > 0 && (
                      <div className="flex justify-between">
                        <span className="text-[11px] text-muted-foreground">Крышки</span>
                        <span className="text-[11px] text-[var(--mist)]">{fmt(result.lidPrice)}</span>
                      </div>
                    )}
                    {result.designSetup > 0 && (
                      <div className="flex justify-between">
                        <span className="text-[11px] text-muted-foreground">
                          Заведение дизайна{result.factory === "arnest" ? ` (${result.colorCount} цв.)` : ""}
                        </span>
                        <span className="text-[11px] text-[var(--mist)]">{fmt(result.designSetup)}</span>
                      </div>
                    )}
                  </div>

                  <div className="pt-3 mt-1" style={{ borderTop: "1px solid rgba(160,210,255,0.15)" }}>
                    <div className="flex justify-between items-baseline">
                      <span className="text-xs uppercase tracking-wider text-muted-foreground">Итого с НДС</span>
                      <span className="font-display text-2xl text-gold-gradient">{fmt(result.total)}</span>
                    </div>
                    <div className="flex justify-between mt-1">
                      <span className="text-[10px] text-muted-foreground">Цена за банку</span>
                      <span className="text-[11px] text-[var(--mist)]">{fmt(result.pricePerCan)}</span>
                    </div>
                  </div>

                  <p className="text-[9px] text-muted-foreground pt-2 leading-relaxed">
                    * Предварительный расчёт. Не включает доставку. Не является публичной офертой.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default OrderCalculator;
