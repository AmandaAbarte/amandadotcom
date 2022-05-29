import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function Card(props) {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1023px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1624px)" });
  const isTabletOrMobile = useMediaQuery({ query: "(min-width: 0px)" });
  // function MouseOver(event) {
  //   event.target.style.transform = props.isSelected? "translateY(-80%)" : "translateY(5%)"
  // }
  // function MouseOut(event) {
  //   event.target.style.transform = props.isSelected? "translateY(-88%)" : "translateY(0)"
  // }
  return (
    <div
      key={props.title}
      onClick={props.handleClick}
      className={`tarot ${props.isSelected ? `tarot-to-nav` : ``} ${
        props.title
      }`}
      style={{
        border:
          props.lights && props.isSelected
            ? "5px white solid"
            : !props.lights && props.isSelected
            ? "5px black solid"
            : props.lights
            ? "5px black solid"
            : "5px white solid",
        width:
          props.isSelected && isBigScreen
            ? "200px"
            : props.isSelected && isDesktopOrLaptop
            ? "150px"
            : props.isSelected && isTabletOrMobile
            ? "100px"
            : "300px",
        left: props.styles,
        backgroundColor:
          props.lights && props.isSelected
            ? "black"
            : props.isSelected && "white",
        // transform: props.isActive && props.isSelected ? "translateY(-86%)" : props.isSelected && "translateY(-88%)"
      }}
      // onMouseEnter={MouseOver}
      // onMouseLeave={MouseOut}
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
