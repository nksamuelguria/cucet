import type { Metadata } from "next";

import LazyGTM from '@/components/engineering/LazyGTM';

export const metadata: Metadata = {
  title: "CUCET 2026 | Engineering Admissions & Scholarships - Chandigarh University",
  description:
    "Apply for CUCET 2026 at Chandigarh University for Bachelor of Engineering (B.E./B.Tech) programs. Scholarships worth ₹250 Crores available.",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="preconnect"
          href="https://portal-widgets.lsqportal.com"
          crossOrigin="anonymous"
        />

        <link
          rel="preconnect"
          href="https://forms.lsqportal.com"
          crossOrigin="anonymous"
        />
      </head>         
      <body suppressHydrationWarning>{children}
        {/* GTM (and everything it injects, Hotjar included) waits for the
            visitor's first interaction, with a 6s backstop. Loading it during
            page load cost ~200ms of blocking time on mobile. */}
        <LazyGTM />
      </body>
    </html>
  );
}
