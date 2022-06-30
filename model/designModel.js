const mongoose = require('mongoose')

const design = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Fill all the fields']
    },
    description: {
        type: String,
        required: [true, 'Fill all the fields'],
        maxLength: [300, 'Description is too long']
    },
    tools: {
        type: Array,
        required: [true, 'Fill all the fields'],
    },
    url: {
        type: String,
        default: "",
    },
})

module.exports = mongoose.model('design', design);