module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		uglify: {
			options: {
				preserveComments: false
			},
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
				}
			}
		},
		jshint: {
			files: ['Gruntfile.js', 'src/**/*.js', 'test/**/*.js'],
			options: {
				// options here to override JSHint defaults
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true
				}
			}
		},
		replace: {
			injectConstructorFunctionsIntoMainJs: {
				options: {
					patterns: [{
						match: 'partial',
						replacement: '<%= grunt.file.read("src/partial.js") %>'
					}]
				},
				files: [{
					src: ['src/main.js'],
					dest: 'dist/<%= pkg.name %>.js'
				}]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-replace');

	grunt.registerTask('default', ['replace', 'uglify']);
};