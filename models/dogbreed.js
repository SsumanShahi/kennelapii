const mongoose = require ('mongoose');
const noteSchema = new mongoose.Schema({
    desc: {
        type: String,
        required:true
    }
})

const dogbreedSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    notes:[noteSchema]
},
{timestamps: true });

module.exports = mongoose.model('Dogbreed',dogbreedSchema) 