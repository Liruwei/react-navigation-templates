import React from 'react';
import { View } from 'react-native';
import { NavigationActions } from 'react-navigation';
import BaseView from '../../components/BaseView';

const InfoScreen = ({navigation}) => (
	<View>
		<BaseView btnTitle='Pop2Login' description=''
			onPress={()=>{
				navigation.dispatch(NavigationActions.navigate({routeName:'LoginNavigator'}));
			}} 
		/>
		<BaseView btnTitle='Pop2Regist' description=''
			onPress={()=>{
				navigation.dispatch(NavigationActions.navigate({routeName:'Regist'}));
			}} 
		/>
	</View>
);

InfoScreen.navigationOptions = {
	title: 'Info'
};

export default InfoScreen;