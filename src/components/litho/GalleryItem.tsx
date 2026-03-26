import { useState, useRef } from "react";
import Icon from "@/components/ui/icon";
import { galleryItems } from "./LithoData";

interface GalleryItemProps {
  item: (typeof galleryItems)[number];
  index: number;
}

const GalleryItem = ({ item, index }: GalleryItemProps) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current || isZoomed) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 10;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * -10;
    setMousePos({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: 0, y: 0 });
  };

  const isLarge = item.size === "large";

  return (
    <>
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center cursor-zoom-out"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative max-w-lg w-full mx-4 cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-10 right-0 text-[var(--mist)] opacity-60 hover:opacity-100 transition-opacity"
              onClick={() => setIsZoomed(false)}
            >
              <Icon name="X" size={24} />
            </button>
            <div
              className="rounded-xl overflow-hidden border border-[rgba(201,168,76,0.4)]"
              style={{
                boxShadow: `0 40px 80px rgba(0,0,0,0.8), 0 0 60px ${item.accent}22`,
              }}
            >
              <div
                className="relative flex flex-col items-center justify-center"
                style={{ minHeight: 380, background: `linear-gradient(135deg, #0a0a0a 0%, #111111 50%, #0a0a0a 100%)` }}
              >
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    background: `radial-gradient(ellipse at center, ${item.accent} 0%, transparent 70%)`,
                  }}
                />
                <div className="relative z-10 flex flex-col items-center gap-6 p-10">
                  {item.image ? (
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full max-w-sm rounded-xl object-cover"
                      style={{ maxHeight: 280 }}
                    />
                  ) : (
                    <div
                      className="w-28 h-52 rounded-xl border flex items-center justify-center relative overflow-hidden"
                      style={{ borderColor: `${item.accent}50`, background: `linear-gradient(160deg, ${item.accent}12 0%, transparent 100%)` }}
                    >
                      <div
                        className="absolute inset-0"
                        style={{ background: `linear-gradient(90deg, transparent 30%, ${item.accent}20 50%, transparent 70%)` }}
                      />
                      <Icon name="Sparkles" size={32} className="text-[var(--gold)] opacity-60" />
                    </div>
                  )}
                  <div className="text-center">
                    <p className="text-[10px] uppercase tracking-[0.3em] mb-2" style={{ color: item.accent }}>
                      Литография · Авторский дизайн
                    </p>
                    <h3 className="font-display text-3xl text-[var(--mist)] mb-1">{item.title}</h3>
                    <p className="text-sm text-[rgba(232,224,208,0.5)]">{item.subtitle}</p>
                  </div>
                  {!item.image && (
                    <p className="text-xs text-center text-[rgba(232,224,208,0.4)] max-w-xs leading-relaxed">
                      Здесь будет ваш готовый дизайн банки. Мы воплотим любую идею — от минимализма до сложных иллюстраций.
                    </p>
                  )}
                </div>
              </div>
              <div className="p-5 bg-[var(--graphite)] border-t border-[rgba(201,168,76,0.15)] flex items-center justify-between">
                <span className="text-xs text-[rgba(232,224,208,0.5)] uppercase tracking-wider">{item.subtitle}</span>
                <a
                  href="#contacts"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsZoomed(false);
                    setTimeout(() => {
                      document.querySelector("#contacts")?.scrollIntoView({ behavior: "smooth" });
                    }, 300);
                  }}
                  className="text-xs uppercase tracking-widest text-[var(--gold)] hover:text-[var(--gold-light)] transition-colors flex items-center gap-1.5"
                >
                  Заказать такой дизайн <Icon name="ArrowRight" size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <div
        ref={cardRef}
        className={`relative cursor-zoom-in group ${isLarge ? "row-span-2" : ""}`}
        style={{ perspective: 800 }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onClick={() => setIsZoomed(true)}
      >
        <div
          className="relative rounded-lg overflow-hidden border border-[rgba(201,168,76,0.2)] transition-all duration-300 ease-out group-hover:border-[rgba(201,168,76,0.5)]"
          style={{
            transform: `rotateZ(${item.rotate}deg) rotateX(${mousePos.y * 0.5}deg) rotateY(${mousePos.x * 0.5}deg)`,
            boxShadow: `
              0 20px 60px rgba(0,0,0,0.6),
              0 8px 24px rgba(0,0,0,0.4),
              inset 0 1px 0 rgba(201,168,76,0.1),
              0 0 0 1px rgba(0,0,0,0.3)
            `,
            transformStyle: "preserve-3d",
            transition: "transform 0.15s ease-out, box-shadow 0.3s ease, border-color 0.3s ease",
            background: "#0a0a0a",
            minHeight: isLarge ? 340 : 200,
          }}
        >
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: `radial-gradient(ellipse at center, ${item.accent}10 0%, transparent 70%)`,
            }}
          />

          <div
            className="absolute top-0 left-0 right-0 h-px opacity-60"
            style={{ background: `linear-gradient(90deg, transparent, ${item.accent}60, transparent)` }}
          />

          <div className="absolute top-3 left-3">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: item.accent, boxShadow: `0 0 6px ${item.accent}80` }}
            />
          </div>
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-1 bg-[rgba(0,0,0,0.6)] rounded-full px-2 py-1">
              <Icon name="ZoomIn" size={10} className="text-[var(--gold)]" />
              <span className="text-[9px] text-[var(--gold)] uppercase tracking-wider">Смотреть</span>
            </div>
          </div>

          <div className={`relative flex flex-col items-center justify-center gap-4 ${isLarge ? "py-8 px-4" : "py-10 px-4"}`}>
            {item.image ? (
              <img
                src={item.image}
                alt={item.title}
                className="w-full rounded-lg object-cover"
                style={{ maxHeight: isLarge ? 220 : 120 }}
              />
            ) : (
              <div
                className="rounded-lg border flex items-center justify-center relative overflow-hidden"
                style={{
                  width: isLarge ? 72 : 52,
                  height: isLarge ? 132 : 96,
                  borderColor: `${item.accent}40`,
                  background: `linear-gradient(160deg, ${item.accent}10 0%, transparent 100%)`,
                }}
              >
                <div
                  className="absolute inset-0"
                  style={{ background: `linear-gradient(90deg, transparent 20%, ${item.accent}15 50%, transparent 80%)` }}
                />
                <Icon name="Sparkles" size={isLarge ? 20 : 14} style={{ color: item.accent, opacity: 0.7 }} />
              </div>
            )}
            <div className="text-center">
              <p
                className="uppercase tracking-[0.2em] mb-1"
                style={{ fontSize: 9, color: `${item.accent}` }}
              >
                {item.subtitle}
              </p>
              <p className={`font-display text-[var(--mist)] leading-tight ${isLarge ? "text-xl" : "text-sm"}`}>
                {item.title}
              </p>
            </div>
          </div>

          <div
            className="absolute bottom-0 left-0 right-0 h-px opacity-30"
            style={{ background: `linear-gradient(90deg, transparent, ${item.accent}40, transparent)` }}
          />
        </div>

        <div
          className="absolute -bottom-3 left-4 right-4 h-6 rounded-b-lg opacity-40 blur-md transition-opacity duration-300 group-hover:opacity-60"
          style={{ background: `linear-gradient(to bottom, rgba(0,0,0,0.6), transparent)` }}
        />
      </div>
    </>
  );
};

export default GalleryItem;
