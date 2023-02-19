import { app } from './app';
import mongoose from 'mongoose';
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