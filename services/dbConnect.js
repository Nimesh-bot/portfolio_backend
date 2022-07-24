const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const db_username = process.env.DB_USERNAME;
const db_pass = process.env.DB_PASS;

// connect to db
const connect = mongoose.connect(`mongodb+srv://${db_username}:${db_pass}@storage.wkdfkew.mongodb.net/?retryWrites=true&w=majority`)

const cons = mongoose.connection
cons.on('open', () => {
    console.log('Connection established.... Initiated access to Database');
})

module.exports = connect;