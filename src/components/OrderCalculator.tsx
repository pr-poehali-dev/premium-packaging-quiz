import { useState, useRef, useEffect } from "react";
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

// АРНЕСТ: 250 000 ₽ до 8 цветов. 1 цвет — по прайсу, насчитывается отдельно после утверждения дизайна
// КЭН-ПАК: фиксированная ставка 95 000 ₽ до 8 цветов
const DESIGN_PER_COLOR_ARNEST_VAT = 31250; // 250 000 / 8
const DESIGN_KENPAK_VAT = 95000.18;

// Наценка за невозврат тары (банка, ₽/шт с НДС)
const NONRETURN_CAN: Record<Factory, number> = {
  arnest: 1.43,
  kenpak: 1.27,
};

// Наценка за невозврат тары (крышки) — фикс за паллет, ₽
// поддон + рама + картон (усреднённо для 1 паллета)
const NONRETURN_LID_PALLET: Record<Factory, { pallet: number; frame: number; cardboard: number }> = {
  arnest: { pallet: 4050, frame: 1830, cardboard: 102 },
  kenpak: { pallet: 2700, frame: 1220, cardboard: 185 },
};

// Кол-во крышек в паллете (для расчёта кол-ва паллетов)
const LID_PER_PALLET: Record<Factory, number> = {
  arnest: 330000,
  kenpak: 192780,
};

const CITIES: Record<Factory, string[]> = {
  arnest: ["Наро-Фоминск", "Всеволожск"],
  kenpak: ["Волоколамск", "Новочеркасск"],
};

const FACTORY_NAMES: Record<Factory, string> = {
  arnest: "АРНЕСТ",
  kenpak: "КЭН-ПАК",
};

interface FactoryResult {
  factory: Factory;
  city: string;
  canPrice: number;
  lidPrice: number;
  designSetup: number;
  total: number;
  totalWithNonReturn: number;
  nonReturnCan: number;
  nonReturnLid: number;
  pricePerCan: number;
  pricePerCanWithNonReturn: number;
  available: boolean;
  warning?: string;
}

interface CalcResult {
  qty: number;
  colorCount: number;
  arnest: FactoryResult;
  kenpak: FactoryResult;
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

const SEND_EMAIL_URL = "https://functions.poehali.dev/2b3b2d44-fda8-41c3-a62c-55edaa8ce5c9";

const OrderCalculator = () => {
  const [open, setOpen] = useState(false);
  const resultRef = useRef<HTMLDivElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const [phone, setPhone] = useState("");
  const [phoneSent, setPhoneSent] = useState(false);
  const [phoneSending, setPhoneSending] = useState(false);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("open-calculator", handler);
    return () => window.removeEventListener("open-calculator", handler);
  }, []);
  const [canType, setCanType] = useState<CanType>("blank");
  const [volume, setVolume] = useState<CanVolume>("330");
  const [quantity, setQuantity] = useState<string>("100000");
  const [matte, setMatte] = useState(false);
  const [lid, setLid] = useState<LidColor>("none");
  const [withDesign, setWithDesign] = useState(false);
  const [colorCount, setColorCount] = useState(4);
  const [result, setResult] = useState<CalcResult | null>(null);

  const isLitho = canType === "litho";

  const handleTypeChange = (t: CanType) => {
    setCanType(t);
    if (t === "blank") {
      setMatte(false);
      setWithDesign(false);
    }
  };

  const calcForFactory = (f: Factory, qty: number): FactoryResult => {
    const priceSet = PRICES[canType][volume][f];
    const basePrice = qty >= 300000 ? priceSet.from300k.withVat : priceSet.from100k.withVat;
    const matteAdd = isLitho && matte && f === "arnest" ? priceSet.matte.withVat : 0;
    const canTotal = (basePrice + matteAdd) * qty;
    const effectiveLid = (lid === "gold" && f === "kenpak") ? "none" : lid;
    const lidTotal = effectiveLid !== "none" ? LID_PRICES[f][effectiveLid].withVat * qty : 0;
    let designTotal = 0;
    if (withDesign && isLitho) {
      designTotal = f === "arnest" ? DESIGN_PER_COLOR_ARNEST_VAT * colorCount : DESIGN_KENPAK_VAT;
    }
    const total = canTotal + lidTotal + designTotal;
    const nonReturnCan = NONRETURN_CAN[f] * qty;
    let nonReturnLid = 0;
    if (effectiveLid !== "none") {
      const pallets = Math.ceil(qty / LID_PER_PALLET[f]);
      const p = NONRETURN_LID_PALLET[f];
      nonReturnLid = pallets * (p.pallet + p.frame + p.cardboard);
    }
    const totalWithNonReturn = total + nonReturnCan + nonReturnLid;
    // КЭН-ПАК не производит 250мл
    const available = !(f === "kenpak" && volume === "250");
    // Предупреждения
    let warning: string | undefined;
    if (f === "kenpak" && isLitho && qty < 330000) {
      warning = "Минимальный заказ литографии — 330 000 шт. Расчёт приблизительный.";
    }
    return {
      factory: f,
      city: CITIES[f][0],
      canPrice: canTotal,
      lidPrice: lidTotal,
      designSetup: designTotal,
      total,
      totalWithNonReturn,
      nonReturnCan,
      nonReturnLid,
      pricePerCan: total / qty,
      pricePerCanWithNonReturn: totalWithNonReturn / qty,
      available,
      warning,
    };
  };

  const buildKP = (): string => {
    if (!result) return "—";
    const fmtNum = (n: number) => n.toLocaleString("ru-RU", { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + " ₽";
    const canTypeLabel = canType === "litho" ? "Литография (брендированная)" : "Обезличенная (без печати)";
    const lidLabel: Record<LidColor, string> = { none: "без крышек", silver: "серебро", black: "чёрные", gold: "золото" };
    const lines: string[] = [];
    lines.push("=== КОММЕРЧЕСКОЕ ПРЕДЛОЖЕНИЕ ===");
    lines.push("");
    lines.push(`Тип банки: ${canTypeLabel}`);
    lines.push(`Объём: ${volume} мл`);
    lines.push(`Количество: ${result.qty.toLocaleString("ru-RU")} шт`);
    lines.push(`Крышки: ${lidLabel[lid]}`);
    if (isLitho) {
      lines.push(`Матовое покрытие: ${matte ? "да" : "нет"}`);
      lines.push(`Заведение дизайна: ${withDesign ? `да (${result.colorCount} цветов)` : "нет"}`);
    }
    lines.push("");

    (["arnest", "kenpak"] as Factory[]).forEach((f) => {
      const r = result[f];
      lines.push(`--- ${FACTORY_NAMES[f]} (${r.city}) ---`);
      if (!r.available) { lines.push("Недоступно для выбранного объёма"); lines.push(""); return; }
      if (r.warning) lines.push(`! ${r.warning}`);
      lines.push(`  Банки: ${fmtNum(r.canPrice)}`);
      if (r.lidPrice > 0) lines.push(`  Крышки: ${fmtNum(r.lidPrice)}`);
      if (r.designSetup > 0) lines.push(`  Заведение дизайна: ${fmtNum(r.designSetup)}`);
      lines.push(`  ИТОГО (с возвратом тары): ${fmtNum(r.total)}`);
      lines.push(`  ИТОГО (без возврата тары): ${fmtNum(r.totalWithNonReturn)}`);
      lines.push(`  Цена за банку: ${fmtNum(r.pricePerCan)}`);
      lines.push("");
    });

    lines.push("* Предварительный расчёт, без доставки, не оферта.");
    return lines.join("\n");
  };

  const sendPhone = async () => {
    if (!phone.trim()) return;
    setPhoneSending(true);
    try {
      await fetch(SEND_EMAIL_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          company: "—",
          contact: "—",
          email: "—",
          phone: phone.trim(),
          volume: result ? `${result.qty.toLocaleString("ru-RU")} шт, ${canType === "litho" ? "литография" : "обезличенная"}, ${volume} мл` : "—",
          message: buildKP(),
        }),
      });
      setPhoneSent(true);
    } finally {
      setPhoneSending(false);
    }
  };

  const calculate = () => {
    const qty = parseInt(quantity.replace(/\D/g, "")) || 0;
    if (qty < 100000) return;
    setPhoneSent(false);
    setPhone("");
    setResult({
      qty,
      colorCount,
      arnest: calcForFactory("arnest", qty),
      kenpak: calcForFactory("kenpak", qty),
    });
    setTimeout(() => {
      if (resultRef.current && drawerRef.current) {
        const drawer = drawerRef.current;
        const resultTop = resultRef.current.offsetTop;
        drawer.scrollTo({ top: resultTop - 16, behavior: "smooth" });
      }
    }, 50);
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
            ref={drawerRef}
            className="relative w-full max-w-lg h-full overflow-y-auto overflow-x-hidden flex flex-col"
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

              {/* Дополнительно — только для литографии */}
              {isLitho && (
                <div>
                  <label className="text-[10px] uppercase tracking-wider text-[var(--gold)] block mb-2">Дополнительно</label>
                  <div className="space-y-3">
                    <Checkbox
                      checked={matte}
                      onClick={() => setMatte(!matte)}
                      label="Матовый цвет — АРНЕСТ (+0,45 ₽/шт с НДС)"
                    />
                    <Checkbox
                      checked={withDesign}
                      onClick={() => setWithDesign(!withDesign)}
                      label="Заведение дизайна (до 8 цветов)"
                    />
                    {withDesign && (
                      <div className="pl-8 space-y-2">
                        <label className="text-[9px] uppercase tracking-wider text-muted-foreground block">
                          Кол-во цветов (для АРНЕСТ)
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
                        <p className="text-[9px] text-muted-foreground leading-relaxed">
                          АРНЕСТ: 250 000 ₽ с НДС. КЭН-ПАК: 95 000 ₽ с НДС. Стоимость 1 цвета — по прайсу, насчитывается после утверждения дизайна.
                        </p>
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
                    ["gold", "Золото"],
                  ] as [LidColor, string][]).map(([v, label]) => (
                    <button
                      key={v}
                      onClick={() => setLid(v)}
                      className={`py-2.5 rounded-lg text-xs font-semibold transition-all ${lid === v ? btnActive : btnIdle}`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
                {lid === "gold" && (
                  <p className="text-[9px] text-muted-foreground mt-1">* Золотые крышки — только АРНЕСТ. У КЭН-ПАК будет рассчитано без крышек.</p>
                )}
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
                <div ref={resultRef} className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Icon name="Calculator" size={14} style={{ color: "#c8e8ff" }} />
                    <span className="text-[10px] uppercase tracking-wider" style={{ color: "#c8e8ff" }}>
                      Сравнение заводов · {result.qty.toLocaleString("ru-RU")} шт
                    </span>
                  </div>

                  {/* Два завода */}
                  {(["arnest", "kenpak"] as Factory[]).map((f) => {
                    const r = result[f];
                    return (
                      <div
                        key={f}
                        className="rounded-xl p-4 space-y-3"
                        style={{
                          background: r.available ? "rgba(160,210,255,0.04)" : "rgba(255,255,255,0.02)",
                          border: `1px solid ${r.available ? "rgba(160,210,255,0.3)" : "rgba(255,255,255,0.08)"}`,
                          opacity: r.available ? 1 : 0.5,
                        }}
                      >
                        {/* Заголовок завода */}
                        <div className="flex items-center justify-between">
                          <div>
                            <span className="text-xs font-bold uppercase tracking-wider text-[var(--mist)]">{FACTORY_NAMES[f]}</span>
                            <span className="text-[9px] text-muted-foreground ml-2">{r.city}</span>
                          </div>
                          {!r.available && (
                            <span className="text-[9px] text-muted-foreground border border-white/10 rounded px-2 py-0.5">Нет 250 мл</span>
                          )}
                        </div>

                        {/* Предупреждение */}
                        {r.warning && (
                          <div className="flex items-start gap-2 rounded-lg px-3 py-2"
                            style={{ background: "rgba(251,191,36,0.06)", border: "1px solid rgba(251,191,36,0.25)" }}>
                            <Icon name="TriangleAlert" size={11} className="mt-0.5 flex-shrink-0" style={{ color: "#fbbf24" }} />
                            <span className="text-[10px] leading-relaxed" style={{ color: "#fcd34d" }}>{r.warning}</span>
                          </div>
                        )}

                        {r.available && (
                          <>
                            {/* Состав */}
                            <div className="space-y-1">
                              <div className="flex justify-between">
                                <span className="text-[10px] text-muted-foreground">Банки</span>
                                <span className="text-[10px] text-[var(--mist)]">{fmt(r.canPrice)}</span>
                              </div>
                              {r.lidPrice > 0 && (
                                <div className="flex justify-between">
                                  <span className="text-[10px] text-muted-foreground">Крышки</span>
                                  <span className="text-[10px] text-[var(--mist)]">{fmt(r.lidPrice)}</span>
                                </div>
                              )}
                              {r.designSetup > 0 && (
                                <div className="flex justify-between">
                                  <span className="text-[10px] text-muted-foreground">
                                    Заведение дизайна{f === "arnest" ? ` (${result.colorCount} цв.)` : ""}
                                  </span>
                                  <span className="text-[10px] text-[var(--mist)]">{fmt(r.designSetup)}</span>
                                </div>
                              )}
                            </div>

                            {/* С возвратом / без */}
                            <div className="grid grid-cols-2 gap-2">
                              <div
                                className="rounded-lg p-2.5 flex flex-col gap-0.5"
                                style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}
                              >
                                <div className="flex items-center gap-1 mb-0.5">
                                  <Icon name="RotateCcw" size={9} className="text-[var(--gold)]" />
                                  <span className="text-[8px] uppercase tracking-wider text-[var(--gold)]">С возвратом</span>
                                </div>
                                <span className="font-display text-base text-gold-gradient leading-none">{fmt(r.total)}</span>
                                <span className="text-[8px] text-muted-foreground">{fmt(r.pricePerCan)} / шт</span>
                              </div>
                              <div
                                className="rounded-lg p-2.5 flex flex-col gap-0.5"
                                style={{ background: "rgba(255,80,80,0.05)", border: "1px solid rgba(255,80,80,0.18)" }}
                              >
                                <div className="flex items-center gap-1 mb-0.5">
                                  <Icon name="PackageX" size={9} style={{ color: "#f87171" }} />
                                  <span className="text-[8px] uppercase tracking-wider" style={{ color: "#f87171" }}>Без возврата</span>
                                </div>
                                <span className="font-display text-base leading-none" style={{ color: "#fca5a5" }}>{fmt(r.totalWithNonReturn)}</span>
                                <span className="text-[8px] text-muted-foreground">{fmt(r.pricePerCanWithNonReturn)} / шт</span>
                              </div>
                            </div>

                            {/* Переплата за невозврат */}
                            <div className="flex justify-between items-center px-1">
                              <span className="text-[9px] text-muted-foreground">Переплата за невозврат тары</span>
                              <span className="text-[9px] font-semibold" style={{ color: "#f87171" }}>
                                +{fmt(r.nonReturnCan + r.nonReturnLid)}
                              </span>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })}

                  {/* Торг и контакт */}
                  <div
                    className="rounded-lg px-4 py-3 space-y-2"
                    style={{ background: "rgba(201,168,76,0.06)", border: "1px solid rgba(201,168,76,0.2)" }}
                  >
                    <p className="text-[11px] text-[var(--mist)] leading-relaxed">
                      Указаны базовые цены — <span className="text-[var(--gold)] font-semibold">торг уместен.</span> Финальная стоимость обсуждается индивидуально с каждым клиентом.
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <a href="tel:+79966298557" className="flex items-center gap-2 group">
                        <div className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                          style={{ background: "rgba(201,168,76,0.15)", border: "1px solid rgba(201,168,76,0.3)" }}>
                          <Icon name="Phone" size={11} className="text-[var(--gold)]" />
                        </div>
                        <span className="text-sm font-semibold text-gold-gradient group-hover:opacity-80 transition-opacity">
                          +7 (996) 629-85-57
                        </span>
                      </a>
                      <a
                        href="https://max.ru/aluminium_elit"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 group px-3 py-1.5 rounded-lg transition-all"
                        style={{ background: "rgba(0,119,255,0.1)", border: "1px solid rgba(0,119,255,0.3)" }}
                      >
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2z" fill="#0077FF"/>
                          <path d="M16.5 8.5c.2-.7-.2-1-1-1H14c-.7 0-1 .4-1.2 1C12.3 10 11.5 11.5 11 12c-.1.2-.3.2-.3 0V9c0-.7-.2-1-.9-1H8.3c-.5 0-.8.4-.8.8 0 .8 1.2 1 1.3 3.2.1 1.5-.8 3.5-.8 3.5-.3.6 0 .9.6.9h1.5c.7 0 .9-.4 1-.9 0 0 1.4-4 1.5-4.3.1-.3.4-.3.4 0v4.4c0 .6.3.8.8.8h.9c.5 0 .8-.2 1.1-.8C15.8 14.2 17 11.5 16.5 8.5z" fill="white"/>
                        </svg>
                        <span className="text-xs font-semibold group-hover:opacity-80 transition-opacity" style={{ color: "#5b9cf6" }}>
                          Написать в MAX
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Форма — оставьте телефон */}
                  <div
                    className="rounded-xl p-5 space-y-4"
                    style={{
                      background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.06) 100%)",
                      border: "1px solid rgba(201,168,76,0.5)",
                      boxShadow: "0 0 24px rgba(201,168,76,0.08)",
                    }}
                  >
                    {phoneSent ? (
                      <div className="flex items-center gap-3 py-2">
                        <Icon name="CheckCircle" size={20} className="text-[var(--gold)] flex-shrink-0" />
                        <p className="text-sm text-[var(--gold)] font-semibold">Отлично! Мы свяжемся с вами.</p>
                      </div>
                    ) : (
                      <>
                        <div className="flex items-start gap-2">
                          <Icon name="Phone" size={15} className="text-[var(--gold)] flex-shrink-0 mt-0.5" />
                          <div>
                            <p className="text-sm font-bold text-[var(--gold)] leading-snug">
                              Оставьте номер — перезвоним и согласуем финальную цену
                            </p>
                            <p className="text-[10px] text-[var(--mist)] mt-0.5 opacity-70">Обычно перезваниваем в течение часа</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && sendPhone()}
                            placeholder="+7 (___) ___-__-__"
                            className="flex-1 rounded-lg px-3 py-3 text-sm bg-black/40 border border-[rgba(201,168,76,0.4)] text-white placeholder:text-muted-foreground focus:outline-none focus:border-[rgba(201,168,76,0.9)] transition-colors"
                          />
                          <button
                            onClick={sendPhone}
                            disabled={!phone.trim() || phoneSending}
                            className="btn-gold px-4 py-3 rounded-lg text-xs font-bold uppercase tracking-wider disabled:opacity-40 disabled:cursor-not-allowed flex-shrink-0"
                          >
                            {phoneSending ? "..." : "Отправить"}
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  <p className="text-[9px] text-muted-foreground leading-relaxed">
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