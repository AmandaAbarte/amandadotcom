import React from "react";

export default function Portfolio(props) {
    return (
        <div className="portfolio-container" style={{backgroundColor: props.lights? "white" : "black", color: props.lights? "black" : "white"}}>
            <h1>
                This is where porfolio will be
            </h1>

        </div>
    )
}