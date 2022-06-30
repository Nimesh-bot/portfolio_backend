const mongoose = require('mongoose')

const user = mongoose.Schema({
    fullname: {
        type: String,
        required: [true, 'Fill all the fields']
    },
    email: {
        type: String,
        required: [true, 'Fill all the fields'],
        unique: true
    },
    password: {
        type: String,
        required: [true, 'Fill all the fields']
    },
    speciality: {
        type: String,
        required: [true, 'Fill all the fields']
    },
    facebook: {
        type: String,
        default: "",
    },
    instagram: {
        type: String,
        default: "",
    },
    discord: {
        type: String,
        default: "",
    },
    linkedIn: {
        type: String,
        default: "",
    },
    github: {
        type: String,
        default: "",
    },
    dribbble: {
        type: String,
        default: "",
    },
    otp: {
        type: String,
        default: "",
    }
})

module.exports = mongoose.model("user", user);