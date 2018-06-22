import React from "react";
import "./LostCard.css";

const LostCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
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
    <span onClick={() => props.handleClick(props)} className="remove">
      𝘅
    </span>
  </div>
);

export default LostCard;
