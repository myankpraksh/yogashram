let handleResize = () => {
  document
    .getElementById("root")
    .style.setProperty("--currentHeight", `${window.innerHeight}px`);
  document
    .getElementById("root")
    .style.setProperty("--currentWidth", `${window.innerWidth}px`);
  console.log(45);
};
handleResize();
window.addEventListener("resize", handleResize);
