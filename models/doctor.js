const mongoose = require ('mongoose');

const doctorSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        address: {
            type: String,
            required: true
        },
        pnumber: {
            type: String,
            required: true
        },
        partcheck: {
            type: String,
            required: true
        }
        },{timestamps: true });
        
module.exports = mongoose.model('Doctor',doctorSchema);