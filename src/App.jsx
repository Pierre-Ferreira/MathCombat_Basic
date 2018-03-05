import React, { Component } from 'react';
import './App.css';
import GameSettingsComp from './components/GameSettingsComp';
import GameFeedbackContainer from './containers/GameFeedbackContainer';
import GameInteractionComp from './components/GameInteractionComp';

class App extends Component {
  render() {
    return (
      <div id="main-container-area">
        <section id="upper-container-area">
          <GameSettingsComp />
        </section>
        <section id="lower-container-area">
          <GameFeedbackContainer />
          <GameInteractionComp />
        </section>
      </div>
    );
  }
}

export default App;
