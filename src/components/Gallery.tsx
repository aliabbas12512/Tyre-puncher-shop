"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Lang } from "@/config/site";
import { ChevronIcon, CloseIcon, ExpandIcon } from "./Icons";

type Item = { src: string; width: number; height: number; alt: string; wide?: boolean };
type Labels = { open: string; prev: string; next: string; of: string; close: string };

export default function Gallery({ items, labels, lang }: { items: Item[]; labels: Labels; lang: Lang }) {
  const [index, setIndex] = useState<number | null>(null);
  const touchX = useRef<number | null>(null);
  const closeBtn = useRef<HTMLButtonElement>(null);
  const lastTrigger = useRef<HTMLButtonElement | null>(null);
  const rtl = lang === "ar";

  const close = useCallback(() => {
    setIndex(null);
    lastTrigger.current?.focus();
  }, []);
  const step = useCallback(
    (d: number) => setIndex((i) => (i === null ? i : (i + d + items.length) % items.length)),
    [items.length],
  );

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = "hidden";
    closeBtn.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      // Arrow keys follow the visual direction of the page.
      if (e.key === "ArrowRight") step(rtl ? -1 : 1);
      if (e.key === "ArrowLeft") step(rtl ? 1 : -1);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [index, close, step, rtl]);

  const current = index === null ? null : items[index];

  return (
    <>
      <ul className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
        {items.map((item, i) => (
          <li key={item.src} className={i === 0 ? "col-span-2 row-span-2" : item.wide ? "col-span-2" : ""}>
            <button
              type="button"
              onClick={(e) => { lastTrigger.current = e.currentTarget; setIndex(i); }}
              className={`group relative block w-full overflow-hidden rounded-xl bg-ink-3 ${item.wide ? "aspect-[2/1] h-full" : "aspect-square"}`}
              aria-label={`${labels.open}: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes={i === 0 || item.wide ? "(min-width:1024px) 50vw, (min-width:640px) 66vw, 100vw" : "(min-width:1024px) 25vw, (min-width:640px) 33vw, 50vw"}
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <span className="absolute end-2 top-2 grid size-9 place-items-center rounded-full bg-ink/60 text-white opacity-90 backdrop-blur transition group-hover:bg-gold group-hover:text-ink">
                <ExpandIcon className="size-4" />
              </span>
            </button>
          </li>
        ))}
      </ul>

      {current && index !== null && (
        <div
          className="fixed inset-0 z-[60] flex flex-col bg-black"
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          onClick={(e) => { if (e.target === e.currentTarget) close(); }}
        >
          <div className="flex items-center justify-between gap-4 px-4 py-3 text-white">
            <span className="text-sm font-semibold tabular-nums text-white/80">
              {index + 1} {labels.of} {items.length}
            </span>
            <button ref={closeBtn} type="button" onClick={close} className="grid size-11 place-items-center rounded-full bg-white/10 hover:bg-white/20" aria-label={labels.close}>
              <CloseIcon />
            </button>
          </div>

          <div
            className="relative flex-1"
            onClick={(e) => { if (e.target === e.currentTarget) close(); }}
            onTouchStart={(e) => { touchX.current = e.touches[0].clientX; }}
            onTouchEnd={(e) => {
              if (touchX.current === null) return;
              const dx = e.changedTouches[0].clientX - touchX.current;
              touchX.current = null;
              if (Math.abs(dx) < 50) return;
              // Swipe left = next in LTR, previous in RTL.
              step((dx < 0 ? 1 : -1) * (rtl ? -1 : 1));
            }}
          >
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              fill
              sizes="100vw"
              quality={85}
              className="object-contain"
              priority
            />
            <button type="button" onClick={() => step(-1)} aria-label={labels.prev} className="absolute start-2 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/25 sm:start-4">
              <ChevronIcon className="size-7 ltr:rotate-180" />
            </button>
            <button type="button" onClick={() => step(1)} aria-label={labels.next} className="absolute end-2 top-1/2 grid size-12 -translate-y-1/2 place-items-center rounded-full bg-white/10 text-white backdrop-blur hover:bg-white/25 sm:end-4">
              <ChevronIcon className="size-7 rtl:rotate-180" />
            </button>
          </div>

          <p className="px-4 py-4 text-center text-sm leading-relaxed text-white/85 sm:text-base">{current.alt}</p>
        </div>
      )}
    </>
  );
}
