// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import CurrentQuestionComp from '../components/CurrentQuestionComp';
// import * as actionCreators from '../ActionCreators';
//
// // const mapDispatchToProps = dispatch => ({
// //   dispatch: (currentAnswer) => {
// //     dispatch(updateCurrentAnswer(currentAnswer));
// //   },
// // });
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }
//
// export const CurrentQuestionContainer = connect(() => ({}), mapDispatchToProps)(CurrentQuestionComp);
import { connect } from 'react-redux';
import CurrentQuestionComp from '../components/CurrentQuestionComp';

function mapStateToProps(state) {
  return {
    currentAnswer: state.currentAnswer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    updateCurrentAnswer: currentAnswer => dispatch({ type: 'UPDATE_CURRENT_ANSWER', currentAnswer }),
    // onEmailChanged: (email) => dispatch({ type: 'EMAIL_CHANGED', payload: email }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrentQuestionComp)
