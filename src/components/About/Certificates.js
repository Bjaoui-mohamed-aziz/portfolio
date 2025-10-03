import React, { useState } from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
import { FaCertificate } from "react-icons/fa";

// Edit this list to add/update your certificates
const certificates = [
  {
    // c-1
    title: "Python Intermediate",
    issuer: "SoloLearn",
    link: "",
    year: "",
  },
  {
    // c-2
    title: "Frontend and Java",
    issuer: "Coursera",
    link: "",
    year: "",
  },
  {
    // c-3
    title: "Data Structures & Backend with Java",
    issuer: "Coursera",
    link: "",
    year: "",
  },
  {
    // c-4
    title: "SQL (Basic/Intermediate)",
    issuer: "HackerRank",
    link: "",
    year: "",
  },
  {
    // c-5
    title: "HTML, CSS & Bootstrap",
    issuer: "Udemy",
    link: "",
    year: "",
  },
  {
    // c-6
    title: "HTML",
    issuer: "SoloLearn",
    link: "",
    year: "",
  },
  {
    // c-7
    title: "Database Administration Fundamentals",
    issuer: "Microsoft",
    link: "",
    year: "",
  },
  {
    // c-8
    title: "Android Development",
    issuer: "The Bridge",
    link: "",
    year: "",
  },
  {
    // c-9
    title: "Web Development",
    issuer: "LinkedIn Learning",
    link: "",
    year: "",
  },
  {
    // c-10 (portrait)
    title: "Job search techniques & soft skills",
    issuer: "Corp Worky",
    link: "",
    year: "",
    portrait: true,
  },
];

// Small helper component that tries .jpg, then .jpeg, then .png
function CertImage({ baseNoExt, alt, portrait }) {
  const exts = ["jpg", "jpeg", "png"];
  const [idx, setIdx] = useState(0);
  const src = `${baseNoExt}.${exts[idx]}`;
  const onErr = () => {
    setIdx((i) => (i < exts.length - 1 ? i + 1 : i));
  };
  return (
    <a href={src} target="_blank" rel="noreferrer">
      <Card.Img
        variant="top"
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        sizes="(max-width: 768px) 100vw, 33vw"
        fetchpriority="low"
        style={{
          width: "100%",
          aspectRatio: portrait ? "3 / 4" : "16 / 9",
          objectFit: portrait ? "contain" : "cover",
          maxHeight: portrait ? 360 : 220,
          background: portrait ? "#0b1020" : undefined,
        }}
        onError={onErr}
      />
    </a>
  );
}

function Certificates() {
  const base = process.env.PUBLIC_URL + "/projects";
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      {certificates.map((cert, idx) => (
        <Col md={4} className="project-card" key={idx}>
          <Card className="project-card-view">
            <CertImage
              baseNoExt={`${base}/c-${idx + 1}`}
              alt={cert.title || `Certificate ${idx + 1}`}
              portrait={!!cert.portrait}
            />
            <Card.Body>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <FaCertificate className="purple" size={28} />
                <Card.Title style={{ margin: 0 }}>{cert.title}</Card.Title>
              </div>
              <Card.Text style={{ marginTop: 10 }}>
                {cert.issuer}
                {cert.year ? ` • ${cert.year}` : ""}
              </Card.Text>
              {cert.link ? (
                <Button
                  variant="primary"
                  href={cert.link}
                  target="_blank"
                  rel="noreferrer"
                  size="sm"
                >
                  View Certificate
                </Button>
              ) : null}
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default Certificates;
