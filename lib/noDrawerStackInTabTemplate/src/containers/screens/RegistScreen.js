import React from 'react';
import { NavigationActions } from 'react-navigation';
import BaseView from '../../components/BaseView';

const RegistScreen = ({navigation}) => (
	<BaseView btnTitle='Regist and login' description='This is regist screen'
		onPress={()=>{
			navigation.dispatch(
				NavigationActions.reset({
					index: 0,
					key: null,
					actions: [
						NavigationActions.navigate({routeName:'MainCardNavigator'}),
					]
				})
			);
		}} 
	/>
);

RegistScreen.navigationOptions = {
	title: 'Regist'
};

export default RegistScreen;