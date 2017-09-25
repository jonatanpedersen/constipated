var {relieveGlob, relieveFile, relieveString} = require('../');
var {expect} = require('chai');

describe('constipated', () => {
	describe('relieveString', () => {
		it('should relieve the string', () => {
			var actual = relieveString('const constipated = false');
			var expected = 'var constipated = false';

			expect(actual).to.eql(expected);
		});
	});
});