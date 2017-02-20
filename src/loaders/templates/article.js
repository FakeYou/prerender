import React, { Component } from 'react';

const View = (props) => (<div>{props.children}</div>);
const Title = (props) => (<h1>{props.children}</h1>);
const Text = (props) => (<p>{props.children}</p>);

// const Image = (props) => <Image source={require('./image')} />

export default class Article extends Component {
	static path() {
		return 'article/<%= data.slug %>';
	}

	render() {
		return (
			<View>
				<Title><%= data.title %></Title>
				<Text><%= content %></Text>
			</View>
		);
	}
}
