const mongoose = require ('mongoose');

const treatmentSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        cure: {
            type: String,
            required: true
        },
        steps: {
            type: String,
            required: true
        },
        },{timestamps: true });
        
module.exports = mongoose.model('treatment',treatmentSchema);