const _ = require('lodash');

module.exports = function jsx() {
	return function(files, metalsmith, done) {

		_.forEach(files, (file, filename) => {
			console.log(file);
			file.className = _.upperFirst(_.camelCase(file.title));
		})

		done();
	}
}