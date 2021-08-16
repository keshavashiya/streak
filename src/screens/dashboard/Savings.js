/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { useInjectSaga } from 'redux-injectors'; // useInjectReducer

import { SvgXml } from 'react-native-svg';
import { svgIcon } from '../../../assets/svgfiles';

import saga from '../createProfile/store/saga';
import { name, actions } from '../createProfile/store/slice';

import CardView from '../../components/Cardview';

const Savings = ({ navigation, route }) => {
	useInjectSaga({ key: name, saga });

	const dispatch = useDispatch();

	const { Reducer } = useSelector(
		reducer => ({
			Reducer: reducer.profile.profile,
		}),
		shallowEqual,
	);

	const { createProfileSuccess, createProfileError, createProfileLoading } = Reducer;

	const [profile, setProfile] = useState(null);

	useEffect(() => {
		if (createProfileSuccess) {
			setProfile(createProfileSuccess);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<View style={{ flex: 1, padding: 12 }}>
			<CardView style={{ borderRadius: 5, backgroundColor: '#F8F5FB' }}>
				<View style={{ flex: 1, padding: 20 }}>
					<Text style={{ color: '#112854', fontSize: 18, fontWeight: 'bold' }}>
						{profile && profile.firstName ? profile.firstName : 'Andy'}'s saving
					</Text>
					<Text
						style={{ color: '#5682AB', fontSize: 18, fontWeight: 'bold', marginTop: 16, marginBottom: 20 }}>
						Saved a total of <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>₹6,480</Text>{' '}
						this month and is close to achieving one goal
					</Text>
					<CardView style={{ borderRadius: 5, backgroundColor: '#FFFFFF' }}>
						<View style={{ flex: 1, padding: 20, flexDirection: 'row' }}>
							<View style={{ flexDirection: 'column' }}>
								<Divider style={{ width: 5, height: '100%', borderRadius: 5 }} />
							</View>
							<View style={{ flex: 1, flexDirection: 'column', marginLeft: 12 }}>
								<Text style={{ color: '#31446B', fontSize: 18, fontWeight: 'bold', marginBottom: 8 }}>
									Playstation 5{' '}
								</Text>
								<Text style={{ color: '#5682AB', fontSize: 18, fontWeight: 'bold' }}>
									<Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>
										₹36,480 saved
									</Text>{' '}
									of ₹40,000 goal
								</Text>
							</View>
						</View>
					</CardView>
				</View>
				<Divider style={{ height: 1.5 }} />
				<View style={{ flex: 1, flexDirection: 'row', padding: 20, backgroundColor: '#EEF1F3' }}>
					<Text style={{ fontSize: 18, color: '#5770A4' }}>
						Add and view goals <SvgXml xml={svgIcon.arrowTwo} style={{}} />
					</Text>
				</View>
			</CardView>
		</View>
	);
};

export default Savings;

const styles = StyleSheet.create({});
