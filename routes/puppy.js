const express = require('express');
const router = express.Router();

const puppy = require('../models/puppy');

router.route('/')

.get((req,res,next)=>{
puppy.find()
.then((puppies)=>{
res.json(puppies);

}).catch((err)=>{console.log(err)});
})

.post((req,res,next)=>{
    puppy.create(req.body)
.then((puppies) =>{
    res.json(puppies);
}).catch(next);
})

.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next) =>{
    puppy.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);
});


router.route('/:id')
.get((req,res,next)=>{
    puppy.findById(req.params.id)
    .then((puppies) =>{
    res.json(puppies);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    puppy.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((puppies) =>{
    res.json(puppies);
}).catch(next);
})

.delete((req,res,next)=>{
    puppy.findByIdAndDelete(req.params.id)
    .then((puppies) => {
        res.json(puppies);
}).catch(next);
});


module.exports = router;