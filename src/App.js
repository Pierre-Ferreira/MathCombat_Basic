import React, { Component } from "react";
import "./App.css";
import GameSettings from "./components/GameSettingsComp"
import GameFeedback from "./components/GameFeedbackComp"
import GameInteraction from "./components/GameInteractionComp"

class App extends Component {
  render() {
    return (
      <div id="main-container-area">
        <section id="upper-container-area">
          <GameSettings />
        </section>
        <section id="lower-container-area">
          <GameFeedback />
          <GameInteraction />
        </section>
      </div>
    );
  }
}

export default App;
