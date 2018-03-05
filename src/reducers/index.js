import { combineReducers } from 'redux';
import gameSettings from './GameSettings';
import gameAnswers from './GameAnswers';
import gameCurrentAnswer from './GameCurrentAnswer';

const gameInfo = combineReducers({
  gameSettings,
  gameAnswers,
  gameCurrentAnswer,
});

export default gameInfo;
