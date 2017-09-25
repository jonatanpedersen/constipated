var glob = require('glob');

module.exports = {reliefGlob, reliefFile, reliefString};

function reliefGlob (pattern) {
	var files = flob.sync(pattern);

	files.forEach(reliefFile);
};

function reliefFile (file) {
	var contents = readFile(file);
	var newContents = reliefString(contents);
	writeFile(file, newContents);
}

function reliefString (str) {
	return str.replace(/const(\s*[^\s]+\s*=\s*)/gmi, 'var$1');
}

function readFile(file) {
	return fs.readFileSync(file, 'utf8');
}

function writeFile(file, contents) {
	return fs.writeFileSync(file, contents, 'utf8');
}