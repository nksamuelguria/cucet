import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chandigarh University",
  description: "Chandigarh University",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
