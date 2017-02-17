const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const frontmatter = require('frontmatter');

module.exports = function(context) {
	this.cacheable();
	const data = frontmatter(context)

	const template = fs.readFileSync(path.resolve(__dirname, './templates/article.js')).toString();

	return _.template(template)(data);
};
