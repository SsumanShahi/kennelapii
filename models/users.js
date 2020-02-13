const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        require: true,
        unique: true
    },
    phoneNumber:{
        type: String,
        require: true,
        unique: true
    },
    address:{
        type: String,
        require: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 6,
        maxlength: 12
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    admin: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);