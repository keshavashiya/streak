import { combineReducers } from '@reduxjs/toolkit';

/** App */

import appReducers from '../services/store';

import profileReducers from '../screens/createProfile/store';
import gameReducers from '../screens/dashboard/store';

const createReducer = asyncReducers =>
	combineReducers({
		...asyncReducers,

		app: appReducers,
		profile: profileReducers,
		game: gameReducers,
	});

export default createReducer;
