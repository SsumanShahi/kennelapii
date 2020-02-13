const express = require('express');
const router = express.Router();
const Treatment = require('../models/treatment');



router.route('/')

.get((req,res,next)=>{
    Treatment.find({})
    .then((treatments)=>{
        res.json(treatments);
    }).catch((err)=>{console.log(err)});
})

.post((req,res,next)=>{
    Treatment.create(req.body)
.then((treatments) =>{
    res.json(treatments);
}).catch(next);
})

.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next) =>{
    Treatment.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);
});


router.route('/:id')
.get((req,res,next)=>{
    Treatment.findById(req.params.id)
    .then((treatments) =>{
    res.json(treatments);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    Treatment.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((treatments) =>{
    res.json(treatments);
}).catch(next);
})

.delete((req,res,next)=>{
    Treatment.findByIdAndDelete(req.params.id)
    .then((treatments) => {
        res.json(treatments);
}).catch(next);
});


module.exports = router;