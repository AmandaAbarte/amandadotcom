import React from "react";
import bird from "../assets/bird.png";
import rose from "../assets/rose.png";
import sand from "../assets/sand.png";
import Card from "./Card";

export default function Nav() {
  const [cards, setCards] = React.useState([
    { title: "Portfolio", image: bird },
    { title: "About", image: rose },
    { title: "Contact", image: sand },
  ]);

  const allCards = cards.map((card) => {
      return (
          <Card key={card.title}
          title={card.title}
          image={card.image}/>
      )
  })

  return (
    <div className="cards">
      <h1>Pick a Card</h1>
      <div className="tarot-container">
          {allCards}
      </div>
    </div>
  );
}
