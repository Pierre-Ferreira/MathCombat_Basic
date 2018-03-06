import React, { Component } from 'react';
import './App.css';
import GameSettingsContainer from './containers/GameSettingsContainer';
import GameFeedbackContainer from './containers/GameFeedbackContainer';
import GameInteractionContainer from './containers/GameInteractionContainer';

class App extends Component {
  render() {
    return (
      <div id="main-container-area">
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xs-12 full-width'>
              <section id="upper-container-area">
                <GameSettingsContainer />
              </section>
              <section id="lower-container-area">
                <GameFeedbackContainer />
                <GameInteractionContainer />
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
