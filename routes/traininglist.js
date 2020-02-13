const express = require('express');
const router = express.Router();

const traininglist = require('../models/training');

router.route('/')

.get((res,req,next)=>{
    traininglist.find()
    .then((training)=>{
        req.json(training)
    }).catch((err)=>{console.log(err)});
})

.post((req,res,next)=>{
traininglist.create(req.body)
.then((training)=>{
    res.json(training)
}).catch(next);  
})

.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next) =>{
    traininglist.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);
});


router.route('/:id')
.get((req,res,next)=>{
    traininglist.findById(req.params.id)
    .then((training) =>{
    res.json(training);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    traininglist.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((training) =>{
    res.json(training);
}).catch(next);
})

.delete((req,res,next)=>{
    traininglist.findByIdAndDelete(req.params.id)
    .then((training) => {
        res.json(training);
}).catch(next);
});

module.exports = router;
