import React, { useEffect, useContext, useState } from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import { useInjectSaga } from 'redux-injectors'; // useInjectReducer

import saga from '../store/saga';
import { name } from '../store/slice';

const AppStateContext = React.createContext();

export const useAppContext = () => {
	return useContext(AppStateContext);
};

export const AppContextProvider = props => {
	useInjectSaga({ key: name, saga });

	const { stateReducer } = useSelector(
		reducer => ({
			stateReducer: reducer.app.app,
		}),
		shallowEqual,
	);

	const [state, setState] = useState(null);

	useEffect(() => {
		if (stateReducer.stateSuccess) {
			setState(stateReducer.stateSuccess);
		}
	}, [stateReducer]);

	return (
		<AppStateContext.Provider
			value={{
				state,
			}}>
			{props.children}
		</AppStateContext.Provider>
	);
};

export default AppStateContext;
