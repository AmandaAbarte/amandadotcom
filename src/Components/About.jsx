import React from "react";
import prof1 from "../assets/profile(1).png";
import prof2 from "../assets/profile(2).png";
import prof3 from "../assets/profile(3).png";
import prof4 from "../assets/profile(4).png";

export default function About () {
    return (
        <div className="about-container">
            <div className="border">
                <h1>Amanda Abarte</h1>
                <h2>Front-end Dev, Designer, Artist</h2>
                <div className="profile">
                    <img src={prof1} className="prof prof1"></img>
                    <img src={prof2} className="prof prof2"></img>
                    <img src={prof3} className="prof prof3"></img>
                    <img src={prof4} className="prof prof4"></img>
                </div>
            </div>
        </div>
    )
}