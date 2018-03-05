import React from 'react';
import PropTypes from 'prop-types';
import QuestionsResultsContainer from '../containers/QuestionsResultsContainer';
import GameScoreContainer from '../containers/GameScoreContainer';

// const GameFeedbackComp = (props) => {
const GameFeedbackComp = (props) => {
  return (
    <section id="game-feedback-area">
      Game Feedback Comp
      <GameScoreContainer />
      <br />
      <QuestionsResultsContainer gameAnswers={props.gameAnswers} />
    </section>
  );
};

export default GameFeedbackComp;
