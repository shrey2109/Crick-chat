import express from 'express';
import { server } from './index';
const io = require('socketio')(http, {
  cors: {
    origin: 'http://localhost:3001',
  },
});

io.on('connection', function (socket) {
  socket.on('newuser', function (username) {
    socket.broadcast.emit('update', username + 'joined the chat');
  });
  socket.on('exituser', function (username) {
    socket.broadcast.emit('update', username + 'left the chat');
  });

  socket.on('chat', function (username) {
    socket.broadcast.emit('chat',message);
  });
});
