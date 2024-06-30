import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import NavigationBar from "@/components/NavigationBar";
import StarBackground from "@/components/Particles/StarBackground";
import Footer from "@/components/Footer";

export const metadata = {
  title: "pietrykovsky",
  description: "portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="particles-container">
          <StarBackground />
        </div>
        <NavigationBar />
        <Container className="main-container" fluid>
          {children}
        </Container>
        <Footer />
      </body>
    </html>
  );
}
