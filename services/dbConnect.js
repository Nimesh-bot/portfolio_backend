const mongoose = require('mongoose');
require('dotenv').config({ path: './.env' });

const db_pass = process.env.DB_PASS;

// connect to db
const connect = mongoose.connect(`mongodb+srv://admin:${db_pass}@cluster0.rxnmm.mongodb.net/Portfolio?retryWrites=true&w=majority`)
// mongodb+srv://hello123:CYNPSMFfYgk3u7b7@cluster0.uark2.mongodb.net/not_mine?retryWrites=true&w=majority
const cons = mongoose.connection
cons.on('open', () => {
    console.log('Connection established.... Initiated access to Database');
})

module.exports = connect;