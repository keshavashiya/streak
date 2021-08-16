/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet } from 'react-native';
import { Snackbar } from 'react-native-paper';
import colors from '../../../theme/Colors';

const SnackBar = props => {
	const { visible, message, onDismissSnackBar } = props;
	return (
		<Snackbar
			duration={3000}
			visible={visible}
			onDismiss={onDismissSnackBar}
			style={{
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: colors.backgroundColor,
			}}
			// action={{
			// 	label: 'Undo',
			// 	onPress: () => {
			// 		// Do something
			// 	},
			// }}
		>
			{message}
		</Snackbar>
	);
};

export default SnackBar;

// eslint-disable-next-line no-unused-vars
const styles = StyleSheet.create({});
