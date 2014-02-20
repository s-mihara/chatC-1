var fs = require('fs');
var http = require('http');
var path = require('path');
var paths = process.cwd().split(path.sep);
var settings = require(path.join(path.sep, paths[1], paths[2], paths[3], 'setting.js'));

var server = require.main.exports.server;

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {

  var query = require.main.exports.query;
  // 入室
  socket.broadcast.emit('nyushutu',query.userName);
  // 退室
  socket.on('out',function (){
    // console.log("ok!");
    socket.broadcast.emit('taishutu',query.userName);
    //console.log("ok");
  });

});
