const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const packageRoutes = require('./routes/packageRoutes');
const destinationRoutes = require('./routes/destinationRoutes')
const reviewRoutes = require('./routes/reviewRoutes')
const userRoutes = require('./routes/userRoutes')
const authRoutes = require('./routes/auth')
const bookings = require('./routes/bookings')
// Load environment variables from .env file
dotenv.config();

const app = express();
const port = process.env.PORT;
const corsOptions = {
  origin: true, // This should allow requests from any origin
  credentials: true,
};
// MongoDB connection setup
// mongoose.set("strictQuery", false);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true, 
    });

    console.log('MongoDB connected successfully.');
  } catch (err) {
    console.error('MongoDB connection failed:', err); // Handle connection error
  }
};


// Middleware setup
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/packages', packageRoutes);
app.use('/api/v1/reviews', reviewRoutes); 
app.use('/api/v1/destinations', destinationRoutes);
app.use('/api/v1/users',userRoutes);
app.use('/api/v1/bookings',bookings);

// Define API routes
// app.use('/packages', packageRoutes);
// const userRoutes = require('./routes/userRoutes');
// app.use('/api/users', userRoutes);


// Start the server
app.listen(port, () => {
  connect();
  console.log(`Server is running on port ${port}`);
});
