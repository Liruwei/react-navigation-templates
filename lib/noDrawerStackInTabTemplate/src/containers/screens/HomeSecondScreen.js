import React from 'react';
import BaseView from '../../components/BaseView';
import { NavigationActions } from 'react-navigation';

const HomeSecondScreen = ({navigation}) => (
	<BaseView btnTitle='Back' description='This is second screen'
		onPress={()=>{
			navigation.dispatch(NavigationActions.back());
		}} 
	/>
);

HomeSecondScreen.navigationOptions = ({navigation}) => ({
	title: 'Second Screen',
});

export default HomeSecondScreen;