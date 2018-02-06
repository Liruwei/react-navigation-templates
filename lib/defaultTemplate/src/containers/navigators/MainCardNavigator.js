import React from 'react';
import { addNavigationHelpers, StackNavigator, NavigationActions, View } from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from '../screens/HomeScreen';
import MainTabNavigator from './MainTabNavigator';


const MainCardNavigator = StackNavigator(
	{ // routeConfigs
		MainTabNavigator: { 
			screen: MainTabNavigator,
		}
	}, 
	{ // navigatorConfig
		mode: 'card',
		navigationOptions: {
			headerStyle: {
				backgroundColor: '#FFF',
			}
		}
	}
);

export default MainCardNavigator;