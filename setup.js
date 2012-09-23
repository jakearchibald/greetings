var fs = require('fs');

if ( process.argv[2] == 'add' ) {
	process.argv.slice(3).forEach(function (val) {
		fs.writeFile( val + '.txt', "Add a greeting below this line:\n" );
	});
}
else if ( process.argv[2] == 'trick' ) {
	process.argv.slice(3).forEach(function (val) {
		fs.appendFile( val + '.txt', "Oh, and above this line, please. *trollface*" );
	});
}
else {
	console.error("Did you mean add?");
}
