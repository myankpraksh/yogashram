import "./App.css";
import HeroSection from "./components/HeroSection/HeroSection";
import React, { Component } from "react";
import "./App.css";
export class App extends Component {
  constructor() {
    super();
    this.state = {
      currentWindowHeight: window.innerHeight,
      currentWindowWidth: window.innerWidth,
    };
  };
  //function to update current window height and width in css variable in App class state variables
  updateCurrentHeight = () => {
    document
      .getElementById("root")
      .style.setProperty("--currentHeight", `${window.innerHeight}px`);
    document
      .getElementById("root")
      .style.setProperty("--currentWidth", `${window.innerWidth}px`);
    this.setState({
      currentWindowHeight: window.innerHeight,
      currentWindowWidth: window.innerWidth,
    });
  };
  componentDidMount() {
    //adding event to trigger function to update current window height and width, when components mounts
    window.addEventListener("resize", this.handleResize);
  }
  componentWillUnmount() {
    //removing event to trigger function to update current window height and width, when components unmounts
    window.removeEventListener("resize", this.handleResize);
  }
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
