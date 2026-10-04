import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import Container from "react-bootstrap/Container";
import NavigationBar from "@/components/Navigation/NavigationBar";
import BottomNavigation from "@/components/Navigation/BottomNavigation";
import StarBackground from "@/components/Particles/StarBackground";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Michał Pietrykowski - Full Stack Developer",
  description: "Personal portfolio of Michał Pietrykowski, a full stack developer from Wrocław, Poland, working with Python, TypeScript and AI/LLM. View my experience, projects and resume.",
  keywords: "Michał Pietrykowski, pietrykovsky, full stack developer, software developer, Python, TypeScript, Next.js, LangChain, AI agents, LLM, portfolio, Poland, Wrocław",
  openGraph: {
    title: "Michał Pietrykowski - Full Stack Developer",
    description: "Personal portfolio of Michał Pietrykowski, a full stack developer from Wrocław, Poland, working with Python, TypeScript and AI/LLM. View my experience, projects and resume.",
    url: "https://pietrykovsky.com",
    siteName: "Michał Pietrykowski Portfolio",
    locale: "en_US",
    localeAlternate: ["pl_PL"],
    type: "website",
  },
};

export default async function RootLayout({ children }) {
  const locale = await getLocale();

  const messages = await getMessages();

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
            <BottomNavigation />
          </Container>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
