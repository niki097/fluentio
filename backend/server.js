const express = require('express');
const dotenv = require('dotenv');
const authRoutes = require('./routes/authRoutes');
const connectDB = require('./config/database/db');
const cors = require('cors');

dotenv.config();

const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB()
    .then(() => console.log('Database connected successfully'))
    .catch((err) => {
        console.error('Database connection failed:', err);
        process.exit(1); // Exit process with failure
    });

const app = express();

// Middleware
app.use(express.json());
app.use(cors({
    origin: '*', // Allow all origins (change this in production)
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));

// Test Route
app.get('/', (req, res) => {
    res.send('Hello World');
});

// API Routes
app.use('/api', authRoutes);

// Start Server
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
