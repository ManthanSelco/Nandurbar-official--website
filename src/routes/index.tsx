import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-mela.jpg";
import { useI18n } from "@/lib/i18n";
import { FieldGallery } from "@/components/FieldGallery";
import { ValueChainsSection } from "@/components/ValueChainsSection";
import { CaseStudies } from "@/components/CaseStudies";
import { Reveal } from "@/components/Reveal";
import { CHAMPIONS, CHIEF_GUEST, CONTACT, HOSTS, MEDIA, PANEL, type Person } from "@/lib/people";
import selcoLogo from "@/assets/selco-logo.png";
import kvkLogo from "@/assets/kvk-logo.png";
import icarLogo from "@/assets/icar-logo.png";

const TITLE = "Nandurbar Mela 2026 — Farmers & SHG Women | SELCO × KVK";
const DESC =
  "One-day mela for farmers and SHG women in Nandurbar on 21 August 2026, co-hosted by SELCO Foundation and KVK — clean energy, finance and markets across five value chains.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function PersonCard({ p }: { p: Person }) {
  return (
    <div className="surface-card lift-card rounded-md p-5">
      <p className="font-display text-base font-semibold">{p.name}</p>
      <p className="mt-1 text-sm text-muted-foreground">{p.role}</p>
      {p.org && <p className="mt-1 text-sm text-primary">{p.org}</p>}
    </div>
  );
}

function Index() {
  const { t } = useI18n();

  return (
    <div id="top">
      <section className="relative isolate">
        <img
          src={heroImage}
          alt="Farmers and SHG women at a solar-powered agricultural mela in Nandurbar"
          width={1920}
          height={1088}
          className="hero-image absolute inset-0 -z-10 size-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ backgroundImage: "var(--gradient-hero)" }}
        />
        <div className="hero-content mx-auto max-w-6xl px-5 py-28 text-background sm:py-36">
          <p className="eyebrow text-accent hero-item hero-item-1">{t.hero.meta}</p>
          <h1 className="hero-item hero-item-2 mt-4 max-w-3xl text-4xl font-semibold leading-[1.15] sm:text-6xl">
            {t.hero.title}
          </h1>
          <p className="hero-item hero-item-3 mt-5 max-w-xl text-base text-background/85">{t.hero.body}</p>
          <div className="hero-orbit hero-orbit-one" aria-hidden="true" />
          <div className="hero-orbit hero-orbit-two" aria-hidden="true" />
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <dl className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.facts.map((f) => (
            <div key={f.title} className="fact-card bg-card px-6 py-7">
              <dt className="eyebrow text-muted-foreground">{f.title}</dt>
              <dd className="mt-2 text-sm font-medium">{f.body}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20">
        <p className="eyebrow text-primary">{t.about.eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">{t.about.title}</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">{t.about.body}</p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.about.objectives.map((o) => (
            <Reveal key={o.title} delay={120} className="h-full"><div className="surface-card h-full rounded-md p-6">
              <h3 className="text-base font-semibold">{o.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{o.body}</p>
            </div></Reveal>
          ))}
        </div>
      </section>

      <ValueChainsSection />

      <section id="gallery" className="scroll-mt-24 border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow text-primary">{t.gallery.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">{t.gallery.title}</h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">{t.gallery.body}</p>
          <FieldGallery />
          <p className="mt-4 text-xs text-muted-foreground">{t.gallery.note}</p>
        </div>
      </section>

      <CaseStudies />

      <section id="agenda" className="scroll-mt-24 border-t border-border">
        <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow text-primary">{t.agenda.eyebrow}</p>
        <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t.agenda.title}</h2>
        <ol className="mt-10 space-y-px bg-border">
          {t.agenda.slots.map((s, index) => (
            <Reveal key={s.title} delay={index * 70}>
            <li className="agenda-item bg-card px-6 py-6 sm:flex sm:gap-8">
              <span className="block w-48 shrink-0 text-sm font-semibold text-primary">
                {s.time}
              </span>
              <span className="mt-2 block sm:mt-0">
                <span className="block font-medium">{s.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{s.body}</span>
              </span>
            </li>
            </Reveal>
          ))}
        </ol>
        </div>
      </section>

      <section id="speakers" className="scroll-mt-24 border-y border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow text-primary">{t.speakers.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t.speakers.title}</h2>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            <Reveal className="h-full"><div className="surface-card lift-card h-full rounded-md border-l-4 border-l-primary p-6 lg:col-span-1">
              <p className="eyebrow text-muted-foreground">{t.speakers.chief}</p>
              <p className="mt-2 font-display text-xl font-semibold">{CHIEF_GUEST.name}</p>
              <p className="mt-1 text-sm text-muted-foreground">{CHIEF_GUEST.role}</p>
              <p className="mt-2 text-sm text-primary">{CHIEF_GUEST.org}</p>
            </div></Reveal>
            <div className="lg:col-span-2">
              <p className="eyebrow text-muted-foreground">{t.speakers.hosts}</p>
              <div className="mt-3 grid gap-4 sm:grid-cols-2">
                {HOSTS.map((p) => (
                  <PersonCard key={p.name} p={p} />
                ))}
              </div>
            </div>
          </div>

          <p className="eyebrow mt-12 text-muted-foreground">{t.speakers.champions}</p>
          <div className="mt-3 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {CHAMPIONS.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </div>

          <p className="eyebrow mt-12 text-muted-foreground">{t.speakers.panel}</p>
          <div className="mt-3 grid gap-4 sm:grid-cols-3">
            {PANEL.map((p) => (
              <PersonCard key={p.name} p={p} />
            ))}
          </div>

          <p className="mt-8 text-sm text-muted-foreground">{t.speakers.note}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-14">
        <Reveal className="flex flex-wrap items-center justify-center gap-10">
          <img src={icarLogo} alt="ICAR logo" className="partner-logo h-16 w-auto" loading="lazy" />
          <img src={kvkLogo} alt="Krishi Vigyan Kendra logo" className="partner-logo h-16 w-auto" loading="lazy" />
          <img src={selcoLogo} alt="SELCO Foundation logo" className="partner-logo h-16 w-auto" loading="lazy" />
        </Reveal>
      </section>

      <section id="contact" className="scroll-mt-24 border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-primary">{t.contact.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">{t.contact.title}</h2>

            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="eyebrow text-muted-foreground">{t.contact.email}</dt>
                <dd className="mt-1">
                  <a className="underline underline-offset-4 hover:text-primary" href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">{t.contact.phone}</dt>
                <dd className="mt-1 space-y-1.5">
                  {CONTACT.phones.map((p) => (
                    <p key={p.number}>
                      <a
                        href={`tel:${p.number.replace(/\s/g, "")}`}
                        className="underline underline-offset-4 hover:text-primary"
                      >
                        {p.number}
                      </a>
                      <span className="text-muted-foreground"> — {p.label}</span>
                    </p>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">{t.contact.website}</dt>
                <dd className="mt-1">
                  <a
                    href={CONTACT.website}
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4 hover:text-primary"
                  >
                    selcofoundation.org
                  </a>
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-muted-foreground">{t.contact.offices}</dt>
                <dd className="mt-2 space-y-3">
                  {CONTACT.offices.map((o) => (
                    <p key={o.city} className="text-muted-foreground">
                      <span className="font-medium text-foreground">{o.city}</span> — {o.address}
                    </p>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="eyebrow text-primary">{t.contact.media}</p>
            <ul className="mt-4 space-y-px bg-border">
              {MEDIA.map((m) => (
                <li key={m.url} className="bg-card px-5 py-4">
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <span className="flex flex-wrap items-baseline gap-x-2">
                      <span className="eyebrow text-muted-foreground">{m.outlet}</span>
                      <span className="text-xs text-muted-foreground">· {m.date}</span>
                    </span>
                    <span className="mt-1 block font-medium group-hover:text-primary">
                      {m.title}
                    </span>
                    <span className="mt-1 inline-flex items-center gap-1 text-xs text-primary underline underline-offset-4">
                      Read the published article
                      <ExternalLink className="size-3" aria-hidden="true" />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
