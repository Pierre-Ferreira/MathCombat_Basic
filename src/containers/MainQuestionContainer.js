import { connect } from 'react-redux';
import MainQuestionComp from '../components/MainQuestionComp';

function mapStateToProps(state) {
  return {
    currentAnswer: state.gameCurrentAnswer.currentAnswer,
    numberOfCorrect: state.gameScore.numberOfCorrect,
    percentageCorrect: state.gameScore.percentageCorrect,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveAnswerInfo: answerObject => dispatch({
      type: 'SAVE_ANSWER_INFO',
      answerObject,
    }),
    updateCurrentAnswer: currentAnswer => dispatch({ type: 'UPDATE_CURRENT_ANSWER', currentAnswer }),
    saveGameScore: (numberOfCorrect, percentageCorrect) => dispatch({ type: 'SAVE_GAME_SCORE', numberOfCorrect, percentageCorrect }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainQuestionComp);
