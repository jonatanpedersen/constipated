var {relieveGlob, relieveFile, relieveString} = require('../');
var {expect} = require('chai');
var {copySync, emptyDirSync} = require('fs-extra');
var {compareSync} = require('dir-compare');

describe('constipated', () => {
	describe('relieveString', () => {
		it('should relieve the string', () => {
			var actual = relieveString('const constipated = false');
			var expected = 'var constipated = false';

			expect(actual).to.eql(expected);
		});
	});

	describe('relieveFile', () => {
		var inputDir, expectedDir, actualDir, actualFile, comparison;

		before(() => {
			inputDir = './test/fixtures/file/input';
			expectedDir = './test/fixtures/file/expected';
			actualDir = './test/fixtures/file/actual';
			actualFile = './test/fixtures/file/actual/foobar.js';
			emptyDirSync(actualDir);
			copySync(inputDir, actualDir);
			relieveFile(actualFile);

		});

		it('should relieve the file', () => {
			comparison = compareSync(actualDir, expectedDir, {
				compareContent: true
			});

			if (!comparison.same) {
				var message = JSON.stringify(comparison.diffSet.filter(diff => diff.state !== 'equal'), null, 4);
				var err = new Error(message);
				err.comparison = comparison;

				throw err;
			}
		});
	});

	describe('relieveGlob', () => {
		var inputDir, expectedDir, actualDir, glob, comparison;

		before(() => {
			inputDir = './test/fixtures/glob/input';
			expectedDir = './test/fixtures/glob/expected';
			actualDir = './test/fixtures/glob/actual';
			glob = './test/fixtures/glob/actual/*.js';
			emptyDirSync(actualDir);
			copySync(inputDir, actualDir);
			relieveGlob(glob);
		});

		it('should relieve the glob', () => {
			comparison = compareSync(actualDir, expectedDir, {
				compareContent: true
			});

			if (!comparison.same) {
				var message = JSON.stringify(comparison.diffSet.filter(diff => diff.state !== 'equal'), null, 4);
				var err = new Error(message);
				err.comparison = comparison;

				throw err;
			}
		});
	});
});