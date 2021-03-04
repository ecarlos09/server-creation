//Create the server!

const http = require('http');
let AllAnimals;

const requestListener = (request, response) => {
  let body;
  let statusCode;
    response.statusCode = 200;
    response.end('Hello, client!');
  };



const server = http.createServer(requestListener);

const startServer = (port, host) => server.listen(port, host, () => console.log(`Super cool animals can now be found on http://${host}:${port}!`));

const closeServer = cb => server.close(cb);

module.exports = { startServer, closeServer};