const express = require('express');
const Appointment = require('../models/appointment');

const router = express.Router();

router.route('/')

.get ((req,res,next) =>{
console.log(req.user);
// Appointment.find({author: req.user._id})
Appointment.find({})
    .then((appointment)=>{
        res.json(appointment);
    }).catch((err) => next(err));

})

.post((req,res,next) =>{
    req.body.author = req.user._id;
    Appointment.create(req.body)
        .then((appointment)=>{
           res.json(appointment);          
        }).catch((err)=>next(err));
    })

.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next) =>{
    Appointment.deleteMany({author: req.user._id})
    .then((status)=>{
        res.json(status);
    }).catch(next);
});

router.route('/:id')
.get((req,res,next)=>{
    Appointment.findById(req.params.id)
    // .populate('category','name')
    .then((appointment) =>{
    res.json(appointment);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    Appointment.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((appointment) =>{
    res.json(appointment);
}).catch(next);
})

.delete((req, res, next)=>{
    Appointment.findByIdAndDelete(req.params.id)
    .then((appointment) => {
        res.json(appointment);
}).catch(next);
});



module.exports = router;