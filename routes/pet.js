const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');



router.route('/')

.get((req,res,next)=>{
    Pet.find({})
    .then((pets)=>{
        res.json(pets);
    }).catch((err)=>{console.log(err)});
})

.post((req,res,next)=>{
    Pet.create(req.body)
.then((pets) =>{
    res.json(pets);
}).catch(next);
})

.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next) =>{
    Pet.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);
});


router.route('/:id')
.get((req,res,next)=>{
    Pet.findById(req.params.id)
    .then((pets) =>{
    res.json(pets);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    Pet.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((pets) =>{
    res.json(pets);
}).catch(next);
})

.delete((req,res,next)=>{
    Pet.findByIdAndDelete(req.params.id)
    .then((pets) => {
        res.json(pets);
}).catch(next);
});


module.exports = router;