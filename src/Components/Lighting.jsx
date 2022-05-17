import React from "react";
import lamp from "../assets/lightbulb.png";

export default function Lighting(props) {
  return (
    <div className="mode">
      <div className="light-string" onClick={props.switchLights}>
          <div className="string"></div>
          <div className="ball"></div>
      </div>
      <div className="light-hang">
          <div className="string"></div>
        <img src={lamp} className="bulb"></img>
      </div>
    </div>
  );
}
