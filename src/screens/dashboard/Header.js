/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import { Divider } from 'react-native-paper';
import { useSelector, shallowEqual } from 'react-redux';

import { useInjectSaga } from 'redux-injectors'; // useInjectReducer

import { SvgXml } from 'react-native-svg';
import { svgIcon } from '../../../assets/svgfiles';

import CardView from '../../components/Cardview';

import saga from '../createProfile/store/saga';
import { name } from '../createProfile/store/slice';

import Transactions from './Transactions';

const Header = ({ navigation, route }) => {
	useInjectSaga({ key: name, saga });

	const { Reducer } = useSelector(
		reducer => ({
			Reducer: reducer.profile.profile,
		}),
		shallowEqual,
	);

	const { createProfileSuccess } = Reducer;

	const [profile, setProfile] = useState(null);

	useEffect(() => {
		if (createProfileSuccess) {
			setProfile(createProfileSuccess);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<View
			style={{
				flex: 1,
				minHeight: Dimensions.get('window').height,
			}}>
			<View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}>
				<SvgXml xml={svgIcon.bg} style={{}} />
			</View>
			<View
				style={{
					padding: 12,
					marginTop: 40,
				}}>
				<View style={{ flexDirection: 'row', marginBottom: 18 }}>
					<View style={{ flexDirection: 'column' }}>
						<SvgXml xml={svgIcon.Logo} style={{}} />
					</View>
					<View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
						<View
							style={{
								flex: 1,
								flexDirection: 'row',
								backgroundColor: '#430754',
								justifyContent: 'center',
								alignItems: 'center',
								paddingHorizontal: 12,
								borderRadius: 25,
							}}>
							<SvgXml xml={svgIcon.user} style={{}} />
							<Text style={{ paddingHorizontal: 6, color: '#fff', fontSize: 16, fontWeight: 'bold' }}>
								{profile && profile.firstName ? profile.firstName : 'Andy'}
							</Text>
							<SvgXml xml={svgIcon.downArrow} style={{}} />
						</View>
					</View>
				</View>
				<CardView style={{ borderRadius: 5 }}>
					<View style={{ flex: 1, padding: 20, flexDirection: 'row' }}>
						<View style={{ flex: 1, flexDirection: 'column' }}>
							<Text style={{ fontFamily: 'Barlow', fontSize: 18, marginBottom: 8, color: '#9B9B9B' }}>
								Balance
							</Text>
							<Text style={{ fontFamily: 'IBM Plex Mono', fontSize: 30, color: '#000' }}>₹12,000</Text>
						</View>
						<View style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
							<SvgXml xml={svgIcon.eye} style={{}} />
						</View>
					</View>
					<Divider style={{ height: 1.5 }} />
					<View style={{ flex: 1, padding: 20, flexDirection: 'row' }}>
						<View style={{ flex: 1, flexDirection: 'column' }}>
							<Text
								style={{
									fontFamily: 'Barlow',
									fontSize: 18,
									marginBottom: 8,
									color: 'rgba(104, 26, 96, 0.6)',
								}}>
								Savings
							</Text>
							<Text style={{ fontFamily: 'IBM Plex Mono', fontSize: 30, color: '#681A60' }}>₹36,800</Text>
						</View>
						<View style={{ flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'flex-end' }}>
							<SvgXml xml={svgIcon.saveMore} style={{}} />
						</View>
					</View>
				</CardView>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}>
					<SvgXml xml={svgIcon.scan} style={{}} />
					<SvgXml xml={svgIcon.btnOne} style={{}} />
					<SvgXml xml={svgIcon.btnTwo} style={{}} />
				</View>
			</View>
			<View>
				<Transactions />
			</View>
		</View>
	);
};

export default Header;

const styles = StyleSheet.create({});
