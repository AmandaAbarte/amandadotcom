import React from "react";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";

export default function Content(){
    return (
        <div className="content-container">
            <Portfolio/>
            <About/>
            <Contact/>
        </div>
    )
}