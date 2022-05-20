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
      style={{ backgroundColor: props.lights ? "white" : "black" }}
    >
      <div
        className="border"
        style={{
          border: props.lights ? "2px solid black" : "2px solid white",
          color: props.lights ? "white" : "black",
          backgroundColor: props.lights ? "black" : "white",
          boxShadow: props.lights ? "2px 2px 10px black" : "2px 2px 10px white",
          backgroundImage: props.lights ? `url(${birdL})` : `url(${birdD})`,
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
        <p>Hi, Im Amanda, Im a Front-end Web Developer. designer and artist.</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
          corrupti, ea labore magnam inventore necessitatibus sit suscipit omnis
          dolorem, <br />
          accusamus quos possimus reprehenderit porro sunt ut provident maiores
          quis hic. <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse iusto,
          vel impedit earum repellat delectus veritatis corporis at laborum
          alias? Cupiditate repudiandae quae vero totam praesentium eos ea ab.
          Vel?
        </p>
      </div>
      
    </div>
  );
}
