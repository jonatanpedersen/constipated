var glob = require('glob');
var fs = require('fs');

module.exports = {relieveGlob, relieveFile, relieveString};

function relieveGlob (pattern) {
	var files = glob.sync(pattern);

	files.forEach(relieveFile);
}

function relieveFile (file) {
	var contents = readFile(file);
	var newContents = relieveString(contents);
	writeFile(file, newContents);
}

function relieveString (str) {
	return str.replace(/const(\s*[^\s]+\s*=\s*)/gmi, 'var$1');
}

function readFile(file) {
	return fs.readFileSync(file, 'utf8');
}

function writeFile(file, contents) {
	return fs.writeFileSync(file, contents, 'utf8');
}