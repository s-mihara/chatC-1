var http = require('http');
var path = require('path');
var paths = process.cwd().split(path.sep);
var settings = require(path.join(path.sep, paths[1], paths[2], paths[3], 'setting.js'));

var server = http.createServer();

server.on('request', function(request, response) {
  console.log('request!!');

  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.end('hello eri!!');
});

server.listen(settings.port);

