import React from "react";

export default function Card(props) {
    const [isShown, setIsShown] = React.useState(false);

  function handleClick() {
    setIsShown(prevShow => !prevShow)
  }
    return (
        <div key={props.title} onClick={handleClick} className={`tarot ${isShown && `show`}`}>
        <img src={props.image}></img>
        <h1>{props.title}</h1>
      </div>
    )
}

//   const CardsComponent = cards.map((card) => {
//     return (
      
//     );
//   });