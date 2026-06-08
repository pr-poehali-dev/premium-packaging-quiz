import Icon from "@/components/ui/icon";

const ContactSection = () => {
  return (
    <section id="contacts" className="relative py-24 bg-[var(--graphite)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-xs text-[var(--gold)] mb-4 block">
            СВЯЗАТЬСЯ С НАМИ
          </span>
          <div className="gold-line w-16 mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold-gradient leading-tight mb-6">
            НАЧНИТЕ СВОЙ ПРОЕКТ
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Позвоните нам — обсудим ваш заказ и подберём условия
          </p>
        </div>

        <div className="flex justify-center">
          <a
            href="tel:+79966298557"
            className="group flex items-center gap-6 bg-[var(--steel)] rounded-2xl px-10 py-8 border border-[rgba(201,168,76,0.15)] hover:border-[rgba(201,168,76,0.4)] transition-all duration-300"
          >
            <div className="w-16 h-16 rounded-full bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center flex-shrink-0 group-hover:bg-[rgba(201,168,76,0.15)] transition-all duration-300">
              <Icon name="Phone" size={28} className="text-[var(--gold)]" />
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--gold-dim)] mb-1">Телефон</p>
              <p className="font-display text-3xl md:text-4xl text-gold-gradient group-hover:opacity-90 transition-opacity">
                +7 (996) 629-85-57
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
