# Prerender

A webpack loader to turn a markdown file into a filled and valid react class.

## Run

```bash
npm install
webpack
node ./dist/bundle.js
```

## Technique


__input__
```md
---
title: Article
---

hello world, dit is mijn artiekel.

ik ben dingen aan het schrijven die heel leuk zijn om te lezen!
```

__output__
```jsx
import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default () => (
	<View>
		<Text>Article</Text>
		<Text>hello world, dit is ...</Text>
	</View>
);

```
