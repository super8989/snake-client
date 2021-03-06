const net = require('net');

/**
 * Establishes connection with the game server
 */
// this is an object
const connect = function () {
	const conn = net.createConnection({
		host: '135.23.222.131',
		port: 50541,
	});

	// interpret incoming data as text
	conn.setEncoding('utf8');

	// when some data comes back
	conn.on('data', (data) => {
		console.log('Server says: ', data);
	});

	// on connection to server
	conn.on('connect', () => {
		console.log('Successfully connected to game server');
		conn.write(`Name: SAM`);
		// conn.write(`Move: right`);
		// conn.write(`Move: up`);
		// conn.write(`Move: down`);
		// conn.write(`Move: left`);
	});

	return conn;
};

// module.exports = { connect: connect };
module.exports = { connect };
