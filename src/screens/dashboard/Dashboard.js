/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import { StyleSheet, Text, ScrollView, View, SafeAreaView, Dimensions } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { svgIcon } from '../../../assets/svgfiles';

import Header from './Header';
import Transactions from './Transactions';
import Savings from './Savings';
import Game from './Game';

const Dashboard = () => {
	return (
		<SafeAreaView style={{ flex: 1 }}>
			<ScrollView style={{ flex: 1 }}>
				<Header />
				{/* <Transactions /> */}
				<Savings />
				<Game />
			</ScrollView>
		</SafeAreaView>
	);
};

export default Dashboard;

const styles = StyleSheet.create({});
