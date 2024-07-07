"use client";

import React, { useState, useEffect } from 'react';
import styles from "./page.module.css";
import { getHighlightedString } from "./utils";
import { Container, Row, Col, Image } from "react-bootstrap";
import { useTranslations } from 'next-intl';
import Typewriter from "typewriter-effect";

export default function Home() {
  const t = useTranslations('home');
  const [key, setKey] = useState(0);

  useEffect(() => {
    // This effect will run whenever the locale changes
    setKey(prevKey => prevKey + 1);
  }, [t]);

  const getTypewriterString = () => {
    const hello = t('header-hello');
    const introduction = t.rich('header-intro', {
      highlighted: (chunks) => `<span class="${styles.highlighted}">${chunks}</span>`
    });
    const role = t.rich('header-role', {
      bold: (chunks) => `<b>${chunks}</b>`
    });

    return `${hello}<br>${introduction}<br> - ${role}`;
  }

  return (
    <>
      <Container fluid className={styles.tildeBackground}>
        <Container className="my-5">
          <Row>
            <Col className="align-content-center p-3" md={7}>
              <h1>
                <Typewriter
                  key={key}
                  onInit={(typewriter) => {
                    typewriter
                      .typeString(getTypewriterString())
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
            <h2 className="mb-4" dangerouslySetInnerHTML={{ __html: getHighlightedString(t, 'desc-header') }} />
            <p dangerouslySetInnerHTML={{ __html: getHighlightedString(t, 'desc-p1') }} />
            <p dangerouslySetInnerHTML={{ __html: getHighlightedString(t, 'desc-p2') }} />
            <p dangerouslySetInnerHTML={{ __html: getHighlightedString(t, 'desc-p3') }} />
          </Col>
        </Row>
      </Container>
    </>
  );
}