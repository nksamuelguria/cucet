import type { Metadata } from "next";

import "./tailwind.css";

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
      {/* Original stylesheets. Served from /public/engineering/css so the
          url(../images/…) and url(../imgs-new/…) references inside them resolve.
          Order is load-bearing: courses.css overrides earlier rules at equal
          specificity, so it must stay last. Header/Footer rules were split out
          of header-footer.css and now live beside their components. */}
      <link rel="stylesheet" href="/engineering/css/main-landing.css" />
      <link rel="stylesheet" href="/engineering/css/style-new.css" />
      <link rel="stylesheet" href="/engineering/css/base.css" />
      <link rel="stylesheet" href="/engineering/assets/css/courses.css" />
      {/* Page-level styles from the original document's <style> blocks. They
          override the sheets above, so they load last, as they did there. */}
      <link rel="stylesheet" href="/engineering/css/page-overrides.css" />
      {children}
    </>
  );
}
