import React from "react";
import "./LostCard.css";

const LostCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.handleClick(props.id)} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
        <strong>Position:</strong> {props.position}
        </li>
      </ul>
    </div>
  </div>
);

export default LostCard;
