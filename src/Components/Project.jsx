import React from "react";
import Reservia from "../assets/screenshots/reservia.JPG"

export default function Project(props) {
    return (
        <div
          className="item"
          style={{
            borderTop: props.lights ? "2px solid black" : "2px solid white",
          }}
        >
          <img src={Reservia} className="item-image"></img>
          <div className="item-info">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <a href="#">{props.link}</a>
          </div>
      </div>
    )
}