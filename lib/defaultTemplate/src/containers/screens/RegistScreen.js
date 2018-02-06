import React from 'react';
import { NavigationActions } from 'react-navigation';
import BaseView from '../../components/BaseView';

const RegistScreen = ({navigation}) => (
	<BaseView btnTitle='Regist and login' description='This is regist screen'
		onPress={()=>{
			navigation.dispatch(NavigationActions.back({key: 'login after register'}));
		}} 
	/>
);

RegistScreen.navigationOptions = {
	title: 'Regist'
};

export default RegistScreen;