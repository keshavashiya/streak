/* eslint-disable react-native/no-inline-styles */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider, Button } from 'react-native-paper';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { useInjectSaga } from 'redux-injectors'; // useInjectReducer

import { SvgXml } from 'react-native-svg';
import { svgIcon } from '../../../assets/svgfiles';
import { ButtonX } from '../../components';

import saga from './store/saga';
import { name, actions } from './store/slice';

import CardView from '../../components/Cardview';

const Game = () => {
	useInjectSaga({ key: name, saga });

	const dispatch = useDispatch();

	const { Reducer } = useSelector(
		reducer => ({
			Reducer: reducer.game.game,
		}),
		shallowEqual,
	);

	const { gameScoreSuccess, gameScoreError, gameScoreLoading } = Reducer;

	const [gameScore, setGameScore] = useState([3, 8, 1, 4]);

	useEffect(() => {
		dispatch(actions.gameScore());
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (gameScoreSuccess) {
			setGameScore(gameScoreSuccess.numbers);
		}
	}, [gameScoreSuccess]);

	useEffect(() => {
		if (gameScoreError) {
			console.log(gameScoreError);
		}
	}, [gameScoreError]);

	return (
		<>
			<View style={{ flex: 1, padding: 12 }}>
				<CardView style={{ borderRadius: 5, backgroundColor: '#F8F5FB' }}>
					<View style={{ flex: 1, padding: 20 }}>
						<Text style={{ color: '#631E00', fontSize: 18, fontWeight: 'bold', marginBottom: 16 }}>
							Game of the day
						</Text>
						<CardView style={{ borderRadius: 5, backgroundColor: '#FFFFFF' }}>
							<View style={{ flex: 1, padding: 20, flexDirection: 'row' }}>
								{gameScore &&
									gameScore.map((item, index) => {
										return (
											<View
												key={index}
												style={{
													flex: 1,
													flexDirection: 'column',
													justifyContent: 'center',
													alignItems: 'center',
													margin: 6,
													borderRadius: 10,
													borderWidth: 5,
													backgroundColor: 'rgba(218, 155, 124, 0.3)',
													borderColor: 'rgba(218, 155, 124, 0.1)',
												}}>
												<Text
													style={{
														color: '#631E00',
														fontSize: 60,
														fontWeight: 'bold',
													}}>
													{item}
												</Text>
											</View>
										);
									})}
							</View>
						</CardView>
						<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
							<Text
								style={{
									color: '#AB604F',
									fontSize: 18,
									fontWeight: 'bold',
								}}>
								Win prizes worth ₹4000 or more.{' '}
							</Text>
							<Button
								uppercase={false}
								style={{
									borderRadius: 25,
									backgroundColor: '#AB604F',
									marginTop: 30,
									paddingHorizontal: 32,
									paddingVertical: 6,
								}}
								color="#fff">
								Try your luck
							</Button>
						</View>
					</View>
					<Divider style={{ height: 1.5 }} />
					<View style={{ flex: 1, flexDirection: 'row', padding: 20, backgroundColor: '#EEF1F3' }}>
						<Text style={{ fontSize: 18, color: '#A3503E' }}>
							View all games <SvgXml xml={svgIcon.arrowThree} style={{}} />
						</Text>
					</View>
				</CardView>
			</View>
			<View style={{ flex: 1, marginTop: 40 }}>
				<View style={{ position: 'absolute', left: 0, right: 0, bottom: 0 }}>
					<SvgXml xml={svgIcon.img} style={{}} />
				</View>
				<View style={{ flex: 1, alignItems: 'flex-end', marginBottom: 30, paddingHorizontal: 12 }}>
					<SvgXml xml={svgIcon.setting} style={{}} />
				</View>
			</View>
		</>
	);
};

export default Game;

const styles = StyleSheet.create({});
