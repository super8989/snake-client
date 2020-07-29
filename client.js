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

	conn.on('data', (data) => {
		console.log('Server says: ', data);
	});

	conn.on('connect', () => {
		console.log('Successfully connected to game server');
		conn.write(`Name: SAM`);
	});

	return conn;
};

// module.exports = { connect: connect };
module.exports = { connect };
