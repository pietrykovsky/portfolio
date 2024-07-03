"use client";

import React, { useState, useEffect } from 'react';
import { Container, Button, Spinner } from 'react-bootstrap';
import { FaDownload, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';
import styles from './page.module.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Resume() {
  const pdfUrl = '/resume_preview.pdf';
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [loading, setLoading] = useState(true);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    const updateWidth = () => {
      setContainerWidth(Math.min(window.innerWidth * 0.9, 800));
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
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
      <div className={styles.pdfContent} style={{ maxWidth: containerWidth }}>
        <div className={styles.headerRow}>
          <h1 className={styles.pageTitle}>Resume</h1>
          <Button variant="outline-light" onClick={handleDownload} className={styles.downloadButton}>
            <FaDownload className="me-2" /> Download
          </Button>
        </div>

        <div className={styles.pdfWrapper}>
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
              renderTextLayer={false}
              renderAnnotationLayer={false}
              scale={1.5}
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