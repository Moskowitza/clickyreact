import React from "react";
import "./Title.css";

const Title = props => <div><h1 className="title">{props.children}</h1>          
    <p>Score:{props.counter}</p>
    </div>;

export default Title;
