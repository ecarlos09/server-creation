const http = require('http');

const requestListener = (request, response) => {
    response.statusCode = 200;
    response.end('Hello, client!');
  };

const host = 'localhost';
const port = 5000;

const server = http.createServer(requestListener);
server.listen(port, host, () => console.log(`Flying pigs can now be found on http://${host}:${port}!`));