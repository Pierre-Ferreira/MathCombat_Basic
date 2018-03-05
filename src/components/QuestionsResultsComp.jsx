import React from 'react';
import PropTypes from 'prop-types';
import './QuestionsResultsComp.css'


const QuestionsResultsComp = (props) => {
  return (
    <section id="questions-results-area">
      <ul className="question-results-list">
        {props.gameAnswers.map((value, index) =>
          <li key={index} style={{ backgroundColor: value.answeredCorrectly ? 'greenyellow' : 'red' }}>{value.questionId}) {value.questionOperand1} x {value.questionOperand2} = {value.answerGiven} ({value.correctAnswer})</li>)
        }
      </ul>
    </section>
  );
};

export default QuestionsResultsComp;
