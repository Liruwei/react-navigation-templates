import React from 'react';
import { addNavigationHelpers, StackNavigator, NavigationActions, View } from 'react-navigation';
import { connect } from 'react-redux';
import {
	createReactNavigationReduxMiddleware,
	createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';

import LoginScreen from '../screens/LoginScreen';
import RegistScreen from '../screens/RegistScreen';
import MainCardNavigator from './MainCardNavigator';

// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
export const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("root");


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


export const Navigator = StackNavigator(
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

const MainModalNavigator = ({dispatch,nav}) => (
	<Navigator navigation={ addNavigationHelpers({
		state: nav,
		addListener,
		dispatch,
	})}/>
);

const mapStateToProps = state => ({
	nav: state.nav
})

export default connect(mapStateToProps)(MainModalNavigator);
