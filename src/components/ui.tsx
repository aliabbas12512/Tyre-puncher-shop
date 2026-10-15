import type { ReactNode } from "react";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./Icons";

type Variant = "whatsapp" | "call" | "location" | "primary" | "ghost";

const styles: Record<Variant, string> = {
  whatsapp: "bg-wa text-ink hover:brightness-110",
  call: "bg-gold text-ink hover:bg-gold-light",
  location: "bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20 backdrop-blur",
  primary: "bg-gold text-ink hover:bg-gold-light",
  ghost: "bg-transparent text-white ring-1 ring-white/30 hover:bg-white/10",
};

const icons: Partial<Record<Variant, ReactNode>> = {
  whatsapp: <WhatsAppIcon />,
  call: <PhoneIcon />,
  location: <MapPinIcon />,
};

export function ActionButton({
  href,
  variant,
  children,
  external,
  className = "",
}: {
  href: string;
  variant: Variant;
  children: ReactNode;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex min-h-12 items-center justify-center gap-2.5 rounded-xl px-5 py-3 text-base font-bold transition ${styles[variant]} ${className}`}
    >
      {icons[variant]}
      <span>{children}</span>
    </a>
  );
}

export function SectionHeading({
  kicker,
  title,
  text,
  dark = false,
}: {
  kicker: string;
  title: string;
  text?: string;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center">
      <p className="text-sm font-bold tracking-wide text-gold-deep uppercase">{kicker}</p>
      <div className="gold-rule mx-auto mt-2 h-1 w-12 rounded-full" />
      <h2 className={`font-display mt-4 text-3xl leading-tight font-extrabold sm:text-4xl ${dark ? "text-white" : "text-ink"}`}>{title}</h2>
      {text && <p className={`mt-3 text-base leading-relaxed ${dark ? "text-white/70" : "text-ink/65"}`}>{text}</p>}
    </div>
  );
}
