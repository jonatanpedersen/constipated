var {reliefGlob, reliefFile, reliefString} = require('../');
var {expect} = require('chai');

describe('constipated', () => {
	describe('reliefString', () => {
		it('should relief the string', () => {
			var actual = reliefString('const constipated = false');
			var expected = 'var constipated = false';

			expect(actual).to.eql(expected);
		});
	});
});