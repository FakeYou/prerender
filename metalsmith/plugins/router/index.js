const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const indentString = require('indent-string');

const template = _.template(
	fs.readFileSync(path.resolve(__dirname, './templates/Router.js')).toString()
);

const routeTemplate = _.template(`"<%= name %>": {
	"path": "<%= path %>",
	"screen": <%= screen %>,
}`);

module.exports = function jsx() {
	return function(files, metalsmith, done) {
		const imports = [];
		const routes = [];

		_.forEach(files, (file, filename) => {
			imports.push(`import ${file.className} from '.\\${filename}'`);
			routes.push(routeTemplate({
				name: file.className,
				path: file.slug,
				screen: file.className,
			}));
		});

		files['Router.js'] = {
			contents: template({
				imports: imports.join('\n'),
				routes: indentString(routes.join(',\n'), 1, '\t'),
			}),
		};

		done();
	}
}