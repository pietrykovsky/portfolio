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
                fluid 
                className={styles.headerImage}
                src="/assets/home-img.svg" 
                alt="Home Image" 
                style={{ maxHeight: "500px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className="my-5 py-5">
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
            <h2 className="mb-4">Welcome to My Digital Universe</h2>
            <p>
              I'm a 23-year-old code enthusiast from Wrocław, currently navigating the galaxy of IT Automation Systems at Wrocław University of Science and Technology. My journey from <span className={styles.highlighted}>QBASIC</span> text adventures to full-stack engineering has been quite the space odyssey!
            </p>
            <p>
              As a full-stack engineer, I wield the power of <span className={styles.highlighted}>Python</span> and <span className={styles.highlighted}>JavaScript</span>, crafting digital solutions with frameworks like <span className={styles.highlighted}>Django</span> and <span className={styles.highlighted}>React</span>. I've also ventured into the realm of <span className={styles.highlighted}>C#</span>, developing desktop applications that push the boundaries of what's possible.
            </p>
            <p>
              When I'm not busy decoding the mysteries of the digital realm or experimenting with <span className={styles.highlighted}>machine learning</span> algorithms, you might find me lost in Asimov's worlds, mastering the art of Japanese tea ceremonies, or saving Night City in Cyberpunk 2077. And yes, I can debug code almost as fast as I can slurp a bowl of ramen - it's my superpower!
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}