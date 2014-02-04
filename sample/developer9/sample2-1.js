var http = require('http');
var path = require('path');
var fs = require('fs');
var paths = process.cwd().split(path.sep);
var settings = require(path.join(path.sep, paths[1], paths[2], paths[3], 'setting.js'));

var server = http.createServer(onRequest);
module.exports.server = server;

var query;

function onRequest(req, res) {
  console.log('onRequest!!');

  data = fs.readFileSync('./sample2-2.html');  // 相対パス指定時は実行ディレクトリからの相対パスとなる
  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
  res.end(data);
}

server.listen(settings.port);
