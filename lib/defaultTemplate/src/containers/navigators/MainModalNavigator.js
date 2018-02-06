import React from 'react';
import { addNavigationHelpers, StackNavigator, NavigationActions, View } from 'react-navigation';
import { connect } from 'react-redux';

import LoginScreen from '../screens/LoginScreen';
import RegistScreen from '../screens/RegistScreen';
import MainCardNavigator from './MainCardNavigator';


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
		MainCardNavigator: { 
			screen: MainCardNavigator,
			navigationOptions: {
				header: null,
			} 
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
