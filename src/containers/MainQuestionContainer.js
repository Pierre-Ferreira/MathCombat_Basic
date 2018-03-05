import { connect } from 'react-redux';
import MainQuestionComp from '../components/MainQuestionComp';

function mapStateToProps(state) {
  return {
    currentAnswer: state.gameCurrentAnswer.currentAnswer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    saveAnswerInfo: answerObject => dispatch({
      type: 'SAVE_ANSWER_INFO',
      answerObject,
    }),
    // onEmailChanged: (email) => dispatch({ type: 'EMAIL_CHANGED', payload: email }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainQuestionComp);
