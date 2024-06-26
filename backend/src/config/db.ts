import mongoose, { ConnectOptions } from 'mongoose';

interface MyConnectOptions extends ConnectOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
  // Add other MongoDB connection options as needed
}

const connectDB = async () => {
  try {
    const options: MyConnectOptions = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Add other options here as needed
    };

    await mongoose.connect('mongodb://localhost:27017/your_db_name', options);
    console.log('MongoDB connected');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

export default connectDB;
