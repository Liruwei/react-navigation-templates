import React from 'react';
import { Button} from 'react-native';
import { NavigationActions } from 'react-navigation';
import BaseView from '../../components/BaseView';

const LoginScreen = ({navigation}) => (
	<BaseView btnTitle='Login' description='This is login screen'
		onPress={()=>{			
			navigation.dispatch(NavigationActions.back());
		}} 
	/>		
);

LoginScreen.navigationOptions = ({navigation}) => ({
	title: 'Login',
	headerRight: (
		<Button title='regist' onPress={()=>{
			navigation.dispatch(NavigationActions.navigate({routeName:'Regist'}));
		}}/>
	)
});

export default LoginScreen;