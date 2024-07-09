import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import Container from "react-bootstrap/Container";
import NavigationBar from "@/components/NavigationBar/NavigationBar";
import StarBackground from "@/components/Particles/StarBackground";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Michał Pietrykowski - Software Developer Portfolio",
  description: "Personal portfolio of Michał Pietrykowski, a full-stack software developer from Poland, specializing in Python, JavaScript, and C#. View my projects and skills.",
  keywords: "Michał Pietrykowski, pietrykovsky, software developer, full-stack developer, Python, JavaScript, C#, portfolio, Poland, Wrocław",
  openGraph: {
    title: "Michał Pietrykowski - Software Developer Portfolio",
    description: "Personal portfolio of Michał Pietrykowski, a full-stack software developer from Poland, specializing in Python, JavaScript, and C#. View my projects and skills.",
    url: "https://pietrykovsky.com",
    siteName: "Michał Pietrykowski Portfolio",
    locale: "en_US",
    localeAlternate: ["pl_PL"],
    type: "website",
  },
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  const messages = await getMessages(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className="particles-container">
            <StarBackground />
          </div>
          <NavigationBar />
          <Container className="main-container" fluid>
            {children}
          </Container>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
