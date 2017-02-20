import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HelloYou extends Component {
	static path() {
		return 'article/hello-you';
	}

	render() {
		return (
			<View>
				<Text>Hello you!</Text>
				<Text>__Hello__, you!</Text>
			</View>
		);
	}
}
