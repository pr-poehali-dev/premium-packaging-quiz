import Icon from "@/components/ui/icon";

interface LidFactory {
  factory: string;
  city: string;
  rows: { label: string; noVat: string; withVat: string }[];
  extras: { label: string; value: string }[];
}

const lids: LidFactory[] = [
  {
    factory: "АРНЕСТ",
    city: "Наро-Фоминск, Всеволожск",
    rows: [
      { label: "от 330 000 шт (паллет), серебро/серебро", noVat: "1,86 ₽", withVat: "2,27 ₽" },
      { label: "от 330 000 шт (паллет), чёрная/чёрная", noVat: "2,39 ₽", withVat: "2,92 ₽" },
      { label: "от 330 000 шт (паллет), золотая/золотая", noVat: "2,27 ₽", withVat: "2,77 ₽" },
    ],
    extras: [
      { label: "Наценка за невозврат: Поддон", value: "4 050 ₽/шт" },
      { label: "Наценка за невозврат: Рама", value: "1 830 ₽/шт" },
      { label: "Наценка за невозврат: Картон", value: "102 ₽/шт" },
    ],
  },
  {
    factory: "КЭН-ПАК",
    city: "Волоколамск, Новочеркасск",
    rows: [
      { label: "от 332 800 шт (паллет), серебро/серебро", noVat: "2,06 ₽", withVat: "2,51 ₽" },
      { label: "от 192 780 шт (паллет), чёрная/чёрная", noVat: "2,36 ₽", withVat: "2,88 ₽" },
      { label: "от 192 780 шт (паллет), золотая/золотая", noVat: "по запросу", withVat: "по запросу" },
    ],
    extras: [
      { label: "Наценка за невозврат: Поддон", value: "2 700 ₽/шт" },
      { label: "Наценка за невозврат: Рама", value: "1 220 ₽/шт" },
      { label: "Наценка за невозврат: Картон", value: "185 ₽/шт" },
    ],
  },
];

const LidsSection = () => {
  return (
    <section id="lids" className="relative py-24 bg-[var(--obsidian)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="uppercase tracking-[0.3em] text-xs text-[var(--gold)] mb-4 block">
            АКСЕССУАРЫ
          </span>
          <div className="gold-line w-16 mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-5xl text-gold-gradient leading-tight mb-4">
            КРЫШКИ
          </h2>
          <p className="text-muted-foreground text-base max-w-xl mx-auto">
            Заказываются отдельно — от 192 780 шт (паллет)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {lids.map((factory) => (
            <div
              key={factory.factory}
              className="bg-[var(--steel)] border border-[rgba(201,168,76,0.15)] rounded-lg overflow-hidden"
            >
              <div className="px-6 py-4 border-b border-[rgba(201,168,76,0.1)] flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center flex-shrink-0">
                  <Icon name="Circle" size={14} className="text-[var(--gold)]" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-gold-gradient">{factory.factory}</h3>
                  <div className="flex items-center gap-1 mt-0.5">
                    <Icon name="MapPin" size={10} className="text-muted-foreground flex-shrink-0" />
                    <span className="text-[10px] text-muted-foreground">{factory.city}</span>
                  </div>
                </div>
              </div>

              <div className="p-5">
                <div className="grid grid-cols-[1fr_auto_auto] gap-x-3 pb-2 mb-1 border-b border-[rgba(201,168,76,0.1)]">
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground">Позиция</span>
                  <span className="text-[9px] uppercase tracking-wider text-muted-foreground text-right">Без НДС</span>
                  <span className="text-[9px] uppercase tracking-wider text-[var(--gold)] text-right">С НДС 22%</span>
                </div>
                {factory.rows.map((row, i) => (
                  <div key={i} className="grid grid-cols-[1fr_auto_auto] gap-x-3 py-2 border-b border-[rgba(255,255,255,0.04)]">
                    <span className="text-[10px] text-[var(--mist)] leading-snug">{row.label}</span>
                    <span className="text-[10px] text-muted-foreground text-right whitespace-nowrap">{row.noVat}</span>
                    <span className="text-[10px] text-white font-semibold text-right whitespace-nowrap">{row.withVat}</span>
                  </div>
                ))}
                <div className="mt-3 pt-2 space-y-1.5">
                  {factory.extras.map((e, i) => (
                    <div key={i} className="flex items-start justify-between gap-2">
                      <span className="text-[9px] text-muted-foreground leading-snug">{e.label}</span>
                      <span className="text-[9px] text-[var(--gold)] text-right whitespace-nowrap font-medium">{e.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LidsSection;
