import React from 'react';
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import BaseView from '../../components/BaseView';

const HomeScreen = ({navigation}) => (
	<BaseView btnTitle='Logout' description='This is home screen'
		onPress={()=>{
			navigation.dispatch(NavigationActions.navigate({routeName:'LoginNavigator'}));
		}} 
	/>
);

HomeScreen.navigationOptions = ({navigation}) => ({
	title: 'Home',
	headerLeft: (
		<Button title='Drawer' onPress={()=>{
			navigation.dispatch(NavigationActions.navigate({routeName: 'DrawerOpen'}));
		}}/>
	)
});

export default HomeScreen;