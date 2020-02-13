const mongoose = require ('mongoose');

const petSchema = new mongoose.Schema({
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        image:{
            type:String,
            required:true
        },
        },{timestamps: true });
        
module.exports = mongoose.model('pet',petSchema);