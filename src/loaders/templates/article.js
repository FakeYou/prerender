import React, { Component } from 'react';

const View = (props) => (<div>{props.children}</div>);
const Title = (props) => (<h1>{props.children}</h1>);
const Text = (props) => (<p>{props.children}</p>);

export default () => (
	<View>
		<Title><%= data.title %></Title>
		<Text><%= content %></Text>
	</View>
);
