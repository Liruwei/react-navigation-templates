import React from 'react';
import { addNavigationHelpers, StackNavigator, NavigationActions, View } from 'react-navigation';
import { connect } from 'react-redux';

import HomeSecondScreen from '../screens/HomeSecondScreen';
import MainTabNavigator from './MainTabNavigator';


const MainCardNavigator = StackNavigator(
	{ // routeConfigs
		MainTabNavigator: { 
			screen: MainTabNavigator,
		},
		Second: {
			screen: HomeSecondScreen
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