import * as types from '../constants/ActionTypes';


const gameCurrentAnswer = (state = {}, action) => {
  switch (action.type) {
    case types.UPDATE_CURRENT_ANSWER:
      return {
        ...state,
        currentAnswer: action.currentAnswer,
      };
    case types.CLEAR_GAME: {
      state = {};
    }
    default:
      return state;
  }
};

export default gameCurrentAnswer;
