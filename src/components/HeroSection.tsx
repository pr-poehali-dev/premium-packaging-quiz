import Icon from "@/components/ui/icon";

const stats = [
  { value: "500M+", label: "банок/год" },
  { value: "50+", label: "стран" },
  { value: "15+", label: "лет опыта" },
];

const HeroSection = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/files/4a3b77aa-6ef9-4a88-a0e8-575ceaceb674.jpg"
          alt="Премиальные алюминиевые банки"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--obsidian)] via-[var(--obsidian)]/80 to-[var(--obsidian)]/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--obsidian)]/70 via-transparent to-[var(--obsidian)]" />
      </div>

      <div className="absolute inset-0 noise-overlay" />

      <div className="relative z-10 flex flex-col items-center text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        <span
          className="opacity-0 animate-fade-up uppercase tracking-[0.3em] text-xs text-[var(--gold)] mb-6"
          style={{ animationDelay: "0.2s" }}
        >
          СОЗДАНО ДЛЯ ПРЕМИАЛЬНЫХ НАПИТКОВ
        </span>

        <div
          className="opacity-0 animate-fade-up gold-line w-24 mx-auto mb-10"
          style={{ animationDelay: "0.4s" }}
        />

        <h1
          className="opacity-0 animate-fade-up font-display text-5xl md:text-7xl lg:text-8xl text-gold-gradient leading-[1.1] mb-8"
          style={{ animationDelay: "0.6s" }}
        >
          УПАКОВКА, КОТОРАЯ ПРОДАЁТ
          <br />
          ДО ПЕРВОГО ГЛОТКА
        </h1>

        <p
          className="opacity-0 animate-fade-up text-muted-foreground text-base md:text-lg lg:text-xl max-w-2xl mb-12 leading-relaxed"
          style={{ animationDelay: "0.8s" }}
        >
          Алюминиевые банки премиум-класса для брендов, которые хотят выделяться
        </p>

        <div
          className="opacity-0 animate-fade-up flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-16"
          style={{ animationDelay: "1s" }}
        >
          <a
            href="#catalog"
            onClick={(e) => handleScroll(e, "#catalog")}
            className="btn-gold px-8 py-4 rounded inline-block"
          >
            ЗАПРОСИТЬ КАТАЛОГ
          </a>
          <a
            href="#products"
            onClick={(e) => handleScroll(e, "#products")}
            className="btn-outline-gold px-8 py-4 rounded inline-block"
          >
            СМОТРЕТЬ ЛИНЕЙКУ
          </a>
        </div>

        <div
          className="opacity-0 animate-fade-up flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-2xl"
          style={{ animationDelay: "1.2s" }}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="stat-card flex-1 w-full sm:w-auto px-6 py-5 rounded text-center"
            >
              <div className="font-display text-3xl md:text-4xl text-gold-gradient mb-1">
                {stat.value}
              </div>
              <div className="uppercase tracking-wider text-xs text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#products"
          onClick={(e) => handleScroll(e, "#products")}
          className="text-[var(--gold)] opacity-60 hover:opacity-100 transition-opacity duration-300 animate-bounce block"
        >
          <Icon name="ChevronDown" size={28} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;