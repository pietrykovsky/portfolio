"use client";

import React, { useState, useEffect } from 'react';
import { Container, Button, Spinner } from 'react-bootstrap';
import { FaDownload, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
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
  const [loading, setLoading] = useState(true);
  const [pdfDimensions, setPdfDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      const width = Math.min(window.innerWidth * 0.9, 800);
      setPdfDimensions({ width, height: width * 1.414 }); // Assuming A4 aspect ratio
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setLoading(false);
  }

  function changePage(offset) {
    setPageNumber(prevPageNumber => Math.min(Math.max(prevPageNumber + offset, 1), numPages));
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
      <div className={styles.pdfContent}>
        <div className={styles.headerRow}>
          <h1 className={styles.pageTitle}>Resume</h1>
          <Button variant="outline-light" onClick={handleDownload} className={styles.downloadButton}>
            <FaDownload className="me-2" /> Download
          </Button>
        </div>

        <div className={styles.pdfWrapper} style={{ height: pdfDimensions.height }}>
          {loading && (
            <div className={styles.spinnerWrapper}>
              <Spinner animation="border" variant="light" />
            </div>
          )}
          <Document
            file={pdfUrl}
            onLoadSuccess={onDocumentLoadSuccess}
            className={styles.pdfDocument}
          >
            <Page 
              pageNumber={pageNumber} 
              className={styles.pdfPage}
              width={pdfDimensions.width}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </Document>
        </div>

        {numPages > 1 && (
          <div className={styles.paginationRow}>
            <Button 
              onClick={() => changePage(-1)} 
              disabled={pageNumber <= 1}
              aria-label="Previous page"
              className={styles.paginationButton}
            >
              <FaChevronLeft />
            </Button>
            <span className={styles.pageInfo}>Page {pageNumber} of {numPages}</span>
            <Button 
              onClick={() => changePage(1)} 
              disabled={pageNumber >= numPages}
              aria-label="Next page"
              className={styles.paginationButton}
            >
              <FaChevronRight />
            </Button>
          </div>
        )}
      </div>
    </Container>
  );
}