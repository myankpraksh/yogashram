import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import React, { Component } from "react";
import "./App.css";
import CreditFooter from "./components/CreditFooter/CreditFooter";
import WhyYoga from "./components/WhyYoga/WhyYoga";
import WhyUs from "./components/WhyUS/WhyUs";
export class App extends Component {

  render() {
    return (
      <div className="App">
        <HeroSection /> {/* component contains hero section with a CTA button */}
        <WhyYoga /> {/*component contains why yoga section} */}
        <WhyUs /> {/*Component for third section, WhyUs*/}
        <CreditFooter /> {/* component contains credit to designer and developer */}
      </div>
    );
  }
}

export default App;
