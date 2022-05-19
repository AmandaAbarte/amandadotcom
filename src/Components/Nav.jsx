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
  const [isSelected, setIsSelected] = React.useState(false);
//   const portNav = isSelected ? "95%" : "90%" ;
//   const abNav =  isSelected ? "90%" : "30%";
//   const conNav =  isSelected ? "50%" : "37%" ;
  const [cards, setCards] = React.useState([
    {
      title: "Portfolio",
      imageD: birdD,
      imageL: birdL,
      isActive: false,
      styleDef: "10%",
      styleNav: "80%",
    },
    {
      title: "About",
      imageD: roseD,
      imageL: roseL,
      isActive: false,
      styleDef: "40%",
      styleNav: "70%",
    },
    {
      title: "Contact",
      imageD: snakeD,
      imageL: snakeL,
      isActive: false,
      styleDef: "70%",
      styleNav: "60%",
    },
  ]);
  //isSelected means is the nav bar at the top
  const [mainContent, setMainContent] = React.useState([
    { type: Portfolio, name: "Portfolio", isActive: false },
    { type: About, name: "About", isActive: false },
    { type: Contact, name: "Contact", isActive: false },
  ]);

  function handleClick(title) {
    //sets whether bar is at top, if bar is at top then do not change state
    setIsSelected((prevShow) => (prevShow ? prevShow : true));
    //checks if clicked card matches with content and sets it to true - therefore changing what content is displayed
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
          ? { ...item, isActive: true }
          : { ...item, isActive: false };
      });
    });
  }
  //maps over all cards and returns a card with different properties passed down
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
        styles={isSelected? card.styleNav: card.styleDef}
      />
    );
  });

  //depending on if content is set to active displays different content
  const portfolioCont = mainContent.map((content) => {
    return content.isActive ? <content.type key={content.name}/> : "";
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
      <div className="content-container">{portfolioCont}</div>
    </>
  );
}
