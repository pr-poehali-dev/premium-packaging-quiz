import Icon from "@/components/ui/icon";

const steps = [
  {
    icon: "PenTool",
    text: "Разработка дизайна под печать на алюминии",
  },
  {
    icon: "AlertTriangle",
    text: "Учёт ограничений производства",
  },
  {
    icon: "FileCheck",
    text: "Подготовка файлов под линию печати банки",
  },
  {
    icon: "ScanSearch",
    text: "Контроль качества финального макета",
  },
];

const DesignSupportSection = () => {
  return (
    <section className="relative py-24 bg-[var(--graphite)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="uppercase tracking-[0.3em] text-xs text-[var(--gold)] mb-4 block">
              ДИЗАЙН И ПОДГОТОВКА
            </span>
            <div className="gold-line w-16 mb-8" />
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gold-gradient leading-tight mb-6">
              КОМПЛЕКСНАЯ
              <br />
              ПОДДЕРЖКА ДИЗАЙНА
            </h2>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
              Предоставляем полный цикл разработки дизайна банки с учётом технологических требований и задач бренда.
            </p>
          </div>

          <div className="space-y-5">
            {steps.map((step, index) => (
              <div
                key={step.text}
                className="group flex items-start gap-5 bg-[var(--steel)] border border-[rgba(201,168,76,0.1)] rounded-lg p-6 transition-all duration-500 hover:border-[rgba(201,168,76,0.3)] hover:bg-[rgba(26,26,26,0.8)]"
              >
                <div className="w-12 h-12 min-w-[3rem] rounded-full bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] flex items-center justify-center transition-all duration-500 group-hover:bg-[rgba(201,168,76,0.15)] group-hover:border-[rgba(201,168,76,0.3)]">
                  <Icon
                    name={step.icon}
                    size={20}
                    className="text-[var(--gold)]"
                  />
                </div>
                <div className="flex items-center min-h-[3rem]">
                  <p className="text-[var(--mist)] text-sm md:text-base leading-relaxed">
                    <span className="text-[var(--gold-dim)] font-semibold mr-2">
                      0{index + 1}
                    </span>
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignSupportSection;