import React from 'react';
import PropTypes from 'prop-types';
import './GameScoreComp.css'


const GameScoreComp = (props) => {
  return (
    <section id="game-score-area">
      Game Score Comp
      <div>Korrek: {props.numberOfCorrect} </div>
      <div> Persentasie: {props.percentageCorrect}% </div>
    </section>
  );
};

export default GameScoreComp;
