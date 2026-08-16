// Source: SELCO Foundation value-chain deck for Fisheries.
export const FISHERIES_DECK_URL: string | null =
  "https://drive.google.com/file/d/1U3oNH7T0VAstIaMysry6VfFg5m9YxA4d/view?usp=drive_link";

export const FISHERIES_BENEFITS = [
  "Daily catch, daily income",
  "Fewer losses to spoilage",
  "Enterprise for women in drying and vending",
  "Sells beyond the same-day catch radius",
  "Better food safety and quality grading",
];

export type NodalPoint = { step: string; title: string; body: string; tech: string[] };

export const FISHERIES_NODES: NodalPoint[] = [
  {
    step: "01",
    title: "Catch handling",
    body: "Fish left in open baskets in the heat starts spoiling within hours, well before it reaches a buyer.",
    tech: ["Insulated crates", "On-boat ice"],
  },
  {
    step: "02",
    title: "Ice & cold storage",
    body: "Without a reliable cold chain, fisherfolk are forced to sell the same day, at whatever price is offered.",
    tech: ["Solar ice maker", "Solar-powered deep freezer / cold storage"],
  },
  {
    step: "03",
    title: "Cleaning & grading",
    body: "Manual sorting is slow and inconsistent, and mixed-quality lots sell for a lower average price.",
    tech: ["Cleaning and grading table", "Weighing scale"],
  },
  {
    step: "04",
    title: "Drying & processing",
    body: "Sun-drying on open ground exposes the catch to dust, insects and unpredictable weather.",
    tech: ["Solar dryer", "Smoking / salting unit"],
  },
  {
    step: "05",
    title: "Market access & value realisation",
    body: "Dependence on intermediaries at the landing site keeps prices low for the people who actually caught the fish.",
    tech: ["Aggregation", "Cold-chain transport", "Direct market linkages"],
  },
];

export const FISHERIES_PRODUCTS = [
  "Fresh chilled fish",
  "Solar-dried and salted fish",
  "Fish pickle and other value-added products",
  "Fish-waste by-products",
  "Ice as a stand-alone service",
];
