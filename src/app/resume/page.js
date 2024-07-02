"use client";

import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FaDownload } from 'react-icons/fa';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import styles from './page.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export default function Resume() {
  const pdfUrl = '/resume_preview.pdf';
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

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
            <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} />
            </Document>
          </div>
        </Col>
      </Row>
    </Container>
  );
}