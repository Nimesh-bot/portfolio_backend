const express = require('express');
const mongoose = require('mongoose');
const helmet = require('helmet');
require('dotenv').config({ path: './.env' });
const cors = require('cors');

const app = express();

// database connect
const db_pass = process.env.DB_PASS;
const db_name = process.env.DB_NAME;

// mongoose.connect(`mongodb+srv://admin:${db_pass}@cluster0.rxnmm.mongodb.net/${db_name}?retryWrites=true&w=majority`)
mongoose.connect(`mongodb+srv://admin:${db_pass}@cluster0.rxnmm.mongodb.net/?retryWrites=true&w=majority`)

const conns = mongoose.connection
conns.on('open', () => {
    console.log('Connected to database..........')
})

// Routes
app.use('/auth', require('./routes/authRoute'));
app.use('/', require('./routes/publicRoute'));
app.use('/admin', require('./routes/adminRoute'));

// Routes Errors
app.use((req, res)=> {
    res.status(404).json({Error: "No Such route"})
})

app.use((err, req, res, next) => {
    console.log(`${err.status || 500}: ${err.message}`.red.bold)
    if (err.code === 'LIMIT_FILE_SIZE') {
        err.status = 400;
    }
    if(err.message.startsWith("E11000")){
        err.message = "Username/Email already exist"
    }
    res.status(err.status || 500);
    res.json({"Error": err.message || 'Internal server error'})

});

app.use(cors);

// Start server
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})