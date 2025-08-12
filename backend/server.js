const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const upload = multer();
require('dotenv').config();

const productRoute = require('./routes/api/productRoute');

// Get MongoDB URL from env (matches Kubernetes env var name)
const MONGODB_URI = process.env.MONGO_URL || 'mongodb://localhost/yolomy';

// Connect to MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;

// Check Connection
db.once('open', () => {
    console.log('✅ Database connected successfully');
    console.log('📌 Using database URL:', MONGODB_URI);
});

// Check for DB Errors
db.on('error', (error) => {
    console.error('❌ MongoDB connection error:', error);
});

// Initialize express
const app = express();

// Body parser middleware
app.use(express.json());

// Multer middleware
app.use(upload.array());

// Enable CORS
app.use(cors());

// Use routes
app.use('/api/products', productRoute);

// Define the PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server listening on port ${PORT}`);
});
