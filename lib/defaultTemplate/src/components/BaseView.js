import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
	btnTitle: PropTypes.string.isRequired,
	description: PropTypes.string.isRequired,
	onPress: PropTypes.func.isRequired
};

const defaultProps = {
	btnTitle: 'Button',
	description: 'This is a screen',
	onPress: ()=>{}
};

export default class BaseView extends React.Component {
	render() {
		let { onPress, btnTitle, description } = this.props;
		return (
			<View style={styles.container}>
				<Text style={styles.text}>{description}</Text>
				<Button title={btnTitle} onPress={onPress}/>
			</View>
		);
	}
}

BaseView.propTypes = propTypes;
BaseView.defaultProps = defaultProps;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 50,
		alignItems: 'center',
	},
	text: {
		marginTop: 20
	},
});
