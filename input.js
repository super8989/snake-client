// Stores the active TCP connection object.
let connection;

const setupInput = (conn) => {
	connection = conn;
	const stdin = process.stdin;

	stdin.setRawMode(true);
	stdin.setEncoding('utf8');
	stdin.resume();

	stdin.on('data', (key) => {
		handleUserInput(key);
	});

	return stdin;
};

const handleUserInput = (key) => {
	if (key === '\u0003') {
		process.exit();
	}

	if (key === 'w') {
		console.log('up');
	}

	if (key === 'a') {
		console.log('left');
	}

	if (key === 's') {
		console.log('down');
	}

	if (key === 'd') {
		console.log('right');
	}
};

module.exports = { setupInput };
