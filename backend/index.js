const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Allow cross-origin requests

// MongoDB connection
const db = 'mongodb://127.0.0.1:27017/FoodDonation';
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.log(err));

// Use routes
const donate = require('./routes/donateRoute');
const hungerSpot = require('./routes/hungerSpotRoute');
const auth = require('./routes/auth');
const protectedRoute = require('./routes/protectedRoute'); 

app.use('/api/donate', donate);
app.use('/api/hungerSpot', hungerSpot);
app.use('/api/auth', auth);
app.use('/api/protected', protectedRoute); 

const port = 8082;
app.listen(port, () => console.log(`Server running on port ${port}`));
