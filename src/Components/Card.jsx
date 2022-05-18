import React, { useEffect } from "react";


export default function Card(props) {
  

  return (
    <div
      key={props.title}
      onClick={props.handleClick}
      className={`tarot ${props.isSelected ? `expand tarot-to-nav` : ``} ${
        props.title
      }`}
      style={{ border: props.lights ? "5px black solid" : "5px white solid" }}
    >
      <img
        src={props.lights ? props.imageL : props.imageD}
        className={props.isSelected ? `clicked` : ``}
      ></img>
      <h1 className={props.mode}>{props.title}</h1>
    </div>
  );
}
