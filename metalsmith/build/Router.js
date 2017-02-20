import { StackNavigator } from 'react-navigation';

import HelloWorld from '.\hello\world.md'
import HelloYou from '.\hello\you.md'

export default const StackNavigator({
	"HelloWorld": {
		"path": "hello-world",
		"screen": HelloWorld,
	},
	"HelloYou": {
		"path": "hello-you",
		"screen": HelloYou,
	}
});
