import React from 'react';
import { addNavigationHelpers, DrawerNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import {
	createReactNavigationReduxMiddleware,
	createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import MainModalNavigator from './MainModalNavigator';


// Note: createReactNavigationReduxMiddleware must be run before createReduxBoundAddListener
export const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

export const Navigator = DrawerNavigator(
	{ // routeConfigs
		Main: { 
			screen: MainModalNavigator, 
			navigationOptions: {
				drawerLabel: 'Main',
				drawerLockMode: 'locked-closed'
			}
		},
		About: { 
			screen: AboutScreen, 
			navigationOptions: {
				drawerLabel: 'About',
			}
		}
	},
	{ // navigator config
		navigationOptions: {
			gesturesEnabled: false
		}
	}
);

const MainDrawerNavigator = ({dispatch,nav}) => (
	<Navigator navigation={ addNavigationHelpers({
		state: nav,
		addListener,
		dispatch,
	})}/>
);

const mapStateToProps = state => ({
	nav: state.nav
})

export default connect(mapStateToProps)(MainDrawerNavigator);