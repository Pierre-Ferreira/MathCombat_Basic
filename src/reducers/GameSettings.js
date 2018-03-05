import * as types from '../constants/ActionTypes';

const initialState = {
  gameId: '',
  gameNoOfQuestions: '',
  gameTable: '',
  gameOperator: '',
  gameQuestionTime: '',
  currentAnswer: '',
};

const gameSettings = (state = initialState, action) => {
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
    default:
      return state;
  }
};

export default gameSettings;
