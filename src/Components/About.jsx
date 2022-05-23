import React from "react";
import prof1 from "../assets/profile(1).png";
import prof2 from "../assets/profile(2).png";
import prof3 from "../assets/profile(3).png";
import prof4 from "../assets/profile(4).png";

import birdL from "../assets/cards/BloomL.png";
import birdD from "../assets/cards/BloomD.png";

export default function About(props) {
  return (
    <div
      className="about-container"
      style={{ backgroundColor: props.lights ? "white" : "black",
      // backgroundImage: props.lights ? `url(${birdD})` : `url(${birdL})`,
     }}
    >
      <div
        className="border"
        style={{
          border: props.lights ? "2px solid black" : "2px solid white",
          color: props.lights ? "white" : "black",
          backgroundColor: props.lights ? "black" : "white",
        }}
      >
        <h1>Amanda Abarte</h1>
        <h2>Front-end Dev, Designer, Artist</h2>
        <div className="profile">
          <img src={prof1} className="prof prof1"></img>
          <img src={prof2} className="prof prof2"></img>
          <img src={prof3} className="prof prof3"></img>
          <img src={prof4} className="prof prof4"></img>
        </div>
        <p>Hi, Im Amanda, Im a Front-end Web Developer, designer and artist.</p>
        <p>
          {/* I have always been an artistic and creativ person. Art - painting, drawing, designing have always been a passion of mine. 
          <br/>
          Discovering Front-end development gave me the possibility to work creatively and pursure my interests in visual arts, while also having a practical and useful application.
          <br/>
          Currently I am in the final stages of completing the Front-End Developer Qualification (Bac + 4 / Niveu 6 EQF) through OpenClassrooms.
          I am eager to take the next step of my journy and work in an environment that would allow me to grow and keep learning. */}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt magnam eius vel, ullam in tenetur esse consequatur sunt nostrum tempora nisi, optio alias commodi reprehenderit est ea laudantium quam a?
        </p>
      </div>
      
    </div>
  );
}
