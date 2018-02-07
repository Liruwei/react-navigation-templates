import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import BaseView from '../../components/BaseView';


const AboutScreen = ({navigation}) => (
	<BaseView btnTitle='Open' description='React-Navigation-cli'
		onPress={()=>{
			navigation.dispatch(NavigationActions.navigate({routeName:'DrawerOpen'}));
		}} 
	/>
);

AboutScreen.navigationOptions = {
	title: 'About'
};

export default AboutScreen;