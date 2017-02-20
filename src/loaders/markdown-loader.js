const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const frontmatter = require('frontmatter');

module.exports = function(context) {
	this.cacheable();
	const matter = frontmatter(context);

	matter.data.slug = matter.data.title.replace(/ /g, '-').toLowerCase();

	const template = fs.readFileSync(path.resolve(__dirname, './templates/article.js')).toString();

	return _.template(template)(matter);
};
