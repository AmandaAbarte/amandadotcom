import React, { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

export default function Card(props) {
  const isDesktopOrLaptop = useMediaQuery({ query: "(min-width: 1023px)" });
  const isBigScreen = useMediaQuery({ query: "(min-width: 1624px)" });
  const isTablet = useMediaQuery({ query: "(max-width: 600px)" });
  const isMobile = useMediaQuery({ query: "(max-width: 470px)" });
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
        props.isSelected && isMobile
            ? "30%" :
          props.isSelected && isTablet
            ? "20%"
            
            // : props.isSelected
            // ? "14%"
            : "20%",
        left: props.isSelected && isMobile ? "0" : props.styles,
        top:
          props.isSelected && isMobile && props.title === "About"
            ? "57px"
            : props.isSelected && isMobile && props.title === "Portfolio"
            ? "100px"
            : "",
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
