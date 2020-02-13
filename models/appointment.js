const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
    OwnerName: {
        type: String,
        required: true
    },
    petname: {
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
    Gender:{
        type: String,
        require: true
    },

}, { timestamps: true })

module.exports = mongoose.model('Appointment', appointmentSchema);