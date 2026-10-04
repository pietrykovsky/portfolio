import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import Container from "react-bootstrap/Container";
import { routing } from "@/i18n/routing";
import { getPathname } from "@/i18n/navigation";
import NavigationBar from "@/components/Navigation/NavigationBar";
import BottomNavigation from "@/components/Navigation/BottomNavigation";
import StarBackground from "@/components/Particles/StarBackground";
import Footer from "@/components/Footer";

const OPEN_GRAPH_LOCALES = { en: "en_US", pl: "pl_PL" };

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "metadata" });

  return {
    metadataBase: new URL("https://pietrykovsky.com"),
    title: t("title"),
    description: t("description"),
    keywords: "Michał Pietrykowski, pietrykovsky, full stack developer, software developer, Python, TypeScript, Next.js, AI, LLM, portfolio, Poland, Wrocław",
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: getPathname({ href: "/", locale }),
      siteName: t("siteName"),
      locale: OPEN_GRAPH_LOCALES[locale],
      alternateLocale: routing.locales.filter((l) => l !== locale).map((l) => OPEN_GRAPH_LOCALES[l]),
      type: "website",
    },
  };
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  // Lets the pages under this layout render statically.
  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="particles-container">
            <StarBackground />
          </div>
          <NavigationBar />
          <Container className="main-container" fluid>
            {children}
            <BottomNavigation />
          </Container>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
