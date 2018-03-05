import React from 'react';
import PropTypes from 'prop-types';
// import MainQuestionComp from './MainQuestionComp';
import MainQuestionContainer from '../containers/MainQuestionContainer';

class GameInteractionComp extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section id="game-interaction-area">
        Game Interaction Comp
        <MainQuestionContainer />
      </section>
    )
  }
}

export default GameInteractionComp;
