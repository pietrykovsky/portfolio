"use client";

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import styles from './page.module.css';

export default function Resume() {
  const pdfUrl = '/resume_preview.pdf';

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'resume_preview.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Container className={styles.resumeContainer}>
      <Row className={styles.headerRow}>
        <Col className="d-flex justify-content-between align-items-center">
          <h1 className={styles.pageTitle}>Resume</h1>
          <Button variant="outline-light" onClick={handleDownload}>
            <FaDownload className="me-2" /> Download
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className={styles.pdfContainer}>
            <embed 
              src={pdfUrl} 
              type="application/pdf"
              width="100%"
              height="1100px"
              className={styles.pdfEmbed}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}