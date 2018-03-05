import React from 'react';
import PropTypes from 'prop-types';
import QuestionsResultsContainer from '../containers/QuestionsResultsContainer';

// const GameFeedbackComp = (props) => {
const GameFeedbackComp = (props) => {
  return (
    <section id="game-feedback-area">
      Game Feedback Comp
      <QuestionsResultsContainer gameAnswers={props.gameAnswers} />
    </section>
  );
};

export default GameFeedbackComp;
