const mongoose = require('mongoose')
const {Schema} = mongoose

const frontend = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Title of the project is must']
    },
    description: {
        type: String,
        required: [true, 'Please explain about the project'],
        maxLength: [500, 'Description is too long']
    },
    features: {
        type: Array,
        required: [true, 'Please add features of the project']
    },
    gallery: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'gallery'
        }
    ],
    techStack: {
        type: Array,
        required: [true, 'Please display some tech stack of the project'],
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