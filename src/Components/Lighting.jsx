import React from "react";
import lamp from "../assets/lightbulb.png";

export default function Lighting(props) {
  return (
    <div
      className="mode"
      style={{ filter: props.lights ? "invert(100%)" : "" }}
    >
      <div className={`light-string `} onClick={props.switchLights}>
        <div className={`string ${props.lights ? `pullStringOn` : ``}`}></div>
        <div className="ball"></div>
      </div>
      <div className="light-hang">
        <div className={`string ${props.lights ? `pullStringOff` : ``}`}></div>
        <img src={lamp} className="bulb"></img>
      </div>
    </div>
  );
}
