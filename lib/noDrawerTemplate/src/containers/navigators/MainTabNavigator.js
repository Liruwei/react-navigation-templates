import React from 'react';
import { addNavigationHelpers, TabNavigator, NavigationActions, View } from 'react-navigation';
import { connect } from 'react-redux';

import HomeScreen from '../screens/HomeScreen';
import InfoScreen from '../screens/InfoScreen';


const MainTabNavigator = TabNavigator(
	{ // routeConfigs
		Home: { 
			screen: HomeScreen 
		},
		Info: {
			screen: InfoScreen
		}
	}, 
	{ // navigatorConfig
		
	}
);

export default MainTabNavigator;