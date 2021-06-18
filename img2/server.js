var http = require('http');

var handleRequest = function(request, response) {
  console.log('Hello World' + request.url);
  response.writeHead(200);
  response.write("Hello World ! ");
};
var www = http.createServer(handleRequest);
www.listen(8080);