import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
	createProfileLoading: false,
	createProfileSuccess: null,
	createProfileError: null,
};

const slice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		createProfile(state) {
			state.createProfileLoading = true;
		},
		createProfileSuccess(state, action) {
			state.createProfileLoading = false;
			state.createProfileError = null;
			state.createProfileSuccess = action.payload;
		},
		createProfileError(state, action) {
			state.createProfileLoading = false;
			state.createProfileError = action.payload;
			state.createProfileSuccess = null;
		},
		reset(state) {
			state.createProfileLoading = false;
			state.createProfileError = null;
			state.createProfileSuccess = null;
		},
	},
	extraReducers: {},
});

export const { name, reducer, actions } = slice;
// export default slice.reducer;
