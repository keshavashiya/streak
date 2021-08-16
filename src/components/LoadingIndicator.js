/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, StyleSheet, ActivityIndicator, Text } from 'react-native';

function LoadingIndicator({ style }) {
	return (
		<View style={{ ...styles.LoadingContainer, ...style }}>
			<ActivityIndicator size="large" color="#007BFF" />
			<Text style={{ marginHorizontal: 10 }}> Please Wait </Text>
		</View>
	);
}

export default LoadingIndicator;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#ffffff',
	},
	LoadingContainer: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#ffffff',
	},
});
