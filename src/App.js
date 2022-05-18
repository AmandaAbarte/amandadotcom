import "./App.css";
import React from "react";
import Nav from "./Components/Nav";
import Loader from "./Components/Loader";
import Lighting from "./Components/Lighting";
import Content from "./Components/Content";

function App() {
  const [lightsOn, setLightsOn] = React.useState(false);
  function switchLights() {
    setLightsOn((prevLights) => !prevLights);
  }

  const mode = lightsOn ? `lightmode` : `darkmode`;
  return (
    <div className={`App app ${mode} `}>
      <Lighting switchLights={switchLights} lights={lightsOn} />
      {/* <Loader /> */}
      <Nav switchLights={switchLights} mode={mode} lights={lightsOn} />

      {/* <Content /> */}
    </div>
  );
}

export default App;
