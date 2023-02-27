import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import React, { Component } from "react";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <HeroSection />{" "}
        {/* component contains hero section with a CTA button */}
      </div>
    );
  }
}

export default App;
