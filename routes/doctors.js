const express = require('express');
const router = express.Router();
const Doctor = require('../models/doctor');



router.route('/')

.get((req,res,next)=>{
    Doctor.find({})
    .then((doctors)=>{
        res.json(doctors);
    }).catch((err)=>{console.log(err)});
})

.post((req,res,next)=>{
Doctor.create(req.body)
.then((doctor) =>{
    res.json(doctor);
}).catch(next);
})

.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next) =>{
    Doctor.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);
});


router.route('/:id')
.get((req,res,next)=>{
    Doctor.findById(req.params.id)
    .then((doctors) =>{
    res.json(doctors);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    Doctor.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((doctors) =>{
    res.json(doctors);
}).catch(next);
})

.delete((req,res,next)=>{
    Doctor.findByIdAndDelete(req.params.id)
    .then((doctors) => {
        res.json(doctors);
}).catch(next);
});


module.exports = router;