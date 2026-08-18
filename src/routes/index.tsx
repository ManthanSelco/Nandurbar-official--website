import { createFileRoute } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";

import heroImage from "@/assets/image4.jpg";

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
      {
        title: TITLE,
      },
      {
        name: "description",
        content: DESC,
      },
      {
        property: "og:title",
        content: TITLE,
      },
      {
        property: "og:description",
        content: DESC,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),

  component: Index,
});

function PersonCard({
  p,
  variant = "default",
}: {
  p: Person;
  variant?:
    | "default"
    | "green"
    | "blue"
    | "orange"
    | "purple"
    | "teal";
}) {
  const variants = {
    default: {
      border: "border-l-slate-400",
      badge: "bg-slate-100",
      name: "text-slate-900",
      org: "text-primary",
    },
    green: {
      border: "border-l-emerald-600",
      badge: "bg-emerald-50",
      name: "text-emerald-950",
      org: "text-emerald-700",
    },
    blue: {
      border: "border-l-blue-600",
      badge: "bg-blue-50",
      name: "text-blue-950",
      org: "text-blue-700",
    },
    orange: {
      border: "border-l-orange-500",
      badge: "bg-orange-50",
      name: "text-orange-950",
      org: "text-orange-700",
    },
    purple: {
      border: "border-l-purple-600",
      badge: "bg-purple-50",
      name: "text-purple-950",
      org: "text-purple-700",
    },
    teal: {
      border: "border-l-teal-600",
      badge: "bg-teal-50",
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
        className={`
          absolute right-0 top-0 h-1 w-16
          ${style.badge}
        `}
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
    <div id="top" className="relative isolate min-h-screen bg-background">
      {/* Background Leaf Pattern */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.035]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10 C25 25, 25 55, 40 70 C55 55, 55 25, 40 10 Z M40 10 L40 70' stroke='%2015803d' stroke-width='2' fill='none'/%3E%3Cpath d='M10 40 C25 25, 55 25, 70 40 C55 55, 25 55, 10 40 Z M10 40 L70 40' stroke='%2015803d' stroke-width='2' fill='none'/%3E%3C/svg%3E")`,
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* PARTNER LOGOS */}
      <section className="border-b border-border bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-center gap-8 px-5 py-6 sm:gap-14 sm:py-8">
          <img
            src={icarLogo}
            alt="ICAR logo"
            className="partner-logo h-14 w-auto object-contain sm:h-18"
          />
          <img
            src={kvkLogo}
            alt="Krishi Vigyan Kendra logo"
            className="partner-logo h-14 w-auto object-contain sm:h-18"
          />
          <img
            src={selcoLogo}
            alt="SELCO Foundation logo"
            className="partner-logo h-14 w-auto object-contain sm:h-18"
          />
        </div>
      </section>

      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={heroImage}
          alt="Farmers and SHG women at a solar-powered agricultural mela in Nandurbar"
          width={1920}
          height={1088}
          loading="eager"
          fetchPriority="high"
          className="absolute inset-0 -z-20 size-full scale-[1.02] object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-black/25" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

        <div className="hero-content mx-auto flex min-h-[620px] max-w-6xl items-center px-5 py-24 sm:min-h-[680px] sm:py-32">
          <div className="max-w-4xl">
            <p className="hero-item hero-item-1 inline-block rounded-md border border-amber-300/30 bg-black/65 px-3 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-amber-300 shadow-lg">
              Climate Resilient Livelihoods in Nandurbar
            </p>

            <h1 className="hero-item hero-item-2 mt-5 max-w-4xl rounded-2xl border border-white/20 border-l-4 border-l-amber-400 bg-black/65 px-5 py-4 text-4xl font-bold leading-[1.08] text-white sm:px-7 sm:py-5 sm:text-6xl lg:text-7xl">
              Strengthening Farmers and Women through Collectives, Nandurbar
            </h1>

            <p className="hero-item hero-item-3 mt-6 max-w-2xl rounded-lg bg-black/65 px-4 py-3 text-base leading-7 text-amber-100 shadow-lg sm:text-lg">
              {t.hero.body}
            </p>
          </div>
        </div>
      </section>

      {/* EVENT FACTS */}
      <section className="border-b border-border bg-background/80 backdrop-blur-sm">
        <dl className="mx-auto grid max-w-6xl gap-0 sm:grid-cols-3">
          <div className="relative border-b border-border bg-amber-50 px-6 py-8 sm:border-b-0 sm:border-r lg:px-8">
            <div className="absolute left-0 top-0 h-1 w-full bg-amber-500" />
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-700">
              {t.facts[0].title}
            </dt>
            <dd className="mt-3 text-lg font-semibold text-amber-950 sm:text-xl">
              {t.facts[0].body}
            </dd>
          </div>

          <div className="relative border-b border-border bg-emerald-50 px-6 py-8 sm:border-b-0 sm:border-r lg:px-8">
            <div className="absolute left-0 top-0 h-1 w-full bg-emerald-600" />
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
              {t.facts[1].title}
            </dt>
            <dd className="mt-3 text-sm font-semibold leading-6 text-emerald-950 sm:text-base">
              <a
                href="https://maps.app.goo.gl/rRD6hxZtsJ4pXxMWA"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-emerald-700"
              >
                {t.facts[1].body}
              </a>
            </dd>
            <a
              href="https://maps.app.goo.gl/rRD6hxZtsJ4pXxMWA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex text-xs font-semibold uppercase tracking-[0.12em] text-emerald-700 underline underline-offset-4"
            >
              {t.contact.map}
            </a>
          </div>

          <div className="relative bg-sky-50 px-6 py-8 lg:px-8">
            <div className="absolute left-0 top-0 h-1 w-full bg-sky-600" />
            <dt className="text-xs font-semibold uppercase tracking-[0.18em] text-sky-700">
              {t.facts[2].title}
            </dt>
            <dd className="mt-3 text-lg font-semibold leading-6 text-sky-950 sm:text-xl">
              {t.facts[2].body}
            </dd>
          </div>
        </dl>
      </section>

      {/* ABOUT */}
      <section id="about" className="scroll-mt-24 border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
            <div>
              <p className="eyebrow text-primary">{t.about.eyebrow}</p>
              <h2 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
                {t.about.title}
              </h2>
              <p className="mt-6 max-w-4xl text-justify text-base leading-8 text-muted-foreground sm:text-lg">
                {t.about.body}
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-amber-200 bg-amber-50 p-6 shadow-sm lg:mt-8">
              <div className="absolute left-0 top-0 h-full w-1.5 bg-amber-500" />
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-amber-700">
                Key Focus
              </p>
              <div className="mt-5 space-y-4">
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-800">
                    01
                  </span>
                  <p className="text-sm font-medium leading-6 text-amber-950">
                    Clean-energy livelihood solutions
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-800">
                    02
                  </span>
                  <p className="text-sm font-medium leading-6 text-amber-950">
                    Finance and access to schemes
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-amber-200 text-xs font-bold text-amber-800">
                    03
                  </span>
                  <p className="text-sm font-medium leading-6 text-amber-950">
                    Community implementation and market linkages
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 grid items-stretch gap-5 md:grid-cols-3">
            {t.about.objectives.map((o, index) => {
              const colors = [
                {
                  border: "border-amber-300",
                  top: "bg-amber-500",
                  number: "bg-amber-100 text-amber-700",
                  title: "text-amber-950",
                },
                {
                  border: "border-emerald-300",
                  top: "bg-emerald-600",
                  number: "bg-emerald-100 text-emerald-700",
                  title: "text-emerald-950",
                },
                {
                  border: "border-sky-300",
                  top: "bg-sky-600",
                  number: "bg-sky-100 text-sky-700",
                  title: "text-sky-950",
                },
              ];

              const color = colors[index % colors.length];

              return (
                <Reveal key={o.title} delay={index * 100} className="h-full">
                  <div
                    className={[
                      "relative flex h-full min-h-[300px] flex-col overflow-hidden rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
                      color.border,
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "absolute left-0 right-0 top-0 h-1",
                        color.top,
                      ].join(" ")}
                    />
                    <div
                      className={[
                        "mb-6 flex size-11 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                        color.number,
                      ].join(" ")}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <h3
                      className={[
                        "text-lg font-semibold leading-snug",
                        color.title,
                      ].join(" ")}
                    >
                      {o.title}
                    </h3>
                    <p className="mt-4 flex-1 text-justify text-sm leading-7 text-muted-foreground">
                      {o.body}
                    </p>
                    <div className="mt-6 h-px w-full bg-border" />
                    <span className="mt-4 text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Objective {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="scroll-mt-24 border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow text-primary">{t.gallery.eyebrow}</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">
            {t.gallery.title}
          </h2>
          <p className="mt-4 max-w-3xl text-muted-foreground">{t.gallery.body}</p>

          <FieldGallery />

          <p className="mt-4 text-xs text-muted-foreground">{t.gallery.note}</p>
        </div>
      </section>

      {/* AGENDA */}
      <section id="agenda" className="scroll-mt-24 border-t border-border bg-background">
        <div className="mx-auto max-w-6xl px-5 py-20">
          <p className="eyebrow text-primary">{t.agenda.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
            {t.agenda.title}
          </h2>

          <ol className="mt-10 overflow-hidden rounded-2xl border border-border">
            {t.agenda.slots.map((slot, index) => (
              <Reveal key={slot.title} delay={index * 70}>
                <li className="agenda-item border-b border-border bg-card px-6 py-6 last:border-b-0 sm:flex sm:gap-8">
                  <span className="block w-48 shrink-0 text-sm font-semibold text-primary">
                    {slot.time}
                  </span>
                  <span className="mt-2 block sm:mt-0">
                    <span className="block font-medium">{slot.title}</span>
                    <span className="mt-1 block text-sm leading-6 text-muted-foreground">
                      {slot.body}
                    </span>
                  </span>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* VENDORS */}
      <section id="vendors" className="scroll-mt-24 border-t border-border bg-secondary/30">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
          <div className="mx-auto max-w-4xl text-center">
            <p className="eyebrow text-primary">{t.vendors.eyebrow}</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {t.vendors.title}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-muted-foreground">
              {t.vendors.body}
            </p>
          </div>

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
                description:
                  "Solar dryer (Polycarbonate & Poly ethylene)",
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
                email:
                  "ac.autostudio@gmail.com, autostudio.agro@gmail.com",
              },
              {
                name: "Rural Roots Renew Solutions LLP",
                description:
                  "Portable Solar Powered Irrigation Solutions",
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
              <Reveal key={vendor.name} delay={index * 50} className="h-full">
                <article className="group relative h-full overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl">
                  <div className="absolute inset-x-0 top-0 h-1 bg-primary/80 transition-all duration-300 group-hover:bg-primary" />

                  <div className="flex items-center justify-between">
                    <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                      {t.vendors.location}
                    </span>
                  </div>

                  <h3 className="mt-6 text-xl font-semibold leading-snug">
                    {vendor.name}
                  </h3>

                  <div className="mt-4 rounded-xl bg-primary/[0.06] px-4 py-3">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      {t.vendors.technology}
                    </p>
                    <p className="mt-1 text-sm font-medium leading-6 text-foreground">
                      {vendor.description}
                    </p>
                  </div>

                  <div className="mt-5 border-t border-border pt-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                      {t.vendors.contact}
                    </p>
                    <a
                      href={`mailto:${vendor.email.split(" / ")[0].split(", ")[0]}`}
                      className="mt-2 block break-words text-sm font-medium text-primary hover:underline"
                    >
                      {vendor.email}
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKERS / CHAMPIONS / PANELISTS */}
      <section id="speakers" className="scroll-mt-24 border-t border-border bg-background py-20">
        <div className="mx-auto max-w-6xl px-5">
          {/* Champion farmers */}
          <div>
            <p className="eyebrow text-emerald-700">
              {t.speakers.champions}
            </p>

            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              {t.speakers.body}
            </p>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {CHAMPIONS.map((person, index) => {
                const colors = [
                  "green",
                  "orange",
                  "purple",
                  "teal",
                  "blue",
                ] as const;

                return (
                  <Reveal
                    key={person.name}
                    delay={index * 70}
                    className="h-full"
                  >
                    <PersonCard
                      p={person}
                      variant={colors[index % colors.length]}
                    />
                  </Reveal>
                );
              })}
            </div>
          </div>

          {/* Bankers */}
          <div className="mt-14">
            <p className="eyebrow text-purple-700">
              {t.speakers.panel}
            </p>

            <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {PANEL.map((person, index) => {
                const colors = [
                  "purple",
                  "blue",
                  "teal",
                ] as const;

                return (
                  <Reveal
                    key={person.name}
                    delay={index * 80}
                    className="h-full"
                  >
                    <PersonCard
                      p={person}
                      variant={colors[index % colors.length]}
                    />
                  </Reveal>
                );
              })}
            </div>
          </div>

          <div className="mt-10 rounded-xl border border-dashed border-border bg-card/60 px-5 py-4">
            <p className="text-sm text-muted-foreground">
              {t.speakers.note}
            </p>
          </div>
        </div>
      </section>

      {/* VALUE CHAINS */}
      <ValueChainsSection />

      {/* CASE STUDIES */}
      <CaseStudies />

      {/* CONTACT */}
      <section id="contact" className="scroll-mt-24 border-t border-border bg-[#f5f3ea]">
        <div className="mx-auto max-w-6xl px-5 py-20 lg:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary">
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              {t.contact.title}
            </h2>
            <div className="mt-5 h-1 w-16 rounded-full bg-primary" />
          </div>

          <div className="mt-12 grid items-stretch gap-6 lg:grid-cols-2">
            {/* Contact Info */}
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-white p-7 shadow-sm sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-primary" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                SELCO Foundation
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground">
                {t.contact.title}
              </h3>

              <div className="mt-8 space-y-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {t.contact.email}
                  </p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="mt-2 block break-words text-base font-medium text-foreground transition-colors hover:text-primary"
                  >
                    {CONTACT.email}
                  </a>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {t.contact.phone}
                  </p>
                  <div className="mt-2 space-y-2">
                    {CONTACT.phones.map((phone) => (
                      <div key={phone.number}>
                        <a
                          href={`tel:${phone.number.replace(/\s/g, "")}`}
                          className="text-base font-medium text-foreground transition-colors hover:text-primary"
                        >
                          {phone.number}
                        </a>
                        <span className="ml-2 text-sm text-muted-foreground">
                          — {phone.label}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {t.contact.website}
                  </p>
                  <a
                    href={CONTACT.website}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-2 inline-block text-base font-medium text-foreground underline underline-offset-4 transition-colors hover:text-primary"
                  >
                    selcofoundation.org
                  </a>
                </div>
              </div>
            </div>

            {/* Venue Info */}
            <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50 p-7 shadow-sm sm:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-emerald-600" />
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                {t.contact.venue}
              </p>
              <h3 className="mt-3 text-3xl font-semibold text-emerald-950">
                PG RESORT
              </h3>
              <p className="mt-4 max-w-xl text-base leading-7 text-emerald-950/80">
                Serve no 281/1, Sita Ma Residency, Plot No 8, Nehru Nagar,
                Nandurbar, Maharashtra 425412
              </p>

              <div className="mt-8 rounded-2xl border border-emerald-200 bg-white/70 p-5">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700">
                  Event
                </p>
                <p className="mt-2 text-lg font-semibold text-emerald-950">
                  21 August 2026
                </p>
                <p className="mt-1 text-sm leading-6 text-emerald-900/70">
                  Climate Resilient Livelihoods in Nandurbar
                </p>
              </div>

              <div className="mt-auto pt-8">
                <a
                  href="https://maps.app.goo.gl/rRD6hxZtsJ4pXxMWA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-emerald-800 hover:shadow-md"
                >
                  {t.contact.map}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-border bg-white px-6 py-5 shadow-sm sm:px-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {t.footer.hosts}
            </p>
            <p className="mt-2 font-semibold text-foreground">
              SELCO Foundation × Krishi Vigyan Kendra (KVK), Nandurbar
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-background py-8">
        <div className="mx-auto max-w-6xl px-5 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} SELCO Foundation. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}