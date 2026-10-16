import Image from "next/image";
import { branches, branchServiceLabels, type Branch } from "@/config/branches";
import { siteConfig, type Lang } from "@/config/site";
import type { Dictionary } from "@/content/dictionary";
import { isDev } from "@/lib/contact";
import { MapPinIcon, PhoneIcon } from "./Icons";
import { ActionButton, SectionHeading } from "./ui";

/** Digits only; falls back to the main shop number when the branch has none. */
function number(value: string | undefined, fallback: string): string {
  const digits = (value || fallback).replace(/\D/g, "");
  return digits.length >= 10 ? digits : "";
}

export function branchName(b: Branch, index: number, lang: Lang, t: Dictionary): string {
  return b.name[lang].trim() || `${t.branches.branch} ${index + 1}`;
}

export default function Branches({ lang, t }: { lang: Lang; t: Dictionary }) {
  return (
    <section id="branches" className="bg-ink py-16 text-white sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading kicker={t.branches.kicker} title={t.branches.title} text={t.branches.text} dark />
        <ul className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {branches.map((b, i) => (
            <BranchCard key={b.id} branch={b} index={i} lang={lang} t={t} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function BranchCard({ branch: b, index, lang, t }: { branch: Branch; index: number; lang: Lang; t: Dictionary }) {
  const name = branchName(b, index, lang, t);
  const address = b.address[lang].trim();
  const wa = number(b.whatsapp, siteConfig.whatsapp);
  const phone = number(b.phone, siteConfig.phone);
  const maps = /^https:\/\//.test(b.mapsUrl) ? b.mapsUrl : null;
  const serviceNames = b.services.map((s) => branchServiceLabels[s][lang]);
  const message = `${t.branches.greeting} ${name}\n${t.branches.servicesLabel} ${serviceNames.join(lang === "ar" ? "، " : ", ")}`;
  const waHref = wa ? `https://wa.me/${wa}?text=${encodeURIComponent(message)}` : null;
  const num = String(index + 1).padStart(2, "0");

  return (
    <li className="flex flex-col overflow-hidden rounded-2xl bg-ink-2 ring-1 ring-white/10 transition hover:ring-gold/50">
      {b.image && (
        <div className="relative aspect-[16/10]">
          <Image
            src={b.image.src}
            alt={`${t.branches.photoOf} ${name}`}
            fill
            sizes="(min-width:1280px) 33vw, (min-width:768px) 50vw, 100vw"
            className="object-cover"
          />
          <span className="absolute start-3 top-3 rounded-lg bg-ink/80 px-2.5 py-1 text-sm font-black text-gold backdrop-blur">{num}</span>
        </div>
      )}

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-center gap-3">
          {!b.image && (
            <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-gold-light to-gold-deep text-lg font-black text-ink">{num}</span>
          )}
          <div className="min-w-0">
            <h3 className="font-display text-xl font-extrabold text-white">{name}</h3>
            {address ? (
              <p className="mt-1 flex items-start gap-1.5 text-sm text-white/70">
                <MapPinIcon className="mt-0.5 size-4 shrink-0 text-gold" /> {address}
              </p>
            ) : (
              isDev && <p className="mt-1 text-xs text-amber-300">⚠ {t.contact.address}: {t.contact.devNote}</p>
            )}
          </div>
        </div>

        <p className="mt-5 text-xs font-semibold text-white/50">{t.branches.servicesLabel}</p>
        <ul className="mt-2 flex flex-wrap gap-2">
          {serviceNames.map((s) => (
            <li key={s} className="rounded-lg bg-white/[0.07] px-2.5 py-1.5 text-sm font-semibold text-white/90 ring-1 ring-white/10">
              <span className="me-1.5 text-gold" aria-hidden="true">✓</span>
              {s}
            </li>
          ))}
        </ul>

        <div className="mt-auto grid grid-cols-2 gap-2.5 pt-6">
          {maps && (
            <ActionButton href={maps} variant="location" external className="col-span-2 text-[15px]">
              {t.branches.directions}
            </ActionButton>
          )}
          {waHref && <ActionButton href={waHref} variant="whatsapp" external className={`text-[15px] ${phone ? "" : "col-span-2"}`}>{t.contact.whatsapp}</ActionButton>}
          {phone && (
            <a href={`tel:+${phone}`} className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-gold px-4 text-[15px] font-bold text-ink transition hover:bg-gold-light ${waHref ? "" : "col-span-2"}`}>
              <PhoneIcon /> {t.actions.callShort}
            </a>
          )}
        </div>
      </div>
    </li>
  );
}
