import React from 'react';
import { addNavigationHelpers, StackNavigator, NavigationActions, View } from 'react-navigation';
import { connect } from 'react-redux';

import LoginScreen from '../screens/LoginScreen';
import RegistScreen from '../screens/RegistScreen';
import MainTabNavigator from './MainTabNavigator';


const LoginNavigator = StackNavigator(
	{ // routeConfigs
		Login: { screen: LoginScreen},
		Regist: { screen: RegistScreen}
	},
	{ // navigatorConfig
		mode: 'card',
		navigationOptions: {
			headerTintColor: 'white',
			headerStyle: {
				backgroundColor: 'black'
			}
		},
	}
);


const MainModalNavigator = StackNavigator(
	{ // routeConfigs
		MainTabNavigator: { 
			screen: MainTabNavigator,
		},
		LoginNavigator: { 
			screen: LoginNavigator,
			navigationOptions: {
				header: null,
			} 
		}
	}, 
	{ // navigatorConfig
		mode: 'modal',
		navigationOptions: {
			gesturesEnabled: false
		},
		headerTintColor: 'orange',
	}
);

export default MainModalNavigator;
