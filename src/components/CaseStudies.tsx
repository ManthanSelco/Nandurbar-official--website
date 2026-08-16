import { ExternalLink } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { CASE_STUDIES } from "@/lib/caseStudies";

export function CaseStudies() {
  const { t } = useI18n();

  return (
    <section id="case-studies" className="scroll-mt-24 border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20">
        <p className="eyebrow text-primary">{t.caseStudies.eyebrow}</p>
        <h2 className="mt-3 max-w-3xl text-3xl font-semibold sm:text-4xl">{t.caseStudies.title}</h2>
        <p className="mt-4 max-w-3xl text-muted-foreground">{t.caseStudies.body}</p>

        {CASE_STUDIES.map((cs) => (
          <article key={cs.id} className="surface-card lift-card mt-10 overflow-hidden rounded-md">
            <div className="grid gap-0 lg:grid-cols-2">
              {cs.images.map((img) => (
                <figure key={img.url} className="relative">
                  <img src={img.url} alt={img.caption} className="case-image h-64 w-full object-cover lg:h-full" />
                  <figcaption className="sr-only">{img.caption}</figcaption>
                </figure>
              ))}
            </div>

            <div className="p-6 sm:p-8">
              <h3 className="font-display text-2xl font-semibold">{cs.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{cs.place}</p>
              <p className="mt-4 text-muted-foreground">{cs.summary}</p>

              <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                {cs.stats.map((s) => (
                  <div key={s.label} className="rounded-md border border-border p-4">
                    <p className="font-display text-xl font-semibold text-primary">{s.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid gap-8 lg:grid-cols-3">
                <div>
                  <p className="eyebrow text-muted-foreground">{t.caseStudies.challenges}</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {cs.challenges.map((c) => (
                      <li key={c} className="border-l-2 border-border pl-3">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow text-muted-foreground">{t.caseStudies.interventions}</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {cs.interventions.map((c) => (
                      <li key={c} className="border-l-2 border-primary/40 pl-3">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow text-muted-foreground">{t.caseStudies.impact}</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {cs.impact.map((c) => (
                      <li key={c} className="border-l-2 border-primary pl-3">
                        {c}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 rounded-md bg-secondary/50 p-5">
                <p className="eyebrow text-muted-foreground">{t.caseStudies.bestPractice}</p>
                <p className="mt-2 text-sm text-muted-foreground">{cs.bestPractice}</p>
              </div>

              {cs.sourceUrl && (
                <a
                  href={cs.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center gap-1.5 rounded-sm border border-border px-4 py-2 text-sm font-semibold transition-colors hover:border-primary hover:text-primary"
                >
                  {t.caseStudies.source}
                  <ExternalLink className="size-3.5" aria-hidden="true" />
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
