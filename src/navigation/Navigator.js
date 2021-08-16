import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useEffect } from 'react';
import { isMountedRef, navigationRef } from './index';
import Routes from './routes';
import LaunchScreen from '../screens/launch/Launch';
import MainStack from './MainStack';
import { useAppContext } from '../services/auth/AppContext';
import { APP_STATE } from '../constants';

const Stack = createStackNavigator();

function Navigator() {
	/**
	 * Hide the splash screen on mount
	 * Keep track of nav container mounts for usage of {@link NavigationService}
	 */

	useEffect(() => {
		isMountedRef.current = true;
		// SplashScreen.hide({ duration: 250 });
		return () => {
			isMountedRef.current = false;
		};
	}, []);

	const { state } = useAppContext();

	return (
		<NavigationContainer ref={navigationRef}>
			<Stack.Navigator screenOptions={{ headerShown: false }}>
				{state === APP_STATE.PUBLIC ? (
					<Stack.Screen name={Routes.MAIN_APP} component={MainStack} />
				) : (
					<Stack.Screen name={Routes.LOADING} component={LaunchScreen} />
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default Navigator;
