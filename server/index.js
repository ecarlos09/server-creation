//Import the created server and get it running!

const { startServer } = require('./server');

//Define the host and port locations
const host = 'localhost';
const port = 5000;

startServer(port, host, `Go to http://${host}:${port} to view our content!`);