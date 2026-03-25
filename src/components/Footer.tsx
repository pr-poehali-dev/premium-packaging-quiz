const footerLinks = [
  { label: "Продукция", href: "#products" },
  { label: "Каталог", href: "#catalog" },
  { label: "Сертификаты", href: "#certificates" },
  { label: "Контакты", href: "#contacts" },
];

const Footer = () => {
  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[var(--obsidian)] border-t border-[rgba(201,168,76,0.1)] py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 mb-12">
          <div>
            <span className="text-gold-gradient font-display text-2xl font-bold tracking-widest block mb-3">
              ALUMINIUM ELITE
            </span>
            <p className="text-muted-foreground text-sm">Упаковка как статус</p>
          </div>

          <div className="flex flex-col items-start md:items-center gap-3">
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleClick(e, link.href)}
                className="text-muted-foreground text-sm hover:text-[var(--gold)] transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="md:text-right">
            <p className="text-muted-foreground text-sm italic leading-relaxed">
              Предпочтительный выбор
              <br />
              премиальных брендов напитков
            </p>
          </div>
        </div>

        <div className="gold-line w-full mb-8" />

        <p className="text-muted-foreground text-xs text-center tracking-wide">
          &copy; 2024 Aluminium Elite. Все права защищены.
        </p>
      </div>
    </footer>
  );
};

export default Footer;