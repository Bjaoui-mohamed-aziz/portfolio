import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import homeBg from "../../Assets/home-bg.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent <strong className="purple">Projects</strong>
        </h1>
        <p style={{ color: "white" }}>
          A selection of projects I've built during internships and personal work.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgUrl={process.env.PUBLIC_URL + "/projects/purpella.png"}
              isBlog={false}
              title="Purpella - HR Management"
              description="LLM-powered HR management system developed with Angular & Django in collaboration with Arisaka. Features role-based access, applications management, search and analytics."
              ghLink="#"
              demoLink="https://purpella.arisaka.tn/"
              images={[
                process.env.PUBLIC_URL + "/projects/g-func-1.png",
                process.env.PUBLIC_URL + "/projects/g-func-2.png",
                process.env.PUBLIC_URL + "/projects/g-func-3.png",
                process.env.PUBLIC_URL + "/projects/g-func-4.png",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgUrl={process.env.PUBLIC_URL + "/projects/job-board.png"}
              isBlog={false}
              title="Job Board"
              description="A platform connecting employers and job seekers with postings, applications, role-based dashboards, and search features."
              ghLink="https://github.com/Bjaoui-mohamed-aziz/Job_Board"
              images={[
                process.env.PUBLIC_URL + "/projects/jb-1.png",
                process.env.PUBLIC_URL + "/projects/jb-2.png",
                process.env.PUBLIC_URL + "/projects/jb-3.png",
                process.env.PUBLIC_URL + "/projects/jb-4.png",
                process.env.PUBLIC_URL + "/projects/jb-5.png",
                process.env.PUBLIC_URL + "/projects/jb-6.png",
                process.env.PUBLIC_URL + "/projects/jb-7.png",
                process.env.PUBLIC_URL + "/projects/jb-8.png",       

              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgUrl={process.env.PUBLIC_URL + "/projects/vms.png"}
              isBlog={false}
              title="Smart VMS (Video Management System)"
              description="Designed and developed a Smart VMS with real-time IP camera monitoring, recording management, and AI-powered video analytics (event detection, notifications, playback filtering). Tech: Angular, FastAPI, MediaMTX, Qwen 2.5."
              ghLink="#"
              images={[
                process.env.PUBLIC_URL + "/projects/vms-1.png",
                process.env.PUBLIC_URL + "/projects/vms-2.png",
                process.env.PUBLIC_URL + "/projects/vms-3.png",
                process.env.PUBLIC_URL + "/projects/vms-4.png",
                process.env.PUBLIC_URL + "/projects/vms-5.png",
                process.env.PUBLIC_URL + "/projects/vms-6.png",
                process.env.PUBLIC_URL + "/projects/vms-7.png",
                process.env.PUBLIC_URL + "/projects/vms-8.png",
                process.env.PUBLIC_URL + "/projects/vms-9.png",
              ]}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgUrl={process.env.PUBLIC_URL + "/projects/asqii-forms.png"}
              isBlog={false}
              title="Dynamic Forms for Chemo Treatment (ASQII)"
              description="Built dynamic, drag-and-drop customizable forms for oncology workflows. Doctors define conditions which assign forms to patients. Tech: TypeScript, React.js, Node.js, Tailwind."
              ghLink="https://github.com/Bjaoui-mohamed-aziz/Form-builder"
              demoLink="https://drive.google.com/file/d/1NGvYSvNtUPaSC2IdZ3s9Xxf5y3Kbql-F/view?usp=sharing"
              images={[
                process.env.PUBLIC_URL + "/projects/df-1.png",
                process.env.PUBLIC_URL + "/projects/df-2.png",
                process.env.PUBLIC_URL + "/projects/df-3.png",
                process.env.PUBLIC_URL + "/projects/df-4.png",
                process.env.PUBLIC_URL + "/projects/df-5.png",
                process.env.PUBLIC_URL + "/projects/df-6.png",
                process.env.PUBLIC_URL + "/projects/df-7.png",
                process.env.PUBLIC_URL + "/projects/df-8.png",
                process.env.PUBLIC_URL + "/projects/df-9.png",
                process.env.PUBLIC_URL + "/projects/df-10.png",

              ]}              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgUrl={process.env.PUBLIC_URL + "/projects/exam-portal.png"}
              isBlog={false}
              title="Exam Portal"
              description="Comprehensive examination platform enabling teachers to create, host, and manage quizzes and courses with features to ensure academic integrity. Tech: Angular, Spring Boot, PostgreSQL."
              ghLink="https://github.com/Bjaoui-mohamed-aziz/Exam_Portal_Front"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgUrl={process.env.PUBLIC_URL + "/projects/fastfound.png"}
              isBlog={false}
              title="FastFound (Mobile)"
              description="Android app to help users quickly locate lost items with detailed descriptions, location/date metadata, and photo uploads. Tech: Java, Firebase."
              ghLink="#"
              demoLink="https://www.facebook.com/watch/?v=269454301689744"
              images={[
                process.env.PUBLIC_URL + "/projects/ff-1.png",
                process.env.PUBLIC_URL + "/projects/ff-2.png",
                process.env.PUBLIC_URL + "/projects/ff-3.png",
                process.env.PUBLIC_URL + "/projects/ff-4.png",
                process.env.PUBLIC_URL + "/projects/ff-5.png",
                process.env.PUBLIC_URL + "/projects/ff-6.png",
              ]}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
