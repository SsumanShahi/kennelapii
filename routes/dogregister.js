const express = require('express');
const DogRegister = require('../models/dogregister');
const auth = require('../routes/auth');

const router = express.Router();

router.route('/')

.get((req,res,next) =>{
console.log(req.user);
    DogRegister.find({})
    .then((dogregister)=>{
        res.json(dogregister);
    }).catch((err) => next(err));

})


.post((req,res,next) =>{
    req.body.author = req.user._id;
    DogRegister.create(req.body)
        .then((dogregister)=>{
           res.json(dogregister);          
        }).catch((err)=>next(err));
    })

.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next) =>{
    DogRegister.deleteMany({author: req.user._id})
    .then((status)=>{
        res.json(status);
    }).catch(next);
});

router.route('/:id')
.get(auth.verifyUser,(req,res,next)=>{
    DogRegister.findById(req.params.id)
    // .populate('category','name')
    .then((dogregister) =>{
    res.json(dogregister);
}).catch(next);
})

.post(auth.verifyUser,(req,res)=>{
    res.send("Not Supported");
})

.put(auth.verifyUser,(req,res,next)=>{
    DogRegister.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((dogregister) =>{
    res.json(dogregister);
}).catch(next);
})

.delete(auth.verifyUser,(req, res, next)=>{
    DogRegister.findByIdAndDelete(req.params.id)
    .then((status) => {
        res.json(status);
}).catch(next);
});





module.exports = router;