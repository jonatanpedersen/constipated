const mochaEslint = require('mocha-eslint');

mochaEslint([
	'./index.js',
	'./test/**/*.js',
	'!./test/fixtures/**/*.js'
]);