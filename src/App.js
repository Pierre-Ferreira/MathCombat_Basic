import React, { Component } from "react";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div id="main-container-area">
        <section id="upper-container-area">
          <section id="game-settings-area">Game Settings</section>
        </section>
        <section id="lower-container-area">
          <section id="game-feedback-area">Game Feedback Area</section>
          <section id="game-interaction-area">Game Interaction Area</section>
        </section>
      </div>
    );
  }
}

export default App;
