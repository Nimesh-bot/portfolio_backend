const mongoose = require('mongoose')

const gallery = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Fill all the fields']
    },
    image: {
        type: String,
        required: [true, 'Fill all the fields']
    },
    tag: {
        type: String,
        required: [true, 'Fill all the fields']
    }
})

module.exports = mongoose.model('gallery', gallery);