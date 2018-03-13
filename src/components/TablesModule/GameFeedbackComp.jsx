import React from 'react';
import PropTypes from 'prop-types';
import QuestionsResultsContainer from '../../containers/TablesModule/QuestionsResultsContainer';
import GameScoreContainer from '../../containers/TablesModule/GameScoreContainer';

// const GameFeedbackComp = (props) => {
const GameFeedbackComp = (props) => {
  return (
    <section id="game-feedback-area">
      <GameScoreContainer />
      <br />
      <QuestionsResultsContainer gameAnswers={props.gameAnswers} />
    </section>
  );
};

export default GameFeedbackComp;
