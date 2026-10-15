import { Cairo } from "next/font/google";
import { buildMetadata } from "@/lib/metadata";
import "../globals.css";

const cairo = Cairo({ subsets: ["arabic", "latin"], variable: "--font-body", display: "swap" });

export const metadata = buildMetadata("ar");
export { viewport } from "@/lib/metadata";

export default function ArabicLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
