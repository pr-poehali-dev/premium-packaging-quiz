import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const stats = [
  { value: "500M+", label: "банок/год" },
  { value: "50+", label: "регионов" },
  { value: "3+", label: "года опыта" },
];

const SALE_START_HOUR = 6;
const SALE_END_HOUR = 17;

function getSaleState() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const active = hours >= SALE_START_HOUR && hours < SALE_END_HOUR;

  if (active) {
    const endToday = new Date();
    endToday.setHours(SALE_END_HOUR, 0, 0, 0);
    const diff = Math.max(0, Math.floor((endToday.getTime() - now.getTime()) / 1000));
    return { active: true, diff };
  } else {
    const nextStart = new Date();
    if (hours >= SALE_END_HOUR) {
      nextStart.setDate(nextStart.getDate() + 1);
    }
    nextStart.setHours(SALE_START_HOUR, 0, 0, 0);
    const diff = Math.max(0, Math.floor((nextStart.getTime() - now.getTime()) / 1000));
    return { active: false, diff };
  }
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const HeroSection = () => {
  const [saleState, setSaleState] = useState(getSaleState);

  useEffect(() => {
    const id = setInterval(() => {
      setSaleState(getSaleState());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const h = Math.floor(saleState.diff / 3600);
  const m = Math.floor((saleState.diff % 3600) / 60);
  const s = saleState.diff % 60;

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
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
          АЛЮМИНИЕВЫЕ БАНКИ
        </span>

        <div
          className="opacity-0 animate-fade-up gold-line w-24 mx-auto mb-10"
          style={{ animationDelay: "0.4s" }}
        />

        <h1
          className="opacity-0 animate-fade-up font-display text-4xl md:text-6xl lg:text-7xl text-white leading-[1.08] mb-4 tracking-tight"
          style={{ animationDelay: "0.6s" }}
        >
          250 мл · 330 мл · 450 мл
        </h1>

        <p
          className="opacity-0 animate-fade-up text-[var(--mist)] text-base md:text-lg max-w-xl mb-10 leading-relaxed opacity-70"
          style={{ animationDelay: "0.75s" }}
        >
          Алюминиевые банки премиум-класса для брендов, которые хотят выделяться
        </p>

        {/* Блок акции с таймером */}
        <div
          className="opacity-0 animate-fade-up w-full max-w-lg mb-10"
          style={{ animationDelay: "0.9s" }}
        >
          <div
            className="rounded-2xl px-6 py-5 border"
            style={{
              background: saleState.active
                ? "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, rgba(232,201,122,0.06) 100%)"
                : "rgba(255,255,255,0.03)",
              borderColor: saleState.active ? "rgba(201,168,76,0.4)" : "rgba(255,255,255,0.1)",
            }}
          >
            {saleState.active ? (
              <>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-[var(--gold)] animate-pulse inline-block" />
                  <span className="text-[var(--gold)] text-xs uppercase tracking-[0.25em] font-semibold">
                    Акция действует сегодня до 17:00
                  </span>
                </div>
                <p className="text-white text-sm mb-4 opacity-80">
                  Только сегодня — специальная цена на банку. Успей оформить заказ!
                </p>
                <div className="flex items-center justify-center gap-3">
                  {[{ val: h, label: "ч" }, { val: m, label: "мин" }, { val: s, label: "сек" }].map(
                    (unit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex flex-col items-center">
                          <div
                            className="font-display text-3xl md:text-4xl font-bold tabular-nums w-16 text-center rounded-xl py-2"
                            style={{
                              color: "var(--gold)",
                              background: "rgba(201,168,76,0.1)",
                              border: "1px solid rgba(201,168,76,0.2)",
                            }}
                          >
                            {pad(unit.val)}
                          </div>
                          <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                            {unit.label}
                          </span>
                        </div>
                        {i < 2 && (
                          <span className="text-[var(--gold)] text-2xl font-bold opacity-60 mb-4">:</span>
                        )}
                      </div>
                    )
                  )}
                </div>
              </>
            ) : (
              <>
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Icon name="Clock" size={14} className="text-muted-foreground" />
                  <span className="text-muted-foreground text-xs uppercase tracking-[0.25em]">
                    Акция начнётся через
                  </span>
                </div>
                <div className="flex items-center justify-center gap-3">
                  {[{ val: h, label: "ч" }, { val: m, label: "мин" }, { val: s, label: "сек" }].map(
                    (unit, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="flex flex-col items-center">
                          <div
                            className="font-display text-2xl md:text-3xl font-bold tabular-nums w-14 text-center rounded-xl py-1.5"
                            style={{
                              color: "rgba(255,255,255,0.4)",
                              background: "rgba(255,255,255,0.04)",
                              border: "1px solid rgba(255,255,255,0.08)",
                            }}
                          >
                            {pad(unit.val)}
                          </div>
                          <span className="text-[10px] uppercase tracking-widest text-muted-foreground mt-1">
                            {unit.label}
                          </span>
                        </div>
                        {i < 2 && (
                          <span className="text-muted-foreground text-xl font-bold opacity-40 mb-4">:</span>
                        )}
                      </div>
                    )
                  )}
                </div>
                <p className="text-muted-foreground text-xs mt-3">Ежедневная акция: 6:00 — 17:00</p>
              </>
            )}
          </div>
        </div>

        <div
          className="opacity-0 animate-fade-up flex flex-col sm:flex-row items-center gap-4 sm:gap-6 mb-16"
          style={{ animationDelay: "1.1s" }}
        >
          <a
            href="#catalog"
            onClick={(e) => handleScroll(e, "#catalog")}
            className="btn-gold px-8 py-4 rounded inline-block"
          >
            ОБЕЗЛИЧЕННАЯ БАНКА
          </a>
          <a
            href="#lithography"
            onClick={(e) => handleScroll(e, "#lithography")}
            className="btn-outline-gold px-8 py-4 rounded inline-block"
          >
            ЛИТОГРАФИЯ
          </a>
        </div>

        <div
          className="opacity-0 animate-fade-up flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full max-w-2xl"
          style={{ animationDelay: "1.3s" }}
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
