import f8 from "@/assets/field-8-polyhouse.jpg";
import f9 from "@/assets/field-9-pottery-wheel.jpg";
import f10 from "@/assets/field-10-deep-freezer.jpg";
import f11 from "@/assets/field-11-solar-village-model.jpg";
import f12 from "@/assets/field-12-flour-mill.jpg";
import f13 from "@/assets/field-13-sev-press.jpg";
import f14 from "@/assets/field-14-tailoring-unit.jpg";

export type Shot = { url: string; title: string; caption: string };

export const GALLERY: Shot[] = [
  {
    url: f8,
    title: "Solar-powered polyhouse",
    caption: "A poly house for climate-controlled cultivation, with its solar panel and control panel — visitors get a walkthrough of how the system runs.",
  },
  {
    url: f9,
    title: "Motorised potter's wheel",
    caption: "An electric potter's wheel lets artisans throw more pots in a day, without the physical strain of kicking a manual wheel.",
  },
  {
    url: f10,
    title: "Solar-powered deep freezer",
    caption: "A SELCO solar deep freezer for cold storage, part of a demonstration set-up showing what a fully solarised household or shop can run.",
  },
  {
    url: f11,
    title: "Solar village model",
    caption: "A scale model of a solar-powered village — street lighting, a water pump, a health centre and homes all running on solar.",
  },
  {
    url: f12,
    title: "Solar-powered flour mill",
    caption: "A SELCO flour mill backed by a battery bank grinds grain without depending on unreliable grid supply.",
  },
  {
    url: f13,
    title: "Solar sev and murukku press",
    caption: "An electric extruder presses out sev and murukku, laid out here to dry — a small snack-making enterprise running on solar power.",
  },
  {
    url: f14,
    title: "Solar-powered tailoring unit",
    caption: "A tailoring shop's sign advertises solar-powered sewing machines, alongside the machines themselves, ready for the next order.",
  },
];
