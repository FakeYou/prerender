const path = require('path');
const Metalsmith = require('metalsmith');

const slug = require('metalsmith-slug');
const beautify = require('metalsmith-beautify');
const jsx = require('./plugins/jsx');
const router = require('./plugins/router');
const className = require('./plugins/className');

Metalsmith(__dirname)
	.source('content')
	.use(slug({ lower: true }))
	.use(className())
	.use(router())
	.use(jsx())
	.build(err => {
		if (err) throw err;

		console.log('build finished!');
	});