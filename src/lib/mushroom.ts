// Source: SELCO Foundation value-chain deck "Mushrooms: Growing Livelihoods from Waste".
export const MUSHROOM_DECK_URL: string | null =
  "https://drive.google.com/file/d/1q9k14k1AU8L9OaH_LUHRJqFt7WHYGrOe/view?usp=drive_link";

export const MUSHROOM_BENEFITS = [
  "Climate-resilient livelihood",
  "Low land requirement",
  "Rising urban demand",
  "Enterprise for women and youth",
  "Agricultural waste utilisation",
  "Nutrition and food security",
];

export type NodalPoint = { step: string; title: string; body: string; tech: string[] };

export const MUSHROOM_NODES: NodalPoint[] = [
  {
    step: "01",
    title: "Substrate management",
    body: "Paddy straw and crop residue prepared at the right size and moisture decide the whole crop cycle.",
    tech: ["Chaff cutter", "Substrate mixer", "Pellets"],
  },
  {
    step: "02",
    title: "Sterilisation & hygiene",
    body: "Fungal and bacterial contamination causes high batch losses; uneven moisture after sterilisation weakens colonisation.",
    tech: ["Steam steriliser", "Boiler / pressure unit"],
  },
  {
    step: "03",
    title: "Spawn quality & bag preparation",
    body: "Unreliable spawn supply and no traceability make failures hard to diagnose.",
    tech: ["Quality spawn supply", "Bag packing machine", "Decomposable bags"],
  },
  {
    step: "04",
    title: "Incubation & fruiting",
    body: "Heat stress and uncontrolled humidity trigger crop failure and fungal outbreaks.",
    tech: ["Controlled environment chamber", "Humidifier", "Fogger", "Moisture meter"],
  },
  {
    step: "05",
    title: "Harvesting & growing space",
    body: "Rough handling cuts shelf life; poor cleaning between cycles causes recurring contamination.",
    tech: ["Harvest protocols", "Cleaning and maintenance routine"],
  },
  {
    step: "06",
    title: "Post-harvest handling",
    body: "Short shelf life and limited rural processing infrastructure drive avoidable losses.",
    tech: ["Solar dryer", "Freezer", "Siever", "Vermicomposting of spent substrate"],
  },
  {
    step: "07",
    title: "Market access & value realisation",
    body: "Dependence on local traders, weak branding and low awareness of value-added formats keep prices low.",
    tech: ["Aggregation", "Branding", "Institutional buyers"],
  },
];

export const MUSHROOM_PRODUCTS = [
  "Fresh oyster and milky mushrooms",
  "Solar-dried mushrooms",
  "Mushroom powder",
  "Ready mixes and pickles",
  "Spawn as an input business",
  "Compost from spent substrate",
];

export const MUSHROOM_CIRCLE = [
  "Agricultural waste",
  "Mushroom cultivation",
  "Nutritious food",
  "Spent substrate",
  "Organic fertiliser",
  "Back to the farm",
];
