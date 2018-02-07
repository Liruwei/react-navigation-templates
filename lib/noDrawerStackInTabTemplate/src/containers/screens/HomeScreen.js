import React from 'react';
import { Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import BaseView from '../../components/BaseView';

const HomeScreen = ({navigation}) => (
	<BaseView btnTitle='Push2Second' description='This is home screen'
		onPress={()=>{
			navigation.dispatch(NavigationActions.navigate({routeName:'Second'}));
		}} 
	/>
);

HomeScreen.navigationOptions = ({navigation}) => ({
	title: 'Home'
});

export default HomeScreen;