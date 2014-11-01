/*
 * grunt-add-comment
 * https://github.com/PillowPillow/grunt-add-comment
 *
 * Copyright (c) 2014 Nicolas Gaignoux
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		add_comment: {
			test: {
				options: {
					comments: ['this file is autogenerated', 'this file is autogenerated 2'],
					prepend: true,
					syntaxes: {
						'.js': '//',
						'.json': '--'
					}
				},
				files: [{
					expand: true,
					cwd: 'test/files/',
					src: ['**/*.js', '**/*.json'],
					dest: 'test/files/'
				}]
			}
		}
	});

	grunt.loadTasks('tasks');

};
