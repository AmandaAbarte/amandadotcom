import React from "react";

export default function Portfolio(props) {
  return (
    <div
      className="portfolio-container"
      style={{
        backgroundColor: props.lights ? "white" : "black",
        color: props.lights ? "black" : "white",
      }}
    >
      <h1>This is where porfolio will be</h1>
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
