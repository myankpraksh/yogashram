// this component contains hero section
import React, { Component } from "react";
import mandalaImage from "./assets/images/mandala.svg";
import cloud from "./assets/images/cloud-original.png";
import lady from "./assets/images/lady.png";
import cloudBase from "./assets/images/cloud-base.png";
import cloudCopy from "./assets/images/cloudCopy.png";
import "./HeroSection.css";

export class HeroSection extends Component {
  render() {
    return (
      <div className="HeroSection">
        <div className="HeroSectionBackground" id="HeroSectionBackground">
          <img src={mandalaImage} alt="mandala-artwork" id="mandala-artwork" />
        </div>
        <div className="HeroSectionImages">
          <img src={lady} alt="Lady doing yoga" id="lady" />
          <img src={cloudBase} alt="Peaceful cloud" id="cloudBase" />
          <img src={cloud} alt="Peaceful cloud" id="cloud" />
          <img src={cloudCopy} alt="Peaceful cloud" id="cloudCopy" />
        </div>
      </div>
    );
  }
}

export default HeroSection;
