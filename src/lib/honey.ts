// Source: SELCO Foundation value-chain deck for Honey.
export const HONEY_DECK_URL: string | null =
  "https://drive.google.com/file/d/1CmD8TB3pfORR99Cy7_YDdCTS5fFIwQSW/view?usp=drive_link";

export const HONEY_BENEFITS = [
  "Income through the peak flowering season",
  "Low capital, high-value produce",
  "Better pollination for nearby farms",
  "Enterprise for women and youth",
  "Long shelf life — easy to store and transport",
];

export type NodalPoint = { step: string; title: string; body: string; tech: string[] };

export const HONEY_NODES: NodalPoint[] = [
  {
    step: "01",
    title: "Harvesting & handling",
    body: "Rough handling and delay between collection and processing lower both yield and honey quality.",
    tech: ["Bee suit", "Smoker", "Uncapping knife"],
  },
  {
    step: "02",
    title: "Decapping & extraction",
    body: "Manual decapping is slow, and a hand-cranked extractor limits how much a household can process in a season.",
    tech: ["Solar-powered decapping tool", "Motorised honey extractor"],
  },
  {
    step: "03",
    title: "Filtration & moisture control",
    body: "Excess moisture and residual wax shorten shelf life and pull down the quality grade.",
    tech: ["Double-sieve filter", "Moisture meter"],
  },
  {
    step: "04",
    title: "Storage & bottling",
    body: "Without controlled storage, honey crystallises unevenly or ferments before it reaches the market.",
    tech: ["Warming cabinet", "Bottling and labelling unit"],
  },
  {
    step: "05",
    title: "Market access & value realisation",
    body: "Unbranded honey sold to local traders fetches a fraction of what a graded, bottled product can earn.",
    tech: ["Branding", "Direct and institutional sales"],
  },
];

export const HONEY_PRODUCTS = [
  "Raw and filtered honey",
  "Comb honey",
  "Beeswax candles and cosmetics",
  "Bee pollen and propolis",
  "Value-added honey blends",
];
