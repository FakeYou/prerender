import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class <%= className %> extends Component {
	static path() {
		return 'article/<%= slug %>';
	}

	render() {
		return (
			<View>
				<Text><%= title %></Text>
				<Text><%= contents %></Text>
			</View>
		);
	}
}
