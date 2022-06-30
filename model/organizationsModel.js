const mongoose = require('mongoose')

const organization = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Fill all the fields']
    },
    duration: {
        type: Array,
        default: [],
    },
    website: {
        type: String,
        required: [true, 'Fill all the fields'],
    },
    image: {
        type: String,
        required: [true, 'Fill all the fields'],
    }
})

module.exports = mongoose.model('organization', organization);