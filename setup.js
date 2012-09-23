var fs = require('fs');
var mode = process.argv[2];
var args = process.argv.slice(3);

if ( mode == 'add' ) {
	args.forEach(function (val) {
		fs.writeFile( val + '.txt', "Add a greeting below this line:\n" );
	});
}
else if ( mode == 'trick' ) {
	args.forEach(function (val) {
		fs.appendFile( val + '.txt', "Oh, and above this line, please. *trollface*\n" );
	});
}
else {
	console.error("Did you mean add?");
}
