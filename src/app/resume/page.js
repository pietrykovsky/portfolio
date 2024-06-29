"use client";

import Container from "react-bootstrap/Container";
import NavigationBar from "@/components/NavigationBar";

export default function Resume() {
  return (
    <main>
      <NavigationBar />
      <Container className="mt-5">
        <h1>Resume</h1>
        <p>
          Hello world!
        </p>
      </Container>
    </main>
  );
}
