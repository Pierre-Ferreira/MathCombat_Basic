import React from 'react';
import PropTypes from 'prop-types';
// import MainQuestionComp from './MainQuestionComp';
import MainQuestionContainer from '../containers/MainQuestionContainer';
import GameOverContainer from '../containers/GameOverContainer';

class GameInteractionComp extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.startGame(); //TODO: STARTGAME VALUE MUST BE SET ON GAME SETTINGS BUTTON CLICK.
  }
  render() {
    return (
      <section id="game-interaction-area">
        {this.props.gameInProgress ?
          <MainQuestionContainer /> :
          <GameOverContainer />
        }

      </section>
    )
  }
}

export default GameInteractionComp;
