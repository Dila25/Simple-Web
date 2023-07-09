const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./model/User');
const userRoutes = require('../Backend/routes/userRoutes'); // Updated import

const app = express();
const port = 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect("mongodb+srv://SWadmin:admin123@cluster0.wtusrww.mongodb.net/?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to the database'))
  .catch((error) => console.error('Failed to connect to the database:', error));

// Routes
app.use('/users', userRoutes); // Use the correct route file

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


