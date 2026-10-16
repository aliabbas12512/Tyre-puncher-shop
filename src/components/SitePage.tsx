import Image from "next/image";
import { branches } from "@/config/branches";
import { gallery, heroImage, products, services, siteConfig, type Lang } from "@/config/site";
import { dictionaries } from "@/content/dictionary";
import { getContactLinks, getSiteUrl, isDev, whatsappWithMessage } from "@/lib/contact";
import Branches, { branchName } from "./Branches";
import Gallery from "./Gallery";
import Header from "./Header";
import { ClockIcon, MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";
import { ActionButton, SectionHeading } from "./ui";

export default function SitePage({ lang }: { lang: Lang }) {
  const t = dictionaries[lang];
  const c = getContactLinks(lang);
  const name = siteConfig.name[lang];
  const address = siteConfig.address[lang].trim();
  const hasContact = Boolean(c.whatsapp || c.call || c.maps);
  const activeServices = services.filter((s) => s.enabled);

  return (
    <>
      <JsonLd lang={lang} />
      <Header lang={lang} t={t} shortName={siteConfig.shortName[lang]} fullName={name} whatsapp={c.whatsapp} />

      <main className={hasContact ? "pb-20 lg:pb-0" : ""}>
        {/* ---------------- HERO ---------------- */}
        <section id="home" className="bg-ink text-white">
          <div className="mx-auto grid max-w-[1600px] lg:min-h-[min(calc(100svh-72px),760px)] lg:grid-cols-[5fr_7fr]">
            {/* Real shop-front photo — never covered by text */}
            <div className="relative aspect-[4/3] w-full lg:order-2 lg:aspect-auto">
              <Image
                src={heroImage.src}
                alt={heroImage.alt[lang]}
                fill
                priority
                sizes="(min-width:1024px) 60vw, 100vw"
                quality={85}
                className="object-cover object-[15%_50%]"
              />
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-ink to-transparent lg:hidden" />
            </div>

            <div className="flex items-center px-4 pt-4 pb-10 sm:px-6 lg:order-1 lg:px-12 lg:py-16 xl:ps-[max(3rem,calc((100vw-80rem)/2+1.5rem))]">
              <div className="max-w-xl">
                <p className="text-sm font-bold tracking-wide text-gold">{t.hero.eyebrow}</p>
                <h1 className="font-display mt-3 text-3xl leading-[1.25] font-black sm:text-4xl xl:text-5xl">{name}</h1>
                <p className="mt-3 text-lg font-bold text-gold-light">{siteConfig.slogan[lang]}</p>
                <p className="mt-4 text-base leading-relaxed text-white/80 sm:text-lg">{t.hero.intro}</p>

                <div className="mt-7 grid gap-3 sm:flex sm:flex-wrap">
                  {c.whatsapp && <ActionButton href={c.whatsapp} variant="whatsapp" external>{t.actions.whatsapp}</ActionButton>}
                  {c.call && <ActionButton href={c.call} variant="call">{t.actions.call}</ActionButton>}
                  {c.maps && <ActionButton href={c.maps} variant="location" external>{t.actions.location}</ActionButton>}
                  {!hasContact && (
                    <>
                      <ActionButton href="#services" variant="primary">{t.actions.services}</ActionButton>
                      <ActionButton href="#gallery" variant="ghost">{t.actions.gallery}</ActionButton>
                    </>
                  )}
                </div>
                {!hasContact && isDev && <p className="mt-3 text-xs text-amber-300">⚠ WhatsApp / Call / Maps: {t.contact.devNote}</p>}
              </div>
            </div>
          </div>
        </section>

        {/* ---------------- HIGHLIGHTS ---------------- */}
        <section className="border-y border-white/10 bg-ink-2 text-white" aria-label={t.nav.services}>
          <ul className="mx-auto grid max-w-7xl grid-cols-2 lg:grid-cols-4">
            {t.highlights.map((h, i) => (
              <li key={h.title} className={`px-4 py-5 sm:px-6 ${i % 2 ? "border-s border-white/10" : ""} ${i > 1 ? "border-t border-white/10 lg:border-t-0" : ""} ${i === 2 ? "lg:border-s" : ""}`}>
                <p className="font-display text-base font-extrabold text-gold-light sm:text-lg">{h.title}</p>
                <p className="mt-0.5 text-sm text-white/65">{h.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ---------------- BRANCHES ---------------- */}
        <Branches lang={lang} t={t} />

        {/* ---------------- SERVICES ---------------- */}
        <section id="services" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHeading kicker={t.services.kicker} title={t.services.title} text={t.services.text} />
            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {activeServices.map((s, i) => {
                const waService = whatsappWithMessage(`${t.services.greeting}\n*${s.title[lang]}*\n${s.description[lang]}`);
                return (
                <li key={s.id} className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-black/5 transition hover:-translate-y-0.5 hover:shadow-lg">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={s.image}
                      alt={s.title[lang]}
                      fill
                      sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                      style={s.focus ? { objectPosition: s.focus } : undefined}
                    />
                    <span className="absolute start-3 top-3 grid size-9 place-items-center rounded-full bg-ink/80 text-sm font-black text-gold backdrop-blur">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="font-display text-lg font-extrabold">{s.title[lang]}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-ink/70">{s.description[lang]}</p>
                    {waService && (
                      <div className="mt-auto pt-5">
                        <ActionButton href={waService} variant="whatsapp" external className="w-full text-[15px]">
                          {t.services.ask}
                        </ActionButton>
                      </div>
                    )}
                  </div>
                </li>
                );
              })}
            </ul>
          </div>
        </section>

        {/* ---------------- PRODUCTS ---------------- */}
        <section id="products" className="bg-ink py-16 text-white sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHeading kicker={t.products.kicker} title={t.products.title} text={t.products.text} dark />
            <ul className="grid gap-5 sm:grid-cols-2">
              {products.map((p) => (
                <li key={p.id} className="flex flex-col overflow-hidden rounded-2xl bg-ink-2 ring-1 ring-white/10 sm:flex-row">
                  <div className="relative aspect-[4/3] sm:aspect-auto sm:w-1/2 sm:shrink-0">
                    <Image
                      src={p.image}
                      alt={p.title[lang]}
                      fill
                      sizes="(min-width:640px) 25vw, 100vw"
                      className="object-cover"
                      style={p.focus ? { objectPosition: p.focus } : undefined}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-5 sm:p-6">
                    <h3 className="font-display text-xl font-extrabold text-gold-light">{p.title[lang]}</h3>
                    <p className="mt-2 text-[15px] leading-relaxed text-white/75">{p.description[lang]}</p>
                    {p.brands.length > 0 && (
                      <div className="mt-4">
                        <p className="text-xs font-semibold text-white/50">{t.products.brandsLabel}</p>
                        <ul className="mt-2 flex flex-wrap gap-1.5" dir="ltr">
                          {p.brands.map((b) => (
                            <li key={b} className="rounded-md bg-white/10 px-2 py-1 text-xs font-semibold text-white/90">{b}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {c.whatsapp && (
                      <a href={whatsappWithMessage(`${t.services.productGreeting} ${p.title[lang]}`) ?? c.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold text-wa hover:underline">
                        <WhatsAppIcon className="size-4" /> {t.products.ask}
                      </a>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ---------------- GALLERY ---------------- */}
        <section id="gallery" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <SectionHeading kicker={t.gallery.kicker} title={t.gallery.title} text={t.gallery.text} />
            <Gallery
              lang={lang}
              items={gallery.map((g) => ({ src: g.src, width: g.width, height: g.height, alt: g.alt[lang], wide: g.wide }))}
              labels={{ open: t.gallery.open, prev: t.gallery.prev, next: t.gallery.next, of: t.gallery.of, close: t.close }}
            />
          </div>
        </section>

        {/* ---------------- CONTACT ---------------- */}
        <section id="contact" className="bg-ink-2 py-16 text-white sm:py-20">
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold tracking-wide text-gold uppercase">{t.contact.kicker}</p>
              <div className="gold-rule mt-2 h-1 w-12 rounded-full" />
              <h2 className="font-display mt-4 text-3xl font-extrabold sm:text-4xl">{t.contact.title}</h2>
              <p className="mt-3 text-white/70">{hasContact ? t.contact.text : t.contact.comingSoon}</p>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {c.whatsapp && <ActionButton href={c.whatsapp} variant="whatsapp" external>{t.actions.whatsapp}</ActionButton>}
                {c.call && <ActionButton href={c.call} variant="call">{t.actions.call}</ActionButton>}
                {c.maps && <ActionButton href={c.maps} variant="location" external className="sm:col-span-2">{t.contact.openMaps}</ActionButton>}
              </div>

              <dl className="mt-8 space-y-5">
                <InfoRow icon={<PhoneIcon />} label={t.contact.phone} value={c.phoneDisplay} href={c.call} dev={t.contact.devNote} ltr />
                <InfoRow icon={<MapPinIcon />} label={t.contact.address} value={address || null} href={c.maps} dev={t.contact.devNote} />
                {siteConfig.hours.length > 0 ? (
                  <div className="flex gap-4">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-gold"><ClockIcon /></span>
                    <div>
                      <dt className="text-sm text-white/55">{t.contact.hours}</dt>
                      {siteConfig.hours.map((h) => (
                        <dd key={h.days[lang]} className="font-semibold">{h.days[lang]}: <span className="text-white/80">{h.time[lang]}</span></dd>
                      ))}
                    </div>
                  </div>
                ) : (
                  <InfoRow icon={<ClockIcon />} label={t.contact.hours} value={null} dev={t.contact.devNote} />
                )}
              </dl>
            </div>

            <a href={c.maps ?? "#gallery"} {...(c.maps ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="group relative block aspect-[4/3] overflow-hidden rounded-2xl ring-1 ring-white/10">
              <Image src="/images/shop-front-hankook-services-sign.jpg" alt={gallery[1].alt[lang]} fill sizes="(min-width:1024px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
              {c.maps && (
                <span className="absolute inset-x-4 bottom-4 inline-flex items-center justify-center gap-2 rounded-xl bg-ink/80 px-4 py-3 font-bold backdrop-blur">
                  <MapPinIcon /> {t.contact.directions}
                </span>
              )}
            </a>
          </div>
        </section>
      </main>

      {/* ---------------- FOOTER ---------------- */}
      <footer className="bg-ink text-white/70">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[auto_1fr] md:items-center">
          <div className="w-36 overflow-hidden rounded-2xl bg-white p-2">
            <Image src="/images/logo.png" alt={name} width={728} height={724} sizes="144px" className="h-auto w-full" />
          </div>
          <div>
            <p className="font-display text-xl font-extrabold text-white">{name}</p>
            <p className="mt-1 font-bold text-gold">{siteConfig.slogan[lang]}</p>
            <p className="mt-3">{t.footer.closing}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {c.call && <a href={c.call} className="hover:text-white" dir="ltr">{c.phoneDisplay}</a>}
              {c.whatsapp && <a href={c.whatsapp} target="_blank" rel="noopener noreferrer" className="hover:text-white">{t.contact.whatsapp}</a>}
              {c.maps && <a href={c.maps} target="_blank" rel="noopener noreferrer" className="hover:text-white">{t.contact.openMaps}</a>}
              {address && <span>{address}</span>}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 py-5 text-center text-xs text-white/45">
          © {new Date().getFullYear()} {name}. {t.footer.rights}
        </div>
      </footer>

      {/* ---------------- MOBILE ACTION BAR ---------------- */}
      {hasContact && (
        <nav className="fixed inset-x-0 bottom-0 z-30 border-t border-white/10 bg-ink/95 px-3 pt-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] backdrop-blur lg:hidden" aria-label={t.nav.contact}>
          <div className="flex gap-2">
            {c.whatsapp && <ActionButton href={c.whatsapp} variant="whatsapp" external className="flex-1 px-2 text-sm">{t.contact.whatsapp}</ActionButton>}
            {c.call && <ActionButton href={c.call} variant="call" className="flex-1 px-2 text-sm">{t.actions.callShort}</ActionButton>}
            {c.maps && <ActionButton href={c.maps} variant="location" external className="flex-1 px-2 text-sm">{t.contact.directions}</ActionButton>}
          </div>
        </nav>
      )}
    </>
  );
}

function InfoRow({ icon, label, value, href, dev, ltr }: { icon: React.ReactNode; label: string; value: string | null; href?: string | null; dev: string; ltr?: boolean }) {
  // Missing details are hidden in production and flagged during development.
  if (!value && !isDev) return null;
  return (
    <div className="flex gap-4">
      <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-gold">{icon}</span>
      <div>
        <dt className="text-sm text-white/55">{label}</dt>
        <dd className="font-semibold">
          {!value ? (
            <span className="text-sm font-normal text-amber-300">⚠ {dev}</span>
          ) : href ? (
            <a href={href} className="hover:text-gold" dir={ltr ? "ltr" : undefined}>{value}</a>
          ) : (
            <span dir={ltr ? "ltr" : undefined}>{value}</span>
          )}
        </dd>
      </div>
    </div>
  );
}

/** Structured data for Google (only real, configured details are included). */
function JsonLd({ lang }: { lang: Lang }) {
  const c = getContactLinks(lang);
  const url = getSiteUrl();
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "TireShop",
    name: siteConfig.name[lang],
    alternateName: siteConfig.name[lang === "ar" ? "en" : "ar"],
    slogan: siteConfig.slogan[lang],
    url: lang === "ar" ? url : `${url}/en`,
    logo: `${url}/images/logo.png`,
    image: gallery.slice(0, 4).map((g) => `${url}${g.src}`),
    makesOffer: services.filter((s) => s.enabled).map((s) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: s.title[lang] } })),
    department: branches.map((b, i) => ({
      "@type": "TireShop",
      name: `${siteConfig.name[lang]} — ${branchName(b, i, lang, dictionaries[lang])}`,
      hasMap: b.mapsUrl,
      ...(b.address[lang] ? { address: { "@type": "PostalAddress", streetAddress: b.address[lang], addressCountry: "SA" } } : {}),
    })),
  };
  if (siteConfig.phone) data.telephone = c.phoneDisplay;
  if (c.maps) data.hasMap = c.maps;
  if (siteConfig.address[lang]) data.address = { "@type": "PostalAddress", streetAddress: siteConfig.address[lang], addressCountry: "SA" };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
