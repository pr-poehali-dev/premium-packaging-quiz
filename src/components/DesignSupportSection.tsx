import Icon from "@/components/ui/icon";
import { useState } from "react";

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
    text: "Подготовка файлов под линию розлива напитков",
  },
  {
    icon: "ScanSearch",
    text: "Контроль качества финального макета",
  },
];

const images = [
  {
    src: "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/bucket/21211f3e-d773-4836-8fee-33415f657954.png",
    alt: "Техническая документация банки",
    label: "Техническая документация",
  },
  {
    src: "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/bucket/6983a537-dd79-4570-a5f5-55da9e274551.png",
    alt: "Дизайн развёртки банки",
    label: "Дизайн развёртки",
  },
];

const DesignSupportSection = () => {
  const [activeImage, setActiveImage] = useState(0);

  return (
    <section id="design" className="relative py-24 bg-[var(--graphite)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-xs text-[var(--gold)] mb-4 block">
            ДИЗАЙН И ПОДГОТОВКА
          </span>
          <div className="gold-line w-16 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-gold-gradient leading-tight mb-6">
            КОМПЛЕКСНАЯ ПОДДЕРЖКА ДИЗАЙНА
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            Предоставляем полный цикл разработки дизайна банки с учётом
            технологических требований и задач бренда.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-3xl mx-auto mb-16">
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

        <div className="max-w-5xl mx-auto">
          <div className="flex justify-center gap-4 mb-8">
            {images.map((img, index) => (
              <button
                key={img.label}
                onClick={() => setActiveImage(index)}
                className={`px-6 py-3 rounded-lg text-sm tracking-wider uppercase transition-all duration-300 ${
                  activeImage === index
                    ? "bg-[rgba(201,168,76,0.15)] border border-[var(--gold)] text-[var(--gold)]"
                    : "bg-[var(--steel)] border border-[rgba(201,168,76,0.1)] text-[var(--mist)] hover:border-[rgba(201,168,76,0.3)]"
                }`}
              >
                <span className="flex items-center gap-2">
                  <Icon
                    name={index === 0 ? "Ruler" : "Palette"}
                    size={16}
                    className={
                      activeImage === index
                        ? "text-[var(--gold)]"
                        : "text-[var(--mist)]"
                    }
                  />
                  {img.label}
                </span>
              </button>
            ))}
          </div>

          <div className="relative rounded-xl overflow-hidden border border-[rgba(201,168,76,0.15)] bg-[var(--obsidian)]">
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 px-3 py-1.5 rounded-md bg-[rgba(0,0,0,0.6)] backdrop-blur-sm border border-[rgba(201,168,76,0.2)]">
              <Icon
                name={activeImage === 0 ? "FileText" : "Image"}
                size={14}
                className="text-[var(--gold)]"
              />
              <span className="text-[10px] uppercase tracking-wider text-[var(--mist)]">
                {images[activeImage].label}
              </span>
            </div>

            {images.map((img, index) => (
              <div
                key={img.label}
                className={`transition-all duration-500 ${
                  activeImage === index
                    ? "opacity-100"
                    : "opacity-0 absolute inset-0"
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-auto object-contain opacity-40 mix-blend-luminosity transition-all duration-700 hover:opacity-90 hover:mix-blend-normal"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <p className="text-center text-[var(--mist)] text-xs mt-4 opacity-60">
            Пример технической документации и дизайна развёртки
          </p>
        </div>
      </div>
    </section>
  );
};

export default DesignSupportSection;