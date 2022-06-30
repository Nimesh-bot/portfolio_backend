const mongoose = require('mongoose')

const frontend = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Fill all the fields']
    },
    description: {
        type: String,
        required: [true, 'Fill all the fields'],
        maxLength: [300, 'Description is too long']
    },
    techStack: {
        type: Array,
        required: [true, 'Fill all the fields'],
    },
    team: {
        type: Array,
        default: [],
    },
    url: {
        type: String,
        required: [true, 'Fill all the fields'],
    },
})

module.exports = mongoose.model('frontend', frontend);