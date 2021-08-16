/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function NoItem({ style, msg }) {
	return (
		<View style={{ ...styles.LoadingContainer, ...style }}>
			<Text style={{ color: '#000', fontSize: 20, fontWeight: '700' }}> {msg} </Text>
		</View>
	);
}

export default NoItem;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	LoadingContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
});
