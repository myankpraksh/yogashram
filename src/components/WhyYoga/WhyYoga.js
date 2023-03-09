import React, { Component } from "react";
import "./WhyYoga.css";
import harmony from "./assets/images/harmony.svg";
import innerPeace from "./assets/images/innerPeace.svg";
import strength from "./assets/images/strength.svg";
import halfLogo from "./assets/images/halfLogo.svg";
export default class WhyYoga extends Component {
  render() {
    return (
      <div className="WhyYoga">
        <p>Find your inner strength, peace and freedom with Yoga</p>
        <p id="WhyYogaTitle">Why Yoga?</p>
        <div className="WhyYogaFlex">
          <img src={halfLogo} alt="decorative logo" class="halfLogo" />
          <img src={innerPeace} alt="inner peace" className="cardImage" />
          <img src={strength} alt="strength" className="cardImage" />
          <img src={harmony} alt="harmony" className="cardImage" />
        </div>
      </div>
    );
  }
}
