import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class HelloWorld extends Component {
	static path() {
		return 'article/hello-world';
	}

	render() {
		return (
			<View>
				<Text>Hello world!</Text>
				<Text>__Hello__, world!</Text>
			</View>
		);
	}
}
