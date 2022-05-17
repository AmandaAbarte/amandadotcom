import React from "react";

export default function Card(props) {
  const [isSelected, setIsSelected] = React.useState(false);

  function handleClick() {
    setIsSelected((prevShow) => !prevShow);
  }
  return (
    <div key={props.title} onClick={handleClick} className="tarot">
      <img
        src={props.image}
        className={isSelected ? `clicked` : `unclicked`}
      ></img>
      <h1>{props.title}</h1>
    </div>
  );
}
