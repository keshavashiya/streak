import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Routes from './routes';

import CreateProfile from '../screens/createProfile/CreateProfile';
import Dashboard from '../screens/dashboard/Dashboard';

const Stack = createStackNavigator();

export default props => {
	return (
		<Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={Routes.CREATE_PROFILE_SCREEN}>
			<Stack.Screen name={Routes.CREATE_PROFILE_SCREEN} component={CreateProfile} />
			<Stack.Screen name={Routes.DASHBOARD_SCREEN} component={Dashboard} />
		</Stack.Navigator>
	);
};
