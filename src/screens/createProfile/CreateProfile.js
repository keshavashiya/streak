/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Text, ScrollView, SafeAreaView } from 'react-native';
import { HelperText, ActivityIndicator, Divider, TextInput } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';

import { svgIcon } from '../../../assets/svgfiles';

import useAppTheme from '../../theme/context';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { useInjectSaga } from 'redux-injectors'; // useInjectReducer
import { ButtonX } from '../../components';

import Routes from '../../navigation/routes';
import NavigationService from '../../navigation';

import { Snackbar } from '../components';
import { validateEmail, validateNameField, validateMobile } from '../../helper';

import saga from './store/saga';
import { name, actions } from './store/slice';

const CreateProfile = ({ navigation, route }) => {
	useInjectSaga({ key: name, saga });

	const dispatch = useDispatch();

	const { theme } = useAppTheme();

	const { Reducer } = useSelector(
		reducer => ({
			Reducer: reducer.profile.profile,
		}),
		shallowEqual,
	);

	const { createProfileSuccess, createProfileError, createProfileLoading } = Reducer;

	const InitialState = {
		values: {},
	};

	const [formState, setFormState] = useState(InitialState);
	const [btnLoader, setBtnLoder] = useState(false);

	const [visible, setVisible] = useState(false);

	const [firstNameError, setFirstNameError] = useState(null);
	const [lastNameError, setLastNameError] = useState(null);
	const [emailError, setEmailError] = useState(null);
	const [mobileError, setMobileError] = useState(null);

	useEffect(() => {
		if (createProfileLoading) {
			setBtnLoder(true);
		} else {
			setBtnLoder(false);
		}
	}, [createProfileLoading]);

	useEffect(() => {
		navigation.addListener('blur', () => {
			// dispatch(actions.reset());
			setFormState(InitialState);
			setFirstNameError(null);
			setLastNameError(null);
			setEmailError(null);
			setMobileError(null);
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const onToggleSnackBar = () => setVisible(true);

	const onDismissSnackBar = () => setVisible(false);

	const handleChange = (label, text) => {
		if (label === 'mobileNumber') {
			const filteredText = text.replace(/\D/gm, '');
			if (!isNaN(filteredText)) {
				setFormState(frmState => ({
					...frmState,
					values: {
						...frmState.values,
						[label]: filteredText,
					},
				}));
			}
			setMobileError(null);
		} else {
			setFormState(frmState => ({
				...frmState,
				values: {
					...frmState.values,
					[label]: text,
				},
			}));
			if (label === 'firstName') {
				setFirstNameError(null);
			} else if (label === 'lastName') {
				setLastNameError(null);
			} else if (label === 'email') {
				setEmailError(null);
			}
		}
	};

	useEffect(() => {
		if (createProfileSuccess) {
			NavigationService.navigate(Routes.MAIN_APP, {
				screen: Routes.DASHBOARD_SCREEN,
			});
		}
	}, [createProfileSuccess]);

	useEffect(() => {
		if (createProfileError) {
			onToggleSnackBar();
		}
	}, [createProfileError]);

	const handleSubmit = event => {
		event.preventDefault();

		const fNameError = validateNameField(formState.values.firstName);
		const lNameError = validateNameField(formState.values.lastName);
		const eError = validateEmail(formState.values.email);
		const mError = validateMobile(formState.values.mobileNumber, 10);

		if (fNameError || lNameError || eError || mError) {
			setFirstNameError(fNameError);
			setLastNameError(lNameError);
			setEmailError(eError);
			setMobileError(mError);
			return;
		}
		dispatch(actions.createProfile(formState.values));
	};

	return (
		<SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }}>
			<ScrollView style={{ backgroundColor: theme.colors.background }} keyboardShouldPersistTaps="always">
				<KeyboardAvoidingView
					// keyboardVerticalOffset={10}
					// behavior={'position'}
					//   behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
					style={styles.container}>
					{/* <TouchableWithoutFeedback onPress={Keyboard.dismiss}> */}
					<View style={{ flex: 1, flexDirection: 'row' }}>
						<View style={{ flex: 1, flexDirection: 'column' }}>
							<Text style={styles.header}>Profile</Text>
						</View>
						<View style={{ flexDirection: 'column' }}>
							<SvgXml xml={svgIcon.close} />
						</View>
					</View>
					<View style={{ marginTop: 20, marginBottom: 30 }}>
						<Text style={{ fontSize: 16 }}>Enter your details so we can</Text>
						<Text style={{ fontSize: 16 }}>get to know you better.</Text>
					</View>
					<Divider style={{ height: 1.5, marginBottom: 28 }} />
					<View style={{ marginBottom: 20 }}>
						<Text style={{ color: '#000', fontSize: 14, marginBottom: 12 }}>First Name</Text>
						<TextInput
							style={{}}
							mode="outlined"
							placeholder="First Name"
							maxLength={30}
							value={formState.values.firstName || ''}
							onChangeText={text => handleChange('firstName', text)}
							error={firstNameError}
						/>
						{firstNameError && <HelperText type="error">{firstNameError}</HelperText>}
					</View>
					<View style={{ marginBottom: 20 }}>
						<Text style={{ color: '#000', fontSize: 14, marginBottom: 12 }}>Last Name</Text>
						<TextInput
							style={{}}
							mode="outlined"
							placeholder="Last Name"
							maxLength={30}
							value={formState.values.lastName || ''}
							onChangeText={text => handleChange('lastName', text)}
							error={lastNameError}
						/>
						{lastNameError && <HelperText type="error">{lastNameError}</HelperText>}
					</View>
					<View style={{ marginBottom: 20 }}>
						<Text style={{ color: '#000', fontSize: 14, marginBottom: 12 }}>Email</Text>
						<TextInput
							style={{}}
							mode="outlined"
							placeholder="Email"
							maxLength={50}
							keyboardType="email-address"
							value={formState.values.email || ''}
							onChangeText={text => handleChange('email', text)}
							error={emailError}
						/>
						{emailError && <HelperText type="error">{emailError}</HelperText>}
					</View>
					<View style={{ marginBottom: 20 }}>
						<Text style={{ color: '#000', fontSize: 14, marginBottom: 12 }}>Mobile Number</Text>
						<TextInput
							style={{}}
							mode="outlined"
							maxLength={10}
							placeholder="Mobile Number"
							keyboardType="number-pad"
							value={formState.values.mobileNumber || ''}
							onChangeText={text => handleChange('mobileNumber', text)}
							error={mobileError}
						/>
						{mobileError && <HelperText type="error">{mobileError}</HelperText>}
						<Text
							style={{
								flex: 1,
								marginTop: 18,
								textAlign: 'center',
							}}>
							OTP verification in next step
						</Text>
					</View>
					{btnLoader ? (
						<View
							style={{
								backgroundColor: '#500061',
								borderRadius: 8,
								width: '100%',
								height: 56,
								justifyContent: 'center',
								marginBottom: 36,
								marginTop: 30,
							}}>
							<ActivityIndicator animating={true} color={'#fff'} />
						</View>
					) : (
						<View style={{ marginBottom: 36 }}>
							<ButtonX color="#500061" label="Create Profile" onPress={handleSubmit} />
						</View>
					)}
				</KeyboardAvoidingView>
			</ScrollView>
			{createProfileError && (
				<Snackbar
					onDismissSnackBar={onDismissSnackBar}
					visible={visible}
					message={'Error while creating profile'}
				/>
			)}
		</SafeAreaView>
	);
};

export default CreateProfile;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		// marginTop: 48,
		// paddingTop: 24,
		padding: 21,
	},
	inner: {
		// padding: 24,
		flex: 1,
		justifyContent: 'space-around',
	},
	header: {
		fontSize: 22,
		color: '#500061',
	},
	text: {
		fontSize: 18,
		// marginTop: 6,
		// paddingTop: 24,
		paddingLeft: 24,
		color: 'gray',
	},
	textInput: {
		borderRadius: 10,
		// borderTopLeftRadius: 0,
		// borderTopRightRadius: 0,
		borderBottomWidth: 0,
		// height: 57,
		overflow: 'hidden',
		marginTop: 12,
		fontSize: 18,
		// backgroundColor: '#fff',
	},
	smalltext: {
		fontSize: 12,
		marginTop: 16,
		// paddingTop: 24,
		// paddingLeft: 24,
		color: 'gray',
	},
	terms: {
		fontSize: 12,
		// marginTop: 16,
		// paddingTop: 24,
		paddingLeft: 24,
		color: 'gray',
	},
	nameView: {
		flexDirection: 'row',
	},
	fNameView: {
		flex: 1,
		flexDirection: 'column',
		marginRight: 6,
	},
	lNameView: {
		flex: 1,
		flexDirection: 'column',
		marginLeft: 6,
	},
	btnContainer: {
		// backgroundColor: 'white',
		paddingTop: 32,
		// justifyContent: 'center',
		alignItems: 'center',
	},
	button: theme => ({
		// flex: 1,
		width: '100%',
		// backgroundColor: theme.colors.primary,
		marginTop: 16,
	}),
});
