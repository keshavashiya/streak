import { takeLatest, put, call } from 'redux-saga/effects';
import { actions } from './slice';

/** * APIs */

// const createProfileApi = async data => {
// 	return request({
// 		url: '',
// 		method: 'POST',
// 		data,
// 	});
// };

/** SAGA */

function* createProfile(data) {
	try {
		const { payload } = data;

		// const res = yield call(createProfileApi, payload);
		if (payload) {
			yield put(actions.createProfileSuccess(payload));
		}
	} catch (error) {
		if (error.data) {
			yield put(
				actions.createProfileError({
					error: error.data,
				}),
			);
		} else if (error.error) {
			yield put(
				actions.createProfileError({
					error: error.error,
				}),
			);
		}
	}
}

export default function* Saga() {
	yield takeLatest(actions.createProfile.type, createProfile);
}
