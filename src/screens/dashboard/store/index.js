import { combineReducers } from '@reduxjs/toolkit';
import { reducer as game } from './slice';

const gameReducers = combineReducers({
	game,
});

export default gameReducers;
