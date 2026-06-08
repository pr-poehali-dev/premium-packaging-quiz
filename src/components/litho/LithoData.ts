export interface PriceRow {
  label: string;
  noVat: string;
  withVat: string;
}

export interface FactoryPricing {
  factory: string;
  city: string;
  rows: PriceRow[];
  extras: { label: string; value: string }[];
}

export const lithoProducts = [
  {
    name: "Банка с литографией sleek",
    volume: "250 мл",
    height: "133.2 мм",
    diameter: "53 мм",
    wall: "0.10 мм",
    material: "Пищевой алюминий",
    coating: "BPA-NI внутреннее покрытие",
    bestFor: "Энергетики, тоники, функциональные напитки",
    colors: "До 8 цветов печати",
    icon: "Zap",
    image: "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/files/96db4cb0-ad58-48cb-800f-15599026f570.jpg",
    borderClass: "rotating-border-gold",
    popular: false,
    pricing: [
      {
        factory: "АРНЕСТ",
        city: "Наро-Фоминск, Всеволожск",
        rows: [
          { label: "от 100 000 шт, литография", noVat: "15,40 ₽", withVat: "18,79 ₽" },
          { label: "от 330 000 шт, литография", noVat: "13,41 ₽", withVat: "16,36 ₽" },
          { label: "от 330 000 шт, доплата за матовый цвет", noVat: "0,37 ₽", withVat: "0,45 ₽" },
        ],
        extras: [
          { label: "Заведение дизайна (до 8 цветов)", value: "250 000 ₽ с НДС" },
          { label: "1 цвет — по прайсу, насчитывается после утверждения дизайна", value: "" },
          { label: "Наценка за невозврат тары", value: "1,43 ₽ с НДС" },
        ],
      },
    ] as FactoryPricing[],
  },
  {
    name: "Банка с литографией sleek",
    volume: "330 мл",
    height: "115.2 мм",
    diameter: "66.3 мм",
    wall: "0.170 мм",
    material: "Алюминиевый сплав",
    coating: "Внутренний лак на водной основе",
    bestFor: "Пиво, сидр, газированные напитки",
    colors: "До 8 цветов печати",
    icon: "Star",
    image: "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/files/adb50933-bf34-4d59-9481-20440601574a.jpg",
    borderClass: "rotating-border-blue",
    popular: false,
    pricing: [
      {
        factory: "АРНЕСТ",
        city: "Всеволожск",
        rows: [
          { label: "от 100 000 шт, литография", noVat: "12,90 ₽", withVat: "15,74 ₽" },
          { label: "от 330 000 шт, литография", noVat: "12,04 ₽", withVat: "14,69 ₽" },
          { label: "от 330 000 шт, доплата за матовый цвет", noVat: "0,37 ₽", withVat: "0,45 ₽" },
        ],
        extras: [
          { label: "Заведение дизайна (до 8 цветов)", value: "250 000 ₽ с НДС" },
          { label: "1 цвет — по прайсу, насчитывается после утверждения дизайна", value: "" },
          { label: "Наценка за невозврат тары", value: "1,43 ₽ с НДС" },
        ],
      },
      {
        factory: "КЭН-ПАК",
        city: "Новочеркасск",
        rows: [
          { label: "от 300 000 шт, литография", noVat: "11,13 ₽", withVat: "13,58 ₽" },
          { label: "от 300 000 шт, литография матовая", noVat: "11,13 ₽", withVat: "13,58 ₽" },
        ],
        extras: [
          { label: "Заведение дизайна (до 8 цветов)", value: "95 000 ₽ с НДС" },
          { label: "Наценка за невозврат тары", value: "1,27 ₽ с НДС" },
        ],
      },
    ] as FactoryPricing[],
  },
  {
    name: "Банка с литографией",
    volume: "449 мл",
    height: "168.0 мм",
    diameter: "63.5 мм",
    wall: "0.170 мм",
    material: "Алюминиевый сплав",
    coating: "Внутренний лак на водной основе",
    bestFor: "Пиво, коктейли, лимонады",
    colors: "До 8 цветов печати",
    icon: "Maximize",
    image: "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/files/8cc0f281-285c-4296-ba12-4053a36e663f.jpg",
    borderClass: "rotating-border-pearl",
    popular: true,
    pricing: [
      {
        factory: "АРНЕСТ",
        city: "Наро-Фоминск, Всеволожск",
        rows: [
          { label: "от 100 000 шт, литография", noVat: "15,40 ₽", withVat: "18,79 ₽" },
          { label: "от 330 000 шт, литография", noVat: "13,41 ₽", withVat: "16,36 ₽" },
          { label: "от 330 000 шт, доплата за матовый цвет", noVat: "0,37 ₽", withVat: "0,45 ₽" },
        ],
        extras: [
          { label: "Заведение дизайна (до 8 цветов)", value: "250 000 ₽ с НДС" },
          { label: "1 цвет — по прайсу, насчитывается после утверждения дизайна", value: "" },
          { label: "Наценка за невозврат тары", value: "1,43 ₽ с НДС" },
        ],
      },
      {
        factory: "КЭН-ПАК",
        city: "Волоколамск, Новочеркасск",
        rows: [
          { label: "от 300 000 шт, литография", noVat: "11,94 ₽", withVat: "14,57 ₽" },
          { label: "от 300 000 шт, литография матовая", noVat: "11,94 ₽", withVat: "14,57 ₽" },
        ],
        extras: [
          { label: "Заведение дизайна (до 8 цветов)", value: "95 000 ₽ с НДС" },
          { label: "Наценка за невозврат тары", value: "1,27 ₽ с НДС" },
        ],
      },
    ] as FactoryPricing[],
  },
];

export const specRows = [
  { key: "height", label: "Высота" },
  { key: "diameter", label: "Диаметр" },
  { key: "wall", label: "Стенка" },
  { key: "material", label: "Материал" },
  { key: "coating", label: "Покрытие" },
  { key: "bestFor", label: "Применение" },
  { key: "colors", label: "Цвета печати" },
] as const;

export const galleryItems = [
  {
    id: 1,
    title: "Крафтовое пиво",
    subtitle: "Серия ограниченного выпуска",
    accent: "#c9a84c",
    rotate: -3,
    size: "large",
    image: "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/bucket/e9cea27a-ce04-4b49-a24c-12f3239d2c3d.png",
  },
  {
    id: 2,
    title: "Энергетик Про",
    subtitle: "Городская коллекция",
    accent: "#e8c97a",
    rotate: 1.5,
    size: "small",
    image: "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/bucket/a8f9c300-fa1f-4661-9d12-b9612289e2bc.png",
  },
  {
    id: 3,
    title: "Лимонад Премиум",
    subtitle: "Летняя серия",
    accent: "#c9a84c",
    rotate: -1,
    size: "small",
    image: "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/bucket/6bb143ef-f508-4d58-8d95-0a2e3e2e1d64.png",
  },
  {
    id: 4,
    title: "Чай Серия",
    subtitle: "Авторский дизайн",
    accent: "#8a6e2f",
    rotate: 2.5,
    size: "large",
    image: "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/bucket/9a42fc5e-3cdb-4564-80d8-fa95a3465b39.png",
  },
  {
    id: 5,
    title: "Мохито",
    subtitle: "Фермерская коллекция",
    accent: "#e8c97a",
    rotate: -2,
    size: "small",
    image: "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/bucket/ae3e84cd-2959-4491-9f05-4ee45bae1a48.png",
  },
  {
    id: 6,
    title: "Тоник Королевский",
    subtitle: "Классическая серия",
    accent: "#c9a84c",
    rotate: 1,
    size: "small",
    image: "https://cdn.poehali.dev/projects/c29c3c15-8a3c-4d61-959d-3782d069fcee/bucket/9e679943-1514-4107-8ae7-6762590be1d2.png",
  },
];