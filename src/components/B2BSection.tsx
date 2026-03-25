import Icon from "@/components/ui/icon";

const blocks = [
  {
    icon: "Package",
    category: "Минимальный заказ",
    title: "от 100 000 банок",
    description:
      "Гибкие условия для старта. Специальные цены при объёмах от 1M+",
  },
  {
    icon: "Clock",
    category: "Сроки производства",
    title: "4–6 недель",
    description:
      "От утверждения макета до отгрузки. Срочные заказы — от 2 недель",
  },
  {
    icon: "Palette",
    category: "Кастомизация",
    title: "360° брендинг",
    description:
      "Полноцветная печать, матовый/глянцевый лак, тактильные текстуры, тиснение",
  },
  {
    icon: "Truck",
    category: "Логистика",
    title: "Доставка по всему миру",
    description:
      "Собственный логистический отдел. EXW, FOB, CIF, DDP — любые условия",
  },
  {
    icon: "ShieldCheck",
    category: "Сертификаты",
    title: "ISO 9001 · FSSC 22000",
    description:
      "BPA-NI покрытие, food-grade алюминий, полное соответствие EU и РФ стандартам",
  },
  {
    icon: "Headphones",
    category: "Техподдержка",
    title: "Персональный менеджер",
    description:
      "Выделенная команда для каждого клиента. Помощь на каждом этапе",
  },
];

const B2BSection = () => {
  return (
    <section id="certificates" className="relative py-24 bg-[var(--obsidian)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-xs text-[var(--gold)] mb-4 block">
            B2B CONDITIONS
          </span>
          <div className="gold-line w-16 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl text-gold-gradient leading-tight mb-6">
            ВАШЕ ПРОИЗВОДСТВО —
            <br />
            НАША ОТВЕТСТВЕННОСТЬ
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Полный цикл от проектирования до доставки на склад
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {blocks.map((block) => (
            <div
              key={block.category}
              className="group bg-[var(--steel)] border border-[rgba(201,168,76,0.1)] rounded-lg p-8 transition-all duration-500 hover:border-[rgba(201,168,76,0.3)] hover:bg-[rgba(26,26,26,0.8)]"
            >
              <div className="w-14 h-14 rounded-full bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] flex items-center justify-center mb-6 transition-all duration-500 group-hover:bg-[rgba(201,168,76,0.15)] group-hover:border-[rgba(201,168,76,0.3)]">
                <Icon
                  name={block.icon}
                  size={24}
                  className="text-[var(--gold)]"
                />
              </div>
              <span className="uppercase tracking-[0.2em] text-[10px] text-[var(--gold-dim)] block mb-3">
                {block.category}
              </span>
              <h3 className="text-[var(--mist)] font-semibold text-lg mb-3">
                {block.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {block.description}
              </p>
            </div>
          ))}
        </div>

        <div className="relative rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(201,168,76,0.08)] via-[rgba(201,168,76,0.04)] to-[rgba(201,168,76,0.08)]" />
          <div className="absolute inset-0 border border-[rgba(201,168,76,0.2)] rounded-lg" />
          <div className="relative z-10 flex flex-col items-center text-center px-6 py-16 md:py-20">
            <div className="w-16 h-16 rounded-full bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center mb-8">
              <Icon
                name="FileText"
                size={28}
                className="text-[var(--gold)]"
              />
            </div>
            <h3 className="font-display text-3xl md:text-4xl lg:text-5xl text-gold-gradient mb-4">
              ПОЛУЧИТЕ ИНДИВИДУАЛЬНОЕ ПРЕДЛОЖЕНИЕ
            </h3>
            <p className="text-muted-foreground text-sm md:text-base max-w-lg mb-10 leading-relaxed">
              Расскажите о вашем проекте — мы подготовим персональные условия
            </p>
            <a
              href="#contacts"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#contacts");
                if (target) {
                  target.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="btn-gold px-10 py-5 rounded text-sm"
            >
              Запросить КП
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default B2BSection;
