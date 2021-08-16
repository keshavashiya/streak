/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { IconX, ICON_TYPE } from '../icons';

export default ({ onPress, icon, color = 'black', iconOrigin = ICON_TYPE.ICONICONS }) => {
	return (
		<TouchableOpacity onPress={onPress}>
			<View style={{ padding: 10 }}>
				<IconX name={icon} origin={iconOrigin} color={color} size={32} />
			</View>
		</TouchableOpacity>
	);
};
