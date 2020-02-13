const express = require('express');
const router = express.Router();
const Product = require('../models/product');



router.route('/')

.get((req,res,next)=>{
    Product.find({})
    .then((product)=>{
        res.json([product]);
    }).catch((err)=>{console.log(err)});
})

.post((req,res,next)=>{
    Product.create(req.body)
.then((product) =>{
    res.json(product);
}).catch(next);
})



.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next) =>{
    Product.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);
});


router.route('/:id')
.get((req,res,next)=>{
    Product.findById(req.params.id)
    .then((product) =>{
    res.json(product);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    Product.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((product) =>{
    res.json(product);
}).catch(next);
})

.delete((req,res,next)=>{
    Product.findByIdAndDelete(req.params.id)
    .then((product) => {
        res.json(product);
}).catch(next);
});


module.exports = router;