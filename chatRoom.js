var fs = require('fs');
var http = require('http');
var path = require('path');
var paths = process.cwd().split(path.sep);
var settings = require(path.join(path.sep, paths[1], paths[2], paths[3], 'setting.js'));

var server = require.main.exports.server;

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log("ok");
  socket.on('out',function (name){
    // console.log("ok!");
    socket.broadcast.emit('taishutu');
    //console.log("ok");
  });

});
