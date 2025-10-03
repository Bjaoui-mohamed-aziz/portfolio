import React, { useState, useEffect, useRef } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
// Prefer a locally hosted worker to avoid CDN latency. Place pdf.worker.min.js in public/.
pdfjs.GlobalWorkerOptions.workerSrc = `${process.env.PUBLIC_URL}/pdf.worker.min.js`;

function ResumeNew() {
  const [width, setWidth] = useState(1200);
  const pdf = process.env.PUBLIC_URL + "/Mohamed_Aziz_Bjaoui_Resume.pdf";
  const fallbackImg = process.env.PUBLIC_URL + "/Mohamed_Aziz_Bjaoui_Resume.jpg";
  const [pdfError, setPdfError] = useState(false);
  const [inView, setInView] = useState(false);
  const viewerRef = useRef(null);

  useEffect(() => {
    setWidth(window.innerWidth);
    const onResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", onResize);

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) setInView(true);
      },
      { rootMargin: "200px" }
    );
    if (viewerRef.current) obs.observe(viewerRef.current);

    return () => {
      window.removeEventListener("resize", onResize);
      if (viewerRef.current) obs.unobserve(viewerRef.current);
      obs.disconnect();
    };
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

        <Row className="resume" ref={viewerRef}>
          {!pdfError && inView ? (
            <Document
              file={pdf}
              className="d-flex justify-content-center"
              onLoadError={() => setPdfError(true)}
              onSourceError={() => setPdfError(true)}
              loading={<div style={{ color: "#fff", textAlign: "center" }}>Loading resume…</div>}
            >
              <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
            </Document>
          ) : pdfError ? (
            <div className="d-flex flex-column align-items-center" style={{ color: "#fff", textAlign: "center" }}>
              <p style={{ marginBottom: 12 }}>
                Could not load PDF. Place your file at <code>public/Mohamed_Aziz_Bjaoui_Resume.pdf</code>.
              </p>
              <img
                src={fallbackImg}
                alt="Resume Preview"
                loading="lazy"
                decoding="async"
                style={{ maxWidth: width > 786 ? 900 : 320, borderRadius: 8, opacity: 0.95 }}
                onError={(e) => (e.currentTarget.style.display = "none")}
              />
            </div>
          ) : (
            <div className="d-flex justify-content-center" style={{ color: "#fff", width: "100%", padding: 16 }}>
              Preparing resume preview…
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
