var fs = require('fs');
var http = require('http');
var path = require('path');
var paths = process.cwd().split(path.sep);
var settings = require(path.join(path.sep, paths[1], paths[2], paths[3], 'setting.js'));

var server = require.main.exports.server;

var io = require('socket.io').listen(server);

console.log("hoge");
io.sockets.on('connection', function (socket) {
  console.log("hoge");
 //  socket.on('disconnect',function (){
 //    socket.broadcast.emit('taishutu');
 //  });
 // socket.on('connect',function(name){
 // 	socket.broadcast.emit('nyushutu');
 // }

});
