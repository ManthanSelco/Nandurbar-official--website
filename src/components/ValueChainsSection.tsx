import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { useI18n, type Chain } from "@/lib/i18n";
import { HONEY_BENEFITS, HONEY_NODES, HONEY_PRODUCTS, HONEY_DECK_URL } from "@/lib/honey";
import { FISHERIES_BENEFITS, FISHERIES_NODES, FISHERIES_PRODUCTS, FISHERIES_DECK_URL } from "@/lib/fisheries";
import {
  MUSHROOM_BENEFITS,
  MUSHROOM_NODES,
  MUSHROOM_PRODUCTS,
  MUSHROOM_CIRCLE,
  MUSHROOM_DECK_URL,
} from "@/lib/mushroom";

const DEEP_DIVES: Record<
  string,
  {
    benefits: string[];
    nodes: { step: string; title: string; body: string; tech: string[] }[];
    products: string[];
    circle?: string[];
    deckUrl: string | null;
  }
> = {
  honey: { benefits: HONEY_BENEFITS, nodes: HONEY_NODES, products: HONEY_PRODUCTS, deckUrl: HONEY_DECK_URL },
  fisheries: {
    benefits: FISHERIES_BENEFITS,
    nodes: FISHERIES_NODES,
    products: FISHERIES_PRODUCTS,
    deckUrl: FISHERIES_DECK_URL,
  },
  mushroom: {
    benefits: MUSHROOM_BENEFITS,
    nodes: MUSHROOM_NODES,
    products: MUSHROOM_PRODUCTS,
    circle: MUSHROOM_CIRCLE,
    deckUrl: MUSHROOM_DECK_URL,
  },
};

function ChainDetail({ chain }: { chain: Chain }) {
  const { t } = useI18n();
  const data = DEEP_DIVES[chain.id];
  if (!data) return null;

  return (
    <div className="surface-card mt-4 rounded-md p-6 sm:p-8">
      <p className="eyebrow text-primary">{chain.name}</p>
      <p className="mt-2 max-w-3xl text-sm text-muted-foreground">{chain.focus}</p>

      <ul className="mt-5 flex flex-wrap gap-2">
        {data.benefits.map((b) => (
          <li
            key={b}
            className="rounded-sm border border-border bg-secondary/50 px-3 py-1.5 text-sm"
          >
            {b}
          </li>
        ))}
      </ul>

      {data.circle && (
        <div className="mt-6 flex flex-wrap items-center gap-2 text-sm">
          {data.circle.map((c, i) => (
            <span key={c} className="flex items-center gap-2">
              <span className="rounded-sm border border-border bg-card px-3 py-1.5">{c}</span>
              {i < data.circle!.length - 1 && <span className="text-primary">→</span>}
            </span>
          ))}
        </div>
      )}

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.nodes.map((n) => (
          <div key={n.step} className="rounded-md border border-border bg-card p-5">
            <p className="font-display text-sm font-semibold text-primary">{n.step}</p>
            <h4 className="mt-1 text-base font-semibold">{n.title}</h4>
            <p className="mt-2 text-sm text-muted-foreground">{t.chainDetail.challenge}: {n.body}</p>
            <p className="mt-3 text-xs uppercase tracking-wide text-muted-foreground">
              {t.chainDetail.tech}
            </p>
            <p className="mt-1 text-sm">{n.tech.join(" · ")}</p>
          </div>
        ))}
      </div>

      <p className="eyebrow mt-8 text-muted-foreground">{t.chainDetail.products}</p>
      <ul className="mt-3 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
        {data.products.map((p) => (
          <li key={p} className="bg-card px-5 py-4 text-sm">
            {p}
          </li>
        ))}
      </ul>

      <a
        href="#gallery"
        className="mt-6 inline-flex items-center justify-center rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
      >
        {t.chainDetail.cta}
      </a>
      {data.deckUrl && (
        <a
          href={data.deckUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-6 ml-3 inline-flex items-center gap-1.5 rounded-sm border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
        >
          {t.chainDetail.deck}
          <ExternalLink className="size-3.5" aria-hidden="true" />
        </a>
      )}
    </div>
  );
}

export function ValueChainsSection() {
  const { t } = useI18n();
  const [active, setActive] = useState<string | null>(null);

  const handleClick = (chain: Chain) => {
    if (!DEEP_DIVES[chain.id]) return;
    setActive((c) => (c === chain.id ? null : chain.id));
  };

  const activeChain = t.chains.items.find((c) => c.id === active) ?? null;

  return (
    <section id="value-chains" className="scroll-mt-24 border-y border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow text-primary">{t.chains.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t.chains.title}</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {t.chains.items.map((c) => {
            const interactive = Boolean(DEEP_DIVES[c.id]);
            const isOpen = active === c.id;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => handleClick(c)}
                aria-expanded={interactive ? isOpen : undefined}
                className={`surface-card lift-card chain-card rounded-md p-5 text-left transition-colors ${
                  interactive ? "cursor-pointer hover:border-primary" : "cursor-default"
                } ${isOpen ? "border-primary" : ""}`}
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="font-display text-lg font-semibold">{c.name}</h3>
                  {interactive && (
                    <ChevronDown
                      className={`mt-1 size-4 shrink-0 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`}
                      aria-hidden="true"
                    />
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{c.focus}</p>
              </button>
            );
          })}
        </div>

        {activeChain && <ChainDetail chain={activeChain} />}
      </div>
    </section>
  );
}
