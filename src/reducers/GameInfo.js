import * as types from '../constants/ActionTypes';

const gameInfo = (state = [], action) => {
  switch (action.type) {
    case types.SAVE_GAME_SETTINGS:
      return {
        ...state,
        gameId: action.gameId,
        gameNoOfQuestions: action.gameNoOfQuestions,
        gameTable: action.gameTable,
        gameOperator: action.gameOperator,
        gameQuestionTime: action.gameQuestionTime,
      };
    case types.UPDATE_CURRENT_ANSWER:
      return {
        ...state,
        currentAnswer: action.currentAnswer,
      };
    default:
      return state;
  }
};

export default gameInfo;
