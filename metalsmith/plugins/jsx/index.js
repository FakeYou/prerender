const _ = require('lodash');
const fs = require('fs');
const path = require('path');

module.exports = function jsx() {
	return function(files, metalsmith, done) {

		const template = _.template(
			fs.readFileSync(path.resolve(__dirname, './templates/Page.js')).toString()
		);

		_.forEach(files, (file, filename) => {
			if (!filename.match(/.md$/)) {
				return;
			}

			const newFilename = filename.replace(/.md$/, '.js');
			file.contents = _.trim(file.contents);

			files[newFilename] = {
				contents: template(file),
			};

			delete files[filename];
		});

		done();
	}
}