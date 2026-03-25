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
            СОЗДАНА, ЧТОБЫ ПОДНЯТЬ
            <br />
            ВАШ БРЕНД
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">
            Ваш продукт в этой банке — он уже премиум
          </p>
        </div>

        <div className="relative mb-20">
          <div className="flex justify-center">
            <div className="relative max-w-4xl w-full">
              <img
                src="https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/files/a9503aee-bce7-4a1c-9d1d-9bda9931a1c6.jpg"
                alt="Линейка премиальных алюминиевых банок"
                className="w-full h-auto rounded-lg glow-gold"
              />
              <div className="absolute inset-0 rounded-lg bg-gradient-to-t from-[var(--obsidian)] via-transparent to-transparent opacity-60" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-20">
          {triggers.map((trigger) => (
            <div
              key={trigger.title}
              className="can-card bg-[var(--graphite)] border border-[rgba(201,168,76,0.15)] rounded-lg p-8"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-12 h-12 rounded flex items-center justify-center bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)]">
                  <Icon
                    name={trigger.icon}
                    size={22}
                    className="text-[var(--gold)]"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-gold-gradient font-display text-2xl mb-3">
                    {trigger.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {trigger.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
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