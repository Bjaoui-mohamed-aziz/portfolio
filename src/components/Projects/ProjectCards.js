import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import Carousel from "react-bootstrap/Carousel";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      {props.images && props.images.length > 0 ? (
        <Carousel fade indicators={props.images.length > 1} controls={props.images.length > 1} interval={3000}>
          {props.images.map((src, idx) => (
            <Carousel.Item key={idx}>
              <img
                src={src}
                alt={`slide-${idx}`}
                className="d-block w-100"
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover", maxHeight: 260 }}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      ) : (
        <Card.Img
          variant="top"
          src={props.imgPath || props.imgUrl}
          alt="card-img"
          loading="lazy"
          decoding="async"
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{ width: "100%", aspectRatio: "16 / 9", objectFit: "cover" }}
        />
      )}
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Button variant="primary" href={props.ghLink} target="_blank">
          <BsGithub /> &nbsp;
          {props.isBlog ? "Blog" : "GitHub"}
        </Button>
        {"\n"}
        {"\n"}

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
