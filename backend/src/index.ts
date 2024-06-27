import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/auth';
import connectDB from './config/db';




const app = express();

// Enable CORS
app.use(cors());

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', userRoutes);


connectDB();

const PORT = 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

export default app;
