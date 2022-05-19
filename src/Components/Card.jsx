import React, { useEffect } from "react";

export default function Card(props) {
  return (
    <div
      key={props.title}
      onClick={props.handleClick}
      className={`tarot ${props.isSelected ? `expand tarot-to-nav` : ``} ${
        props.title
      }`}
      style={{
        border:props.lights && props.isSelected ? "5px white solid" : !props.lights && props.isSelected? "5px black solid" : props.lights ? "5px black solid" : "5px white solid",
        width: props.isSelected ? "150px" : "300px",
        right: props.styles,
        backgroundColor:
          props.lights && props.isSelected
            ? "black"
            : props.isSelected && "white",
        // transform: props.isActive && props.isSelected ? "translateY(-86%)" : props.isSelected && "translateY(-88%)"
      }}
    >
      <img
        src={props.lights ? props.imageL : props.imageD}
        className={props.isSelected ? `clicked` : ``}
      ></img>
      <h1
        className={props.mode}
        style={{
          color:
            props.lights && props.isSelected
              ? "white"
              : props.isSelected && "black",
        }}
      >
        {props.title}
      </h1>
    </div>
  );
}
