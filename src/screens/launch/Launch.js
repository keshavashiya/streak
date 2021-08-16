/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { StyleSheet, View, StatusBar, SafeAreaView } from 'react-native';

import { SvgXml } from 'react-native-svg';

import { useDispatch } from 'react-redux';

import { useInjectSaga } from 'redux-injectors'; // useInjectReducer

import sagaApp from '../../services/store/saga';
import { name as nameApp, actions as actionsApp } from '../../services/store/slice';

import { svgIcon } from '../../../assets/svgfiles';
import useAppTheme from '../../theme/context';

const Launch = () => {
	useInjectSaga({ key: nameApp, saga: sagaApp });

	const { theme } = useAppTheme();

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(actionsApp.state());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#500061' }}>
			<StatusBar barStyle="light-content" />
			<View style={styles.container}>
				<SvgXml xml={svgIcon.Logo} />
			</View>
		</SafeAreaView>
	);
};

export default Launch;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#500061',
	},
});
