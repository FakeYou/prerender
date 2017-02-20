const path = require('path');

const babelQuery = JSON.stringify({
	presets: ['es2015', 'react'],
});

module.exports = {
	entry: path.resolve(__dirname, 'src/index.js'),
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
  resolveLoader: {
	  alias: {
  	  'markdown-loader': path.join(__dirname, './src/loaders/markdown-loader.js'),
  	},
	},
	module: {
		loaders: [
			{
				test: /\.md$/,
				exclude: /node_modules/,
				loader: `markdown-loader`,
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: `babel-loader?${babelQuery}`,
			}
		]
	},
	externals: [{
		react: true,
	}]
};
