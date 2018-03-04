// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
// import MainQuestionComp from '../components/MainQuestionComp';
// import * as actionCreators from '../ActionCreators';
//
// // const mapDispatchToProps = dispatch => ({
// //   dispatch: (currentAnswer) => {
// //     dispatch(updateCurrentAnswer(currentAnswer));
// //   },
// // });
// function mapStateToProps(state) {
//   return {
//     posts: state.posts,
//     comments: state.comments
//   }
// }
//
// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(actionCreators, dispatch);
// }
//
// export const MainQuestionContainer = connect(() => ({}), mapDispatchToProps)(MainQuestionComp);
import { connect } from 'react-redux';
import MainQuestionComp from '../components/MainQuestionComp';

function mapStateToProps(state) {
  return {
    currentAnswer: state.currentAnswer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // updateCurrentAnswer: currentAnswer => dispatch({ type: 'UPDATE_CURRENT_ANSWER', currentAnswer }),
    // onEmailChanged: (email) => dispatch({ type: 'EMAIL_CHANGED', payload: email }),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainQuestionComp)
