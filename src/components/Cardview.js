import React from 'react';
import { View, StyleSheet } from 'react-native';

const CardView = Props => {
	return <View style={{ ...styles.CardStyle, ...Props.style }}>{Props.children}</View>;
};
export default CardView;

const styles = StyleSheet.create({
	CardStyle: {
		elevation: 2,
		// marginVertical: 10,
		marginBottom: 20,
		backgroundColor: '#ffffff',
	},
});
