import { combineReducers } from 'redux';
import gameSettings from './GameSettings';
import gameAnswers from './GameAnswers';
import gameCurrentAnswer from './GameCurrentAnswer';
import gameScore from './GameScore';

const gameInfo = combineReducers({
  gameSettings,
  gameAnswers,
  gameCurrentAnswer,
  gameScore,
});

export default gameInfo;
