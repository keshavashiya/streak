import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	gameScoreLoading: false,
	gameScoreSuccess: null,
	gameScoreError: null,
};

const slice = createSlice({
	name: 'game',
	initialState,
	reducers: {
		gameScore(state) {
			state.gameScoreLoading = true;
		},
		gameScoreSuccess(state, action) {
			state.gameScoreLoading = false;
			state.gameScoreError = null;
			state.gameScoreSuccess = action.payload;
		},
		gameScoreError(state, action) {
			state.gameScoreLoading = false;
			state.gameScoreError = action.payload;
			state.gameScoreSuccess = null;
		},
		reset(state) {
			state.gameScoreLoading = false;
			state.gameScoreError = null;
			state.gameScoreSuccess = null;
		},
	},
	extraReducers: {},
});

export const { name, reducer, actions } = slice;
// export default slice.reducer;
