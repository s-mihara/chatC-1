var fs = require('fs');
var http = require('http');
var path = require('path');
var paths = process.cwd().split(path.sep);
var settings = require(path.join(path.sep, paths[1], paths[2], paths[3], 'setting.js'));

var server = require.main.exports.server;

var io = require('socket.io').listen(server);
