import React from "react";
import sample from "../assets/sample.png";
import projects from "../projects.json";
import Project from "./Project";
// import Reservia from "../assets/screenshots/reservia.JPG";

export default function Portfolio(props) {
    const images = projects.map((project)=> {

    })
  const projectCards = projects.map((project) => {
    return (
      <Project
        key={project.title}
        title={project.title}
        description={project.description}
        preview={project.preview}
        github={project.github}
        link={project.link}
        lights={props.lights}
      />
    );
  });
  return (
    <div
      className="portfolio-container"
      style={{
        backgroundColor: props.lights ? "white" : "black",
        color: props.lights ? "black" : "white",
      }}
    >
      <div className="item-container">{projectCards}</div>
      <div
        className="icons"
        style={{ color: props.lights ? "black" : "white" }}
      >
        <i className="devicon-javascript-plain"></i>
        <i className="devicon-css3-plain-wordmark"></i>
        <i className="devicon-sass-plain"></i>
        <i className="devicon-html5-plain-wordmark"></i>
        <i className="devicon-bootstrap-plain-wordmark"></i>
        <i className="devicon-react-original-wordmark"></i>
        <i className="devicon-photoshop-line"></i>
        <i className="devicon-wordpress-plain-wordmark"></i>

        {/* <p className="turn-lights"> Turn the lights off </p> */}
      </div>
    </div>
  );
}
