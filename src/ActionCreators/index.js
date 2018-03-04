import * as types from '../constants/ActionTypes';

const questionsAnswered = 0;

export const saveGameSettings = (
  gameId,
  gameNoOfQuestions,
  gameTable,
  gameOperator,
  gameQuestionTime,
) => ({
  type: types.SAVE_GAME_SETTINGS,
  gameId,
  gameNoOfQuestions,
  gameTable,
  gameOperator,
  gameQuestionTime,
});

export const updateCurrentAnswer = currentAnswer => ({
  type: types.UPDATE_CURRENT_ANSWER,
  currentAnswer,
});
