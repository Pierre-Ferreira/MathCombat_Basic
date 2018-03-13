import React from 'react';
import PropTypes from 'prop-types';
// import MainQuestionComp from './MainQuestionComp';
import MainQuestionContainer from '../../containers/TablesModule/MainQuestionContainer';
import GameOverContainer from '../../containers/TablesModule/GameOverContainer';
import WelcomeScreenComp from './WelcomeScreenComp';

class GameInteractionComp extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let displayComp = '';
    if (this.props.displayWelcomeScreen) {
      displayComp = <WelcomeScreenComp />
    } else{
      displayComp = (this.props.gameInProgress) ?
        <MainQuestionContainer /> :
        <GameOverContainer />
    }
    return (
      <section id="game-interaction-area">
        {displayComp}
      </section>
    )
  }
}

export default GameInteractionComp;
