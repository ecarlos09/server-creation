//Create the server!

const http = require('http');
let allCats = [{id: 'Mufasa', color: 'ginger'}, {id: 'Scar', color: 'black'}];
let allDogs = [{id: 'Scooby Doo', color: 'brown'}, {id: 'Scar', color: 'black'}];
let allUnicorns = [{id: 'Rainbow Dash', color: 'multi'}, {id: 'Pegasus', color: 'white'}];

const requestListener = (request, response) => {
  let body;
  let statusCode;
  // response.statusCode = 200;
  // response.end('Hello, client!');
  
  //Deal with our different endpoints!
  switch(request.url) {
    case `/cats`:
      if(request.method === "GET") {
        body = { cats: AllCats }
      }; break;
    case `/dogs`:
      if(request.method === "GET") {
        body = { dogs: AllDogs }
      }; break;
    case `/unicorns`:
      if(request.method === "GET") {
        body = { unicorns: AllUnicorns }
      }; break;
    default:
      statusCode = 404;
      body = { error: `Route ${req.url} does not exist`}
      break;

    //Define final behaviour of requestListener function
    response.statusCode = statusCode || 200;
    body = body && JSON.stringify(body);
    response.end(body);
  };
};

const server = http.createServer(requestListener);

const startServer = (port, host) => server.listen(port, host, () => console.log(`Super cool animals can now be found on http://${host}:${port}!`));
const closeServer = cb => server.close(cb);

module.exports = { startServer, closeServer};