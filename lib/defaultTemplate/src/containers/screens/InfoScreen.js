import React from 'react';
import { NavigationActions } from 'react-navigation';
import BaseView from '../../components/BaseView';

const InfoScreen = ({navigation}) => (
	<BaseView btnTitle='Regist' description='Pop regist screen'
		onPress={()=>{
			navigation.dispatch(NavigationActions.navigate({routeName:'Regist'}));
		}} 
	/>
);

InfoScreen.navigationOptions = {
	title: 'Info'
};

export default InfoScreen;