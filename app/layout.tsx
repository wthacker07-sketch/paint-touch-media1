import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteNav } from "@/components/SiteNav";

export const metadata: Metadata = {
  title: {
    default: "Paint Touch Media",
    template: "%s | Paint Touch Media"
  },
  description:
    "Paint Touch Media is an independent basketball platform for college basketball analysis, rankings, draft opinions, NBA ideas, and hoops culture."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteNav />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
