import "./BrandBanner.css";
import React, { Component } from "react";
import brands from "./assets/images/brands.svg";

/*repetitions of elements in image isn't required for the infinite loop to work, 
its done in this image because even with full width this image would leave 
some space in wide displays. For best result use image with width atleast as much 
as the maximum width of display you are expecting */

export default class BrandBanner extends Component {
  render() {
    return (
      <div className="BrandBanner">
        <p>As Seen On</p>
        <div className="infiniteBanner">
          <img
            src={brands}
            alt="brand logos"
            className="brandLogo"
            id="transparentBrands"
          />
          {/*Transparent copy of the image to create space for it as all other copies have position absolute*/}
          <img src={brands} alt="brand logos" className="brandLogo" />
          {/*First Image*/}
          <img src={brands} alt="brand logos" className="brandLogoFollow" />
          {/*Image following first image*/}
        </div>
      </div>
    );
  }
}
