import { app } from './app';
import mongoose from 'mongoose';
import http from "http";
import { Server} from "socket.io";

const httpServer = http.createServer(app);
const io = new Server(httpServer,{
  cors:{
    origin: 'http://localhost:3001'
  }
});

io.on('connection', function (socket) {
  socket.on('newuser', function (username) {
    socket.broadcast.emit('update', username + 'joined the chat');
  });
  socket.on('exituser', function (username) {
    socket.broadcast.emit('update', username + 'left the chat');
  });

  socket.on('chat', function (message) {
    console.log('On backend side');
    socket.broadcast.emit('chat',message);
  });
});
httpServer.listen(5000);

require('dotenv').config();


const  start = async() => {
  const PORT= 3000 || process.env.PORT;
  if(!process.env.JWT_KEY)
  {
    throw new Error('JWT_KEY environment variable is not set');
  }
  if(!process.env.MONGO_URI)
  {
    throw new Error('MONGO_URI environment variable is not set');
  }

  console.log(process.env.MONGO_URI);
  try{
    console.log(process.env.MONGO_URI);
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB!');

  }catch(err)
  {
    console.log(err);
  }
  const server=app.listen(PORT, () => {
    console.log(' User service listening on port '+PORT);
    });
    return server;
};

const server=start();
export {server}