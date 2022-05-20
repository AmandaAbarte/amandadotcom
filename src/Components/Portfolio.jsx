import React from "react";
import sample from "../assets/sample.png";

export default function Portfolio(props) {
  return (
    <div
      className="portfolio-container"
      style={{
        backgroundColor: props.lights ? "white" : "black",
        color: props.lights ? "black" : "white",
      }}
    >
      <div className="item-container">
          <div className="item">
              <img src={sample} className="item-image"></img>
              <div className="item-info">
                  <h1>Website Name</h1>
                  <p>Website description and what languages/ libraries used maybe?</p>
                  <a href="#">Link to the GitHub Repo</a>
              </div>
          </div>
          <div className="item item-right">
              <img src={sample} className="item-image"></img>
              <div className="item-info">
                  <h1>Website Name</h1>
                  <p>Website description and what languages/ libraries used maybe?</p>
                  <a href="#">Link to the GitHub Repo</a>
              </div>
          </div>
      </div>
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
