import React from "react";
import ReactDOM from "react-dom";
const name = "angela";
const lname = "yu";
const luckynumber = 5;

ReactDOM.render(
  <div>
    <h1>Hello {name + " " + lname}</h1>
    <p>my luckynumber is {luckynumber} </p>
  </div>,
  document.getElementById("root")
);
