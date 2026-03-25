import { useState } from "react";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const bulletPoints = [
  "Собственное производство мощностью 500M+ банок/год",
  "Прямые поставки без посредников",
  "Полный цикл: от дизайна до доставки",
  "Гарантия качества по международным стандартам",
];

const contactDetails = [
  { icon: "Mail", text: "sales@aluminium-elite.com" },
  { icon: "Phone", text: "+7 (800) 555-35-35" },
  { icon: "MapPin", text: "Москва, Пресненская наб. 12" },
];

const volumeOptions = [
  { value: "100k-500k", label: "100 000 — 500 000" },
  { value: "500k-1m", label: "500 000 — 1 000 000" },
  { value: "1m-5m", label: "1 000 000 — 5 000 000" },
  { value: "5m+", label: "5 000 000+" },
];

const inputStyles =
  "w-full bg-[var(--obsidian)] border border-[rgba(201,168,76,0.2)] rounded p-3 text-[var(--mist)] text-sm focus:border-[var(--gold)] outline-none transition-colors duration-300 placeholder:text-[rgba(138,110,47,0.35)]";

const ContactSection = () => {
  const { toast } = useToast();

  const [form, setForm] = useState({
    company: "",
    contact: "",
    email: "",
    phone: "",
    volume: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Запрос отправлен",
      description:
        "Спасибо за обращение! Наш менеджер свяжется с вами в течение 24 часов.",
    });
    setForm({
      company: "",
      contact: "",
      email: "",
      phone: "",
      volume: "",
      message: "",
    });
  };

  return (
    <section id="contacts" className="relative py-24 bg-[var(--graphite)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="uppercase tracking-[0.3em] text-xs text-[var(--gold)] mb-4 block">
            GET IN TOUCH
          </span>
          <div className="gold-line w-16 mx-auto mb-8" />
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-gold-gradient leading-tight mb-6">
            НАЧНИТЕ СВОЙ ПРОЕКТ
          </h2>
          <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
            Заполните форму — мы свяжемся в течение 24 часов
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <div className="bg-[var(--steel)] rounded-lg p-8 md:p-10 border border-[rgba(201,168,76,0.1)]">
            <h3 className="font-display text-2xl text-gold-gradient mb-8">
              Оставить запрос
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="uppercase tracking-wider text-[10px] text-[var(--gold-dim)] block mb-1">
                    Компания
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    placeholder="Название компании"
                    required
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label className="uppercase tracking-wider text-[10px] text-[var(--gold-dim)] block mb-1">
                    Контактное лицо
                  </label>
                  <input
                    type="text"
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="Имя и фамилия"
                    required
                    className={inputStyles}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="uppercase tracking-wider text-[10px] text-[var(--gold-dim)] block mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@company.com"
                    required
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label className="uppercase tracking-wider text-[10px] text-[var(--gold-dim)] block mb-1">
                    Телефон
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className={inputStyles}
                  />
                </div>
              </div>

              <div>
                <label className="uppercase tracking-wider text-[10px] text-[var(--gold-dim)] block mb-1">
                  Объём заказа
                </label>
                <select
                  name="volume"
                  value={form.volume}
                  onChange={handleChange}
                  className={`${inputStyles} appearance-none`}
                >
                  <option value="">Выберите планируемый объём</option>
                  {volumeOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="uppercase tracking-wider text-[10px] text-[var(--gold-dim)] block mb-1">
                  Сообщение
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Опишите ваш проект, требования к упаковке..."
                  rows={4}
                  className={`${inputStyles} resize-none`}
                />
              </div>

              <button type="submit" className="btn-gold w-full py-4 rounded">
                Отправить запрос
              </button>
            </form>
          </div>

          <div className="flex flex-col gap-8">
            <div className="bg-[var(--steel)] rounded-lg p-8 border border-[rgba(201,168,76,0.1)]">
              <h3 className="font-display text-2xl text-gold-gradient mb-8">
                Почему выбирают нас
              </h3>
              <div className="space-y-5">
                {bulletPoints.map((point) => (
                  <div key={point} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.2)] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon
                        name="Check"
                        size={13}
                        className="text-[var(--gold)]"
                      />
                    </div>
                    <span className="text-[var(--mist)] text-sm leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[var(--steel)] rounded-lg p-8 border border-[rgba(201,168,76,0.1)]">
              <h4 className="uppercase tracking-[0.2em] text-xs text-[var(--gold)] mb-6">
                Контакты
              </h4>
              <div className="space-y-5">
                {contactDetails.map((item) => (
                  <div key={item.icon} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-[rgba(201,168,76,0.08)] border border-[rgba(201,168,76,0.15)] flex items-center justify-center flex-shrink-0">
                      <Icon
                        name={item.icon}
                        size={18}
                        className="text-[var(--gold)]"
                      />
                    </div>
                    <span className="text-[var(--mist)] text-sm">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-start gap-3 px-2">
              <Icon
                name="Lock"
                size={14}
                className="text-[var(--gold-dim)] flex-shrink-0 mt-0.5"
              />
              <p className="text-muted-foreground text-xs leading-relaxed">
                Все данные защищены и не передаются третьим лицам
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
