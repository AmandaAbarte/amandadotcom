import React from "react";

import Portfolio from "./Portfolio";
import About from "./About";
import Contact from "./Contact";
import Content from "./Content";

import birdL from "../assets/cards/FlightL.png";
import roseL from "../assets/cards/BloomL.png";
import snakeL from "../assets/cards/SerpentL.png";
import birdD from "../assets/cards/FlightD.png";
import roseD from "../assets/cards/BloomD.png";
import snakeD from "../assets/cards/SerpentD.png";
import Card from "./Card";

export default function Nav(props) {
  const [cards, setCards] = React.useState([
    { title: "Portfolio", imageD: birdD, imageL: birdL, isActive: false },
    { title: "About", imageD: roseD, imageL: roseL, isActive: false },
    { title: "Contact", imageD: snakeD, imageL: snakeL, isActive: false },
  ]);
  //isSelected means is the nav bar at the top
  const [isSelected, setIsSelected] = React.useState(false);
  const [mainContent, setMainContent] = React.useState([
    { type: Portfolio, name: "Portfolio", isActive: false},
    { type: About, name: "About", isActive: false },
    { type: Contact, name: "Contact", isActive: false },
  ]);

  function handleClick(title) {
    setIsSelected((prevShow) => !prevShow);
    setCards((prevCards) => {
      return prevCards.map((card) => {
        return card.title === title
          ? { ...card, isActive: !card.isActive }
          : card;
      });
    });
    setMainContent((prevCont) => {
      return prevCont.map((item) => {
        return item.name === title
          ? { ...item, isActive: !item.isActive }
          : item;
      });
    });
  }
  console.log(isSelected);
  console.log(cards);
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
        isActive={card.isActive}
        handleClick={() => handleClick(card.title)}
      />
    );
  });

  
  const portfolioCont = mainContent.map((content) => {
      return ( content.isActive? <content.type/> : "")
  });
  return (
    <>
      <div
        className={`cards ${isSelected ? `nav-to-top` : ``}`}
        style={{ backgroundColor: props.lights ? "white" : "black" }}
      >
        <h1 className={`${props.mode} heading`}>Pick a Card</h1>
        <div className={`tarot-container `}>{allCards}</div>
      </div>
      <div className="content-container">
          {portfolioCont}
        {/* <Portfolio />
        <About />
        <Contact /> */}
      </div>
    </>
  );
}
