import mongoose from 'mongoose';
const connectToDb = async () => {
  try {
    console.log();
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Database connected');
  } catch (error) {
    console.log(error.message);
  }
};

export default connectToDb;
