import React from 'react';
import { Button } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';

export default ({
	label,
	color,
	style,
	mode,
	zeroMargin,
	onPress,
	loading,
	contentStyle,
	uppercase,
	disable,
	...other
}) => {
	return (
		<View style={styles.btnContainer}>
			<Button
				contentStyle={{ ...styles.button, ...style }}
				disabled={disable}
				uppercase={uppercase || false}
				// style={[{ marginTop: zeroMargin ? 0 : 20 }, style]}
				loading={loading}
				mode={mode || 'contained'}
				// contentStyle={{ padding: 8, ...contentStyle }}
				color={color}
				onPress={!loading ? onPress : null}
				{...other}>
				{label}
			</Button>
		</View>
	);
};

const styles = StyleSheet.create({
	btnContainer: {
		// backgroundColor: 'white',
		paddingTop: 30,
		// justifyContent: 'center',
		// alignItems: 'center',
	},
	button: {
		// flex: 1,
		borderRadius: 8,
		width: '100%',
		height: 56,
		justifyContent: 'center',
		// alignItems: 'center',
		// borderColor: '#fff',
		// borderWidth: 2,
	},
});
