import React from "react";
import planet1 from "../assets/Planet(1).png"
import planet2 from "../assets/Planet(2).png"
import planet3 from "../assets/Planet(3).png"
import planet4 from "../assets/Planet(4).png"
import planet5 from "../assets/Planet(5).png"

export default function Loader() {
  return (
    <div className="loader-container">
        <div className="card-container">
            <img src={planet1} className="loader-card one"/>
            <img src={planet2} className="loader-card two"/>
            <img src={planet3} className="loader-card three"/>
            <img src={planet4} className="loader-card four"/>
            <img src={planet5} className="loader-card five"/>
        </div>
    </div>
  );
}
