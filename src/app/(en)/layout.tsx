import { Inter, Saira } from "next/font/google";
import { buildMetadata } from "@/lib/metadata";
import "../globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });
const saira = Saira({ subsets: ["latin"], variable: "--font-heading", display: "swap" });

export const metadata = buildMetadata("en");
export { viewport } from "@/lib/metadata";

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr" className={`${inter.variable} ${saira.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
