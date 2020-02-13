const mongoose = require('mongoose');

const dogregisterSchema = new mongoose.Schema({
    petName: {
        type: String,
        required: true
    },
    petType: {
        type: String,
        required: true
    },
    Breed: {
        type: String,
        required: true
    },
    Age:{
        type: String,
        require: true
    },
    petSize:{
        type: String,
        require: true
    },
    Gender:{
        type: String,
        require: true
    },
    petvaccination: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    }
}, { timestamps: true })

module.exports = mongoose.model('Dogregister', dogregisterSchema);