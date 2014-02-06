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

  data = fs.readFileSync('./sample4-2.html');  // 相対パス指定時は実行ディレクトリからの相対パスとなる
  res.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
  res.end(data);
}

// io.socketsの処理
var io = require('socket.io').listen(server);

// 接続
io.sockets.on('connection', function (socket) {

  // event1イベントを送信（全クライアント）
  io.sockets.emit('event1','接続しました');
  
  //###############
  //event2イベントを受信
});

server.listen(settings.port);
