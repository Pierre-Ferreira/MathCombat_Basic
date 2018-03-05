import { connect } from 'react-redux';
import GameInteractionComp from '../components/GameInteractionComp';

function mapStateToProps(state) {
  return {
    numberOfCorrect: state.gameScore.numberOfCorrect,
    percentageCorrect: state.gameScore.percentageCorrect,
    gameInProgress: state.gameSettings.gameInProgress,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startGame: () => dispatch({ type: 'START_GAME' }),
    endGame: () => dispatch({ type: 'END_GAME' }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(GameInteractionComp);
