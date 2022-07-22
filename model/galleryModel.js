const mongoose = require('mongoose')

const gallery = mongoose.Schema({
    image: {
        type: String,
        required: [true, 'Fill all the fields']
    },
    img: {
        type: String,
    },
})

module.exports = mongoose.model('gallery', gallery);