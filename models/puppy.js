const mongoose = require ('mongoose');

const puppySchema = new mongoose.Schema({
    image:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    detail:
    {
        type:String,
        required:true
    }

},
{TimeStamp:true});

module.exports = mongoose.model('puppy',puppySchema) 