import Icon from "@/components/ui/icon";

const triggers = [
  {
    icon: "Snowflake",
    title: "Контроль качества",
    description:
      "Контроль качества на каждом этапе. Ваш продукт хранится при идеальной температуре",
  },
  {
    icon: "Factory",
    title: "Точность производства",
    description:
      "Мы — часть вашего производства, не просто поставщик упаковки",
  },
  {
    icon: "Crown",
    title: "Премиальная идентичность",
    description:
      "Банка, которая продаёт ещё до первого глотка. Упаковка как статус",
  },
  {
    icon: "Globe",
    title: "Мировые стандарты",
    description:
      "Соответствие международным стандартам качества и безопасности",
  },
];

const BrandSection = () => {
  return (
    <section id="products" className="relative py-24 bg-[var(--obsidian)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-xs text-[var(--gold)] mb-4 block">
            ПРЕИМУЩЕСТВА БРЕНДА
          </span>
          <div className="gold-line w-16 mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold-gradient leading-tight mb-6">
            ВАШ ПРОДУКТ В ЭТОЙ БАНКЕ —
            <br />
            ОН УЖЕ ПРЕМИУМ
          </h2>
        </div>

        <div className="relative mb-20">
          <div className="relative w-full rounded-2xl overflow-hidden glow-gold" style={{ minHeight: 340 }}>
            <img
              src="https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/bucket/785bd100-5174-41bf-814c-edd382ad0ebc.png"
              alt="Линейка премиальных алюминиевых банок"
              className="w-full h-full object-cover"
              style={{ minHeight: 340 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />

            <div className="absolute inset-0 flex items-end p-6 md:p-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 w-full">
                {triggers.map((trigger) => (
                  <div
                    key={trigger.title}
                    className="rounded-xl px-4 py-4 flex flex-col gap-2"
                    style={{
                      background: "rgba(8,8,8,0.82)",
                      border: "1px solid rgba(201,168,76,0.3)",
                      backdropFilter: "blur(16px)",
                    }}
                  >
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center mb-1 flex-shrink-0"
                      style={{ background: "rgba(201,168,76,0.12)", border: "1px solid rgba(201,168,76,0.3)" }}
                    >
                      <Icon name={trigger.icon} size={17} className="text-[var(--gold)]" />
                    </div>
                    <h3 className="text-white text-xs font-semibold leading-tight font-display">
                      {trigger.title}
                    </h3>
                    <p className="text-muted-foreground text-[11px] leading-snug">
                      {trigger.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center text-center">
          <div className="relative">
            <div className="w-28 h-28 rounded-full border-2 border-[var(--gold)] flex items-center justify-center relative">
              <div className="absolute inset-0 rounded-full bg-[rgba(201,168,76,0.05)]" />
              <div className="absolute -inset-3 rounded-full border border-[rgba(201,168,76,0.15)]" />
              <div className="absolute -inset-6 rounded-full border border-[rgba(201,168,76,0.07)]" />
              <Icon
                name="Award"
                size={36}
                className="text-[var(--gold)] relative z-10"
              />
            </div>
          </div>
          <h4 className="font-display text-2xl md:text-3xl text-gold-gradient mt-8 mb-3">
            ОТМЕЧЕННАЯ НАГРАДАМИ УПАКОВКА
          </h4>
          <p className="text-muted-foreground text-sm tracking-wide">
            Предпочтительный выбор премиальных брендов напитков
          </p>
          <div className="gold-line w-32 mx-auto mt-8" />
        </div>
      </div>
    </section>
  );
};

export default BrandSection;