"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { Lang } from "@/config/site";
import type { Dictionary } from "@/content/dictionary";
import { CloseIcon, GlobeIcon, MenuIcon, WhatsAppIcon } from "./Icons";

type Props = {
  lang: Lang;
  t: Dictionary;
  shortName: string;
  fullName: string;
  whatsapp: string | null;
};

export default function Header({ lang, t, shortName, fullName, whatsapp }: Props) {
  const [open, setOpen] = useState(false);
  const home = lang === "ar" ? "/" : "/en";
  const otherHref = lang === "ar" ? "/en" : "/";

  const links = [
    { href: "#home", label: t.nav.home },
    { href: "#branches", label: t.nav.branches },
    { href: "#services", label: t.nav.services },
    { href: "#products", label: t.nav.products },
    { href: "#gallery", label: t.nav.gallery },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  // Keep the visitor on the same section when switching language.
  const switchLanguage = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.location.href = otherHref + window.location.hash;
  };

  const LangSwitch = ({ className = "" }: { className?: string }) => (
    <a
      href={otherHref}
      onClick={switchLanguage}
      hrefLang={lang === "ar" ? "en" : "ar"}
      lang={lang === "ar" ? "en" : "ar"}
      aria-label={t.switchToLabel}
      className={`inline-flex min-h-10 items-center gap-1.5 rounded-lg px-3 text-sm font-bold text-white ring-1 ring-white/25 transition hover:bg-white/10 ${className}`}
    >
      <GlobeIcon />
      {t.switchTo}
    </a>
  );

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-ink/95 backdrop-blur supports-[backdrop-filter]:bg-ink/85">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-4 sm:h-[72px] sm:px-6">
        <a href={`${home}#home`} className="flex min-w-0 items-center gap-3" aria-label={fullName}>
          <span className="grid size-11 shrink-0 place-items-center overflow-hidden rounded-xl bg-white p-1 sm:size-12">
            <Image src="/images/logo-emblem.png" alt="" width={670} height={500} className="h-auto w-full" priority />
          </span>
          <span className="font-display truncate text-base leading-tight font-extrabold text-white sm:text-lg">
            {shortName}
          </span>
        </a>

        <nav className="ms-auto hidden items-center gap-1 lg:flex" aria-label={t.menu}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="rounded-lg px-3 py-2 text-[15px] font-semibold text-white/80 transition hover:bg-white/10 hover:text-white">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="ms-auto flex items-center gap-2 lg:ms-3">
          <LangSwitch className="hidden sm:inline-flex" />
          {whatsapp && (
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-wa px-3 text-sm font-bold text-ink transition hover:brightness-110"
            >
              <WhatsAppIcon />
              <span className="hidden whitespace-nowrap sm:inline lg:hidden xl:inline">{t.actions.whatsapp}</span>
              <span className="sr-only sm:not-sr-only sm:hidden lg:sr-only xl:hidden">{t.actions.whatsapp}</span>
            </a>
          )}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="grid size-10 place-items-center rounded-lg text-white ring-1 ring-white/25 lg:hidden"
            aria-label={t.menu}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <MenuIcon />
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className="fixed inset-0 z-50 bg-ink lg:hidden" role="dialog" aria-modal="true" aria-label={t.menu}>
          <div className="flex h-16 items-center justify-between px-4">
            <span className="font-display text-lg font-extrabold text-white">{shortName}</span>
            <button type="button" onClick={() => setOpen(false)} className="grid size-10 place-items-center rounded-lg text-white ring-1 ring-white/25" aria-label={t.close}>
              <CloseIcon />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-4 pt-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-xl px-4 py-4 text-xl font-bold text-white hover:bg-white/10">
                {l.label}
              </a>
            ))}
          </nav>
          <div className="px-8 pt-6">
            <LangSwitch className="min-h-12 w-full justify-center text-base" />
          </div>
        </div>
      )}
    </header>
  );
}
