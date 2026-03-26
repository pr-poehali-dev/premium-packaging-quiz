import { useState } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Обезличенная банка", href: "#catalog" },
  { label: "Литография", href: "#lithography" },
  { label: "Дизайн", href: "#design" },
  { label: "Контакты", href: "#contacts" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <nav className="nav-blur fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#"
            className="text-gold-gradient font-display text-xl lg:text-2xl font-bold tracking-widest"
          >
            ALUMINIUM ELITE
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="uppercase tracking-wider text-xs text-[var(--mist)] hover:text-[var(--gold)] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <a
              href="#contacts"
              onClick={(e) => handleNavClick(e, "#contacts")}
              className="btn-gold px-6 py-2.5 rounded"
            >
              Запросить КП
            </a>
          </div>

          <button
            className="lg:hidden text-[var(--gold)] p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Меню"
          >
            <Icon name={mobileOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-[var(--obsidian)]/95 backdrop-blur-xl">
          <div className="flex flex-col items-center justify-center gap-8 pt-16">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="uppercase tracking-wider text-xs text-[var(--mist)] hover:text-[var(--gold)] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contacts"
              onClick={(e) => handleNavClick(e, "#contacts")}
              className="btn-gold px-8 py-3 rounded mt-4"
            >
              Запросить КП
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;