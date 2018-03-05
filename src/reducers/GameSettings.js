import * as types from '../constants/ActionTypes';

const initialState = {
  gameId: '',
  gameNoOfQuestions: '',
  gameTable: '',
  gameOperator: '',
  gameQuestionTime: '',
  currentAnswer: '',
  gameInProgress: false,
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
        gameInProgress: action.gameInProgress,
      };
    case types.START_GAME:
      return {
        ...state,
        gameInProgress: true,
      };
    case types.END_GAME:
      return {
        ...state,
        gameInProgress: false,
      };
    default:
      return state;
  }
};

export default gameSettings;
