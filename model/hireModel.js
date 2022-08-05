const mongoose = require('mongoose')

const hire = mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Fill all the fields'],
    },
    subject: {
        type: String,
        required: [true, 'Fill all the fields'],
    },
    text: {
        type: String,
        required: [true, 'Fill all the fields'],
    },
})

module.exports = mongoose.model("hire", hire);