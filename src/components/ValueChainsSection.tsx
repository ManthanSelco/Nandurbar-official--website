import { useState } from "react";
import { ChevronDown, ExternalLink } from "lucide-react";
import { useI18n, type Chain } from "@/lib/i18n";

import {
  HONEY_BENEFITS,
  HONEY_NODES,
  HONEY_PRODUCTS,
  HONEY_DECK_URL,
} from "@/lib/honey";

import {
  FISHERIES_BENEFITS,
  FISHERIES_NODES,
  FISHERIES_PRODUCTS,
  FISHERIES_DECK_URL,
} from "@/lib/fisheries";

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
    nodes: {
      step: string;
      title: string;
      body: string;
      tech: string[];
    }[];
    products: string[];
    circle?: string[];
    deckUrl: string | null;
  }
> = {
  honey: {
    benefits: HONEY_BENEFITS,
    nodes: HONEY_NODES,
    products: HONEY_PRODUCTS,
    deckUrl: HONEY_DECK_URL,
  },

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
    <div className="mt-8 overflow-hidden rounded-2xl border border-primary/20 bg-card shadow-lg">
      {/* Detail Header */}
      <div className="border-b border-border bg-primary/[0.04] px-6 py-7 sm:px-8">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              {chain.name}
            </p>

            <p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">
              {chain.focus}
            </p>
          </div>

          <span className="shrink-0 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            Value Chain
          </span>
        </div>

        {/* Benefits */}
        <ul className="mt-6 flex flex-wrap gap-2">
          {data.benefits.map((b) => (
            <li
              key={b}
              className="rounded-full border border-border bg-background px-3.5 py-1.5 text-sm text-foreground"
            >
              {b}
            </li>
          ))}
        </ul>
      </div>

      {/* Mushroom Circle */}
      {data.circle && (
        <div className="border-b border-border px-6 py-6 sm:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            Value chain flow
          </p>

          <div className="flex flex-wrap items-center gap-2">
            {data.circle.map((c, i) => (
              <span
                key={c}
                className="flex items-center gap-2"
              >
                <span className="rounded-lg border border-border bg-secondary/50 px-3 py-2 text-sm font-medium">
                  {c}
                </span>

                {i < data.circle!.length - 1 && (
                  <span className="text-lg font-medium text-primary">
                    →
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Nodes */}
      <div className="px-6 py-7 sm:px-8">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          {t.chainDetail.challenge}
        </p>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {data.nodes.map((n) => (
            <div
              key={n.step}
              className="group rounded-xl border border-border bg-background p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {n.step}
                </span>
              </div>

              <h4 className="mt-4 text-base font-semibold">
                {n.title}
              </h4>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {n.body}
              </p>

              <p className="mt-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                {t.chainDetail.tech}
              </p>

              <p className="mt-2 text-sm leading-6">
                {n.tech.join(" · ")}
              </p>
            </div>
          ))}
        </div>

        {/* Products */}
        <div className="mt-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
            {t.chainDetail.products}
          </p>

          <ul className="mt-4 grid overflow-hidden rounded-xl border border-border sm:grid-cols-2 lg:grid-cols-3">
            {data.products.map((p) => (
              <li
                key={p}
                className="border-b border-border bg-card px-5 py-4 text-sm transition-colors last:border-b-0 hover:bg-primary/[0.04] sm:[&:nth-child(odd)]:border-r lg:[&:not(:nth-child(3n))]:border-r"
              >
                {p}
              </li>
            ))}
          </ul>
        </div>

        {/* Actions */}
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href="#gallery"
            className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90"
          >
            {t.chainDetail.cta}
          </a>

          {data.deckUrl && (
            <a
              href={data.deckUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-5 py-2.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary"
            >
              {t.chainDetail.deck}

              <ExternalLink
                className="size-3.5"
                aria-hidden="true"
              />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ValueChainsSection() {
  const { t } = useI18n();

  const [active, setActive] = useState<string | null>(null);

  const handleClick = (chain: Chain) => {
    if (!DEEP_DIVES[chain.id]) return;

    setActive((current) =>
      current === chain.id ? null : chain.id
    );
  };

  const activeChain =
    t.chains.items.find((c) => c.id === active) ?? null;

  return (
    <section
      id="value-chains"
      className="scroll-mt-24 border-y border-border bg-[#f7f4e9]"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">

        {/* Section Header */}
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            {t.chains.eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            {t.chains.title}
          </h2>

          <div className="mt-6 h-1 w-16 rounded-full bg-primary" />
        </div>

        {/* Cards */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {t.chains.items.map((c, index) => {
            const interactive = Boolean(DEEP_DIVES[c.id]);
            const isOpen = active === c.id;

            return (
              <button
                key={c.id}
                type="button"
                onClick={() => handleClick(c)}
                aria-expanded={
                  interactive ? isOpen : undefined
                }
                disabled={!interactive}
                className={`
                  group relative flex min-h-[245px] flex-col
                  overflow-hidden rounded-2xl border
                  bg-card p-6 text-left
                  transition-all duration-300
                  ${
                    interactive
                      ? "cursor-pointer hover:-translate-y-1 hover:border-primary/50 hover:shadow-xl"
                      : "cursor-default"
                  }
                  ${
                    isOpen
                      ? "border-primary shadow-xl"
                      : "border-border shadow-sm"
                  }
                `}
              >
                {/* Top Accent */}
                <span
                  className={`
                    absolute inset-x-0 top-0 h-1
                    transition-colors duration-300
                    ${
                      isOpen
                        ? "bg-primary"
                        : "bg-primary/20 group-hover:bg-primary"
                    }
                  `}
                />

                {/* Number + Arrow */}
                <div className="flex items-center justify-between">
                  <span
                    className={`
                      flex size-9 items-center justify-center
                      rounded-full text-xs font-bold
                      transition-colors duration-300
                      ${
                        isOpen
                          ? "bg-primary text-primary-foreground"
                          : "bg-primary/10 text-primary"
                      }
                    `}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {interactive && (
                    <span
                      className={`
                        flex size-9 items-center justify-center
                        rounded-full border border-border
                        transition-all duration-300
                        group-hover:border-primary/50
                        ${
                          isOpen
                            ? "rotate-180 border-primary bg-primary/10"
                            : ""
                        }
                      `}
                    >
                      <ChevronDown
                        className="size-4 text-primary"
                        aria-hidden="true"
                      />
                    </span>
                  )}
                </div>

                {/* Card Content */}
                <div className="mt-auto">
                  <h3 className="text-2xl font-semibold tracking-tight text-foreground">
                    {c.name}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {c.focus}
                  </p>
                </div>

                {/* Bottom Line */}
                <div className="mt-6 h-px w-full bg-border transition-colors group-hover:bg-primary/20" />

                {interactive && (
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                    {isOpen ? "Selected" : "Explore"}
                  </p>
                )}
              </button>
            );
          })}
        </div>

        {/* Existing Detailed Content */}
        {activeChain && (
          <ChainDetail chain={activeChain} />
        )}
      </div>
    </section>
  );
}