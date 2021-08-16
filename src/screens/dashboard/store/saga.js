import { takeLatest, put, call } from 'redux-saga/effects';
import { actions } from './slice';

import { GAME_API_GATEWAY } from '../../../apiurl/baseurl';
import request from '../../../services/request';

/** * APIs */
const GET_GAME_SCORE_URL = `${GAME_API_GATEWAY}`;

const gameScoreApi = () => {
	return request({
		url: `${GET_GAME_SCORE_URL}`,
		method: 'GET',
	});
};

/** SAGA */

function* gameScore(data) {
	try {
		const { payload } = data;
		const res = yield call(gameScoreApi, payload);
		if (res.data) {
			yield put(actions.gameScoreSuccess(res.data));
		}
	} catch (error) {
		if (error.data) {
			yield put(
				actions.gameScoreError({
					error: error.data,
				}),
			);
		} else if (error.error) {
			yield put(
				actions.gameScoreError({
					error: error.error,
				}),
			);
		}
	}
}

export default function* Saga() {
	yield takeLatest(actions.gameScore.type, gameScore);
}
