module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-browserify');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		browserify: {
			options: {
				browserifyOptions: {
					debug: true
				}
			},

			"index.bundle.js": ["src/index.js"]
		}
	});
}