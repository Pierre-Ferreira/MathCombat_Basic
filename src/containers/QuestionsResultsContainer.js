import { connect } from 'react-redux';
import QuestionsResultsComp from '../components/QuestionsResultsComp';

function mapStateToProps(state) {
  return {
    gameAnswers: state.gameAnswers,
    currentAnswer: state.gameCurrentAnswer.currentAnswer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // saveAnswerInfo: answerObject => dispatch({
    //   type: 'SAVE_ANSWER_INFO',
    //   answerObject,
    // }),
    // onEmailChanged: (email) => dispatch({ type: 'EMAIL_CHANGED', payload: email }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsResultsComp);
