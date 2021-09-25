import { useState } from "react";
import Layout from "@/components/Layout";
import styles from "@/styles/Cv.module.css";
import Link from "next/link";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Test() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <Layout>
      <Link href="/events">
        <a className="btn btn-secondary my-1">Go Back</a>
      </Link>
      <h1 className={styles.title}>My CV in PDF</h1>

      <div>
        <p className={styles.pages}>
          Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
        </p>
        <div className={styles.btns}>
          <button
            className={styles.btn}
            type="button"
            disabled={pageNumber <= 1}
            onClick={previousPage}
          >
            Previous
          </button>
          <button
            className={styles.btn}
            type="button"
            disabled={pageNumber >= numPages}
            onClick={nextPage}
          >
            Next
          </button>
        </div>
        <Document
          file="cv.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
          className={styles.document}
        >
          <Page pageNumber={pageNumber} scale={1.5} />
        </Document>
        <div className={styles.downcntr}>
          <button className={styles.download}>
            <Link href="cv.pdf">
              <a className={styles.dln}>Download CV</a>
            </Link>
          </button>
        </div>
      </div>
    </Layout>
  );
}
