import Icon from "@/components/ui/icon";

const factories = [
  {
    name: "АРНЕСТ",
    color: "rgba(160,210,255,0.12)",
    border: "rgba(160,210,255,0.3)",
    textColor: "#a0d2ff",
    locations: [
      { city: "Наро-Фоминск", region: "Московская обл.", type: "Производство" },
      { city: "Всеволожск", region: "Ленинградская обл.", type: "Производство" },
    ],
  },
  {
    name: "КЭН-ПАК",
    color: "rgba(201,168,76,0.08)",
    border: "rgba(201,168,76,0.25)",
    textColor: "var(--gold)",
    locations: [
      { city: "Волоколамск", region: "Московская обл.", type: "Производство" },
      { city: "Новочеркасск", region: "Ростовская обл.", type: "Производство" },
    ],
  },
];

const GeographySection = () => {
  return (
    <section id="geography" className="relative py-24 bg-[var(--graphite)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-xs text-[var(--gold)] mb-4 block">
            ГЕОГРАФИЯ
          </span>
          <div className="gold-line w-16 mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold-gradient leading-tight mb-6">
            ОТКУДА ЗАБИРАТЬ БАНКИ
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Работаем с двумя заводами — выберите удобный склад отгрузки
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {factories.map((factory) => (
            <div
              key={factory.name}
              className="rounded-2xl p-6 space-y-4"
              style={{
                background: factory.color,
                border: `1px solid ${factory.border}`,
              }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ background: factory.color, border: `1px solid ${factory.border}` }}
                >
                  <Icon name="Factory" size={16} style={{ color: factory.textColor }} />
                </div>
                <span
                  className="text-xs font-bold uppercase tracking-[0.25em]"
                  style={{ color: factory.textColor }}
                >
                  {factory.name}
                </span>
              </div>

              <div className="space-y-3">
                {factory.locations.map((loc) => (
                  <div
                    key={loc.city}
                    className="flex items-start gap-3 rounded-xl px-4 py-3"
                    style={{ background: "rgba(0,0,0,0.2)", border: "1px solid rgba(255,255,255,0.05)" }}
                  >
                    <Icon name="MapPin" size={15} className="mt-0.5 flex-shrink-0" style={{ color: factory.textColor }} />
                    <div>
                      <p className="text-sm font-semibold text-[var(--mist)]">{loc.city}</p>
                      <p className="text-[11px] text-muted-foreground">{loc.region} · {loc.type}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-xs text-muted-foreground mt-8 max-w-lg mx-auto">
          Доставка со склада завода. Самовывоз или организуем транспортную компанию — уточните у менеджера.
        </p>
      </div>
    </section>
  );
};

export default GeographySection;
