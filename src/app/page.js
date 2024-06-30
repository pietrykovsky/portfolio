"use client";
import styles from "./page.module.css";
import { Container, Row, Col, Image } from "react-bootstrap";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <Container fluid className={styles.tildeBackground}>
        <Container className="my-5">
          <Row>
            <Col className="align-content-center p-3" md={7}>
              <h1>
                <Typewriter
                  onInit={(typewriter) => {
                    typewriter
                      .typeString("Hello world!<br>I'm ")
                      .typeString(`<span class="${styles.highlighted}">Michał Pietrykowski</span>`)
                      .typeString(" -<br>a <b>Software Developer</b>")
                      .start();
                  }}
                  options={{delay: 50}}
                />
              </h1>
            </Col>
            <Col className="p-3" md={5}>
              <Image 
                className="img-fluid" 
                src="/assets/home-img.svg" 
                alt="Home Image" 
                style={{ maxHeight: "500px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="my-5">
        <Row>
          <Col className="text-center p-3" md={5}>
            <Image 
              src="/assets/avatar.jpg" 
              alt="My Photo" 
              style={{ maxHeight: "250px" }}
              roundedCircle
            />
          </Col>
          <Col className="align-content-center p-3" md={7}>
            <h1>
              placeholder text
            </h1>
          </Col>
        </Row>
      </Container>
    </>
  );
}