"use client";

import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

// Bundle the worker with the app instead of pulling executable code from a third-party CDN.
pdfjs.GlobalWorkerOptions.workerSrc = new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString();

// pdfjs touches browser globals on import, so this module must be loaded with ssr: false.
export default function PdfPreview({ file, pageNumber, onLoadSuccess, documentClassName, pageClassName }) {
  return (
    <Document
      file={file}
      onLoadSuccess={onLoadSuccess}
      className={documentClassName}
    >
      <Page
        pageNumber={pageNumber}
        className={pageClassName}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        scale={1.5}
      />
    </Document>
  );
}
