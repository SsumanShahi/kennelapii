const mongoose = require('mongoose');

const trainingSchema = new mongoose.Schema({

    image:{
        type:String,
        required:true
    },
    trainingName:{
    type:String,
    required:true
},
steps:{
    type:String,
    required:true
}
},{timestamps:true});

module.exports = mongoose.model('training' , trainingSchema);