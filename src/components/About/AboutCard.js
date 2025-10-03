import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Mohamed Aziz Bjaoui</span>
            , a Software Engineer based in <span className="purple">Tunis, Tunisia</span>.
            <br />
            Recently graduated from iTeam University, I have worked on multiple
            internships delivering real products for web and mobile, including a
            Smart Video Management System (VMS), an exam portal, and mobile apps.
            <br />
            <br />
            Beyond coding, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Graphic design
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading about product and UX
            </li>
            <li className="about-activity">
              <ImPointRight /> Gym
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Build useful products that solve real problems."{" "}
          </p>
          <footer className="blockquote-footer">Mohamed Aziz Bjaoui</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
