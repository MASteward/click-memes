import React from "react";
import "./navbar.css";

const NavBar = props => (
  <div>
    {console.log(props)}
    <ul className="nav nav-pills nav-justified">
      <li><a href="/">Memory Memes</a></li>
      <li>{props.notification}</li>
      <li>Score: <span style={{color: "yellow"}}>{props.points}</span><span className="recordScore"> Top Score: {props.topScore}</span></li>
    </ul>
  </div>
);

export default NavBar;
