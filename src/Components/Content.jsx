import React from "react";
import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Nav from "./Nav";

export default function (){
    return (
        <div className="content-container">
            <Portfolio/>
            <About/>
            <Contact/>
        </div>
    )
}