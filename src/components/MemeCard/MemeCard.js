import React from "react";
import "./MemeCard.css";

const MemeCard = props => (
  <div className="card">
    <div className="img-container">
      <a onClick={() => props.chosenMeme(props.id)}>
        <img className="images" alt={props.name} src={props.image} />
      </a>
    </div>
  </div>
);

export default MemeCard;
