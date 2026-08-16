import { useI18n } from "@/lib/i18n";
import { CONTACT } from "@/lib/people";

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="mt-24 border-t border-border bg-secondary/50">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 sm:grid-cols-3">
        <div>
          <p className="font-display text-lg font-semibold">{t.brandName}</p>
          <p className="mt-1 text-sm text-muted-foreground">{t.hero.meta}</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="eyebrow text-foreground">{t.footer.hosts}</p>
          <p className="mt-2">
            <a
              href="https://selcofoundation.org/"
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              SELCO Foundation
            </a>
          </p>
          <p>{t.footer.kvk}</p>
        </div>
        <div className="text-sm text-muted-foreground">
          <p className="eyebrow text-foreground">{t.contact.eyebrow}</p>
          <p className="mt-2">
            <a
              href={`mailto:${CONTACT.email}`}
              className="underline underline-offset-4 hover:text-foreground"
            >
              {CONTACT.email}
            </a>
          </p>
          {CONTACT.phones.map((p) => (
            <p key={p.number}>
              <a
                href={`tel:${p.number.replace(/\s/g, "")}`}
                className="underline underline-offset-4 hover:text-foreground"
              >
                {p.number}
              </a>
            </p>
          ))}
        </div>
      </div>
      <div className="border-t border-border py-4 text-center text-xs text-muted-foreground">
        {t.footer.note}
      </div>
    </footer>
  );
}
