import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ObjecttoQueryString } from '../helper/overlay';

// import { GAME_API_GATEWAY } from '../apiurl/baseurl';

const client = axios.create({
	// baseURL: GAME_API_GATEWAY,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
	timeout: 100000,
});

// Function that will be called to refresh authorization
const refreshAuthLogic = async failedRequest => {
	const queryParams = {};
	const queryStirng = ObjecttoQueryString(queryParams);
	return axios
		.post('/auth', queryStirng, {
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded',
			},
		})
		.then(async tokenRefreshResponse => {
			await AsyncStorage.setItem('accesstoken', JSON.stringify(tokenRefreshResponse.data.access_token));
			await AsyncStorage.setItem('refreshtoken', JSON.stringify(tokenRefreshResponse.data.refresh_token));
			failedRequest.response.config.headers.authorizeToken = `Bearer ${tokenRefreshResponse.data.access_token}`;
			return Promise.resolve();
		})
		.catch(async e => {
			await AsyncStorage.removeItem('accesstoken');
			await AsyncStorage.removeItem('user');
		});
};
// Instantiate the interceptor (you can chain it as it returns the axios instance)
createAuthRefreshInterceptor(client, refreshAuthLogic, { skipWhileRefreshing: false });

client.interceptors.request.use(
	async config => {
		const token = await AsyncStorage.getItem('accesstoken');
		if (token) {
			config.headers.authorizeToken = `Bearer ${JSON.parse(token)}`;
		}
		return config;
	},
	err => {
		return Promise.reject(err);
	},
);

client.interceptors.response.use(
	response => {
		// Return a successful response back to the calling service
		return response;
	},
	async error => {
		const isRefresh = error.config.url.indexOf('/auth');
		if (isRefresh > -1) {
			await AsyncStorage.removeItem('accesstoken');
			await AsyncStorage.removeItem('user');
		}
		if (error && error.response && error.response.status === 403) {
			if (error.response.data.errorMessage === 'Invalid Token') {
				refreshAuthLogic(error);
			} else {
				return Promise.reject(error);
			}
		}

		// Return any error which is not due to authentication back to the calling service
		if (error.response.status !== 401) {
			return new Promise((resolve, reject) => {
				reject(error);
			});
		}
	},
);

/**
 * Request Wrapper with default success/error actions
 */
const request = async options => {
	const onSuccess = response => {
		return response;
	};

	const onError = error => {
		return Promise.reject(error.response || error.message);
	};

	try {
		const response = await client(options);
		return onSuccess(response);
	} catch (error) {
		return onError(error);
	}
};

export default request;
