var fs = require('fs');
var glob = require('glob');

module.exports = {relieveFile, relieveGlob, relieveString};

function readFile(file) {
	return fs.readFileSync(file, 'utf8');
}

function relieveFile (file) {
	var contents = readFile(file);
	var newContents = relieveString(contents);
	writeFile(file, newContents);
}

function relieveGlob (pattern) {
	var files = glob.sync(pattern);

	files.forEach(relieveFile);
}

function relieveString (str) {
	return str.replace(/const(\s*[^\s]+\s*=\s*)/gmi, 'var$1');
}

function writeFile(file, contents) {
	return fs.writeFileSync(file, contents, 'utf8');
}
