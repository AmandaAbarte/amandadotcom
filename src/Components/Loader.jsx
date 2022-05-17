import React from "react";
import bird from "../assets/bird.png";
import rose from "../assets/rose.png";
import sand from "../assets/sand.png";

export default function Loader() {
  return (
    <div className="loader-container">
        <div className="card-container">
            <img src={bird} className="loader-card bird"/>
            <img src={rose} className="loader-card rose"/>
            <img src={sand} className="loader-card sand"/>
        </div>
    </div>
  );
}
