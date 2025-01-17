const express = require('express');
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const movieRoutes = require('./routes/movieRoutes');

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// Routes
app.use('/api/movies', movieRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
