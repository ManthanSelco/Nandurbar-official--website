import stallImg from "@/assets/case-study-bibi-fathima-stall.png";
import thresherImg from "@/assets/case-study-bibi-fathima-thresher.png";

export type CaseStudy = {
  id: string;
  title: string;
  person: string;
  place: string;
  summary: string;
  seedBankNote: string;
  bestPractice: string;
  stats: { label: string; value: string }[];
  challenges: string[];
  interventions: string[];
  impact: string[];
  images: { url: string; caption: string }[];
  sourceUrl: string | null;
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "bibi-fathima",
    title: "The Pioneer: Bibi Fathima's Community Seed Bank",
    person: "Bibi Fathima",
    place: "Thirtha village, Kundgol Taluk, Dharwad district",
    summary:
      "Bibi Fathima is a 40-year-old entrepreneur from Thirtha village. With support from the NGO Sahaj Samrudhha, she formed the Bibi Fathima Swa Sahaya Sangha, a self-help group, in 2018, and went on to help set up six more SHGs across Shiggon and Kundgol taluks. In 2019 she started a Community Seed Bank (CSB) at Thirtha to improve farmers' access to quality seed, initially sourcing from 30 selected farmers and cultivating 9 varieties of foxtail millet and 29 varieties of pulses and grains. The seed bank now holds around 300 varieties — including 75 of finger millet (ragi), 25 of little millet (saave), 25 of browntop millet (korale), 10 of foxtail millet (navane) and two of proso millet (baragu) — alongside a range of vegetable and pulse seed. It's run by the SHG and reaches roughly 200 farmers across 22 villages every year.",
    seedBankNote:
      "A seed bank stores seed under climate-controlled, low-humidity conditions to keep genetically pure varieties available for future generations — a form of insurance against crop and biodiversity loss as climate change puts pressure on agriculture.",
    bestPractice:
      "The CSB developed a \"Navadhanya Kit\" — nine varieties of seed spanning pulses, oilseeds, millets and vegetables — to help farmers grow millets for the first time and, through crop multi-cropping, naturally fix nitrogen and add biomass ahead of the main monsoon crop. The kits are distributed free to selected farmers in Haveri, Dharwad, Kalaburagi, Mysuru and Mandya districts, and sold at a reasonable price to others.",
    stats: [
      { label: "Seed varieties held", value: "~300" },
      { label: "Farmers reached / year", value: "~200" },
      { label: "Villages served / year", value: "22" },
      { label: "Annual turnover", value: "Up to ₹30 lakh" },
    ],
    challenges: [
      "Local farmers were initially skeptical about the potential of millets.",
      "Limited finances made it hard to set up a proper millet processing unit for quality seed.",
      "A knowledge gap around cultivation and processing — including threshing on mud floors or roads, which mixed soil into the grain and lost fodder.",
      "Farmers were adapting maize threshers for millet, which damaged the grain and gave poor cleaning quality.",
      "No appropriate machinery existed locally for processing the seed needed to supply the Navadhanya kits.",
    ],
    interventions: [
      "Solar-powered millet processing unit",
      "20 × 335 Wp, 24V solar panels with 20 × 120 Ah batteries",
      "Dehuller, aspirator, size grader, destoner and a roti-rolling conveyor belt",
      "Multi-crop electric reaper",
      "Multi-crop thresher suited to all millet varieties",
    ],
    impact: [
      "No more disruption to seed processing from power cuts.",
      "Annual turnover has grown to as much as ₹30 lakh.",
      "The CSB now reaches more farmers and has helped spread knowledge of millet processing more widely.",
      "Because seed quality has improved, CIWA Odisha (under AICRP – Women in Agriculture) now sources indigenous millet seed from Bibi Fathima's CSB under the Shree Anna Grama Yojane, to promote millet cultivation and millet-based nutrition in adopted villages.",
    ],
    images: [
      { url: stallImg, caption: "Bibi Fathima (right) at a seed and produce stall showcasing the CSB's millet and pulse varieties." },
      { url: thresherImg, caption: "The solar-powered multi-crop thresher, with harvested millet bundles ready for processing." },
    ],
    sourceUrl: "https://docs.google.com/document/d/1CwXor1Vls0RBn8ebyAhTo_3gt9UCfQgp/edit?usp=sharing",
  },
];
