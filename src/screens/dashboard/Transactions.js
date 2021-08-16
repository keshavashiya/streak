/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-paper';

import { SvgXml } from 'react-native-svg';
import { svgIcon } from '../../../assets/svgfiles';

import CardView from '../../components/Cardview';

const Transactions = () => {
	const data = [
		{ title: 'Food & Drinks', type: 'Debit', time: '02:30 pm', amount: '₹50', icon: 'food' },
		{ title: 'Store sale', type: 'Debit', time: 'Jun - 4:30 PM', amount: '₹140', icon: 'sale' },
		{ title: 'Money credited', type: 'Credit', time: 'Jun - 12:30 PM', amount: '₹4,500', icon: 'money' },
	];
	const [transactions] = useState(data);
	return (
		<View
			style={{
				flex: 1,
				marginTop: 30,
				padding: 12,
			}}>
			<CardView style={{ borderRadius: 5, backgroundColor: '#F8F5FB' }}>
				<View style={{ flex: 1 }}>
					<Text style={{ fontSize: 18, color: '#600063', padding: 20, fontWeight: 'bold' }}>
						Recent transactions
					</Text>
					{transactions.map((item, index) => {
						return (
							<React.Fragment key={index}>
								<View style={{ flex: 1, flexDirection: 'row', padding: 20 }}>
									<View style={{ flexDirection: 'column' }}>
										<SvgXml xml={svgIcon[item.icon]} style={{}} />
									</View>
									<View style={{ flex: 1, flexDirection: 'column', marginLeft: 16 }}>
										<Text style={{ paddingBottom: 4, fontSize: 18 }}>{item.title}</Text>
										<Text style={{ color: 'rgba(0, 0, 0, 0.3)' }}>{item.time}</Text>
									</View>
									<View style={{ flexDirection: 'column' }}>
										<Text
											style={{
												color: item.type === 'Credit' ? '#00600A' : '#000',
												fontSize: 18,
											}}>
											{item.amount}
										</Text>
									</View>
								</View>
								<Divider style={{ height: 1.5 }} />
							</React.Fragment>
						);
					})}
					<View style={{ flex: 1, flexDirection: 'row', padding: 20, backgroundColor: '#EAE1F2' }}>
						<Text style={{ fontSize: 18, color: '#A655A8' }}>
							All transactions <SvgXml xml={svgIcon.arrow} style={{}} />
						</Text>
					</View>
				</View>
			</CardView>
		</View>
	);
};

export default Transactions;

const styles = StyleSheet.create({});
