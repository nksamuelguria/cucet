import type { Metadata } from "next";

// Stylesheet order is load-bearing: courses.css overrides earlier rules at
// equal specificity, and page-overrides.css (the original document's inline
// <style> blocks) must win over all of them. These were <link> tags served
// from /public; importing them lets Next bundle and minify them into a single
// render-blocking request instead of five.
import "./tailwind.css";
import "./styles/main-landing.css";
import "./styles/style-new.css";
import "./styles/base.css";
import "./styles/courses.css";
import "./styles/page-overrides.css";
import "./styles/image-dimensions.css";
import "./styles/responsive-images.css";

export const metadata: Metadata = {
  title:
    "Top Btech MTech Engineering College in Chandigarh | Admissions Open at CU",
  description:
    "Join Chandigarh University for BTech MTech Engineering Programmes. Get hands-on Experience, Scholarships, and Career-Focused Learning.",
  keywords:
    "chandigarh university engineering college, chandigarh university be, chandigarh be university, engineering colleges in chandigarh, haryana engineering colleges, engineering colleges in punjab",
  authors: [{ name: "Chandigarh University" }],
  robots: "INDEX, FOLLOW",
  alternates: { canonical: "https://www.cuchd.in/engineering/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    title:
      "Top Btech MTech Engineering College in Chandigarh | Admissions Open at CU",
    description:
      "Join Chandigarh University for BTech MTech Engineering Programmes. Get hands-on Experience, Scholarships, and Career-Focused Learning.",
    url: "https://www.cuchd.in/engineering/",
    siteName: "Chandigarh University (CU)",
  },
  twitter: {
    card: "summary",
    site: "@Chandigarh_Uni",
    title:
      "Top Btech MTech Engineering College in Chandigarh | Admissions Open at CU",
    description:
      "Join Chandigarh University for BTech MTech Engineering Programmes. Get hands-on Experience, Scholarships, and Career-Focused Learning.",
  },
};

export default function EngineeringLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* The first hero slide is a CSS background-image, so the preload scanner
          cannot find it. Without this hint the LCP image is only requested once
          the stylesheet has parsed. */}
      <link
        rel="preload"
        as="image"
        href="/engineering/imgs-new/banner-2025-4-800.webp"
        media="(max-width: 800px)"
        fetchPriority="high"
      />
      <link
        rel="preload"
        as="image"
        href="/engineering/imgs-new/banner-2025-4.webp"
        media="(min-width: 801px)"
        fetchPriority="high"
      />
      {/* The faces the hero and headings are set in. Without these the browser
          only learns about them after it has parsed the CSS, which puts the
          fonts a whole round trip further down the critical path. The rest of
          the weights are left to load normally. */}
      {[
        "/engineering/fonts-2025/PlusJakartaSans-Regular.woff2",
        "/engineering/fonts-2025/PlusJakartaSans-ExtraBold.woff2",
        "/engineering/fonts-2025/GoogleSans-Regular.woff2",
      ].map((href) => (
        <link
          key={href}
          rel="preload"
          as="font"
          type="font/woff2"
          href={href}
          crossOrigin="anonymous"
        />
      ))}
      {children}
    </>
  );
}
