import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { GALLERY } from "@/lib/gallery";

export function FieldGallery() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = GALLERY.length;

  const go = useCallback((n: number) => setI((c) => (c + n + total) % total), [total]);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => setI((c) => (c + 1) % total), 5000);
    return () => window.clearInterval(id);
  }, [paused, total]);

  const shot = GALLERY[i];

  return (
    <div
      className="mt-8"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="surface-card overflow-hidden rounded-md">
        <div className="relative aspect-[16/10] w-full bg-secondary sm:aspect-[16/8]">
          {GALLERY.map((s, idx) => (
            <img
              key={s.url}
              src={s.url}
              alt={s.title}
              loading={idx === 0 ? "eager" : "lazy"}
              className={`gallery-image absolute inset-0 size-full object-cover transition-opacity duration-700 ${
                idx === i ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}

          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
            style={{ backgroundImage: "var(--gradient-hero)" }}
          />

          <div className="absolute inset-x-0 bottom-0 p-5 text-background sm:p-7">
            <p className="eyebrow text-accent">
              {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </p>
            <h3 className="mt-2 font-display text-xl font-semibold sm:text-2xl">{shot.title}</h3>
            <p className="mt-2 max-w-2xl text-sm text-background/85">{shot.caption}</p>
          </div>

          <button
            type="button"
            aria-label="Previous photo"
            onClick={() => go(-1)}
            className="absolute left-3 top-1/2 -translate-y-1/2 rounded-sm bg-background/80 p-2 text-foreground transition-opacity hover:opacity-80"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            aria-label="Next photo"
            onClick={() => go(1)}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded-sm bg-background/80 p-2 text-foreground transition-opacity hover:opacity-80"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-4 gap-2 sm:grid-cols-7">
        {GALLERY.map((s, idx) => (
          <button
            key={s.url}
            type="button"
            onClick={() => setI(idx)}
            aria-label={s.title}
            aria-current={idx === i}
            className={`aspect-[4/3] overflow-hidden rounded-sm border transition-opacity ${
              idx === i ? "border-primary opacity-100" : "border-border opacity-60 hover:opacity-100"
            }`}
          >
            <img src={s.url} alt="" loading="lazy" className="size-full object-cover thumbnail-image" />
          </button>
        ))}
      </div>
    </div>
  );
}
