import React from "react";


import birdL from "../assets/cards/FlightL.png";
import roseL from "../assets/cards/BloomL.png";
import snakeL from "../assets/cards/SerpentL.png";
import birdD from "../assets/cards/FlightD.png";
import roseD from "../assets/cards/BloomD.png";
import snakeD from "../assets/cards/SerpentD.png";
import Card from "./Card";

export default function Nav(props) {
  const [cards, setCards] = React.useState([
    { title: "Portfolio", imageD: birdD , imageL: birdL, navCard: false},
    { title: "About", imageD: roseD, imageL: roseL, navCard: false},
    { title: "Contact", imageD: snakeD, imageL: snakeL, navCard: false},
  ]);
  const [isSelected, setIsSelected] = React.useState(false);
  function handleClick() {
    setIsSelected((prevShow) => !prevShow);
  }
  console.log(isSelected);
  const allCards = cards.map((card) => {
    return (
      <Card
        key={card.title}
        title={card.title}
        imageD={card.imageD}
        imageL={card.imageL}
        mode={props.mode}
        lights={props.lights}
        isSelected={isSelected}
        handleClick={handleClick}
      />
    );
  });

  return (
    <div className={`cards ${isSelected? `nav-to-top`: ``}`}  style={{backgroundColor: props.lights? "white" : "black"}}>
      <h1 className={`${props.mode} heading`}>Pick a Card</h1>
      <div className={`tarot-container `}>{allCards}</div>
    </div>
  );
}
