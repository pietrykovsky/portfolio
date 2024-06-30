import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavigationBar from "@/components/NavigationBar";
import Container from "react-bootstrap/Container";
import StarBackground from "@/components/Particles/StarBackground";

export const metadata = {
  title: "pietrykovsky",
  description: "portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        <Container fluid>
          <StarBackground />
          {children}
        </Container>
      </body>
    </html>
  );
}
