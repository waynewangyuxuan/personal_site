import type { Metadata } from "next";
import { I18nProvider } from "@/lib/i18n";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Wayne Wang | 王宇轩",
  description: "Building systems that think. Questioning systems that predict.",
  openGraph: {
    title: "Wayne Wang | 王宇轩",
    description: "Building systems that think. Questioning systems that predict.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <I18nProvider>
          <Header />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </I18nProvider>
      </body>
    </html>
  );
}
