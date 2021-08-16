import { takeLatest, put, call } from 'redux-saga/effects';
import { actions } from './slice';
import { APP_STATE } from '../../constants';

/** * APIs */

const appApi = async () => {
	return APP_STATE.PUBLIC;
};

/** SAGA */

function* app(data) {
	try {
		const { payload } = data;

		const res = yield call(appApi, payload);

		if (res) {
			yield put(actions.stateSuccess(res));
		} else {
			yield put(actions.stateError(res));
		}
	} catch (error) {
		if (error.data) {
			yield put(
				actions.stateError({
					error: error.data,
				}),
			);
		}
	}
}

export default function* Saga() {
	yield takeLatest(actions.state.type, app);
}
