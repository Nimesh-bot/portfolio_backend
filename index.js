const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
const cors = require('cors');

require('dotenv').config({ path: './.env' });

const mongoConnect = require('./services/dbConnect');

const app = express();

// Connect to database
mongoConnect.connect;

// Middleware
app.use(express.json())
app.use(helmet())
app.use(cors())

// Routes
app.use('/auth', require('./routes/authRoute'));
app.use('/', require('./routes/publicRoute'));
app.use('/admin', require('./routes/adminRoute'));

// Routes Errors
app.use((req, res)=> {
    res.status(404).json({Error: "No Such route"})
})

// Start server
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})