import { combineReducers } from '@reduxjs/toolkit';
import { reducer as profile } from './slice';

const profileReducers = combineReducers({
	profile,
});

export default profileReducers;
