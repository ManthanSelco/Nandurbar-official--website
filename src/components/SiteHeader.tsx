import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

export const REGISTER_URL = "#register";

export function SiteHeader() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);

  const nav = [
    { href: "#agenda", label: t.nav.agenda },
    { href: "#value-chains", label: t.nav.chains },
    { href: "#vendors", label: t.nav.vendors },
    { href: "#case-studies", label: t.nav.caseStudies },
    { href: "#speakers", label: t.nav.speakers },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-5 py-3">
        <a
          href="#top"
          className="flex flex-col leading-tight"
          onClick={() => setOpen(false)}
        >
          <span className="eyebrow text-primary">
            {t.brandTop}
          </span>

          <span className="font-display text-lg font-semibold">
            {t.brandName}
          </span>
        </a>

        <nav className="ml-auto hidden items-center gap-5 lg:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </a>
          ))}

          <LanguageSwitcher />

          <a
            href="https://nandurbar-even-frontend.vercel.app/register?questions=%5B%5D"
            className="rounded-sm bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            {t.cta.register}
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />

          <a
            href="https://nandurbar-even-frontend.vercel.app/register?questions=%5B%5D"
            className="rounded-sm bg-primary px-3 py-2 text-sm font-semibold text-primary-foreground"
          >
            {t.cta.register}
          </a>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() =>
              setOpen((value) => !value)
            }
            className="rounded-sm border border-border p-2"
          >
            {open ? (
              <X className="size-4" />
            ) : (
              <Menu className="size-4" />
            )}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-5 py-3 lg:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-2 text-sm text-muted-foreground"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}