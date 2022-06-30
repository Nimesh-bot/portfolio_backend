const mongoose = require('mongoose')

const skills = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Fill all the fields']
    },
    icon: {
        type: String,
        required: [true, 'Fill all the fields']
    },
    percentage: {
        type: Number,
        required: [true, 'Fill all the fields']
    },
})

module.exports = mongoose.model('skills', skills);