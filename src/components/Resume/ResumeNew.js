import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const pdf = process.env.PUBLIC_URL + "/Mohamed_Aziz_Bjaoui_Resume.pdf";
  const fallbackImg = process.env.PUBLIC_URL + "/Mohamed_Aziz_Bjaoui_Resume.jpg";
  const [pdfError, setPdfError] = useState(false);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          {!pdfError ? (
            <Document
              file={pdf}
              className="d-flex justify-content-center"
              onLoadError={() => setPdfError(true)}
              onSourceError={() => setPdfError(true)}
            >
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          ) : (
            <div className="d-flex flex-column align-items-center" style={{ color: "#fff", textAlign: "center" }}>
              <p style={{ marginBottom: 12 }}>
                Could not load PDF. Place your file at <code>public/Mohamed_Aziz_Bjaoui_Resume.pdf</code>.
              </p>
              <img
                src={fallbackImg}
                alt="Resume Preview"
                style={{ maxWidth: width > 786 ? 900 : 320, borderRadius: 8, opacity: 0.95 }}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
          )}
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
