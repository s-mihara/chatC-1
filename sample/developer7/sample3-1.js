var http = require('http');
var path = require('path');
var fs = require('fs');
var ejs = require('ejs');
var paths = process.cwd().split(path.sep);
var settings = require(path.join(path.sep, paths[1], paths[2], paths[3], 'setting.js'));

var server = http.createServer(onRequest);
module.exports.server = server;

var query;

function onRequest(req, res) {
  console.log('onRequest!!');

  ejsData = fs.readFileSync('./sample3-2.ejs','UTF-8');
  var str = 'あいうえお';
  data = ejs.render(ejsData,{label : str});

  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
  res.end(data);
}

server.listen(settings.port);
