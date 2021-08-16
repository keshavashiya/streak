/* eslint-disable no-unused-vars */
/* eslint-disable no-func-assign */
/* eslint-disable react-native/no-inline-styles */
import React, { useImperativeHandle, forwardRef, useState, useRef } from 'react';

// import {  } from 'react-native-paper';
import { View, TextInput, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { IconX, ICON_TYPE } from '../icons';
import useAppTheme from '../theme/context';
import { svgIcon } from '../../assets/svgfiles';

function Input({ style, label, ...other }, ref) {
	const { theme } = useAppTheme();

	const inputRef = useRef();

	useImperativeHandle(ref, () => ({
		focus: () => {
			inputRef.current.focus();
		},
		blur: () => {
			inputRef.current.blur();
		},
	}));

	return (
		<View style={[styles.textInputView(theme)]}>
			<Text style={styles.text(theme)}>{label}</Text>
			<TextInput ref={inputRef} {...other} style={[style, styles.textInput(theme)]} />
		</View>
	);
}

Input = forwardRef(Input);

export function PasswordInputX({ style, label, ...other }, ref) {
	const { theme } = useAppTheme();
	const thisRef = useRef();
	useImperativeHandle(ref, () => ({
		focus: () => {
			thisRef.current.focus();
		},
	}));

	const [visible, toggleVisibility] = useState(false);

	const toggle = () => {
		toggleVisibility(!visible);
	};

	return (
		<View
			style={[
				styles.textInputView(theme),
				{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
			]}>
			<View style={{ flex: 1, flexDirection: 'column' }}>
				<Text style={{ color: theme.colors.placeholder, fontSize: 16 }}>{label}</Text>
				<TextInput ref={thisRef} {...other} secureTextEntry={!visible} style={[styles.textInput(theme)]} />
			</View>
			<View style={{ flexDirection: 'column' }}>
				<TouchableOpacity onPress={toggle}>
					<IconX origin={ICON_TYPE.FEATHER_ICONS} name={visible ? 'eye' : 'eye-off'} size={20} />
				</TouchableOpacity>
			</View>
		</View>
	);
}

PasswordInputX = React.memo(forwardRef(PasswordInputX));

export function PasswordInputWithIcon({ style, label, pressFingerprint, selectedOption, ...other }, ref) {
	const { theme } = useAppTheme();
	const passwordRef = useRef();
	useImperativeHandle(ref, () => ({
		focus: () => {
			passwordRef.current.focus();
		},
	}));

	const [visible, toggleVisibility] = useState(false);

	const toggle = () => {
		toggleVisibility(!visible);
	};

	return (
		<View
			style={[
				styles.textInputView(theme),
				{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' },
			]}>
			<View style={{ flex: 1, flexDirection: 'column' }}>
				<Text style={{ color: theme.colors.placeholder, fontSize: 16 }}>{label}</Text>
				<TextInput ref={passwordRef} {...other} secureTextEntry={!visible} style={[styles.textInput(theme)]} />
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
				<TouchableOpacity onPress={toggle} style={{ margin: 5, justifyContent: 'center' }}>
					<IconX origin={ICON_TYPE.FEATHER_ICONS} name={visible ? 'eye' : 'eye-off'} size={20} />
				</TouchableOpacity>
				{/* <TouchableOpacity style={{ marginLeft: 10, marginTop: 4 }} onPress={pressFingerprint}>
					<SvgXml xml={selectedOption ? svgIcon.Fingerprint : svgIcon.FaceLogo} height={25} width={25} />
				</TouchableOpacity> */}
			</View>
		</View>
	);
}

PasswordInputWithIcon = React.memo(forwardRef(PasswordInputWithIcon));

export default React.memo(Input);

const styles = StyleSheet.create({
	textInputView: theme => ({
		borderRadius: 5,
		marginTop: 12,
		height: 78,
		fontSize: 18,
		backgroundColor: theme.colors.surface,
		padding: 16,
		//justifyContent: 'center',
	}),
	text: theme => ({
		color: theme.colors.placeholder,
		fontSize: 16,
	}),
	textInput: theme => ({
		fontSize: 18,
	}),
});
