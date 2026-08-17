import { ExternalLink, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CASE_STUDIES } from "@/lib/caseStudies";
import { Reveal } from "@/components/Reveal";

export function CaseStudies() {
  const { t } = useI18n();

  return (
    <section
      id="case-studies"
      className="scroll-mt-24 border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-24">
        <div className="max-w-4xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-primary">
            {t.caseStudies.eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            {t.caseStudies.title}
          </h2>

          <div className="mt-6 h-1 w-16 rounded-full bg-primary" />

          <p className="mt-6 max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
            {t.caseStudies.body}
          </p>
        </div>

        <div className="mt-14 space-y-14">
          {CASE_STUDIES.map((study, index) => (
            <Reveal key={study.id} delay={index * 100}>
              <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
                <div className="grid lg:grid-cols-2">
                  <div className="relative min-h-[360px] overflow-hidden bg-secondary lg:min-h-[500px]">
                    <img
                      src={study.images[0].url}
                      alt={study.images[0].caption}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                        {t.caseStudies.featured}
                      </p>

                      <p className="mt-2 max-w-xl text-sm leading-6 text-white/85">
                        {study.images[0].caption}
                      </p>
                    </div>
                  </div>

                  <div className="p-7 sm:p-10 lg:p-12">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                      {study.person}
                    </p>

                    <h3 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                      {study.title}
                    </h3>

                    <p className="mt-3 flex items-start gap-2 text-sm text-muted-foreground">
                      <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                      {study.place}
                    </p>

                    <p className="mt-6 text-sm leading-7 text-muted-foreground sm:text-base">
                      {study.summary}
                    </p>

                    <div className="mt-7 rounded-2xl border border-primary/20 bg-primary/[0.05] p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                        {t.caseStudies.bestPractice}
                      </p>

                      <p className="mt-3 text-sm leading-6 text-muted-foreground">
                        {study.bestPractice}
                      </p>
                    </div>

                    {study.sourceUrl && (
                      <a
                        href={study.sourceUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                      >
                        {t.caseStudies.source}
                        <ExternalLink className="size-4" />
                      </a>
                    )}
                  </div>
                </div>

                <div className="border-y border-border bg-secondary/30 p-6 sm:p-8">
                  <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                    {study.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40"
                      >
                        <p className="text-2xl font-semibold tracking-tight sm:text-3xl">
                          {stat.value}
                        </p>

                        <p className="mt-2 text-xs leading-5 text-muted-foreground">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-8 p-7 sm:p-10 lg:grid-cols-3">
                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        01
                      </span>

                      <h4 className="font-semibold">
                        {t.caseStudies.challenges}
                      </h4>
                    </div>

                    <ul className="mt-5 space-y-3">
                      {study.challenges.map((item) => (
                        <li
                          key={item}
                          className="border-l-2 border-border pl-4 text-sm leading-6 text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        02
                      </span>

                      <h4 className="font-semibold">
                        {t.caseStudies.interventions}
                      </h4>
                    </div>

                    <ul className="mt-5 space-y-3">
                      {study.interventions.map((item) => (
                        <li
                          key={item}
                          className="border-l-2 border-primary/40 pl-4 text-sm leading-6 text-muted-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <div className="flex items-center gap-3">
                      <span className="flex size-9 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                        03
                      </span>

                      <h4 className="font-semibold">
                        {t.caseStudies.impact}
                      </h4>
                    </div>

                    <ul className="mt-5 space-y-3">
                      {study.impact.map((item) => (
                        <li
                          key={item}
                          className="border-l-2 border-primary pl-4 text-sm leading-6"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mx-7 mb-10 rounded-2xl border border-border bg-secondary/30 p-6 sm:mx-10 lg:mx-12">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                    {t.caseStudies.bestPractice}
                  </p>

                  <p className="mt-3 max-w-5xl text-sm leading-7 text-muted-foreground sm:text-base">
                    {study.bestPractice}
                  </p>
                </div>

                {study.images.length > 1 && (
                  <div className="border-t border-border bg-secondary/20 p-6 sm:p-8">
                    <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
                      <div className="overflow-hidden rounded-2xl">
                        <img
                          src={study.images[1].url}
                          alt={study.images[1].caption}
                          className="h-[320px] w-full object-cover transition-transform duration-700 hover:scale-105 sm:h-[420px]"
                        />
                      </div>

                      <div className="flex flex-col justify-center">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                          {t.caseStudies.featured}
                        </p>

                        <h4 className="mt-3 text-xl font-semibold">
                          {study.images[1].caption}
                        </h4>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}