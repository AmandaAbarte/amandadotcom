import React, { useEffect } from "react";

export default function Card(props) {
  const [isSelected, setIsSelected] = React.useState(false);
    const [isHidden, setIsHidden] = React.useState();
  function handleClick() {
    setIsSelected((prevShow) => !prevShow);
    setIsHidden(!props.navCard)
  }
  
  
  return (
    <div
      key={props.title}
      onClick={handleClick}
      className={`tarot ${isSelected ? `expand` : ``} `}
    >
      <img src={props.lights ? props.imageL : props.imageD} className={isSelected ? `clicked` : ``}></img>
      <h1 className={props.mode}>{props.title}</h1>
    </div>
  );
}
