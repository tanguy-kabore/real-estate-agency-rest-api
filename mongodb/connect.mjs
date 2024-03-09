// mongodb/connect.mjs
import mongoose from 'mongoose';

const connectDB = (url) => {
  mongoose.set('strictQuery', true);

  const db = mongoose.connection;

  db.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });

  db.once('open', () => {
    console.log('MongoDB connected');
  });

  db.on('disconnected', () => {
    console.log('MongoDB disconnected');
  });

  db.on('reconnected', () => {
    console.log('MongoDB reconnected');
  });

  mongoose.connect(url)
  .then(() => {
    console.log('MongoDB connected');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

  return db;
};

export default connectDB;