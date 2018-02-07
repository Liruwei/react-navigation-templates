import React from 'react';
import { addNavigationHelpers, TabNavigator, StackNavigator, NavigationActions, View } from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from '../screens/HomeScreen';
import HomeSecondScreen from '../screens/HomeSecondScreen';
import InfoScreen from '../screens/InfoScreen';


const HomeNavigator = StackNavigator(
	{ // routeConfigs
		Home: {  screen: HomeScreen },
		Second: {  screen: HomeSecondScreen },
	}, 
	{ // navigatorConfig
		mode: 'card',
	}
);


const MainTabNavigator = TabNavigator(
	{ // routeConfigs
		HomeNavigator: { 
			screen: HomeNavigator,
			navigationOptions: {
				header: null,
			} 
		},
		Info: {
			screen: InfoScreen
		}
	}, 
	{ // navigatorConfig
		
	}
);

export default MainTabNavigator;