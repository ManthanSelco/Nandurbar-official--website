import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "@/lib/gallery";
import { useI18n } from "@/lib/i18n";

export function FieldGallery() {
  const { t } = useI18n();

  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);

  const total = GALLERY.length;

  const go = useCallback(
    (n: number) => {
      setI((current) => (current + n + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (paused) return;

    const id = window.setInterval(() => {
      setI((current) => (current + 1) % total);
    }, 5000);

    return () => window.clearInterval(id);
  }, [paused, total]);

  const shot = GALLERY[i];

  return (
    <div
      className="mt-10"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="relative overflow-hidden rounded-2xl border border-border bg-black shadow-sm">
        <div className="relative aspect-[16/9] w-full sm:aspect-[16/8.5]">
          {GALLERY.map((s, idx) => (
            <img
              key={s.url}
              src={s.url}
              alt={s.title}
              loading={idx === 0 ? "eager" : "lazy"}
              className={`
                absolute inset-0 size-full object-cover
                transition-all duration-700 ease-out
                ${
                  idx === i
                    ? "scale-100 opacity-100"
                    : "scale-[1.02] opacity-0"
                }
              `}
            />
          ))}

          <div
            className="
              pointer-events-none absolute inset-x-0 bottom-0 h-44
              bg-gradient-to-t
              from-black/75
              via-black/30
              to-transparent
            "
          />

          <div className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
            {String(i + 1).padStart(2, "0")} /{" "}
            {String(total).padStart(2, "0")}
          </div>

          <button
            type="button"
            aria-label={t.gallery.previous}
            onClick={() => go(-1)}
            className="
              absolute left-4 top-1/2
              flex size-11 -translate-y-1/2
              items-center justify-center
              rounded-full border border-white/30
              bg-black/25 text-white
              backdrop-blur-md
              transition-all duration-200
              hover:scale-105 hover:bg-black/50
            "
          >
            <ChevronLeft className="size-5" />
          </button>

          <button
            type="button"
            aria-label={t.gallery.next}
            onClick={() => go(1)}
            className="
              absolute right-4 top-1/2
              flex size-11 -translate-y-1/2
              items-center justify-center
              rounded-full border border-white/30
              bg-black/25 text-white
              backdrop-blur-md
              transition-all duration-200
              hover:scale-105 hover:bg-black/50
            "
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              {t.gallery.fromField}
            </p>

            <h3 className="mt-2 max-w-3xl text-2xl font-semibold leading-tight sm:text-3xl">
              {shot.title}
            </h3>

            <p className="mt-3 max-w-3xl text-sm leading-6 text-white/80 sm:text-base">
              {shot.caption}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-7">
        {GALLERY.map((s, idx) => (
          <button
            key={s.url}
            type="button"
            onClick={() => setI(idx)}
            aria-label={s.title}
            aria-current={idx === i}
            className={`
              group relative aspect-[4/3]
              overflow-hidden rounded-lg
              border-2 bg-card
              transition-all duration-300
              ${
                idx === i
                  ? "border-primary shadow-md"
                  : "border-transparent opacity-70 hover:opacity-100"
              }
            `}
          >
            <img
              src={s.url}
              alt=""
              loading="lazy"
              className="
                size-full object-cover
                transition-transform duration-500
                group-hover:scale-105
              "
            />

            {idx === i && (
              <span className="absolute inset-x-0 bottom-0 h-1 bg-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}