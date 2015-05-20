var express = require('express'),
  socketio = require('socket.io'),
  app = express(),
  io = socketio.listen(app.listen(80)),
  connections = [];

app.use('/', express.static(__dirname));
console.log("Listen on port 80.")
