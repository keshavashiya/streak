import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import HeaderButtonX from './HeaderButton';
import NavigationService from '../navigation';
import { ICON_TYPE } from '../icons';

export default ({ color, title, titleColor, arrowColor, navigation }) => {
	const Goback = () => {
		// navigation.goBack();
		NavigationService.goBack();
	};
	return (
		<View style={{ ...styles.container, backgroundColor: color }}>
			<HeaderButtonX
				onPress={Goback}
				color={arrowColor || '#ffffff'}
				icon="arrowleft"
				iconOrigin={ICON_TYPE.ANT_ICON}
			/>
			<View style={{ ...styles.headerViewStyle, backgroundColor: color }}>
				<Text style={{ ...styles.titleStyle, color: titleColor }}>{title}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 60,
		width: '100%',
		justifyContent: 'center',
	},
	headerViewStyle: {
		flex: 1,
		marginHorizontal: 10,
		paddingRight: 50,
		backgroundColor: 'red',
		justifyContent: 'center',
		alignItems: 'center',
	},
	titleStyle: {
		fontSize: 20,
		fontFamily: 'Poppins',
		fontWeight: '400',
		lineHeight: 27,
	},
});
