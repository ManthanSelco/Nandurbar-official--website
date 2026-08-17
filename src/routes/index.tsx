import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import heroImage from "@/assets/image3.jpg";
import { useI18n } from "@/lib/i18n";
import { FieldGallery } from "@/components/FieldGallery";
import { ValueChainsSection } from "@/components/ValueChainsSection";
import { CaseStudies } from "@/components/CaseStudies";
import { Reveal } from "@/components/Reveal";
import {
  CHAMPIONS,
  CHIEF_GUEST,
  CONTACT,
  HOSTS,
  MEDIA,
  PANEL,
  type Person,
} from "@/lib/people";
import selcoLogo from "@/assets/selco-logo.png";
import kvkLogo from "@/assets/kvk-logo.png";
import icarLogo from "@/assets/icar-logo.png";

const TITLE =
  "Nandurbar Mela 2026 — Strengthening Farmers and Women through Collectives";

const DESC =
  "Climate Resilient Livelihoods in Nandurbar — strengthening farmers and women through collectives, clean energy, finance and community implementation.";

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

function PersonCard({
  p,
  variant = "default",
}: {
  p: Person;
  variant?: "default" | "green" | "blue" | "orange" | "purple" | "teal";
}) {
  const variants = {
    default: {
      border: "border-l-slate-400",
      badge: "bg-slate-100 text-slate-700",
      name: "text-slate-900",
      org: "text-primary",
    },
    green: {
      border: "border-l-emerald-600",
      badge: "bg-emerald-50 text-emerald-700",
      name: "text-emerald-950",
      org: "text-emerald-700",
    },
    blue: {
      border: "border-l-blue-600",
      badge: "bg-blue-50 text-blue-700",
      name: "text-blue-950",
      org: "text-blue-700",
    },
    orange: {
      border: "border-l-orange-500",
      badge: "bg-orange-50 text-orange-700",
      name: "text-orange-950",
      org: "text-orange-700",
    },
    purple: {
      border: "border-l-purple-600",
      badge: "bg-purple-50 text-purple-700",
      name: "text-purple-950",
      org: "text-purple-700",
    },
    teal: {
      border: "border-l-teal-600",
      badge: "bg-teal-50 text-teal-700",
      name: "text-teal-950",
      org: "text-teal-700",
    },
  };

  const style = variants[variant];

  return (
    <div
      className={`
        group relative h-full overflow-hidden
        rounded-xl border border-border
        border-l-4 ${style.border}
        bg-card p-5
        shadow-sm
        transition-all duration-300
        hover:-translate-y-1
        hover:shadow-lg
      `}
    >
      <div
        className={`absolute right-0 top-0 h-1 w-16 ${
          style.badge.split(" ")[0]
        }`}
      />

      <p
        className={`
          font-display text-base font-semibold
          transition-colors duration-300
          ${style.name}
        `}
      >
        {p.name}
      </p>

      <p className="mt-2 text-sm leading-5 text-muted-foreground">
        {p.role}
      </p>

      {p.org && (
        <p className={`mt-2 text-sm font-medium ${style.org}`}>
          {p.org}
        </p>
      )}
    </div>
  );
}

function Index() {
  const { t } = useI18n();

  return (
    <div id="top">
      {/* Partner Logos */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-8 px-5 py-5 sm:gap-14 sm:py-6">
          <img
            src={icarLogo}
            alt="ICAR logo"
            className="partner-logo h-12 w-auto object-contain sm:h-16"
          />

          <img
            src={kvkLogo}
            alt="Krishi Vigyan Kendra logo"
            className="partner-logo h-12 w-auto object-contain sm:h-16"
          />

          <img
            src={selcoLogo}
            alt="SELCO Foundation logo"
            className="partner-logo h-12 w-auto object-contain sm:h-16"
          />
        </div>
      </section>

      {/* Hero */}
     <section className="relative isolate overflow-hidden">
  {/* Hero image */}
  <img
    src={heroImage}
    alt="Farmers and SHG women at a solar-powered agricultural mela in Nandurbar"
    width={1920}
    height={1088}
    loading="eager"
    fetchPriority="high"
    className="
      absolute inset-0
      -z-20
      size-full
      object-cover
      object-center
      scale-[1.02]
    "
  />

  {/* Soft overlay — keeps image visible */}
  <div
    className="
      absolute inset-0
      -z-10
      bg-black/25
    "
  />

  {/* Bottom readability gradient only */}
  <div
    className="
      pointer-events-none
      absolute inset-x-0 bottom-0
      -z-10 h-2/5
      bg-gradient-to-t
      from-black/65
      via-black/25
      to-transparent
    "
  />

  {/* Content */}
  <div
    className="
      hero-content
      mx-auto
      flex min-h-[620px]
      max-w-6xl
      items-center
      px-5
      py-24
      text-background
      sm:min-h-[680px]
      sm:py-32
    "
  >
    <div className="max-w-4xl">
<p className="hero-item hero-item-1 text-sm font-semibold uppercase tracking-[0.18em] text-white drop-shadow-md">
  Climate Resilient Livelihoods in Nandurbar, 21 August 2026
</p>

<h1
  className="
    hero-item hero-item-2
    mt-4 max-w-4xl
    text-4xl font-semibold leading-[1.08]
    text-white
    drop-shadow-[0_3px_12px_rgba(0,0,0,0.55)]
    sm:text-6xl lg:text-7xl
  "
>
  Strengthening Farmers and Women through Collectives, Nandurbar
</h1>

<p
  className="
    hero-item hero-item-3
    mt-6 max-w-2xl
    text-base leading-7
    text-white/90
    drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]
    sm:text-lg
  "
>
  {t.hero.body}
</p>
    </div>
  </div>

  <div
    className="hero-orbit hero-orbit-one"
    aria-hidden="true"
  />

  <div
    className="hero-orbit hero-orbit-two"
    aria-hidden="true"
  />
</section>

      {/* Facts */}
      <section className="border-b border-border bg-card">
        <dl className="mx-auto grid max-w-6xl gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {t.facts.map((f) => (
            <div key={f.title} className="fact-card bg-card px-6 py-7">
              <dt className="eyebrow text-muted-foreground">
                {f.title}
              </dt>

              {f.title === "Venue" ? (
                <dd className="mt-2 text-sm font-medium">
                  <a
                    href="https://maps.app.goo.gl/rRD6hxZtsJ4pXxMWA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-4 transition-colors hover:text-primary"
                  >
                    {f.body}
                  </a>
                </dd>
              ) : (
                <dd className="mt-2 text-sm font-medium">
                  {f.body}
                </dd>
              )}
            </div>
          ))}
        </dl>
      </section>

      {/* About */}
      <section
        id="about"
        className="scroll-mt-24 border-t border-border bg-secondary/30"
      >
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow text-primary">
              {t.about.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
              {t.about.title}
            </h2>

            <p className="mx-auto mt-6 max-w-4xl text-base leading-7 text-muted-foreground sm:text-lg">
              {t.about.body}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {t.about.objectives.map((o, index) => (
              <Reveal
                key={o.title}
                delay={index * 100}
                className="h-full"
              >
                <div
                  className="
                    h-full rounded-xl border border-border
                    bg-card p-6
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-lg
                  "
                >
                  <div
                    className="
                      mb-5 flex size-10 items-center justify-center
                      rounded-full bg-primary
                      text-sm font-bold text-primary-foreground
                    "
                  >
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  <h3 className="text-lg font-semibold leading-snug">
                    {o.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-muted-foreground">
                    {o.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Value Chains */}
      <ValueChainsSection />


      {/* Vendors */}
{/* Vendors */}
<section
  id="vendors"
  className="border-t border-border bg-secondary/30"
>
  <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">

    {/* Header */}
    <div className="mx-auto max-w-4xl text-center">
      <p className="eyebrow text-primary">
        Vendor Showcase
      </p>

      <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
        Technology & Solution Partners
      </h2>

      <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
        Organisations and enterprises showcasing clean-energy technologies
        and livelihood solutions at the Nandurbar Mela.
      </p>
    </div>

    {/* Vendor Grid */}
    <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Maxlorx Global industry",
          description: "Oil extraction machine",
          email: "maxlordind@gmail.com",
        },
        {
          name: "Ecozen",
          description: "Cold storage",
          email:
            "ravi.d@ecozensolutions.com / prashanth.huilgol@ecozensolutions.com / info@ecozensolutions.com",
        },
        {
          name: "S4S Technologies",
          description: "Conduction dryer",
          email: "nilesh@s4stechnologies.com",
        },
        {
          name: "Pathey",
          description: "Solar dryer (Polycarbonate & Poly ethylene)",
          email: "kmungee@pathey.co.in",
        },
        {
          name: "Devidayal solar solutions",
          description: "DC fridge, DC fan",
          email: "rcsoni@ddsolar.in",
        },
        {
          name: "Auto Studio Pvt Ltd",
          description: "Solar sprayers and Hydroponics",
          email: "ac.autostudio@gmail.com, autostudio.agro@gmail.com",
        },
        {
          name: "Rural Roots Renew Solutions LLP",
          description: "Portable Solar Powered Irrigation Solutions",
          email: "renewruralroots@gmail.com",
        },
        {
          name: "Agronomics",
          description: "Drone",
          email: "agronomicsas@gmail.com",
        },
        {
          name: "CHDK",
          description: "Solar Cold Storage & Dryer",
          email: "agrobridgeadvisory@gmail.com",
        },
        {
          name: "Ajay Industries",
          description: "Cattle feed plant, Rice mill",
          email: "ajayindustries.amt@gmail.com",
        },
        {
          name: "Rudra Solar",
          description: "Solar dryer",
          email: "rudrasolar@gmail.com",
        },
        {
          name: "shivrajagro",
          description: "Dal Mill, Grader",
          email: "sales@shivrajagro.in",
        },
      ].map((vendor, index) => (
        <Reveal key={vendor.name} delay={index * 50}>
          <article
            className="
              group relative h-full overflow-hidden
              rounded-2xl border border-border
              bg-card
              p-6
              shadow-sm
              transition-all duration-300
              hover:-translate-y-1
              hover:border-primary/40
              hover:shadow-xl
            "
          >
            {/* Top highlight */}
            <div
              className="
                absolute inset-x-0 top-0
                h-1 bg-primary/80
                transition-all duration-300
                group-hover:bg-primary
              "
            />

            {/* Number */}
            <div className="flex items-center justify-between">
              <span
                className="
                  flex size-9 items-center justify-center
                  rounded-full
                  bg-primary/10
                  text-xs font-bold
                  text-primary
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                Maharashtra
              </span>
            </div>

            {/* Organisation */}
            <h3 className="mt-6 text-xl font-semibold leading-snug">
              {vendor.name}
            </h3>

            {/* Technology */}
            <div className="mt-4 rounded-xl bg-primary/[0.06] px-4 py-3">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                Technology / Solution
              </p>

              <p className="mt-1 text-sm font-medium leading-6 text-foreground">
                {vendor.description}
              </p>
            </div>

            {/* Email */}
            <div className="mt-5 border-t border-border pt-4">
              <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Contact
              </p>

              <a
                href={`mailto:${vendor.email.split(" / ")[0].split(", ")[0]}`}
                className="
                  mt-2 block break-words
                  text-sm font-medium
                  text-primary
                  underline-offset-4
                  hover:underline
                "
              >
                {vendor.email}
              </a>
            </div>

            {/* Bottom accent */}
            <div className="mt-6 h-px w-12 bg-primary/40 transition-all duration-300 group-hover:w-full" />
          </article>
        </Reveal>
      ))}
    </div>

    {/* Summary */}
    <div className="mt-10 text-center">
      <p className="text-sm text-muted-foreground">
        Explore the technologies and solutions being showcased at the mela.
      </p>
    </div>
  </div>
</section>
      {/* Gallery */}
      <section
        id="gallery"
        className="scroll-mt-24 border-t border-border bg-secondary/40"
      >
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow text-primary">
            {t.gallery.eyebrow}
          </p>

          <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">
            {t.gallery.title}
          </h2>

          <p className="mt-4 max-w-3xl text-muted-foreground">
            {t.gallery.body}
          </p>

          <FieldGallery />

          <p className="mt-4 text-xs text-muted-foreground">
            {t.gallery.note}
          </p>
        </div>
      </section>

      {/* Case Studies */}
      <CaseStudies />

      {/* Agenda */}
      <section
        id="agenda"
        className="scroll-mt-24 border-t border-border"
      >
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow text-primary">
            {t.agenda.eyebrow}
          </p>

          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            {t.agenda.title}
          </h2>

          <ol className="mt-10 space-y-px bg-border">
            {t.agenda.slots.map((s, index) => (
              <Reveal key={s.title} delay={index * 70}>
                <li className="agenda-item bg-card px-6 py-6 sm:flex sm:gap-8">
                  <span className="block w-48 shrink-0 text-sm font-semibold text-primary">
                    {s.time}
                  </span>

                  <span className="mt-2 block sm:mt-0">
                    <span className="block font-medium">
                      {s.title}
                    </span>

                    <span className="mt-1 block text-sm text-muted-foreground">
                      {s.body}
                    </span>
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Speakers */}
      <section
        id="speakers"
        className="scroll-mt-24 border-y border-border bg-secondary/40"
      >
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="max-w-3xl">
            <p className="eyebrow text-primary">
              {t.speakers.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.speakers.title}
            </h2>

            <p className="mt-4 text-muted-foreground">
              Farmers, entrepreneurs, institutions and financial partners
              coming together to share knowledge and enable action.
            </p>
          </div>

          {/* Chief Guest + Context Setting */}
          <div className="mt-12">
            <p className="eyebrow text-primary">
              {t.speakers.chief}
            </p>

            <div className="mt-4 grid gap-5 lg:grid-cols-3">
              {/* Chief Guest */}
              <Reveal className="h-full">
                <div
                  className="
                    relative h-full overflow-hidden
                    rounded-2xl border border-amber-200
                    border-l-4 border-l-amber-500
                    bg-amber-50/70
                    p-7
                    shadow-sm
                    transition-all duration-300
                    hover:-translate-y-1
                    hover:shadow-xl
                  "
                >
                  <div
                    className="
                      absolute right-0 top-0
                      rounded-bl-xl
                      bg-amber-100
                      px-4 py-2
                      text-[10px] font-semibold uppercase
                      tracking-[0.18em] text-amber-700
                    "
                  >
                    Chief Guest
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
                    {t.speakers.chief}
                  </p>

                  <p className="mt-5 font-display text-xl font-semibold text-amber-950">
                    {CHIEF_GUEST.name}
                  </p>

                  <p className="mt-2 text-sm leading-5 text-amber-900/70">
                    {CHIEF_GUEST.role}
                  </p>

                  <p className="mt-3 text-sm font-medium text-amber-700">
                    {CHIEF_GUEST.org}
                  </p>
                </div>
              </Reveal>

              {/* Hosts */}
              <div className="lg:col-span-2">
                <p className="eyebrow text-blue-700">
                  {t.speakers.hosts}
                </p>

                <div className="mt-4 grid gap-5 sm:grid-cols-2">
                  {HOSTS.map((p, index) => (
                    <Reveal
                      key={p.name}
                      delay={index * 80}
                      className="h-full"
                    >
                      <PersonCard
                        p={p}
                        variant={
                          index % 2 === 0 ? "blue" : "green"
                        }
                      />
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Champion Farmers */}
          <div className="mt-14">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="eyebrow text-emerald-700">
                  {t.speakers.champions}
                </p>

                <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                  Farmers and entrepreneurs bringing practical field
                  experience, innovation and local solutions to the mela.
                </p>
              </div>
            </div>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {CHAMPIONS.map((p, index) => {
                const colors = [
                  "green",
                  "orange",
                  "purple",
                  "teal",
                  "blue",
                ] as const;

                return (
                  <Reveal
                    key={p.name}
                    delay={index * 70}
                    className="h-full"
                  >
                    <PersonCard
                      p={p}
                      variant={colors[index % colors.length]}
                    />
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Bankers Panel */}
          <div className="mt-14">
            <p className="eyebrow text-purple-700">
              {t.speakers.panel}
            </p>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PANEL.map((p, index) => {
                const colors = [
                  "purple",
                  "blue",
                  "teal",
                ] as const;

                return (
                  <Reveal
                    key={p.name}
                    delay={index * 80}
                    className="h-full"
                  >
                    <PersonCard
                      p={p}
                      variant={colors[index % colors.length]}
                    />
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Bottom note */}
          <div
            className="
              mt-10 rounded-xl
              border border-dashed border-border
              bg-card/60
              px-5 py-4
            "
          >
            <p className="text-sm text-muted-foreground">
              {t.speakers.note}
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-24 border-t border-border bg-card"
      >
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 lg:grid-cols-2">
          <div>
            <p className="eyebrow text-primary">
              {t.contact.eyebrow}
            </p>

            <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
              {t.contact.title}
            </h2>

            <dl className="mt-8 space-y-5 text-sm">
              <div>
                <dt className="eyebrow text-muted-foreground">
                  {t.contact.email}
                </dt>

                <dd className="mt-1">
                  <a
                    className="underline underline-offset-4 hover:text-primary"
                    href={`mailto:${CONTACT.email}`}
                  >
                    {CONTACT.email}
                  </a>
                </dd>
              </div>

              <div>
                <dt className="eyebrow text-muted-foreground">
                  {t.contact.phone}
                </dt>

                <dd className="mt-1 space-y-1.5">
                  {CONTACT.phones.map((p) => (
                    <p key={p.number}>
                      <a
                        href={`tel:${p.number.replace(/\s/g, "")}`}
                        className="underline underline-offset-4 hover:text-primary"
                      >
                        {p.number}
                      </a>

                      <span className="text-muted-foreground">
                        {" "}
                        — {p.label}
                      </span>
                    </p>
                  ))}
                </dd>
              </div>

              <div>
                <dt className="eyebrow text-muted-foreground">
                  {t.contact.website}
                </dt>

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
                <dt className="eyebrow text-muted-foreground">
                  {t.contact.offices}
                </dt>

                <dd className="mt-2 space-y-3">
                  {CONTACT.offices.map((o) => (
                    <p
                      key={o.city}
                      className="text-muted-foreground"
                    >
                      <span className="font-medium text-foreground">
                        {o.city}
                      </span>{" "}
                      — {o.address}
                    </p>
                  ))}
                </dd>
              </div>
            </dl>
          </div>

          <div>
            <p className="eyebrow text-primary">
              {t.contact.media}
            </p>

            <ul className="mt-4 space-y-px bg-border">
              {MEDIA.map((m) => (
                <li
                  key={m.url}
                  className="bg-card px-5 py-4"
                >
                  <a
                    href={m.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block"
                  >
                    <span className="flex flex-wrap items-baseline gap-x-2">
                      <span className="eyebrow text-muted-foreground">
                        {m.outlet}
                      </span>

                      <span className="text-xs text-muted-foreground">
                        · {m.date}
                      </span>
                    </span>

                    <span className="mt-1 block font-medium group-hover:text-primary">
                      {m.title}
                    </span>

                    <span className="mt-1 inline-flex items-center gap-1 text-xs text-primary underline underline-offset-4">
                      Read the published article
                      <ExternalLink
                        className="size-3"
                        aria-hidden="true"
                      />
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
    
    </div>
  );
}